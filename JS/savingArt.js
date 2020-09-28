//Saving testingSite location to local storage
function saveTestingSite() {
  var testingSite = JSON.parse(localStorage.getItem("Locations")) || [];
  var site = {
    name: " ",
    location: " ",
    phoneNumber: " ",
  };
  var currentName = $(this).siblings("#locationAttr").text();
  var currentLocation = $(this).siblings("#addressAttr").text();
  var currentPhone = $(this).siblings("#phoneNumberAttr").text();
  //Creating object
  site.name = currentName;
  site.location = currentLocation;
  site.phoneNumber = currentPhone;

  //Pushing to array
  testingSite.push(site);
  //turning object to a string
  var stringOfSites = JSON.stringify(testingSite);
  //Save to local storage
  localStorage.setItem("Locations", stringOfSites);
}
//Click event to save testing sites
$("#searchResults").on("click", ".saveBtn", saveTestingSite);
