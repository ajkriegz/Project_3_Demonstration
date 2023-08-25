// // Check status of connection
// const dataPromise = d3.json(url);
// console.log("Data Promise: ", dataPromise);

// const myRequest = new Request(url);
// fetch(myRequest).then((response) => {
//   console.log(response.status); //returns 200
// });

// Connect to Flask API for data using D3.json
var url = '/data';
var beer = {}

let showObj = function() {
    for (let prop in beer) {
        // console.log(prop); // data
        // console.log(beer[prop]); // (3197) [Array(2), Array(2), Array(2)
        console.log(beer[prop][0]); // ['Brown Ale', 'Alaskan Brewing Co. Alaskan Amber']
        // log every single beer
        for (let i = 0; i < beer[prop].length; i++) {
            console.log(beer[prop][i][0]) // This counts the styles in the 0 index. Remove [0] to get every beer pair.
        }
    };
}

// Create an empty list or object to hold beer data
function buildCharts(beerData) {
    var beerList = [];
    for (let variable in beer) {
        for (let i = 0; i < beer[variable].length; i++) {
            // console.log(beer[x][i][0])
            beerList.push(beer[variable][i][0]); // Change 0 to 1 to save the beer name itself

    }};
    // console.log(beerList[0])
    // console.log(beerList[3100])
    
    // Count beer names with incrementing numbers if the previous value matches

    let barData = [{
        y: beerData,
        x: beerData,
        type: "bar",
        orientation: "h"
    }];

    let barLayout = {
        title: "Counting Types of Beer in Our Database",
        margin: { t: 30, l: 150 }
      };

    Plotly.newPlot("bar", barData, barLayout)
}

// Create a function that loops through and appends the data to a variable to


d3.json('http://127.0.0.1:5000/data')
.then( data => {
    // console.log(data); // {data: Array(3197)}
    beer = data;
    // console.log(beer) // {data: Array(3197)}
    // showObj();
    buildCharts();
});

// fetch also works
// fetch('http://127.0.0.1:5000/data')
//     .then( resp => {
//         return resp.json();
//     })
//     .then( data => {
//         console.log(data);
//         beer = data
//         console.log(beer)
//         showObj();
//     });