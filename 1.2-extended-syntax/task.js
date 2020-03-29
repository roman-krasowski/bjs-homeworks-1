"use strict";

function calculateQuadraticEquation(){
    let a = +window.a.value;
    let b = +window.b.value;
    let c = +window.c.value;
    let result = getResult(a,b,c);
    window.equation.textContent = `${a}*x^2 + (${b})*x + (${c}) = 0`;
    let span = window.result;
    span.textContent = "х = "+result;
}

function getResult(a,b,c){
        let x = [];
        let discriminant = Math.pow(b, 2) - 4 * a * c;

    if (discriminant < 0) {
        x = [];
    } else if (discriminant > 0) {
        x[0] = (-b + Math.sqrt(discriminant)) / (2 * a);
        x[1] = (-b - Math.sqrt(discriminant)) / (2 * a);
    } else {
        x[0] = -b  / (2 * a);
    }
    return x;
}



function calculateAverageRating(){
    let marks = window.marks.value.split("").map(Number).filter((n)=> !isNaN(n) && n > 0);
    let averageMark = getAverageMark(marks);
    window.averageMark.textContent = averageMark;
}

function getAverageMark(marks) {
    let sum = 0;

    if (marks.length == 0) {
        return 0;
    }

    if (marks.length > 5) {
        marks = marks.splice(0, 5);
        console.log('There are over 5 marks.');
    }

    for (let i = 0; i < marks.length; i++) {
        sum += marks[i];
    }

    let averageMark = sum / marks.length;
    return averageMark;
}


function calculateDrinkTask(){
    let name = window.personName.value;
    let dateOfBirthday = new Date(window.dateOfBirthday.value);
    let drink = askDrink(name, dateOfBirthday);
    window.drink.textContent = drink;
}

function askDrink(name,dateOfBirthday){
    let result;
    if (new Date().getFullYear() - dateOfBirthday.getFullYear() >= 18) {
        return `Не желаете ли олд-фэшн, ${name}?`;
    } else {
        return `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`
    }
}
