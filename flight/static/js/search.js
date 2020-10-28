document.addEventListener("DOMContentLoaded", () => {
    //
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

function filter_result() {
    return false;
}