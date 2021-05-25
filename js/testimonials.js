async function getTestimonials(filter) {
    let testifys = await (await fetch("https://campagne-api.waba359.repl.co/testimonials/testimonials.json")).json();
    let testifylist = document.getElementById("testimonials");
    testifylist.innerHTML = "";
    testifys.testimonials.sort((a, b) => parseInt(b.pts, 10) - parseInt(a.pts, 10));
    for(var testimonial of testifys.testimonials) {
        if(filter == "" || filter == testimonial.grade) {
            let hyperlink = document.createElement("a");
            let testimonialwrapper = document.createElement("div");
            let thumbnail = document.createElement("img");
            let text = document.createElement("div");
            let name = document.createElement("h3");
            let subtitle = document.createElement("p");
            let test = document.createElement("p");
            testimonialwrapper.classList.add("testimonial");
            thumbnail.src = "https://campagne-api.waba359.repl.co/testimonials/profile/"+(testimonial.img == "" ? "Anonymous.png" : testimonial.img);
            thumbnail.alt = testimonial.name+" Profile Photo";
            text.classList.add("text");
            hyperlink.href = testimonial.link;
            hyperlink.target = "blank"
            name.innerHTML = testimonial.name;
            subtitle.innerHTML = "Grade "+(testimonial.grade == "" ? "Unknown" : testimonial.grade) + (testimonial.roles == "" ? "" : " | "+testimonial.roles);
            test.innerHTML = testimonial.test;
            hyperlink.appendChild(name);
            text.appendChild((testimonial.link == "" ? name : hyperlink));
            text.appendChild(subtitle);
            text.appendChild(document.createElement("hr"));
            text.appendChild(test);
            testimonialwrapper.appendChild(thumbnail);
            testimonialwrapper.appendChild(text);
            testifylist.appendChild(testimonialwrapper);
        }
    }
}
getTestimonials("");