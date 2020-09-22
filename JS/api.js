console.log("Hello");
//Testing census api
// var censusKey = "1a50243f082bec67ebd67dc552806e568779575d";
// var queryUrl = 

//Testing covid rapidapi 
var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://covid-19-statistics.p.rapidapi.com/reports/total?date=2020-09-07",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "covid-19-statistics.p.rapidapi.com",
        "x-rapidapi-key": "c9284f1554msh5d58d67f6e7df8dp178a8ejsne44a031f9733"
    }
}

//testing site api
$.ajax({
    url: "https://covid-19-testing.github.io/locations/washington/complete.json",
    method: "GET"
}).then(function(response) {
    console.log(response)
})


