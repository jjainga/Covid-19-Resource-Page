//let searchTerm = "COVID-19"; // TODO: Test other key words to see if they are more relevant

//AJAX call for Springer Nature
$.ajax({
  url:
    "http://api.springernature.com/meta/v2/json?q=keyword:clinical studies covid-19 onlinedatefrom:2020-01-01&api_key=bfbcaf96f0d13448d0bcf0757b9411c4",
  method: "GET",
}).then(function updatePage(response) {
  // console.log(springerArticle.records[0])
  // Calling the Springer articles into existence

  // console.log(response);
  // console.log(response.records[0].title);
  // console.log(response.records[0].onlineDate);
  // console.log(response.records[0].abstract);
  // console.log(response.records[0].url[0].value);
  let numArticles = 5; //TODO: remove console.log()
  // Repeat as many times as articles desired on page
  for (let i = 0; i < numArticles; i++) {
    let article = response.records[i];
    let articleCount = i + 1;
    let articleSection = $("#article-section");
    // console.log(springerArticle.records[0].title);

    let createArticleList = $("<ul>");
    createArticleList.addClass("list-group");

    articleSection.append(createArticleList); //TODO: "article-section" needs a name on html?

    // If article has a title, append it to ArticleList

    let title = article.title;

    let ArticleListItem = $("<li class='list-group-item articleHeadline'>");
    if (title) {
      //console.log(title.main); // TODO: remove console.log()
      ArticleListItem.append(
        "<span class='label label-primary'>" +
          articleCount +
          "</span>" +
          "<strong> " +
          title +
          "</strong>"
      );
      console.log(title);
    }
    //If article has a published onlineDate, append it to ArticleList
    let onlineDate = article.onlineDate;
    if (onlineDate) {
      //console.log(onlineDate.original); // TODO: remove console.log()
      ArticleListItem.append(
        "<h5>" + "Published online: " + onlineDate + "</h5>"
      );
    }

    // Log abstract, and append to document if exists
    let createShowDiv = $("<div class = 'show'>");
    let createHideDiv = $("<div class = 'hide'>");
    ArticleListItem.append(createShowDiv);
    ArticleListItem.append(createHideDiv);
    let abstract = article.abstract;
    // console.log(article.abstract); // TODO: remove console.log()
    if (abstract) {
      ArticleListItem.append(
        "<h5>" +
          '<input type="button" value="Hide abstract">' +
          article.abstract +
          "</h5>"
      );
    }

    // Append and log url
    ArticleListItem.append(
      "<a href='" + article.url[0].value + "'>" + article.url[0].value + "</a>"
    );
    //console.log(article.url[0].value); // TODO: remove console.log()

    // Append the article
    createArticleList.append(ArticleListItem);
  }
});
