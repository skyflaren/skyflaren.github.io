document.addEventListener("DOMContentLoaded", function () {
    let calendarEl = document.getElementById("calendar");
    let calendar = new FullCalendar.Calendar(calendarEl, {
        height: "auto",
        initialView: "dayGridMonth",
        fixedWeekCount: false,
        handleWindowResize: true,
        headerToolbar: {
            start: "title",
            center: "",
            end: "today dayGridMonth,timeGridWeek prev,next",
        },
        events: [
            {
                title: "Arts in Bloom",
                start: "2021-05-25",
                end: "2021-05-29",
                description: "Lorem ipsum dolor",
                color: "var(--status3)"
            },
            {
                title: "SAC Elections",
                start: "2021-06-02",
                end: "2021-06-04",
                description: "Lorem ipsum dolor",
                color: "var(--status2)"
            },
            {
                title: "MAC Application closes",
                start: "2021-05-31",
                description: "Lorem ipsum dolor",
                color: "var(--status1)"
            },
            {
                title: "Arts Council Application closes",
                start: "2021-05-31",
                description: "Lorem ipsum dolor",
                color: "var(--status3)"
            },
            {
                title: "TED Club Annual Conference",
                start: "2021-05-21",
                description: "Lorem ipsum dolor",
                color: "var(--status0)"
            }
        ],
        /*
        eventMouseEnter: function(info) {
            console.log(info.event.extendedProps.description);
            info.el.innerText = info.event.title + " | " + info.event.extendedProps.description;
            info.el.style.color = "white";
            info.el.style.position = "relative";
            info.el.style.zIndex = "1";
        },
        eventMouseLeave: function(info) {
            info.el.style.color = "white";
            info.el.innerText = info.event.title;
            info.el.style.position = "relative";
            info.el.style.zIndex = "1";
        }*/
    });
    calendar.render();
});