var recent = "0000";

async function getPosts() {
    let posts = await (await fetch("https://campagne-api.waba359.repl.co/blog/posts.json")).json();
    let navbar = document.getElementById("blognav");
    navbar.innerHTML = "";
    for(let post of posts.posts) {
        let button = document.createElement("div");
        let thumbnail = document.createElement("img");
        button.classList.add("button");
        thumbnail.id = post.id;
        thumbnail.style.border = "solid 2px rgba(0,0,0,0)";
        thumbnail.addEventListener("click", function() {
            setPost(this.id);
            document.getElementById(recent).style.border = "solid 2px rgba(0,0,0,0)";
            recent = this.id;
            document.getElementById(recent).style.border = "solid 2px var(--gold1)";
        });
        let tooltip = document.createElement("span");
        tooltip.classList.add("tooltip");
        tooltip.innerHTML = post.title;
        button.appendChild(thumbnail);
        button.appendChild(tooltip);
        thumbnail.src = (post.thumbnail == "" ? "https://campagne-api.waba359.repl.co/temp/default.png" : "https://campagne-api.waba359.repl.co/blog/"+post.id+"/images/"+post.thumbnail);
        thumbnail.alt = "Blog Icon";
        navbar.appendChild(button);
    }
    document.getElementById(recent).style.border = "solid 2px var(--gold1)";
}
async function setPost(id) {
    let post = await (await fetch("https://campagne-api.waba359.repl.co/blog/"+id+"/"+id+".json")).json();
    let thumbnail = document.getElementById("thumbnail");
    let title = document.getElementById("title");
    let subtitle = document.getElementById("subtitle");
    let blogbody = document.getElementById("blogbody");
    blogbody.innerHTML = "";
    thumbnail.src = (post.thumbnail == "" ? "https://campagne-api.waba359.repl.co/temp/default.png" : "https://campagne-api.waba359.repl.co/blog/"+post.id+"/images/"+post.thumbnail);
    thumbnail.alt = post.title+" Thumbnail";
    title.innerHTML = post.title;
    subtitle.innerHTML = post.date + " | " + post.subtitle;
    for(let para of post.body) {
        let wrapper = document.createElement("div");
        let imgwrapper = document.createElement("div");
        let image = document.createElement("img");
        let textwrapper = document.createElement("div");
        let text = document.createElement("p");
        wrapper.classList.add("wrapper");
        imgwrapper.classList.add("img");
        textwrapper.classList.add("text");
        image.src = (para.image == "" ? "https://campagne-api.waba359.repl.co/temp/default.png" : "https://campagne-api.waba359.repl.co/blog/"+post.id+"/images/"+para.image);
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