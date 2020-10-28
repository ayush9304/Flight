//function esc(element) {
//    document.addEventListener('keydown', event => {
//        if(event.key === 'Escape') {
//            element.style.display = 'none';
//        }
//    });
//    element.parentElement.querySelector('input[type=text]').addEventListener("blur", () => {
//        setTimeout(() => {
//            element.style.display = 'none';
//        },80);
//    });
//}

document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("#flight-from").addEventListener("input", event => {
        flight_from(event);
    });

    document.querySelector("#flight-to").addEventListener("input", event => {
        flight_to(event);
    });

    document.querySelector("#flight-from").addEventListener("focus", event => {
        flight_from(event);
    });

    document.querySelector("#flight-to").addEventListener("focus", event => {
        flight_to(event);
    });

});

//function filter_places(input, list) {
//    list.childNodes.forEach(element => {
//        if(element.innerText.toLowerCase().includes(input.value.toLowerCase()) || element.dataset.value.toLowerCase().includes(input.value.toLowerCase())) {
//            console.log(`match: ${element.innerText}`);
//            element.style.display = 'block';
//        }
//        else {
//            console.log(`unmatch: ${element.innerText}`);
//            element.style.display = 'none';
//        }
//    });
//}

function showplaces(input) {
    let box = input.parentElement.querySelector(".places_box");
    box.style.display = 'block';
}

function hideplaces(input) {
    let box = input.parentElement.querySelector(".places_box");
    setTimeout(() => {
        box.style.display = 'none';
    }, 300);
}

function selectplace(option) {
    let input = option.parentElement.parentElement.querySelector('input[type=text]');
    input.value = option.dataset.value.toUpperCase();
}

function flight_to(event) {
    let input = event.target;
    let list = document.querySelector('#places_to');
    showplaces(input);
    if(input.value.length > 0) {
        fetch('query/places/'+input.value)
        .then(response => response.json())
        .then(places => {
            list.innerHTML = '';
            places.forEach(element => {
                let div = document.createElement('div');
                div.setAttribute('class', 'each_places_to_list');
                div.classList.add('places__list');
                div.setAttribute('onclick', "selectplace(this)");
                div.setAttribute('data-value', element.code);
                div.innerText = element.name;
                list.append(div);
            });
        });
    }
}

function flight_from(event) {
    let input = event.target;
    let list = document.querySelector('#places_from');
    showplaces(input);
    if(input.value.length > 0) {
        fetch('query/places/'+input.value)
        .then(response => response.json())
        .then(places => {
            list.innerHTML = '';
            places.forEach(element => {
                let div = document.createElement('div');
                div.setAttribute('class', 'each_places_from_list');
                div.classList.add('places__list');
                div.setAttribute('onclick', "selectplace(this)");
                div.setAttribute('data-value', element.code);
                div.innerText = element.name;
                list.append(div);
            });
        });
    }
}