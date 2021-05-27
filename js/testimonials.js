async function getTestimonials(filter) {
    let testifys = await (await fetch("https://campagne-api.waba359.repl.co/testimonials/testimonials.json")).json();
    let testifylist = document.getElementById("testimonials");
    testifylist.innerHTML = "";
    testifys.testimonials.sort(function (a, b) {
        if(parseInt(a.pts, 10) > parseInt(b.pts, 10))
            return -1;
        if(parseInt(a.pts, 10) < parseInt(b.pts, 10))
            return 1;
        if((a.roles.match(/,/g)||[]).length > (b.roles.match(/,/g)||[]).length)
            return -1;
        if((a.roles.match(/,/g)||[]).length < (b.roles.match(/,/g)||[]).length)
            return 1;
        if(b.roles.length == 0 && a.roles.length > 0)
            return -1;
        if(a.roles.length == 0 && b.roles.length > 0)
            return 1;
    });
    for(let testimonial of testifys.testimonials) {
        if(filter == "" || filter.includes(testimonial.grade) || (filter.includes("alumni") && testimonial.grade.includes("Alumni")) || (filter.includes("anon") && testimonial.grade == "")) {
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
            subtitle.innerHTML = (testimonial.grade.includes("Alumni") ? testimonial.grade : "Grade "+(testimonial.grade == "" ? "Unknown" : testimonial.grade)) + (testimonial.roles == "" ? "" : " | "+testimonial.roles);
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

function update() {
    let checkboxes = document.getElementById("checkBoxes");
    let options = checkboxes.getElementsByTagName("label");
    filter = [];
    for(let option of options) {
        input = option.getElementsByTagName("input")[0];
        if(input.checked) {
            filter.push(input.value);
        }
    }
    getTestimonials(filter);
}