//TODO:// function to search through ajax
var city = $("#cityInput");
console.log("hello");

function testingSite() {

    console.log("hello")
    //The state input field 
    var state = $("#state").val().toLowerCase();
    
    //Ajax request
    $.ajax({
        url: "https://covid-19-testing.github.io/locations/" + state + "/complete.json",
        method: "GET"
    }).then(function(response) {
        //testing response
        console.log(response);

    //TODO://setup a loop to pull from each object based on city
    for (var i = 0; i < response.length; i++) {
      //Creating container for testing location
      var location = $("<div>");
      location.addClass("pure-u-1");
      location.attr("id", "locationDiv");
      //Location Name
      var locationName = $("<h1>");
      locationName.attr("id", "locationAttr");
      location.text(response[i].name);
      //Phone number
      var phoneNumber = $("<p>")
      phoneNumber.attr("id", "phoneNumberAttr");
      phoneNumber.text(response[i].phones[0].number);
      //Address
      var locationAddress = $("<p>");
      locationAddress.attr("id", "addressAttr");
      locationAddress.text(
        response[i].physical_address[0].address_1 +
          " " +
          response[i].physical_address[0].city +
          " " +
          response[i].physical_address[0].state_province
      );
      //Hours or operations
      var hoursOperation = $("<p>");
      hoursOperation.attr("id", "hoursAttr");
      hoursOperation.text();
      var description = $("<p>");
      description.attr("id", "descriptionAttr");
      description.text(response[i].description);
      //Appending to div
      location.append(locationName);
      location.append(phoneNumber);
      location.append(locationAddress);
      location.append(description);
      //Appending to the page
      $("#searchResponse").append(location);
    }
    $("#state").text(" ");
  });
}


//TODO: click event from a button

$("#search").on("click", testingSite);
