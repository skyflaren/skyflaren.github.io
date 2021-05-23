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
        var textwrapper = document.createElement("div");
        var text = document.createElement("p");
        textwrapper.classList.add("textwrapper");
        text.innerHTML = para.text;
        textwrapper.appendChild(text);
        textbody.appendChild(textwrapper);
        textbody.appendChild(document.createElement("br"));

        var imgwrapper = document.createElement("div");
        var image = document.createElement("img");
        imgwrapper.classList.add("imgwrapper");
        image.src = "https://campagne-api.waba359.repl.co/images/"+para.image;
        image.height = textwrapper.clientHeight;
        imgwrapper.appendChild(image);
        imgbody.appendChild(imgwrapper);
        imgbody.appendChild(document.createElement("br"));
    }
}
setPost("0000");