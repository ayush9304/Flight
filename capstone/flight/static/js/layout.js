document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".dropdown-input").forEach(dropdown => {
        dropdown.querySelectorAll("a").forEach(option => {
            option.onclick = () => {
                //
            }
        });
    });
});

function places_from() {
    let element = document.querySelector('.places_from');
    element.style.display = 'block';
    esc(element);
}

function places_to() {
    let element = document.querySelector('.places_to');
    element.style.display = 'block';
    esc(element);
}

function esc(element) {
    document.addEventListener('keydown', event => {
        if(event.key === 'Escape') {
            element.style.display = 'none';
        }
    });
    element.parentElement.querySelector('input[type=text]').addEventListener("blur", () => {
        setTimeout(() => {
            element.style.display = 'none';
        },80);
    });
}
