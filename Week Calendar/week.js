var date = new Date();
const renderCalendar = () => {

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
    document.querySelector(".week-title-s").innerHTML = Math.abs(date.getDate() - 4);
    document.querySelector(".week-title-e").innerHTML = Math.abs(date.getDate() + 2);
    document.querySelector(".year-title").innerHTML = date.getFullYear();
}


// PREVIOUS BUTTON 

document.querySelector(".previous").addEventListener("click", () => {
    date.setDate(date.getDate() - 6);
    date.setDate(date.getDate() - 1);
    renderCalendar();
});


// NEXT BUTTON 

document.querySelector(".next").addEventListener("click", () => {
    date.setDate(date.getDate() + 6);
    date.setDate(date.getDate() + 1);
    renderCalendar();
});
renderCalendar();


// BUTTONS 

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
const emptyBoxes = document.getElementsByClassName("empty");

Events.addEventListener("dragstart", (e) => {
});

Events.addEventListener("dragend", (e) => {
});

for (emptyBox of emptyBoxes) {
    emptyBox.addEventListener("dragover", (e) => {
        e.preventDefault();
    })

    emptyBox.addEventListener("dragenter", (e) => {
    })

    emptyBox.addEventListener("dragleave", (e) => {
    })

    emptyBox.addEventListener("drop", (e) => {
        e.target.append(Events);
    })
}