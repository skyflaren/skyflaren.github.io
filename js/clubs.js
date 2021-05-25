async function getClubs(filter) {
    let clubs = await (await fetch("https://campagne-api.waba359.repl.co/clubs/clubs.json")).json();
    let clublist = document.getElementById("clubs");
    clublist.innerHTML = "";
    for(var club of clubs.clubs) {
        if(filter == "" || filter == club.type) {
            let clubwrapper = document.createElement("div");
            let thumbnail = document.createElement("img");
            let text = document.createElement("div");
            let name = document.createElement("h3");
            let teacher = document.createElement("p");
            let desc = document.createElement("p");
            clubwrapper.classList.add("club");
            thumbnail.src = "https://campagne-api.waba359.repl.co/clubs/logos/"+club.thumbnail;
            thumbnail.alt = club.name+" Logo";
            thumbnail.classList.add("img");
            thumbnail.style.borderColor = "var(--status"+club.status+")";
            text.classList.add("text");
            name.innerHTML = club.name;
            teacher.innerHTML = club.teacher;
            desc.innerHTML = club.desc;
            text.appendChild(name);
            text.appendChild(teacher);
            text.appendChild(document.createElement("hr"));
            text.appendChild(desc);
            clubwrapper.appendChild(thumbnail);
            clubwrapper.appendChild(text);
            clublist.appendChild(clubwrapper);
        }
    }
}
getClubs("");