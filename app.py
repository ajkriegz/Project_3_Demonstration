
# solution found at https://stackoverflow.com/questions/37259740/passing-variables-from-flask-to-javascript
# https://python-adv-web-apps.readthedocs.io/en/latest/flask3.html
# https://www.geeksforgeeks.org/making-a-flask-app-using-a-postgresql-database/

# Import your dependencies
import os
from flask import Flask, render_template, jsonify
import psycopg2

from config import password

#################################################
# Flask Setup
#################################################
app = Flask(__name__)

# Connect to the database
def get_db_connection():
    conn = psycopg2.connect(database="flask_db",
                            user="postgres",
                            password=password,
                            host="localhost", port="5432")
    return conn

#################################################
# Flask Routes
#################################################

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/data')
def data():
    
    conn = get_db_connection()
    # create a cursor
    cur = conn.cursor()
  
    # Select all products from the table
    cur.execute('''SELECT * FROM beers''')
  
    # Fetch the data
    data = cur.fetchall()
  
    # close the cursor and connection
    cur.close()
    conn.close()
    
    return jsonify(data=data)

if __name__ == "__main__":
    app.run(debug=True)