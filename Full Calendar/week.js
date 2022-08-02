var wkDate = new Date();
var date = new Date();
let wkMonth = date.getMonth();
const mwStart = new Date(wkDate.getTime() - (wkDate.getDay() * 24 * 60 * 60 * 1000));
const mwEnd = new Date(mwStart.getFullYear(), mwStart.getMonth(), mwStart.getDate() + 6);


function weekEventDrop(get_date = null) {
    const sunday = new Date(wkDate.getTime() - (wkDate.getDay() * 24 * 60 * 60 * 1000))
    document.querySelector(".mnth").innerHTML = sunday.getMonth() + 1 + '/' + (sunday.getDate());

    const monday = new Date(sunday.getFullYear(), sunday.getMonth(), sunday.getDate() + 1)
    document.querySelector(".mnth2").innerHTML = monday.getMonth() + 1 + '/' + (monday.getDate());

    const tuesday = new Date(monday.getFullYear(), monday.getMonth(), monday.getDate() + 1)
    document.querySelector(".mnth3").innerHTML = tuesday.getMonth() + 1 + '/' + (tuesday.getDate());

    const wednesday = new Date(tuesday.getFullYear(), tuesday.getMonth(), tuesday.getDate() + 1)
    document.querySelector(".mnth4").innerHTML = wednesday.getMonth() + 1 + '/' + (wednesday.getDate());

    const thursday = new Date(wednesday.getFullYear(), wednesday.getMonth(), wednesday.getDate() + 1)
    document.querySelector(".mnth5").innerHTML = thursday.getMonth() + 1 + '/' + (thursday.getDate());

    const friday = new Date(thursday.getFullYear(), thursday.getMonth(), thursday.getDate() + 1)
    document.querySelector(".mnth6").innerHTML = friday.getMonth() + 1 + '/' + (friday.getDate());

    const saturday = new Date(friday.getFullYear(), friday.getMonth(), friday.getDate() + 1)
    document.querySelector(".mnth7").innerHTML = saturday.getMonth() + 1 + '/' + (saturday.getDate());

    if (get_date != null) {
        if (get_date === sunday.getDate()) {
            return "sun_event"
        }
        else if (get_date === monday.getDate()) {
            return "mon_event"
        }
        else if (get_date === tuesday.getDate()) {
            return "tue_event"
        }
        else if (get_date === wednesday.getDate()) {
            return "wed_event"
        }
        else if (get_date === thursday.getDate()) {
            return "thu_event"
        }
        else if (get_date === friday.getDate()) {
            return "fri_event"
        }
        else if (get_date === saturday.getDate()) {
            return "sat_event"
        }
        else if (get_date === friday.getDate()) {
            return "day_event"
        }
    }
}



const wkRenderCalendar = () => {
    const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ];
    document.querySelector(".wk-month-title").innerHTML = months[wkDate.getMonth()];


    const wStart = new Date(wkDate.getTime() - (wkDate.getDay() * 24 * 60 * 60 * 1000))
    document.querySelector(".week-title-s").innerHTML = wStart.getDate();

    const wEnd = new Date(wStart.getFullYear(), wStart.getMonth(), wStart.getDate() + 6)
    document.querySelector(".week-title-e").innerHTML = wEnd.getDate();


    document.querySelector(".wk-year-title").innerHTML = wkDate.getFullYear();


    weekEventDrop();

}


function getEventDate() {
    let event = JSON.parse(localStorage.getItem("item"));
    if (event !== null) {
        let date = new Date(event.date)
        return date;
    }
}



// PREVIOUS BUTTON 

document.querySelector(".wk-previous").addEventListener("click", () => {
    wkDate.setDate(wkDate.getDate() - 6);
    wkDate.setDate(wkDate.getDate() - 1);

    // let event_date = getEventDate().getDate();
    // if (mwStart.getDate() <= event_date && mwEnd.getDate() >= event_date) {
    //     let eventweekElement = document.querySelector(`.${weekEventDrop(event_date)}`);
    //     eventweekElement.append(Events);
    // }
    wkRenderCalendar();
});


// NEXT BUTTON 

document.querySelector(".wk-next").addEventListener("click", () => {
    // console.log(new Date(wkDate.getDate() + 6));
    // console.log(new Date(nStart + 6));
    // console.log((wkDate.getDate() + 6));

    wkDate.setDate(wkDate.getDate() + 6);
    wkDate.setDate(wkDate.getDate() + 1);


    // const wSD = new Date(wkDate.getTime() - (wkDate.getDay() * 24 * 60 * 60 * 1000));
    // const wED = new Date(wSD.getFullYear(), wSD.getMonth(), wSD.getDate() + 6);

    // console.log(wSD);
    // console.log(wED);

    // let wSD = wkDate.setDate(wkDate.getDate() + 6);
    // d = new Date(wkDate.setDate(wkDate.getDate() + 6))
    // console.log(d);


    // let event_date = getEventDate().getDate();
    // console.log(event_date);
    // if (wSD.getDate() <= event_date && wED.getDate() >= event_date) {
    //     let eventweekElement = document.querySelector(`.${weekEventDrop(event_date)}`);
    //     eventweekElement.append(Events);
    //     console.log(eventweekElement);
    // }
    wkRenderCalendar();
});
wkRenderCalendar();


// BUTTONS 

document.querySelector(".wk-today-btn").addEventListener("click", () => {
    var getdate = new Date();
    wkDate.setMonth(getdate.getMonth());
    wkDate.setDate(getdate.getDate());
    wkDate.setFullYear(getdate.getFullYear());
    wkRenderCalendar();
});

wkRenderCalendar();







// WEEKLY DRAGGBLE




// const weekEvents = document.querySelector(".event");
// const weekBoxes = document.getElementsByClassName("date");

// weekEvents.addEventListener("dragstart", (e) => {
// });

// weekEvents.addEventListener("dragend", (e) => {
// });

// for (empty of weekBoxes) {
//     empty.addEventListener("dragover", (e) => {
//         e.preventDefault();
//     })

//     empty.addEventListener("dragenter", (e) => {
//     })

//     empty.addEventListener("dragleave", (e) => {
//     })

//     empty.addEventListener("drop", (e) => {
//         e.target.append(weekEvents);
//     })
// }