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

d3.json('http://127.0.0.1:5000/data')
.then( data => {
    console.log(data); // {data: Array(3197)}
    beer = data;
    console.log(beer) // {data: Array(3197)}
    showObj();
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