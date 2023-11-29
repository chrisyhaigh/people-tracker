let countElement = document.getElementById('counter');
let peopleElement = document.getElementById('people-element')

let count = 0;

function increment() {
    count += 1;

    countElement.textContent = count;
}

function decrease() {

    if (count > 0) {
    count -= 1 
    countElement.textContent = count;
    }
    
}

function save() {
    let countDash = count + ' - ';

    peopleElement.textContent += countDash;

    count = 0;
    countElement.textContent = count;
}

function refresh() {
    const people = 'People in the club: '

    peopleElement.textContent = people;
}