
const app = document.querySelector('.app');
const dateInput = document.getElementById('date-input');
const calcBtn = document.getElementById('calc-btn');
const messageBox = document.querySelector('.message');
const ageMessageBox = document.querySelector('.age');

let date; // date of birth
let dayName; // day name of birth
let month; // month index of birth
let dayOfMonth; // day number of birth
let year; // year of birth
let diff;  // diff in days
let message; // message for birth date

dateInput.addEventListener('input', () => {
    date = new Date(dateInput.value);
    diff = Math.round((((new Date() - date) / 1000) / 3600) / 24);
    dayName = date.getDay(); // number ==> mon -> 1
    switch(dayName) {
        case 0: dayName = 'Sunday'; break;
        case 1: dayName = 'Monday'; break;
        case 2: dayName = 'Tuesday'; break;
        case 3: dayName = 'Wednesday'; break;
        case 4: dayName = 'Thursday'; break;
        case 5: dayName = 'Friday'; break;
        case 6: dayName = 'Saturday'; break;
    }    
    month = date.getMonth();
    switch(month) {
        case 0: month = 'January'; break;
        case 1: month = 'February'; break;
        case 2: month = 'March'; break;
        case 3: month = 'April'; break;
        case 4: month = 'May'; break;
        case 5: month = 'June'; break;
        case 6: month = 'July'; break;
        case 7: month = 'August'; break;
        case 8: month = 'September'; break;
        case 9: month = 'October'; break;
        case 10: month = 'November'; break;
        case 11: month = 'December'; break;
    }    
    dayOfMonth = date.getDate();
    year = date.getFullYear();
    message = `Birthdate: <span>${dayName}</span>, <span>${month}</span> <span>${dayOfMonth}</span>, <span>${year}.</span>`;
    calcAge();
});

let noOfYears;
let noOfMonths;
let noOfDays;
let ageMessage;

function calcAge() {
    noOfYears = Math.floor(diff / 365);
    diff -= (Math.floor(diff / 365) * 365);
    noOfMonths = Math.floor(diff / 30);
    diff -= (Math.floor(diff / 30) * 30);
    noOfDays = diff;
    ageMessage = `You have <span>${noOfYears}</span> years, <span>${noOfMonths}</span> months, and <span>${noOfDays}</span> days.`
}

calcBtn.addEventListener('click', () => {
    if (message) {
        if (new Date(dateInput.value) > new Date) {
            messageBox.innerHTML = 'Invalid Birthdate';
            messageBox.classList.remove('hide');
            setTimeout(() => {
                messageBox.classList.add('hide');
            }, 2500);
            ageMessageBox.classList.add('hide');
        }
        else {
            messageBox.innerHTML = message;
            messageBox.classList.remove('hide');
            ageMessageBox.innerHTML = ageMessage;
            ageMessageBox.classList.remove('hide');
        }
    }
    else {
        messageBox.innerHTML = 'Please enter your birthdate';
        messageBox.classList.remove('hide');
        setTimeout(() => {
            messageBox.classList.add('hide');
        }, 2500);
        ageMessageBox.classList.add('hide');
    }
});

