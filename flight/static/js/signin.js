document.addEventListener("DOMContentLoaded", () => {

    document.querySelectorAll(".inp").forEach(input => {
        input.addEventListener('input', () => {
            if ((document.querySelector('.usrnm').value.length === 0) || (document.querySelector('.pswd').value.length === 0)) {
                document.querySelector('input[type="submit"]').disabled = true;
            }
            else {
                document.querySelector('input[type="submit"]').disabled = false;
            }
        });
    });
})