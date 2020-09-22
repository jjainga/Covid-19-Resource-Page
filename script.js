function deathToll() {
	$.ajax({
		url: "https://api.covidtracking.com/v1/us/daily.json",
		method: "GET"
	}).then(function (response) {
		var results = response.death;
		for (var i = 0; i < results.length; i++) {
			var countryDiv = $("<div>");
			var p = $("<p>");
			p.text(results[i].death);

			countryDiv.append(p);

			console.log(results);

		}
	})
};
console.log(deathToll)