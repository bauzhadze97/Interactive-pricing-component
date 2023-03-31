const togglebutton = document.querySelector('.togglebg');


togglebutton.addEventListener('click', () => {
    if (togglebutton.classList.contains('active')) {
        togglebutton.classList.remove('active');
    } else {
        togglebutton.classList.add('active');
    }
});