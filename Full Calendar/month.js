// import  {weekDayAndDate} from './week.js';
let calender_days;
let event_list = [];
var date = new Date();
const get_c_day = new Date();
const renderCalendar = () => {
    date.setDate(1);
    const day = date.getDay();
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    const prevDate = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
    const active = new Date();
    const lastDayIndex = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();
    const nextDays = 7 - lastDayIndex - 1;


    // MONTH SEC 



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


    // DAY ACTIVE 


    const weekDays = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];


    const getDay = document.querySelector(".active-day");
    getDay.innerHTML = weekDays[get_c_day.getDay()];

    // DAY SEC 

    document.querySelector(".d-mnth").innerHTML = months[get_c_day.getMonth()];
    document.querySelector(".d-date").innerHTML = [get_c_day.getDate()];
    document.querySelector(".d-year").innerHTML = [get_c_day.getFullYear()];


    // MONTH DATES 



    var cells = "";

    for (x = day; x > 0; x--) {
        cells += "<div class='prev_date'>" + (prevDate - x + 1) + "</div>";
    }

    for (i = 1; i <= lastDay; i++) {
        if (i == active.getDate() && date.getMonth() == active.getMonth()) {
            cells += "<div class='active cur'>" + i + "</div>";
        } else {
            cells += "<div class='cur'>" + i + "</div>";
        }
    }

    for (let j = 1; j <= nextDays; j++) {
        cells += "<div class='next_date'>" + j + "</div>";
    }

    document.getElementsByClassName("date")[0].innerHTML = cells;
}


// BUTTONS 





document.querySelector(".prev-btn").addEventListener("click", () => {
    let month = date.getMonth() - 1;
    let day = date.getDate();
    let year = date.getFullYear();
    date.setMonth(month);
    renderCalendar();
    let get_event = JSON.parse(localStorage.getItem("item"));
    if (get_event !== null) {
        var getdate = new Date(get_event.date);
        let event_month = getdate.getMonth();
        let event_day = getdate.getDate();
        let event_year = getdate.getFullYear();
        if (event_month === month && event_year === year) {
            let month_days = document.querySelectorAll("#date .cur");
            month_days.forEach(element => {
                if (element.textContent == event_day) {
                    element.append(Events);
                }
            })
        }
    }
});

document.querySelector(".next-btn").addEventListener("click", () => {
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let year = date.getFullYear();
    date.setMonth(month);
    renderCalendar();
    let get_event = JSON.parse(localStorage.getItem("item"));
    if (get_event !== null) {
        var getdate = new Date(get_event.date);
        let event_month = getdate.getMonth();
        let event_day = getdate.getDate();
        let event_year = getdate.getFullYear();
        if (event_month === month && event_year === year) {
            let month_days = document.querySelectorAll("#date .cur");
            month_days.forEach(element => {
                if (element.textContent == event_day) {
                    element.append(Events);
                }
            })
        }
    }
});


// TODAY BUTTON 

document.querySelector(".today-btn").addEventListener("click", () => {
    var getdate = new Date();
    date.setMonth(getdate.getMonth());
    date.setDate(getdate.getDate());
    date.setFullYear(getdate.getFullYear());
    renderCalendar();
});

renderCalendar();






// DRAGGBLE BY HARRY 


const Events = document.querySelector(".event");
const dateBoxes = document.getElementsByClassName("date");

Events.addEventListener("dragstart", (e) => {
});

Events.addEventListener("dragend", (e) => {
});

for (dateBox of dateBoxes) {
    dateBox.addEventListener("dragover", (e) => {
        e.preventDefault();
    })

    dateBox.addEventListener("dragenter", (e) => {
    })

    dateBox.addEventListener("dragleave", (e) => {
    })

    dateBox.addEventListener("drop", (e) => {
        let day = e.target.textContent;
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
        c_date = year + "-" + month + "-" + day
        let get_event = JSON.parse(localStorage.getItem("item"));
        if (get_event === null || get_event === "undefined") {
            item = { "title": "Event 1", "date": c_date, "event_id": Events.id };
            localStorage.setItem("item", JSON.stringify(item))
        } else {
            if (get_event.event_id == Events.id) {
                item = { "title": "Event 1", "date": c_date, "event_id": Events.id };
                localStorage.setItem("item", JSON.stringify(item))
            } else {
                item = { "title": "Event 1", "date": c_date, "event_id": Events.id };
                localStorage.setItem("item", JSON.stringify(item))
            }
        }
        e.target.append(Events);
    })
}
localStorage.removeItem("item");




























//////////////////////////////////////// BUTTON /////////////////////////////////////////
///////////////////////////////////// MONTH BUTTONS ////////////////////////////////////////










document.getElementById("month-btn-week").addEventListener("click", () => {
    var month = document.querySelector(".m-cntnr")
    var week = document.querySelector(".wk-cntnr")
    week.classList.remove("d-none")
    month.classList.add("d-none")




    // MONTH WEEK BTN    EVENT DROP 

    let event_date = getEventDate().getDate();
    if (mwStart.getDate() <= event_date && mwEnd.getDate() >= event_date) {
        let eventweekElement = document.querySelector(`.${weekEventDrop(event_date)}`);
        eventweekElement.append(Events);
    }
});

document.getElementById("month-btn-day").addEventListener("click", () => {
    var month = document.querySelector(".m-cntnr")
    var week = document.querySelector(".wk-cntnr")
    var day = document.querySelector(".day-cntnr")
    week.classList.add("d-none")
    month.classList.add("d-none")
    day.classList.remove("d-none")



    // MONTH DAY BTN    EVENT DROP

    let event_date = getEventDate().getDate();
    if (get_c_day.getDate() === event_date) {
        let eventweekElement = document.querySelector(".day_event");
        eventweekElement.append(Events);
    }
});

document.getElementById("month-btn-list").addEventListener("click", () => {
    var month = document.querySelector(".m-cntnr")
    var week = document.querySelector(".wk-cntnr")
    var day = document.querySelector(".day-cntnr")
    var list = document.querySelector(".l-cntnr")
    var listevent = document.querySelector(".list-display")
    week.classList.add("d-none")
    month.classList.add("d-none")
    day.classList.add("d-none")
    list.classList.remove("d-none")
    listevent.classList.add("d-none")
});










//////////////////////////////////////// BUTTON /////////////////////////////////////////
///////////////////////////////////// WEEK BUTTONS ////////////////////////////////////////










document.getElementById("week-mnth-btn").addEventListener("click", () => {
    var month = document.querySelector(".m-cntnr")
    var week = document.querySelector(".wk-cntnr")
    week.classList.add("d-none")
    month.classList.remove("d-none")
});

document.getElementById("week-day-btn").addEventListener("click", () => {
    var month = document.querySelector(".m-cntnr")
    var week = document.querySelector(".wk-cntnr")
    var day = document.querySelector(".day-cntnr")
    week.classList.add("d-none")
    month.classList.add("d-none")
    day.classList.remove("d-none")



    // WEEK DAY BUTTON   EVENT DROP 

    let event_date = getEventDate().getDate();
    if (get_c_day.getDate() === event_date) {
        let eventweekElement = document.querySelector(".day_event");
        eventweekElement.append(Events);
    }
});

document.getElementById("week-list-btn").addEventListener("click", () => {
    var month = document.querySelector(".m-cntnr")
    var week = document.querySelector(".wk-cntnr")
    var day = document.querySelector(".day-cntnr")
    var list = document.querySelector(".l-cntnr")
    var listevent = document.querySelector(".list-display")
    week.classList.add("d-none")
    month.classList.add("d-none")
    day.classList.add("d-none")
    list.classList.remove("d-none")
    listevent.classList.add("d-none")
});













//////////////////////////////////////// BUTTON /////////////////////////////////////////
////////////////////////////////////// DAY BUTTONS ////////////////////////////////////////








// PREVIOUS NEXT TODAY BUTTON 



document.querySelector(".d-previous").addEventListener("click", () => {
    get_c_day.setDate(get_c_day.getDate() - 1);

    let eventweekElement = document.querySelector(".day_event");
    let event_date = getEventDate().getDate();
    if (get_c_day.getDate() === event_date) {
        eventweekElement.append(Events);
    }
    else {
        eventweekElement.innerHTML = null;
    }
    renderCalendar();
});

document.querySelector(".d-next").addEventListener("click", () => {
    get_c_day.setDate(get_c_day.getDate() + 1);

    let eventweekElement = document.querySelector(".day_event");
    let event_date = getEventDate().getDate();
    if (get_c_day.getDate() === event_date) {
        let eventweekElement = document.querySelector(".day_event");
        eventweekElement.append(Events);
    }
    else {
        eventweekElement.innerHTML = null;
    }
    renderCalendar();
});
renderCalendar();


// TODAY BUTTON 



document.getElementById("today-d-b").addEventListener("click", () => {
    var getdate = new Date();
    get_c_day.setMonth(getdate.getMonth());
    get_c_day.setDate(getdate.getDate());
    get_c_day.setFullYear(getdate.getFullYear());

    let eventweekElement = document.querySelector(".day_event");
    let event_date = getEventDate().getDate();
    if (get_c_day.getDate() === event_date) {
        let eventweekElement = document.querySelector(".day_event");
        eventweekElement.append(Events);
    }
    else {
        eventweekElement.innerHTML = null;
    }
    renderCalendar();
});
renderCalendar();



document.getElementById("day-mnth-btn").addEventListener("click", () => {
    var month = document.querySelector(".m-cntnr")
    var week = document.querySelector(".wk-cntnr")
    var day = document.querySelector(".day-cntnr")
    week.classList.add("d-none")
    month.classList.remove("d-none")
    day.classList.add("d-none")
});

document.getElementById("day-week-btn").addEventListener("click", () => {
    var month = document.querySelector(".m-cntnr")
    var week = document.querySelector(".wk-cntnr")
    var day = document.querySelector(".day-cntnr")
    week.classList.remove("d-none")
    month.classList.add("d-none")
    day.classList.add("d-none")



    // DAY WEEK BUTTON    EVENT DROP 

    let event_date = getEventDate().getDate();
    if (mwStart.getDate() <= event_date && mwEnd.getDate() >= event_date) {
        let eventweekElement = document.querySelector(`.${weekEventDrop(event_date)}`);
        eventweekElement.append(Events);
    }
});

document.getElementById("day-list-btn").addEventListener("click", () => {
    var month = document.querySelector(".m-cntnr")
    var week = document.querySelector(".wk-cntnr")
    var day = document.querySelector(".day-cntnr")
    var list = document.querySelector(".l-cntnr")
    var listevent = document.querySelector(".list-display")
    week.classList.add("d-none")
    month.classList.add("d-none")
    day.classList.add("d-none")
    list.classList.remove("d-none")
    listevent.classList.add("d-none")
});











//////////////////////////////////////// BUTTON /////////////////////////////////////////
///////////////////////////////////// LIST BUTTONS ////////////////////////////////////////

















document.getElementById("list-mnth-bttn").addEventListener("click", () => {
    var month = document.querySelector(".m-cntnr")
    var week = document.querySelector(".wk-cntnr")
    var day = document.querySelector(".day-cntnr")
    var list = document.querySelector(".l-cntnr")
    var listevent = document.querySelector(".list-display")
    week.classList.add("d-none")
    month.classList.remove("d-none")
    day.classList.add("d-none")
    list.classList.add("d-none")
    listevent.classList.remove("d-none")
});

document.getElementById("list-week-bttn").addEventListener("click", () => {
    var month = document.querySelector(".m-cntnr")
    var week = document.querySelector(".wk-cntnr")
    var day = document.querySelector(".day-cntnr")
    var list = document.querySelector(".l-cntnr")
    var listevent = document.querySelector(".list-display")
    week.classList.remove("d-none")
    month.classList.add("d-none")
    day.classList.add("d-none")
    list.classList.add("d-none")
    listevent.classList.remove("d-none")



    // LIST WEEK BUTTON   EVENT DROP 

    let event_date = getEventDate().getDate();
    if (mwStart.getDate() <= event_date && mwEnd.getDate() >= event_date) {
        let eventweekElement = document.querySelector(`.${weekEventDrop(event_date)}`);
        eventweekElement.append(Events);
    }
});

document.getElementById("list-day-bttn").addEventListener("click", () => {
    var month = document.querySelector(".m-cntnr")
    var week = document.querySelector(".wk-cntnr")
    var day = document.querySelector(".day-cntnr")
    var list = document.querySelector(".l-cntnr")
    var listevent = document.querySelector(".list-display")
    week.classList.add("d-none")
    month.classList.add("d-none")
    day.classList.remove("d-none")
    list.classList.add("d-none")
    listevent.classList.remove("d-none")



    // LIST DAY BUTTON   EVENT DROP 

    let event_date = getEventDate().getDate();
    console.log(event_date);
    if (get_c_day.getDate() === event_date) {
        let eventweekElement = document.querySelector(".day_event");
        eventweekElement.append(Events);
    }
});