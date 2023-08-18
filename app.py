
# solution found at https://stackoverflow.com/questions/37259740/passing-variables-from-flask-to-javascript
# https://python-adv-web-apps.readthedocs.io/en/latest/flask3.html
# https://www.geeksforgeeks.org/making-a-flask-app-using-a-postgresql-database/

# Import your dependencies
import numpy as np
from flask import Flask, render_template
import psycopg2





#################################################
# Flask Setup
#################################################
app = Flask(__name__)


#################################################
# Flask Routes
#################################################

@app.route('/')
def index():
    # Connect to the database
    conn = psycopg2.connect(database="flask_db",
                            user="postgres",
                            password="Papa1992!",
                            host="localhost", port="5432")
  
    # create a cursor
    cur = conn.cursor()
  
    # Select all products from the table
    cur.execute('''SELECT * FROM beers''')
  
    # Fetch the data
    data = cur.fetchall()
  
    # close the cursor and connection
    cur.close()
    conn.close()
    return render_template('index.html', data=data)

if __name__ == "__main__":
    app.run(debug=True)