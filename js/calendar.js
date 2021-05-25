document.addEventListener("DOMContentLoaded", function() {
    var calendarEl = document.getElementById("calendar");
    var calendar = new FullCalendar.Calendar(calendarEl, {
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
                end: "2021-05-28",
                color: "var(--status3)"
            },
            {
                title: "Greenpeace Biodiversity",
                start: "2021-05-25",
                end: "2021-05-25",
                color: "var(--status0)"
            }
        ]
    });
    calendar.render();
});

function addEvent() {
    var calendar = document.getElementById('calendar');

}