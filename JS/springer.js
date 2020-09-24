console.log("Hello world!");

let nytApiKey = "D7y7qtTuA0tnCOzIi5pI5W9s14Fgb7QY";
let searchTerm = "COVID-19"; // TODO: Test other key words to see if they are more relevant
let nytQueryURL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${nytApiKey}&q=${searchTerm}`;
let googleURL = `https://serpapi.com/search.json?engine=google&q=scholarly+articles+for+covid-19&google_domain=google.com&gl=us&hl=en&api_key=ca699a8bfbc1d55e7dd666c92f2e53d07cba60ad16625b48fc32e844109521e4`;

$.ajax({
  url: googleURL,
  method: "GET",
}).then(function (data) {
  console.log(data);
  console.log("_--_-___---____---_---__--_-_-_-");
});

// //AJAX call for NYT Developer Network
// $.ajax({
//   url: nytQueryURL,
//   method: "GET",
// }).then(updatePage);

// //AJAX call for Springer Nature
// $.ajax({
//   url:
//     "http://api.springernature.com/meta/v2/json?q=keyword:clinical studies covid-19 onlinedatefrom:2020-01-01&api_key=bfbcaf96f0d13448d0bcf0757b9411c4",
//   method: "GET",
// }).then(function (data) {
//   console.log(data);
//   console.log(data.records[0].title);
// });

// Calling the NYT articles into existence
function updatePage(NYTData) {
  let numArticles = 5;

  //console.log(NYTData); //TODO: remove console.log()
  // Repeat as many times as articles desired on page
  for (let i = 0; i < numArticles; i++) {
    let article = NYTData.response.docs[i];
    let articleCount = i + 1;

    let createArticleList = $("<ul>");
    createArticleList.addClass("list-group");

    $("#article-section").append(createArticleList); //TODO: "article-section" needs a name on html

    // If article has a headline, append it to ArticleList

    let headline = article.headline;
    let ArticleListItem = $("<li class='list-group-item articleHeadline'>");
    if (headline && headline.main) {
      //console.log(headline.main); // TODO: remove console.log()
      ArticleListItem.append(
        "<span class='label label-primary'>" +
          articleCount +
          "</span>" +
          "<strong> " +
          headline.main +
          "</strong>"
      );
    }
    //If article has a byline, append it to ArticleList
    let byLine = article.byLine;
    if (byLine && byLine.original) {
      //console.log(byLine.original); // TODO: remove console.log()
      ArticleListItem.append("<h5>" + byline.original + "</h5>");
    }
    // Append section to document if it exists
    let section = article.section_name;
    // console.log(article.section_name); // TODO: remove console.log()
    if (section) {
      ArticleListItem.append("<h5>Section: " + section + "</h5>");
    }
    // Log published date, and append to document if exists
    let pubDate = article.pub_date;
    // console.log(article.pub_date); // TODO: remove console.log()
    if (pubDate) {
      ArticleListItem.append("<h5>" + article.pub_date + "</h5>");
    }

    // Append and log url
    ArticleListItem.append(
      "<a href='" + article.web_url + "'>" + article.web_url + "</a>"
    );
    //console.log(article.web_url); // TODO: remove console.log()

    // Append the article
    createArticleList.append(ArticleListItem);
  }
}
function clear() {
  $("#article-section").empty(); //TODO: "article-section" needs a name on html
}

updatePage();
