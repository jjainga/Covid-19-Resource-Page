const db = new Dexie("covid19-avoid");

db.version(1).stores({
  articles: "id,article",
  testSites: "id,testSite",
});

function saveArticle(article) {
  return db.articles.put({ id: article.identifier, article: article });
}

function deleteArticles(id) {
  return db.articles.where({ id: id }).delete();
}

function getSavedArticles() {
  return db.articles.toArray();
}

function saveTestSite(testSite) {
  return db.testSites.put({ id: testSite.identifier, testSite: testSite });
}

function deleteTestSite(id) {
  return db.testSites.where({ id: id }).delete();
}

function getSavedTestSites() {
  return db.testSites.toArray();
}

// getSavedArticles().then(function (articles) {
//   console.log(articles);
// });
