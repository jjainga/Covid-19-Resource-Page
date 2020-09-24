console.log("Hello world!");
let googleURL = `https://serpapi.com/search.json?engine=google&q=scholarly+articles+for+covid-19&google_domain=google.com&gl=us&hl=en&api_key=ca699a8bfbc1d55e7dd666c92f2e53d07cba60ad16625b48fc32e844109521e4`;

$.ajax({
  url: googleURL,
  method: "GET",
}).then(function (data) {
  console.log(data);
  console.log("_--_-___---____---_---__--_-_-_-");
});
