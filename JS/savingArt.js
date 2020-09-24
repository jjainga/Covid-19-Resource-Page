// //Create Array to save testing Sites
var testingSite = JSON.parse(localStorage.getItem("Locations")) || [];
var site = {
    name: " ",
    location: " ",
    phoneNumber: " "
}
//Saving testingSite location to local storage
function saveTestingSite() {
    //console.log(this);
    var currentName = $(this).siblings("#locationAttr").text();
    var currentLocation = $(this).siblings("#addressAttr").text();
    var currentPhone = $(this).siblings("#phoneNumberAttr").text();
        // console.log(currentName);
        // console.log(currentLocation);
        // console.log(currentPhone);
    //Creating object
    site.name = currentName;
    site.location = currentLocation;
    site.phoneNumber = currentPhone;
    //checking object
        // console.log(site.name);
        // console.log(site.location);
        // console.log(site.phoneNumber);
        // console.log(site);
    //Pushing to array
    testingSite.push(site);
    //turning object to a string
    var stringOfSites = JSON.stringify(testingSite);
    //Save to local storage
    localStorage.setItem("Locations", stringOfSites);  
}
//Cick event to save testing sites
$("#searchResponse").on("click", ".saveBtn", saveTestingSite);