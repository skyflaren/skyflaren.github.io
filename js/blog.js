var recent = "0000";

async function getPosts() {
    let posts = await (await fetch('https://campagne-api.waba359.repl.co/posts.json')).json();
    let navbar = document.getElementById("blognav");
    navbar.innerHTML = "";
    for(var post of posts.posts) {
        let button = document.createElement("span");
        let thumbnail = document.createElement("img");
        thumbnail.id = post.id;
        thumbnail.style.border = "solid 2px rgba(0,0,0,0)";
        thumbnail.addEventListener("click", function() {
            setPost(this.id);
            document.getElementById(recent).style.border = "solid 2px rgba(0,0,0,0)";
            recent = this.id;
            document.getElementById(recent).style.border = "solid 2px var(--gold1)";
        });
        console.log(post.id);
        //let text = document.createElement("span");
        //text.classList.add("tooltip");
        //text.innerHTML = post.title;
        button.appendChild(thumbnail);
        //button.appendChild(text);
        thumbnail.src = "https://campagne-api.waba359.repl.co/images/"+post.thumbnail;
        navbar.appendChild(button);
    }
    document.getElementById(recent).style.border = "solid 2px var(--gold1)";
}
async function setPost(id) {
    let post = await (await fetch('https://campagne-api.waba359.repl.co/posts/'+id+'.json')).json();
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
        image.alt = post.title+"Image";
        image.height = textwrapper.clientHeight;
        imgwrapper.appendChild(image);
        imgbody.appendChild(imgwrapper);
        imgbody.appendChild(document.createElement("br"));
    }
}
getPosts();