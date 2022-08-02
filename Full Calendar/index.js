var date = new Date();
const renderCalendar = () => {
    // date.setDate(1);
    // const day = date.getDay();
    // const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    // const prevDate = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
    // const active = new Date();
    // const lastDayIndex = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();
    // const nextDays = 7 - lastDayIndex - 1;

    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    document.querySelector(".month-title").innerHTML = months[date.getMonth()];
    document.querySelector(".year-title").innerHTML = date.getFullYear();

    // var cells = "";

    // for (x = day; x > 0; x--) {
    //     cells += "<div class='prev_date'>" + (prevDate - x + 1) + "</div>";
    // }

    // for (i = 1; i <= lastDay; i++) {
    //     if (i == active.getDate() && date.getMonth() == active.getMonth()) {
    //         cells += "<div class='active'>" + i + "</div>";
    //     } else {
    //         cells += "<div>" + i + "</div>";
    //     }
    // }

    // for (let j = 1; j <= nextDays; j++) {
    //     cells += "<div class='next_date'>" + j + "</div>";
    // }

    // document.getElementsByClassName("date")[0].innerHTML = cells;
}






// BUTTONS 





// document.querySelector(".prev-btn").addEventListener("click", () => {
//     date.setMonth(date.getMonth() - 1);
//     renderCalendar();
// });

// document.querySelector(".next-btn").addEventListener("click", () => {
//     date.setMonth(date.getMonth() + 1);
//     renderCalendar();
// });

// document.querySelector(".today-btn").addEventListener("click", () => {
//     var getdate = new Date();
//     date.setMonth(getdate.getMonth());
//     date.setDate(getdate.getDate());
//     date.setFullYear(getdate.getFullYear());
//     renderCalendar();
// });

// document.querySelector(".btn-mnth").addEventListener("click", () => {
//     var month = document.querySelector(".month");
//     var week = document.querySelector(".week");
//     var day = document.querySelector(".day");
//     var list = document.querySelector(".list");
//     list.classList.add("d-none");
//     week.classList.add("d-none");
//     day.classList.add("d-none");
//     month.classList.remove("d-none");
// });

// document.querySelector(".btn-week").addEventListener("click", () => {
//     var month = document.querySelector(".month")
//     var week = document.querySelector(".week")
//     var day = document.querySelector(".day")
//     var list = document.querySelector(".list")
//     week.classList.remove("d-none")
//     day.classList.add("d-none")
//     month.classList.add("d-none")
//     list.classList.add("d-none")
// });

// document.querySelector(".btn-day").addEventListener("click", () => {
//     var month = document.querySelector(".month")
//     var week = document.querySelector(".week")
//     var day = document.querySelector(".day")
//     var list = document.querySelector(".list")
//     list.classList.add("d-none")
//     week.classList.add("d-none")
//     day.classList.remove("d-none")
//     month.classList.add("d-none")
// });

// document.querySelector(".btn-list").addEventListener("click", () => {
//     var month = document.querySelector(".month")
//     var week = document.querySelector(".week")
//     var day = document.querySelector(".day")
//     var list = document.querySelector(".list")
//     week.classList.add("d-none")
//     day.classList.add("d-none")
//     month.classList.add("d-none")
//     list.classList.remove("d-none")
// });

// const days = [
//     "Sunday",
//     "Monday",
//     "Tuesday",
//     "Wednesday",
//     "Thursday",
//     "Friday",
//     "Saturday",
// ];

// document.querySelector(".active-day").innerHTML = days[date.getDay()];

renderCalendar();