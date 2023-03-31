const togglebutton = document.querySelector('.togglebg');

//add click on togglebutton 
togglebutton.addEventListener('click', () => {
    //toggle button is clicked
    if (togglebutton.classList.contains('active')) {
        togglebutton.classList.remove('active');
    } else {
        togglebutton.classList.add('active');
    }
});