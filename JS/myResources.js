//Getting from localstorage
var testingSites = JSON.parse(localStorage.getItem("Locations")) || [];
//Creating list
displayLocations();
function displayLocations () {
    console.log(testingSites);
    for (var j = 0; j < testingSites.length; j++) {
        //Creating Div
        var locationDiv = $("<div>");
            locationDiv.addClass("pure-u-1-2");
            locationDiv.attr("id", "locationDiv");
        //Creating Title
        var title = $("<h2>");
            title.text(testingSites[j].name);
            title.attr("id", "locationAttr");
        //PhoneNumber
        var number = $("<p>");
            number.text(testingSites[j].phoneNumber);
            number.attr("id", "phoneNumberAttr");
        //Address
        var address = $("<p>");
            address.text(testingSites[j].location);
            address.attr("id", "addressAttr")
        //Appending
    locationDiv.append(title);
    locationDiv.append(number);
    locationDiv.append(address);

    $("#locationStuff").append(locationDiv);
    }
}


//Getting Articles from localStorage
var myArticles = JSON.parse(localStorage.getItem("Articles")) || [];
//Creating List
displayArt();
function displayArt () {
    console.log(myArticles);
    for (var t = 0; t < myArticles.length; t++) {
        //Creating Div
        var articleDiv = $("<div>");
            articleDiv.addClass("pure-u-1-1");
            articleDiv.addClass("savedDiv")
        //Creating Title
        var name = $("<h2>");
            name.text(myArticles[t].title);
        //PhoneNumber
        var date = $("<h4>");
            date.text(myArticles[t].pubDate);
        //Address
        var url = $("<a>");
            url.attr("href", myArticles[t].url)
            url.text("Read Me");
        //Appending
    articleDiv.append(name);
    articleDiv.append(date);
    articleDiv.append(url);

    $("#articleStuff").append(articleDiv);
    }
}
