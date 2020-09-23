//TODO:// function to search through ajax
var city = $("#cityInput");
console.log("hello");
testingSite();
function testingSite() {
  //The state input field
  var state = $(this).value;
  //Ajax request
  $.ajax({
    url:
      "https://covid-19-testing.github.io/locations/" +
      "washington" +
      "/complete.json",
    method: "GET",
  }).then(function (response) {
    //testing response
    console.log(response);

    //TODO://setup a loop to pull from each object based on city
    for (var i = 0; i < response.length; i++) {
      //Creating container for testing location
      var location = $("<div>");
      location.addClass("pure-u-1-3");
      //Location Name
      var locationName = $("<h1>");
      location.text(response[i].name);
      //Phone number
      var phoneNumber = $("<p>");
      phoneNumber.text(response[i].phones[0].number);
      //Address
      var locationAddress = $("<p>");
      locationAddress.text(
        response[i].physical_address[0].address_1 +
          " " +
          response[i].physical_address[0].city +
          " " +
          response[i].physical_address[0].state_province
      );
      //Hours or operations
      var hoursOperation = $("<p>");
      hoursOperation.text();
      var description = $("<p>");
      description.text(response[i].description);
      //Appending to div
      location.append(locationName);
      location.append(phoneNumber);
      location.append(locationAddress);
      location.append(description);
      //Appending to the page
      $("#body").append(location);
    }
    $("#state").text(" ");
  });
}

//TODO://setup a loop to pull from each object based on city
for (var i = 0; i < response.length; i++) {
  //Creating container for testing location
  var location = $("<div>");
  location.addClass("pure-g");
  //Location Name
  var locationName = $("<h1>");
  location.text(response[i].name);
  //Phone number
  var phoneNumber = $("<p>");
  phoneNumber.text(response[i].phones[0].number);
  //Address
  var locationAddress = $("<p>");
  locationAddress.text(
    response[i].physical_address[0].address_1 +
      " " +
      response[i].physical_address[0].city +
      " " +
      response[i].physical_address[0].state_province
  );
  //Hours or operations
  var hoursOperation = $("<p>");
  hoursOperation.text();
  var description = $("<p>");
  description.text(response[i].description);
  //Appending to div
  location.append(locationName);
  location.append(phoneNumber);
  location.append(locationAddress);
  location.append(description);
  //Appending to the page
  $("#body").append(location);
}

//TODO: click event from a button

$("#state").on("submit", testingSite);
