let queryUrl = "https://covid19.mathdro.id/api/countries/USA";
//Ajax request
$.ajax({
    url: queryUrl,
    method: "GET",
}).then(getDeaths)

//Pull all data relevant to death. I can add more if necessary 
function getDeaths(deaths) {
    //Setting variables to get the increase in deaths, national death count, those in ICU, and the current day
    var natDeathCount = deaths.deaths.value;
    console.log(natDeathCount)
    
    
    //This can be modified to take away currentDay if the date is too specific. 
    $("#deathToll").append("Our National death toll is " + natDeathCount + ". Use caution. Please wear a mask.");
    //Adds counts onto page
    
   


}