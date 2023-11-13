
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.5;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        if (shouldResolve) {
          resolve({position, delay})
        } else {
          reject({position, delay})
        };
    }, delay);
})
};

const formData = document.querySelector('.form');

const elements = {
  delay: formData.elements.delay,
  step: formData.elements.step,
  amount: formData.elements.amount,
  bottonSubmit: formData.elements['js-submit'],
}

formData.addEventListener('submit', submitHandler);

function submitHandler(event) {
  elements.bottonSubmit.disabled = true
  event.preventDefault();

  const request = {
    delay: elements.delay.value,
    step: elements.step.value,
    amount: elements.amount.value,
  };

  for (let i = Number(request.amount); i > 0; i -= 1) {
    createPromise(i, Number(request.delay) + (i - 1) * Number(request.step))
      .then(({ position, delay }) => {
        iziToast.success({
          title: `Succes`,
          message: `✅ Fulfilled promise ${position} in ${delay}ms`,
        })
      })
      .catch(({ position, delay }) => {
        iziToast.error({
          error: 'Error',
          title: `Error`,
          message: `❌ Rejected promise ${position} in ${delay}ms`,
        })
      })
  };

  setTimeout(() => {
    elements.bottonSubmit.disabled = false
  }, Number(request.delay) + Number(request.step) * Number(request.amount));
};
