document.addEventListener('DOMContentLoaded', () => {
    flight_duration();
});

function flight_duration() {
    document.querySelectorAll(".duration").forEach(element => {
        let time = element.dataset.value.split(":");
        element.innerText = time[0]+"h "+time[1]+"m";
    });
    //let now = new Date();
    //console.log(now.addHours(5).getDate());
}

//function flight_date() {
//    document.querySelectorAll(".ticket-details-div").forEach(div => {
//        let d_date = div.querySelector(".ddate").dataset.value.split('-');
//        let ddate = new Date(parseInt(d_date[2]));
//    });
//}

Date.prototype.addSeconds = function(seconds) {
    this.setSeconds(this.getSeconds() + seconds);
    return this;
};

Date.prototype.addMinutes = function(minutes) {
    this.setMinutes(this.getMinutes() + minutes);
    return this;
};

Date.prototype.addHours = function(hours) {
    this.setHours(this.getHours() + hours);
    return this;
};