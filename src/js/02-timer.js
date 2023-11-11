
// Описаний в документації
import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";

const currentDate = new Date

const elements = {
    buttonStart: document.querySelector('[data-start]'),
    inputDate: document.querySelector('#datetime-picker'),
}
elements.inputDate.value = currentDate
elements.inputDate.min = currentDate

elements.buttonStart.disabled = true

console.log(elements);