const amount = document.getElementById('amount')
const amountSlider = document.getElementById('amount-slider')
const term = document.getElementById('term')
const termSlider = document.getElementById('term-slider')
const dailyRepayment = document.getElementById('daily-repayment')
const totalRepayment = document.getElementById('total-repayment')
const amountError = document.getElementById('amountError');
const termError = document.getElementById('termError');
const submitBtn = document.getElementById('submitBtn');
const interestRate = 2.2

function syncInputs(el1, el2) {
    el1.addEventListener("input", function () {
        el2.value = el1.value
    });
    
    el2.addEventListener("input", function () {
        el1.value = el2.value
    });
}

function updateValues() {
    const daily = calculateDailyRepayment(amount.value, term.value)
    const total = calculateTotalRepayment(daily, term.value)
    dailyRepayment.innerHTML = `${daily.toFixed(2)*1}`
    totalRepayment.innerHTML = `${total.toFixed(2)*1}`
}

function validateInput(input, errorElement, min, max) {
    if (!input.value) {
        errorElement.textContent = `Це поле обов'язкове для заповнення.`;
        return false;
    }

    const value = parseInt(input.value);
    if (value < min || value > max) {
        errorElement.textContent = `Значення має бути від ${min} до ${max}.`;
        return false;
    }

    errorElement.textContent = '';
    return true;
}

function checkFormValidity() {
    let allValid = true;

    for (let el of relatedInputs) {
        const isValid = validateInput(el.input, el.error, el.min, el.max);
        allValid = allValid && isValid;
    }

    submitBtn.disabled = !allValid;

    if (allValid) {
        updateValues();
    } else {
        dailyRepayment.innerHTML = '';
        totalRepayment.innerHTML = '';
    }
}


syncInputs(amount, amountSlider)
syncInputs(term, termSlider)
updateValues()


function calculateDailyRepayment(loanAmount, days) {
    const amountNum = parseFloat(loanAmount)
    const daysNum = parseInt(days)
    return (amountNum + (amountNum * (interestRate / 100) * daysNum)) / daysNum
}

function calculateTotalRepayment(daily, days) {
    const dailyNum = parseFloat(daily)
    const daysNum = parseInt(days)
    return dailyNum * daysNum
}

const relatedInputs = [{
    input: amount,
    slider: amountSlider,
    error: amountError,
    min: 1000,
    max: 50000
}, {
    input: term,
    slider: termSlider,
    error: termError,
    min: 7,
    max: 60
}]

for (let el of relatedInputs) {
    el.input.addEventListener("input", function () {
        el.slider.value = el.input.value;
        checkFormValidity();
    });

    el.slider.addEventListener("input", function () {
        el.input.value = el.slider.value;
        checkFormValidity();
    });
}

function clickBtn() {
    const loanAmount = parseFloat(amount.value);
    const loanTerm = parseInt(term.value);
    const daily = calculateDailyRepayment(loanAmount, loanTerm);
    const total = calculateTotalRepayment(daily, loanTerm);

    const creditData = {
        loanAmount: loanAmount,
        loanTerm: loanTerm,
        dailyRepayment: parseFloat(daily.toFixed(2)),
        totalRepayment: parseFloat(total.toFixed(2)),
        createdAt: new Date().toISOString()
    };

    console.log("Об'єкт для відправки на сервер:", creditData);

    submitBtn.disabled = true;
}

checkFormValidity();