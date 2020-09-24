// //Create Array to save articles
// var favArticles = [],
// var articles = {
//     title: "",
//     date: "",
//     url: ""
// }
// //Create Array to save testing Sites
// var testingSite = [];
// var site = {
//     name: "",
//     location: "",
//     phoneNumer: ""
// }

// //Saving article to localStorage
// function saveArticle() {
    
// }

//Saving testingSite location to local storage
function saveTestingSite() {
    //console.log(this);
    var currentName = $(this).siblings("h1").text();
    var currentLocation = $(this).siblings("#addressAttr").text();
    var currentPhone = $(this).siblings("#phoneNumberAttr").text();
        console.log(currentName);
        console.log(currentLocation);
        console.log(currentPhone);



    //Checking if the array has values to update, before pushing new values to the array
    // if (testingSite == null ) {
    //     savedEvents = [];
    // }
    // else if (testingSite != null) (
    //     testingSite = JSON.parse(localStorage.getItem("testingSite"))
    // )
    
}
//Cick event to save testing sites
$("#searchResponse").on("click", ".saveBtn", saveTestingSite);