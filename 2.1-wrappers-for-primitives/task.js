//Assignment 1
'use strict'
function calculateMortgage() {
    let percent = window.percent.value;
    let contribution = window.contribution.value;
    let amount = window.amount.value;
    let date = window.date.value;

    let result = calculateTotalMortgage(percent, contribution, amount, date);
    let span = window.mortageResult;
    span.textContent = result;
}

function calculateTotalMortgage(percent, contribution, amount, date) {

    let dateStart = new Date(),
        dateEnd = new Date(date);
    let months = (dateEnd.getFullYear() - dateStart.getFullYear()) * 12;
    months -= dateStart.getMonth() + 1;
    months += dateEnd.getMonth();

    let n = months <= 0 ? 0 : months;

    let S = parseInt(amount) - parseInt(contribution),
        P = parseInt(percent) / 100 / 12;

    let payment = S * (P + P / (((1 + P) ^ n) - 1));

    let totalAmont = payment * n;

    console.log(totalAmont.toFixed(2));
    return totalAmont.toFixed(2);
}


//Assignment 2
function sayHello() {
    let name = window.personName.value;
    let greeting = getGreeting(name);
    let span = window.helloResult;
    span.textContent = greeting;
}

function getGreeting(name) {
    let greeting;

    if (typeof(name) === 'string' && name !== "undefined" && name !== "null" && name !== "" ){
        greeting = `Привет, мир! Меня зовут ${name}`;
    } else {
        greeting = 'Привет, мир! Меня зовут Аноним';
    }
    return greeting;
}
