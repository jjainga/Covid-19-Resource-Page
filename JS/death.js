$(function(){
    var queryURL = "https://api.covidtracking.com/v1/states/info.json";
    

    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(data){

          console.log(data)
          

 })
 


})