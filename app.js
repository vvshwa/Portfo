// My first js code
// Typing into console (you can see it in inspect element)
// console.log('Hello brev');

// You have to seperate HTML code and Javascript code
// HTML is about content while Javascript is about behaviour
// Javascript refers to how your webpage should behave, what should happen when I hover my mouse over this part of the webpage, etc

//let name = 'Kenga';
// console.log(name);

// use 'let' to initialize a variable
// Cannot be a reserved keyword (like let, if, for, etc)
// Should be meaningful 
// Cannot start with a number (like 1name)
// cannot contain a space or hyphen (-)
// Are case-sensitive

// let firstName = 'Vishwa', lastName = 'Rajasegar'
// OR
// let firstName = 'Vishwa'
// let lastName = 'Rajasegar'

// const interestRate = 0.3;
// const means constant, and it cannot be changed later on or else error will occur

const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function() {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
});