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
        thumbnail.alt = "Blog Icon";
        navbar.appendChild(button);
    }
    document.getElementById(recent).style.border = "solid 2px var(--gold1)";
}
async function setPost(id) {
    let post = await (await fetch('https://campagne-api.waba359.repl.co/posts/'+id+'.json')).json();
    let thumbnail = document.getElementById("thumbnail");
    let title = document.getElementById("title");
    let subtitle = document.getElementById("subtitle");
    let blogbody = document.getElementById("blogbody");
    blogbody.innerHTML = "";
    thumbnail.src = "https://campagne-api.waba359.repl.co/images/"+post.thumbnail;
    thumbnail.alt = post.title+" Thumbnail";
    title.innerHTML = post.title;
    subtitle.innerHTML = post.date + " | " + post.subtitle;
    for(var para of post.body) {
        var wrapper = document.createElement("div");
        var imgwrapper = document.createElement("div");
        var image = document.createElement("img");
        var textwrapper = document.createElement("div");
        var text = document.createElement("p");
        wrapper.classList.add("wrapper");
        imgwrapper.classList.add("img");
        textwrapper.classList.add("text");
        image.src = "https://campagne-api.waba359.repl.co/images/"+para.image;
        image.alt = post.title+" Image";
        text.innerHTML = para.text;
        imgwrapper.appendChild(image);
        textwrapper.appendChild(text);
        wrapper.appendChild(imgwrapper);
        wrapper.appendChild(textwrapper);
        blogbody.appendChild(wrapper);
    }
}
getPosts();