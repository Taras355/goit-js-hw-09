import { Notify } from "notiflix/build/notiflix-notify-aio";

const formEl = document.querySelector(".form");
formEl.addEventListener("submit", onSubmit);

function onSubmit(event) {
    event.preventDefault();
    event.target.lastElementChild.setAttribute("disabled", "");
    for (let i = 0; i < Number(event.target.elements.amount.value); i += 1) {
        const realDelay =
            Number(event.target.elements.step.value) * i +
            Number(event.target.elements.delay.value);
        createPromise(i + 1, realDelay)
            .then((value) => {
                Notify.success(value);
                console.log(value);
            })
            .catch((err) => {
                Notify.failure(err);
                console.log(err);
            })
            .finally(() => {
                if (Number(event.target.elements.amount.value) - i === 1) {
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
