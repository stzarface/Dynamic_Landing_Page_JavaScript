
// DOM Elements
const time = document.getElementById('time');
const greeting = document.getElementById('greeting')
const name = document.getElementById('name');
const focus = document.getElementById('focus');

// Show Time

function showTime () {
  
  let today = new Date();
  let hours = today.getHours();
  let minutes = today.getMinutes();
  let seconds = today.getSeconds();

  // Set AM or PM
  const amPm = hours >= 12 ? 'PM' : 'AM';

  // 12hr Format
  hours = hours % 12 || 12;

  // Output Time
  time.innerHTML = `${hours}<span>:</span>${minutes}<span>:</span>${addZero(seconds)} ${amPm}`;




  setInterval(showTime, 1000);
}

// Add Zero Function
function addZero (number) {
  return number < 10 ? '0' + number : number;
}

// Set Background and Greetings

function setBgGreet () {

  let today = new Date();
  let hours = today.getHours();
  document.body.style.backgroundSize = 'cover';
  document.body.style.backgroundPosition = 'center center';


  if (hours < 10) {
    document.body.style.backgroundImage = "url('../img/morning.jpg')";
    time.style.webkitTextStroke = '2px #fff'
    greeting.textContent = 'Dobro jutro';
  } else if (hours <= 19) {
    document.body.style.backgroundImage = "url('../img/afternoon.jpg')";
    time.style.textShadow = '3px 3px #fff'
    greeting.textContent = 'Dobar dan';
  } else {
    document.body.style.backgroundImage = "url('../img/evening.jpg')";
    time.style.textShadow = '3px 3px #fff'
    greeting.textContent = 'Dobro veče';
  }

}

// Get Name
function getName () {
  if (localStorage.getItem('name') === null) {
    name.textContent = '[ ]';
  } else {
    name.textContent = localStorage.getItem('name');
  }
}

// Set Name
function setName(e) {
  if (e.type === 'keypress') {
  // Make sure enter is presed
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem('name', e.target.innerText);
      name.blur();
  }
  } else {
    // Blur
    localStorage.setItem('name', e.target.innerText);
  }
}


// Get Focus
function getFocus() {
  if (localStorage.getItem('focus') === null) {
    focus.textContent = '[Upiši današnji fokus]';
  } else {
    focus.textContent = localStorage.getItem('focus');
  }
}

// Set Focus
function setFocus(e) {
  if (e.type === 'keypress') {
  // Make sure enter is presed
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem('focus', e.target.innerText);
      focus.blur();
  }
  } else {
    // Blur
    localStorage.setItem('focus', e.target.innerText);
  }
}


name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);

// Run Show Time Function
showTime();
setBgGreet();
getName();
getFocus();