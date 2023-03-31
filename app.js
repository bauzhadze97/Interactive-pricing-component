const toggleSwitch = document.getElementById('toggleSwitch');

toggleSwitch.addEventListener('click', function() {
  if (toggleSwitch.checked) {
     console.log('Switch is on');
  } else {
    console.log('Switch is off');
  }
});