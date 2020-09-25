console.log("Hello");
//Testing census api
// var censusKey = "1a50243f082bec67ebd67dc552806e568779575d";
// var queryUrl =

//Testing covid rapidapi
// var settings = {
// 	"async": true,
// 	"crossDomain": true,
// 	"url": "https://covid-19-statistics.p.rapidapi.com/reports/total?date=2020-09-07",
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "covid-19-statistics.p.rapidapi.com",
//         "x-rapidapi-key": "c9284f1554msh5d58d67f6e7df8dp178a8ejsne44a031f9733"
//     }}

// //testing site api
// $.ajax({
//     url: "https://covid-19-testing.github.io/locations/washington/complete.json",
//     method: "GET"
// }).then(function(response) {
//     console.log(response)
// })

//Google scholarly journal
$.ajax({
  url:
    "http://api.springernature.com/meta/v2/json?q=keyword:clinical studies covid-19 onlinedatefrom:2020-01-01&api_key=bfbcaf96f0d13448d0bcf0757b9411c4",
  method: "GET",
}).then(function (data) {
  console.log(data);
});

// $.ajax({
//   url:
//     "https://serpapi.com/search?engine=google_scholar&q=covid-19&api_key=ca699a8bfbc1d55e7dd666c92f2e53d07cba60ad16625b48fc32e844109521e4&output=json",
//   method: "GET",
// }).then(function (response) {
//   console.log(response);
// });
