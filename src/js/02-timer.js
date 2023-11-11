
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const elements = {
    buttonStart: document.querySelector('[data-start]'),
    inputDate: document.querySelector('#datetime-picker'),
    timerDay: document.querySelector('[data-days]'),
    timerHours: document.querySelector('[data-hours]'),
    timerMinutes: document.querySelector('[data-minutes]'),
    timerSecond: document.querySelector('[data-seconds]'),
}

elements.buttonStart.disabled = true

function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
    return value.toString().padStart(2, '0')
}

let selectedDate

const options = {
enableTime: true,
time_24hr: true,
defaultDate: new Date(),
minuteIncrement: 1,
onClose(selectedDates) {
    if (selectedDates[0] > new Date()) {
        elements.buttonStart.disabled = false
        selectedDate = selectedDates[0];
    } else {
        iziToast.error({
            error: 'Error',
            message: 'Please choose a date in the future',
        })
        elements.buttonStart.disabled = true
    }
},
};

flatpickr(elements.inputDate, options)

elements.buttonStart.addEventListener('click', startTimerHandler)

function startTimerHandler() {

    let timeDifferent = selectedDate.getTime() - new Date().getTime();
    
    function updateTimer() {
        const currentTime = convertMs(timeDifferent);

        elements.timerDay.textContent = addLeadingZero(currentTime.days);
        elements.timerHours.textContent = addLeadingZero(currentTime.hours);
        elements.timerMinutes.textContent = addLeadingZero(currentTime.minutes);
        elements.timerSecond.textContent = addLeadingZero(currentTime.seconds);

        if (timeDifferent < 0) {
            elements.timerDay.textContent = '00';
            elements.timerHours.textContent = '00';
            elements.timerMinutes.textContent = '00';
            elements.timerSecond.textContent = '00';
            
            clearInterval(timerInterval);
            iziToast.success({
                title: 'Success',
                message: 'Countdown finished!',
            });
        };

        timeDifferent -= 1000;
    };

    const timerInterval = setInterval(updateTimer, 1000);
}
