var city = $("#cityInput")
testingSite();
function testingSite(){
	var state = $(this).value;
	$.ajax({
		url: "https://covid-19-testing.github.io/locations/" + "washington" + "/complete.json",
		method: "GET"
	}).then(function(response){
		console.log(response);
		for (var i = 0; i < response.length; i++){
			//Test location
			var location = $("<div>");
			location.addClass("row");

			var locationName = $("<h1>");
			location.text(response[i].name);

			var phoneNumber =("<p>");
			phoneNumber.text(response[i].phones[0].number);

			var locationAddress = $("<p>");
			locationAddress.text(response[i].physical_address[0].address-1 + " " + response.physical_address);

			var hoursOperation = $("<p>");
			hoursOperation.text();

			location.append(locationName);
			location.append(phoneNumber);
			location.append(locationAddress);
			location.append(hoursOperation);
			$("#body").append(location);
		}
	})
}