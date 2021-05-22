//let imagediv = document.getElementById("images")
//let textdiv = document.getElementById("text")
function getPosts() {
    fetch('https://campagne-api.waba359.repl.co/posts.json')
        .then(response => response.json())
        .then(data => console.log(data));
}