let box = document.querySelector('.btn');
let headerInput = document.querySelector('.input input');
let headerBtn = document.querySelector('.input button');
let headernenu = document.querySelector('.header__menu');
let isActive = true;

document.addEventListener('click', (event) => {
    if (event.target == headerInput) {
        if (isActive) {
            headerInput.style.border = '2px solid rgb(255, 199, 77)'
            box.style.display = 'block';
            headerBtn.classList.add('header__active');
            isActive = false;
        } else {
            headerInput.style.border = '2px solid rgba(218, 224, 229, 1)';
            box.style.display = 'none';
            headerBtn.classList.remove('header__active');
            isActive = true;
        }
    } else {
        box.style.display = 'none';
        headerBtn.classList.remove('header__active');
        headerInput.style.border = '2px solid rgba(218, 224, 229, 1)';

    }
})