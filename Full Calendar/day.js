var date = new Date();
const dayRenderCalendar = () => {
    // const monthDays = document.querySelector(".days");
    // const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    // const prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
    // const firstDayIndex = date.getDay();
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


    const setMonth = document.querySelector(".mnth");
    setMonth.innerHTML = months[date.getMonth()];


    document.querySelector(".date").innerHTML = [date.getDate()];
    document.querySelector(".year").innerHTML = [date.getFullYear()];

    // WEEK ACTIVE 


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
    getDay.innerHTML = weekDays[date.getDay()];
};



// PREVIOUS NEXT DATE BUTTON 



document.querySelector(".d-previous").addEventListener("click", () => {
    date.setDate(date.getDate() - 1);
    dayRenderCalendar();
});

document.querySelector(".d-next").addEventListener("click", () => {
    date.setDate(date.getDate() + 1);
    dayRenderCalendar();
});
dayRenderCalendar();




// DYNAMIC DAY BUTTON 


// TODAY BUTTON 



document.getElementById("today-d-b").addEventListener("click", () => {
    var getdate = new Date();
    date.setMonth(getdate.getMonth());
    date.setDate(getdate.getDate());
    date.setFullYear(getdate.getFullYear());
    dayRenderCalendar();
});

dayRenderCalendar();








// DRAGGBLE BY HARRY 


const dEvents = document.querySelector(".d-event");
const dayBoxes = document.getElementsByClassName("date");

Events.addEventListener("dragstart", (e) => {
});

Events.addEventListener("dragend", (e) => {
});

for (dayBox of dayBoxes) {
    dayBox.addEventListener("dragover", (e) => {
        e.preventDefault();
    })

    dayBox.addEventListener("dragenter", (e) => {
    })

    dayBox.addEventListener("dragleave", (e) => {
    })

    dayBox.addEventListener("drop", (e) => {
        e.target.append(Events);
    })
}