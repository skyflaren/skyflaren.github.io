async function getPosts() {
    let posts = await (await fetch('https://campagne-api.waba359.repl.co/posts.json')).json();
}
async function setPost(id) {
    let post = await (await fetch('https://campagne-api.waba359.repl.co/posts/'+id+'.json')).json();
    console.log(post);
    let thumbnail = document.getElementById("thumbnail");
    let title = document.getElementById("title");
    let subtitle = document.getElementById("subtitle");
    let imgbody = document.getElementById("imgbody");
    let textbody = document.getElementById("textbody");
    imgbody.innerHTML = "";
    textbody.innerHTML = "";
    thumbnail.src = "https://campagne-api.waba359.repl.co/images/"+post.thumbnail;
    title.innerHTML = post.title;
    subtitle.innerHTML = post.date + " | " + post.subtitle;
    for(var para of post.body) {
        var textbounds = document.createElement("div");
        var text = document.createElement("p");
        text.innerHTML = para.text;
        textbounds.appendChild(text);
        textbody.appendChild(textbounds);
        textbody.appendChild(document.createElement("br"));

        var imgbounds = document.createElement("div");
        var image = document.createElement("img");
        image.src = "https://campagne-api.waba359.repl.co/images/"+para.image;
        image.height = textbounds.clientHeight;
        imgbounds.appendChild(image);
        console.log(textbounds.clientHeight);
        imgbody.appendChild(imgbounds);
        imgbody.appendChild(document.createElement("br"));
    }
}
setPost("asdf");