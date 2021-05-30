async function setClub(id) {
    let clubs = await (await fetch("https://campagne-api.waba359.repl.co/clubs/clubs.json")).json();
    let clubidx = 0;
    for(let club of clubs.clubs) {
        if(club.id == id) {
            break;
        }
        clubidx += 1;
    }
    let club = clubs.clubs[clubidx];
    let name = document.getElementById("name");
    let logo = document.getElementById("clublogo");
    let desc = document.getElementById("desc");
    let videowrapper = document.getElementById("video");
    let slidewrapper = document.getElementById("slideshow");
    let contacts = document.getElementById("contact-wrapper");
    let video = document.createElement("iframe");
    let slideshow = document.createElement("iframe");

    document.title = "cuilu | "+club.short;
    name.innerHTML = club.name.replace(/ *\([^)]*\) */g, " ");
    logo.src = "https://campagne-api.waba359.repl.co/clubs/logos/"+club.thumbnail;
    logo.alt = club.short+" Logo";
    logo.style.borderColor = "var(--status"+club.status+")";
    desc.innerHTML = club.desc;
    video.src = club.video;
    slideshow.src = club.slideshow;
    slideshow.allowFullscreen = "true";
    slideshow.mozallowfullscreen = "true";
    slideshow.webkitallowfullscreen = "true";
    contacts.innerHTML = "";

    if(club.video != "") {
        videowrapper.appendChild(video);
    } else {
        let wrapper = document.getElementById("videowrapper");
        wrapper.style.display = "none";
    }
    if(club.slideshow != "") {
        slidewrapper.appendChild(slideshow);
    } else {
        let wrapper = document.getElementById("slidewrapper");
        wrapper.style.display = "none";
    }
    for(let key in club.links) {
        link = club.links[key];
        console.log(link)
        if(key != "other") {
            let contact = document.createElement("div");
            let anchor = document.createElement("a");
            let contactimg = document.createElement("img");
            let contacttext = document.createElement("p");
            anchor.target = "_blank";
            contact.classList.add("contact");
            contactimg.classList.add("contact-icon");
            contacttext.classList.add("contact-text");
            anchor.href = link.link;
            contacttext.innerHTML = link.text;
            if(key == "site") {
                contactimg.src = "../../img/link-icon.svg";
            } else if(key == "disc") {
                contactimg.src = "../../img/discord-icon.svg";
            } else if(key == "ig") {
                contactimg.src = "../../img/insta-icon.svg";
            } else {
                contactimg.src = "../../img/fb-icon.svg";
            }
            anchor.appendChild(contactimg);
            anchor.appendChild(contacttext);
            contact.appendChild(anchor);
            contacts.appendChild(contact);
        } else {
            for(let other of link) {
                let contact = document.createElement("div");
                let anchor = document.createElement("a");
                let contactimg = document.createElement("img");
                let contacttext = document.createElement("p");
                anchor.target = "_blank";
                contact.classList.add("contact");
                contactimg.classList.add("contact-icon");
                contacttext.classList.add("contact-text");
                anchor.href = other.link;
                contactimg.src = "../../img/link-icon.svg";
                contacttext.innerHTML = other.text;
                anchor.appendChild(contactimg);
                anchor.appendChild(contacttext);
                contact.appendChild(anchor);
                contacts.appendChild(contact);
            }
        }
    }
}