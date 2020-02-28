//Assignment 1
function initPrintAnimalSound() {
    const animal = {
        sound: 'grrrr',
    };
    const result = getAnimalSound(animal);
    document.getElementById('sound').innerHTML = result;
}

function getAnimalSound(animal) {
    if (animal === undefined) {
        return null;
    } else {
        let sound = animal.sound;
        return sound;
    }
}


//Assignment 2
function initCalculateStatement() {
    for (let idx = 0; idx < 3; idx++) {
        const marks = document.getElementById('learner-' + idx).value.split(',');
        const average = getAverageMark(marks);
        document.getElementById('learner-' + idx + '-average').innerHTML = average;
    }
}

function getAverageMark(marks) {
    Array.from(marks);
    let sum = 0;
    for (let i = 0; i < marks.length; i++) {
        sum += parseInt(marks[i]);

    }
    console.log(marks);
    let roundedAverage = Math.round(sum / marks.length);
    return roundedAverage;
}


//Assignment 3
function initCheckBirthday() {
    const birthday = document.getElementById('birthday').value;
    const result = checkBirthday(birthday) ? "Да" : "Нет";
    document.getElementById('disclaimer').innerHTML = result;
}

function checkBirthday(birthday) {
    let now = Date.now();
    birthday = Number(new Date(birthday));
    let diff = now - birthday;
    let age = diff / 1000 / 60 / 60 / 24 / 365;

    if (age < 18) {
        return false;
    } else {
        return true;
    }
}
