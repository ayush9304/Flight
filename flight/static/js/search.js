document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".filter-price input[type=range]").addEventListener('input', filter_price);
    filter_price();
});

function timeslot(slot) {
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
    slot.classList.add('active');
    slot.querySelectorAll('img').forEach(image => {
        if(image.dataset.statefor === 'inactive') {
            image.style.display = 'none';
        }
        else {
            image.style.display = 'block';
        }
    })
}


function filter_price() {
    let value = document.querySelector(".filter-price input[type=range]").value;
    document.querySelector(".filter-price .final-price-value").innerText = value;
}