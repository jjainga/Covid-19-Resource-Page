//Create Array to save articles
var favArticles = [],
var articles = {
    title: "",
    date: "",
    url: ""
}
//Create Array to save testing Sites
var testingSite = [];
var site = {
    name: "",
    location: "",
    phoneNumer: ""
}

//Saving article to localStorage
function saveArticle() {
    
}

//Saving testingSite location to local storage
function saveTestingSite() {
    var currentName = $(this).siblings('h1').val();
    var currentLocaiton = $(this).siblings('p').val();
    var currentPhone = $(this).siblings('p').val();
}