import { Notify } from "notiflix/build/notiflix-notify-aio";

const formEl = document.querySelector(".form");
formEl.addEventListener("submit", onSubmit);

function onSubmit(event) {
    event.preventDefault();
    let { amount, step, delay } = event.target.elements;
    if (Number(amount.value) <= 0) {
        Notify.failure("Amount must be a positive number");
        return;
    }
    event.target.lastElementChild.setAttribute("disabled", "");
    if (Number(step.value) < 0) {
        step.value = (Number(step.value) * -1).toString();
    }
    if (Number(delay.value) < 0) {
        delay.value = (Number(delay.value) * -1).toString();
    }
    for (let i = 0; i < Number(amount.value); i += 1) {
        const realDelay = Number(step.value) * i + Number(delay.value);
        createPromise(i + 1, realDelay)
            .then((res) => {
                Notify.success(res);
                console.log(res);
            })
            .catch((err) => {
                Notify.failure(err);
                console.log(err);
            })
            .finally(() => {
                if (Number(amount.value) - i === 1) {
                    event.target.lastElementChild.removeAttribute("disabled");
                }
            });
    }
}

function createPromise(position, delay) {
    const shouldResolve = Math.random() > 0.3;
    return new Promise((res, rej) => {
        setTimeout(() => {
            if (shouldResolve) {
                res(`✅ Fulfilled promise ${position} in ${delay}ms`);
            } else {
                rej(`❌ Rejected promise ${position} in ${delay}ms`);
            }
        }, delay);
    });
}
