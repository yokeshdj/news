function fetchData(category, key) {
    return fetch(`https://newsapi.org/v2/top-headlines/sources?category=${category}&apiKey=${key}`)
        .then((response) => response.json())
}
async function createPost(category) {
    var apiKey = "7655d4a5f1dc4b00b9508b1b78b1444d"
    fetchData(category, apiKey)
        .then((res) => handleResponse(res.sources))
    const handleResponse = function (data) {
        var div = document.createElement("div");
        for (article of data) {
            var postData = createPostCard(article);
            div.append(postData)
        }
        document.body.append(div);
    }
}

function createPostCard(post) {
    var div = document.createElement("div");
    var source = document.createElement("p");
    var title = document.createElement("h3");
    title.textContent = post.description;
    source.textContent = "Source : " + post.name;
    div.className = "post-card";
    div.append(title, source)
    return div;
}
function getCategory(){
    const link = window.location.href;
    var category = [];
    for(var i=link.length-6; link[i]!='/'; i--){
        category.push(link[i])
    }
    createPost(category.reverse().join(""));
}
getCategory();