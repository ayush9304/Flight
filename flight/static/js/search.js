document.addEventListener("DOMContentLoaded", () => {
    flight_duration();
    //document.querySelector(".filter-price input[type=range]").addEventListener('input', filter); //filter_price
    filter_price();
    document.querySelector(".clr-filter-div button").addEventListener('click', reset_filter);
});

function flight_duration() {
    document.querySelectorAll(".flight-stops .tooltiptext").forEach(element => {
        let time = element.dataset.value.split(":");
        element.innerText = time[0]+"h "+time[1]+"m";
    });
}








///////////////////////////////////////////////////////////////////////////////////////////////

function filter(element=null) {
    //reset_filter();
    filter_price();
    if (element) {
        inactive(element);
        active(element);   
    }
    //let type = element.dataset.type;
    let start = null;
    let end = null;
    let flights = null;
    if (true) {
        if(document.querySelector(".departure-time-slot-group .square-box.active")) {
            start = document.querySelector(".departure-time-slot-group .square-box.active").dataset.start;
            end = document.querySelector(".departure-time-slot-group .square-box.active").dataset.end;
            flights = document.querySelectorAll("#flights_div .each-flight-div-box.show");
        }
        departure_slot(flights, start, end);
    }

    flights = null;
    if (true) {
        if(document.querySelector(".arrival-time-slot-group .square-box.active")) {
            start = document.querySelector(".arrival-time-slot-group .square-box.active").dataset.start;
            end = document.querySelector(".arrival-time-slot-group .square-box.active").dataset.end;
            flights = document.querySelectorAll("#flights_div .each-flight-div-box.show");
        }
        arrival_slot(flights, start, end);
    }
    //flights = document.querySelectorAll("#flights_div .each-flight-div-box.show");
}

function arrival_slot(flights, start, end) {
    if (flights) {
        for (let i = 0; i < flights.length; i++) {
            time = flights[i].querySelector(".flight-destination-time .flight-time h5").innerText.split(":");
            if((parseInt(time[0]) >= parseInt(start)) && (parseInt(time[0]) < parseInt(end))) {
                //flights[i].style.display = 'block';
                flights[i].classList.add('show');
                flights[i].classList.remove('hide');
            }
            else {
                //flights[i].style.display = 'none';
                flights[i].classList.add('hide');
                flights[i].classList.remove('show');
            }
        }
    }
}
function departure_slot(flights, start, end) {
    if (flights) {
        for (let i = 0; i < flights.length; i++) {
            time = flights[i].querySelector(".flight-origin-time .flight-time h5").innerText.split(":");
            if((parseInt(time[0]) >= parseInt(start)) && (parseInt(time[0]) < parseInt(end))) {
                //flights[i].style.display = 'block';
                flights[i].classList.add('show');
                flights[i].classList.remove('hide');
            }
            else {
                //flights[i].style.display = 'none';
                flights[i].classList.add('hide');
                flights[i].classList.remove('show');
            }
        }
    }
}

///////////////////////////////////////////////////////////////////////////////////////////////









function timeslot(slot) {
    inactive(slot);
    active(slot);

    let type = slot.dataset.type;
    let start = slot.dataset.start;
    let end = slot.dataset.end;
    let div = document.querySelector("#flights_div");
    let flights = div.querySelectorAll(".each-flight-div-box");
    if (type === 'departure') {
        for (let i = 0; i < flights.length; i++) {
            time = flights[i].querySelector(".flight-origin-time .flight-time h5").innerText.split(":");
            if((parseInt(time[0]) >= parseInt(start)) && (parseInt(time[0]) < parseInt(end))) {
                flights[i].style.display = 'block';
            }
            else {
                flights[i].style.display = 'none';
            }
        }
    }
    if (type === 'arrival') {
        for (let i = 0; i < flights.length; i++) {
            time = flights[i].querySelector(".flight-destination-time .flight-time h5").innerText.split(":");
            if((parseInt(time[0]) >= parseInt(start)) && (parseInt(time[0]) < parseInt(end))) {
                flights[i].style.display = 'block';
            }
            else {
                flights[i].style.display = 'none';
            }
        }
    }

}

function active(slot) {
    slot.classList.add('active');
    slot.querySelectorAll('img').forEach(image => {
        if(image.dataset.statefor === 'inactive') {
            image.style.display = 'none';
        }
        else {
            image.style.display = 'block';
        }
    });
}
function inactive(slot) {
    if (slot) {
        slot.parentElement.querySelectorAll('.active').forEach(element => {
            element.classList.remove('active');
            element.querySelectorAll('img').forEach(image => {
                if(image.dataset.statefor === 'inactive') {
                    image.style.display = 'block';
                }
                else {
                    image.style.display = 'none';
                }
            })
        });
    }
}



function filter_price() {
    let value = document.querySelector(".filter-price input[type=range]").value;
    document.querySelector(".filter-price .final-price-value").innerText = value;

    let div = document.querySelector("#flights_div");
    let flights = div.querySelectorAll(".each-flight-div-box");
    for (let i = 0; i < flights.length; i++) {
        if (flights[i].querySelector(".flight-price span").innerText > parseInt(value)) {
            //flights[i].style.display = 'none';
            flights[i].classList.add('hide');
            flights[i].classList.remove('show');
        }
        else {
            //flights[i].style.display = 'block';
            flights[i].classList.add('show');
            flights[i].classList.remove('hide');
        }
    }
    
}

function reset_filter() {
    document.querySelectorAll('.time-slot').forEach(slot => {
        inactive(slot.querySelector(".square-box.active"));
    });
    let max = document.querySelector(".filter-price input[type=range]").getAttribute('max');
    document.querySelector(".filter-price input[type=range]").value = max;
    document.querySelector(".filter-price .final-price-value").innerText = max;

    let flights = document.querySelector("#flights_div").querySelectorAll(".each-flight-div-box");
    for (let i = 0; i < flights.length; i++) {
            //flights[i].style.display = 'block';
            flights[i].classList.add('show');
            flights[i].classList.remove('hide');
    }
}
