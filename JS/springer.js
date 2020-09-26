//let searchTerm = "COVID-19"; // TODO: Test other key words to see if they are more relevant?

//AJAX call for Springer Nature
$.ajax({
  url:
    "https://api.springernature.com/meta/v2/json?q=keyword:clinical studies covid-19 onlinedatefrom:2020-01-01&api_key=bfbcaf96f0d13448d0bcf0757b9411c4",
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

    let li = $(`<div class="list-group-item articleHeadline" id="${i}">`);

    // If article has a title, append it to ArticleList
    if (article.title) {
      li.append(
        // `<span class='label label-primary'>
        //   ${i + 1}
        // </span>`,
        `<strong class="title">
          ${article.title}
        </strong>`
      );
      //console.log(article.title);
    }
    //If article has a published onlineDate, append it to ArticleList
    if (article.onlineDate) {
      li.append(
        `<p class="date">
          Published online: ${article.onlineDate}
        </p>`
      );
    }
    let saveButton = $(
      `<button class="saveArtBtn" data-save="${i}"><i class="fas fa-share-square"></i> </button>`
    );
    saveButton.on("click", function (event) {
      event.preventDefault();
      var articleArr = JSON.parse(localStorage.getItem("Articles")) || [];
      var article = {
        title: " ",
        pubDate: " ",
        url: " ",
      };

      console.log(
        //title
        $(this)[0].parentElement.parentElement.childNodes[0].textContent,
        // date,
        $(this)[0].parentElement.parentElement.childNodes[1].textContent,
        //url,
        $(this)[0].parentElement.parentElement.childNodes[3].getAttribute(
          "href"
        )
      );

      //.siblings(".title").text());
      var articleTitle = $(this)[0].parentElement.parentElement.childNodes[0]
        .textContent;
      console.log(articleTitle);
      var articleDate = $(this)[0].parentElement.parentElement.childNodes[1]
        .textContent;
      var articleUrl = $(
        this
      )[0].parentElement.parentElement.childNodes[3].getAttribute("href");
      //Crate values fro the object
      article.title = articleTitle;
      article.pubDate = articleDate;
      article.url = articleUrl;
      //Push to array
      articleArr.push(article);
      // console.log(articleArr);
      //Turning array into string
      var savedArticles = JSON.stringify(articleArr);
      //Save to local Storage
      localStorage.setItem("Articles", savedArticles);
    });
    li.append(saveButton);

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

    btnHome.append(saveButton);
    // Append and log url
    li.append(`<a href="${article.url[0].value}">Go to article page</a>`);

    // Append the article
    articleList.append(li);
  }
  articleSection.append(articleList);
});
