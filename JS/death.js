let queryUrl = "https://api.covidtracking.com/v1/us/current.json"
//Ajax request
$.ajax({
    url: queryUrl,
    method: "GET",
}).then(getDeaths)

//Pull all data relevant to death. I can add more if necessary 
function getDeaths(data) {
    //Setting variables to get the increase in deaths, national death count, those in ICU, and the current day
    var increase = data[0].deathIncrease;
    var natDeathCount = data[0].death;
    var inICU = data[0].inIcuCurrently;
    let currentDay = new Date() ;  
    //This can be modified to take away currentDay if the date is too specific. 
    $("#deathToll").append("As of " + currentDay + " our National death toll is: " + natDeathCount);
    //Adds counts onto page
    $("#deathToll").append("This is a " + increase + " daily increase.");
    $("#deathToll").append("There are currently " + inICU + " in ICU. Please be cautious and wear a mask.");


}