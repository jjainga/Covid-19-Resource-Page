//let searchTerm = "COVID-19"; // TODO: Test other key words to see if they are more relevant?

//AJAX call for Springer Nature
$.ajax({
  url:
    "http://api.springernature.com/meta/v2/json?q=keyword:clinical studies covid-19 onlinedatefrom:2020-01-01&api_key=bfbcaf96f0d13448d0bcf0757b9411c4",
  method: "GET",
}).then(function (response) {
  const articleSection = $("#article-section");

  const articleList = $(`<div class="list-group ulArticle">`);

  // Calling the Springer articles into existence
  const maxArticles = 5;
  let articles = response.records.slice(0, maxArticles);
  // Repeat as many times as articles desired on page
  for (let i = 0; i < articles.length; i++) {
    let article = articles[i];

    // console.log(springerArticle.records[0].title);

    let li = $(`<div class="list-group-item articleHeadline">`);

    // If article has a title, append it to ArticleList
    if (article.title) {
      li.append(
        // `<span class='label label-primary'>
        //   ${i + 1}
        // </span>`,
        `<strong>
          ${article.title}
        </strong>`
      );
      console.log(article.title);
    }
    //If article has a published onlineDate, append it to ArticleList
    if (article.onlineDate) {
      li.append(
        `<p>
          Published online: ${article.onlineDate}
        </p>`
      );
    }
    //////////////////

    // Creates the abstract show/hide button
    let btnHome = $(`<div class = "btnHome"></div>`);
    li.append(btnHome);
    let abstractToggleButton = $(
      `<button id = "abstractBtn">Show Abstract</button>`
    );
    let hideAbstract = true;
    let abstractDiv;
    abstractToggleButton.on("click", function (event) {
      event.preventDefault();
      // Log abstract, and append to document after clicking the "show" button

      if (hideAbstract) {
        console.log("show!");
        abstractToggleButton.text("Hide Abstract");
        abstractDiv = $(
          `<div>
            <h5>Abstract</h5>
            <p>
              ${article.abstract}
            </p>
          </div>`
        );
        abstractToggleButton.after(abstractDiv);
        // Removes the abstract if the button is clicked again
      } else {
        console.log("hide!");
        abstractToggleButton.text("Show Abstract");
        abstractDiv.remove();
        abstractDiv = undefined;
      }
      hideAbstract = !hideAbstract;
    });

    btnHome.append(abstractToggleButton);

    let saveButton = $(
      `<button id= "saveArtBtn">Save <i class="fas fa-share-square"></i> </button>`
    );
    saveButton.on("click", function (event) {
      event.preventDefault();
      saveArticle(article);
    });
    btnHome.append(saveButton); //TODO: append on same line as abstract button?
    ////////////////////////
    // Append and log url
    li.append(`<a href="${article.url[0].value}">Go to article page</a>`);

    // Append the article
    articleList.append(li);
  }
  articleSection.append(articleList);
});
