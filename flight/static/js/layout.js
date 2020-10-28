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
        let input = event.target;
        let list = document.querySelector('#places_from');
        if(input.value.length === 1) {
            fetch('query/places/'+input.value)
            .then(response => response.json())
            .then(places => {
                list.innerHTML = '';
                places.forEach(element => {
                    let div = document.createElement('div');
                    div.setAttribute('class', 'each_places_from_list');
                    div.setAttribute('data-value', element.code);
                    div.innerText = element.name;
                    list.append(div);
                });
            });
        }
        else {
            filter_places(input, list);
        }
    });

    document.querySelector("#flight-to").addEventListener("input", event => {
        let input = event.target;
        let list = document.querySelector('#places_to');
        if(input.value.length === 1) {
            fetch('query/places/'+input.value)
            .then(response => response.json())
            .then(places => {
                list.innerHTML = '';
                places.forEach(element => {
                    let div = document.createElement('div');
                    div.setAttribute('class', 'each_places_to_list');
                    div.setAttribute('data-value', element.code);
                    div.innerText = element.name;
                    list.append(div);
                });
            });
        }
        else {
            filter_places(input, list);
        }
    });
})

function filter_places(input, list) {
    list.childNodes.forEach(element => {
        if(element.innerText.toLowerCase().includes(input.value.toLowerCase()) || element.dataset.value.toLowerCase().includes(input.value.toLowerCase())) {
            console.log(`match: ${element.innerText}`);
            element.style.display = 'block';
        }
        else {
            console.log(`unmatch: ${element.innerText}`);
            element.style.display = 'none';
        }
    })
}