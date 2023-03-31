const togglebutton = document.querySelector('.togglebg');
const getPrice = document.getElementById('price');
const pageView = document.getElementById('pageview');
const slider = document.querySelector('.slider');
slider.addEventListener('input', function() {
  const sliderValue = parseInt(slider.value);
  if (sliderValue === 1) {
    getPrice.textContent = '$18.00';
    pageView.textContent = '20K PAGEVIEWS';
    console.log(pageView.textContent);
  } else if (sliderValue === 2) {
   getPrice.textContent = '$36.00';
   pageView.textContent = '40K PAGEVIEWS';
  } else if (sliderValue === 3) {
   getPrice.textContent = '$54.00';
   pageView.textContent = '60K PAGEVIEWS';
  } else if (sliderValue === 4) {
   getPrice.textContent = '$72.00';
   pageView.textContent = '80K PAGEVIEWS';
  } else if (sliderValue === 5) {
   getPrice.textContent = '$90.00';
   pageView.textContent = '100K PAGEVIEWS';
  }
});

togglebutton.addEventListener('click', function() {
  togglebutton.classList.toggle('active');
  if (togglebutton.classList.contains('active')) {
    getPrice.textContent = '39'
  } else {
    slider.classList.remove('active');
    getPrice.textContent = "";
  }
});