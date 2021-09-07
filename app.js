// JAVASCRIPT
// time
let hours = document.querySelector('.hours');
let minutes = document.querySelector('.minutes');
let seconds = document.querySelector('.seconds');

function time(){
    hours.innerHTML = new Date().getHours();
    minutes.innerHTML = new Date().getMinutes();
    seconds.innerHTML = new Date().getSeconds();
}

setInterval(time, 1000) // for 1 second

// date
let date = document.querySelector('.date');
let month = document.querySelector('.month');
let year = document.querySelector('.year');

date.innerHTML = new Date().getDate();
// month.innerHTML = new Date().getMonth() + 1;
year.innerHTML = new Date().getFullYear();

// month in words
let monthNumber = new Date().getMonth();

let monthName = '';

switch(monthNumber){
    case 0 : monthName = 'January';
    break;
    case 1 : monthName = 'February';
    break;
    case 2 : monthName = 'March';
    break;
    case 3 : monthName = 'April';
    break;
    case 4 : monthName = 'May';
    break;
    case 5 : monthName = 'June';
    break;
    case 6 : monthName = 'July';
    break;
    case 7 : monthName = 'August';
    break;
    case 8 : monthName = 'September';
    break;
    case 9 : monthName = 'October';
    break;
    case 10 : monthName = 'November';
    break;
    case 11 : monthName = 'December';
    break;

}

month.innerHTML = monthName;

// Day
let day = document.querySelector('.day');

// day.innerHTML = new Date().getDay();

// day name
let dayNumber =   new Date().getDay();
let dayName = '';

switch(dayNumber){
    case 0 : dayName = 'Sunday';
    break;
    case 1 : dayName = 'Monday';
    break;
    case 2 : dayName = 'Tuesday';
    break;
    case 3 : dayName = 'Wednesday';
    break;
    case 4 : dayName = 'Thursday';
    break;
    case 5 : dayName = 'Friday';
    break;
    case 6 : dayName = 'Saturday';
    break;
}

day.innerHTML = dayName;