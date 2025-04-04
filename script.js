const amount = document.getElementById('amount')
const amountSlider = document.getElementById('amount-slider')
const term = document.getElementById('term')
const termSlider = document.getElementById('term-slider')
const dailyRepayment = document.getElementById('daily-repayment')
const totalRepayment = document.getElementById('total-repayment')

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

syncInputs(amount, amountSlider)
syncInputs(term, termSlider)
updateValues()

function calculateDailyRepayment(loanAmount, days) {
    const amountNum = parseFloat(loanAmount)
    const daysNum = parseInt(days)
    return (amountNum + (amountNum * (2.2 / 100) * daysNum)) / daysNum
}

function calculateTotalRepayment(daily, days) {
    const dailyNum = parseFloat(daily)
    const daysNum = parseInt(days)
    return dailyNum * daysNum
}

const relatedInputs = [amount, amountSlider, term, termSlider]

for (let el of relatedInputs) {
    el.addEventListener("change", function () {
        updateValues()
    });
}

function clickBtn() {
    console.log('test')
}