// Variables

let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [{
    quote: '"First qoute."',
    person: ' Unanimous'
}, {
    quote: '"Second qoute."',
    person: ' Unanimous'
}, {
    quote: '"Third qoute."',
    person: ' Unanimous'
}, {
    quote: '"Fourth qoute."',
    person: ' Unanimous'
}, {
    quote: '"Fifth qoute."',
    person: ' Unanimous'
}, {
    quote: '"Sixth qoute."',
    person: ' Unanimous'
}, {
    quote: '"Seventh qoute."',
    person: ' Unanimous'
}, {
    quote: '"Eighth qoute."',
    person: ' Unanimous'
}, {
    quote: '"Nine qoute."',
    person: ' Unanimous'
}, {
    quote: '"Tenth qoute."',
    person: ' Unanimous'
}, ];

btn.addEventListener('click', function(){

    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
    
})
