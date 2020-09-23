console.log("Hello world!");

let nytApiKey = "D7y7qtTuA0tnCOzIi5pI5W9s14Fgb7QY";
let searchTerm = "COVID-19"; // TODO: Test other key words to see if they are more relevant
let nytQueryURL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${nytApiKey}&q=${searchTerm}`;

//AJAX call for NYT Developer Network
$.ajax({
  url: nytQueryURL,
  method: "GET",
}).then(updatePage);

// Calling the NYT articles into existence
function updatePage(NYTData) {
  let numArticles = 5;
  console.log(NYTData.response); //TODO: remove console.log()
  // Repeat as many times as articles desired on page
  for (let i = 0; i < numArticles; i++) {
    let article = NYTData.response.docs[i];
    let articleCount = i + 1;

    let createArticleList = $("<ul>");
    createArticleList.addClass("list-group");

    $("article-section").append(createArticleList); //TODO: "article-section" needs a name on html

    // If article has a headline, append it to ArticleList

    let headline = article.headline;
    let ArticleListItem = $("<li class='list-group-item articleHeadline'>");
    if (headline && headline.main) {
      console.log(headline.main); // TODO: remove console.log()
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
      console.log(byLine.original); // TODO: remove console.log()
      ArticleListItem.append("<h5>" + byline.original + "</h5>");
    }
  }
}
