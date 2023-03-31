const togglebutton = document.querySelector('.togglebg');
const getPrice = document.getElementById('price');
const pageView = document.getElementById('pageview');
const slider = document.querySelector('.slider');
let originalPrice = "";

slider.addEventListener('input', function() {
  const sliderValue = parseInt(slider.value);
  if (sliderValue === 1) {
    getPrice.textContent = '$18.00';
    pageView.textContent = '20K PAGEVIEWS';
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
  originalPrice = getPrice.textContent;
});

togglebutton.addEventListener('click', function() {
   togglebutton.classList.toggle('active');
 
   let price = 0;
   const sliderValue = parseInt(slider.value);
   switch (sliderValue) {
     case 1:
       price = 18;
       break;
     case 2:
       price = 36;
       break;
     case 3:
       price = 54;
       break;
     case 4:
       price = 72;
       break;
     case 5:
       price = 90;
       break;
   }
 
   if (togglebutton.classList.contains('active')) {
     getPrice.textContent = '$' + (price * 12 * 0.75).toFixed(2);
   } else {
     getPrice.textContent = '$' + price.toFixed(2);
   }
 });