document.addEventListener('DOMContentLoaded', () => {
    flight_duration();
});

function flight_duration() {
    document.querySelectorAll(".duration").forEach(element => {
        let time = element.dataset.value.split(":");
        element.innerText = time[0]+"h "+time[1]+"m";
    });
}

//function flight_date() {
//    document.querySelectorAll(".ticket-details-div").forEach(div => {
//        let d_date = div.querySelector(".ddate").dataset.value.split('-');
//        let ddate = new Date(parseInt(d_date[2]));
//    });
//}

function book_submit() {
    //
}