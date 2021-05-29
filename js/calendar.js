document.addEventListener("DOMContentLoaded", function() {
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
                color: "var(--status3)"
            },
            {
                title: "Greenpeace Biodiversity",
                start: "2021-05-25",
                end: "2021-05-25",
                color: "var(--status0)"
            },
            {
                title: "SAC Elections",
                start: "2021-06-02",
                end: "2021-06-04",
                color: "var(--status1)"
            },
            {
                title: "MAC Application closes",
                start: "2021-05-31",
                end: "2021-05-31",
                color: "var(--status1)"
            },
            {
                title: "Arts Council Application closes",
                start: "2021-05-31",
                end: "2021-05-31",
                color: "var(--status3)"
            },
            {
                title: "TED Club Annual Conference",
                start: "2021-05-21",
                end: "2021-05-21",
                color: "var(--status3)"
            }
        ]
    });
    calendar.render();
});