// Connect to Flask API for data using D3.json
let url = '/data';
// function init() ???
// var url = '/';

d3.json('http://127.0.0.1:5000/data').then( data => {
    console.log(data)
});

// const dataPromise = d3.json(url);
// console.log("Data Promise: ", dataPromise);

// // Check to see if you get a 200 or 404
// const myRequest = new Request(url);

// fetch(myRequest).then((response) => {
//   console.log(response.status); //returns 200
  
// });

// console.log(data[0])
