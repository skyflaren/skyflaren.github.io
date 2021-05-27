document.addEventListener("DOMContentLoaded", function() {
    let calendarEl = document.getElementById("calendar");
    let calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: "dayGridMonth",
        fixedWeekCount: false,
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
            }
        ]
    });
    calendar.render();
});