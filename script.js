 document.addEventListener('DOMContentLoaded', function() {
 const display = document.querySelector('.display');
 const buttons = document.querySelectorAll('button');
 const calculate = document.querySelector('.calculate');
 const clear = document.querySelector('.clear');
 let newNumber = true;
 let operator;
 let inputValue;

 buttons.forEach(function(button) {
   button.addEventListener('click', function(e) {
     const buttonValue = e.target.value;
     if (buttonValue === '+' || buttonValue === '-' || buttonValue === '*' || buttonValue === '/') {
       operator = buttonValue;
       inputValue = display.value;
       newNumber = true;
     } else if (buttonValue === '.') {
       if (newNumber) {
         display.value = '0';
       }
       if (!display.value.includes('.')) {
         display.value += buttonValue;
       }
       newNumber = false;
     } else if (buttonValue === 'C') {
       display.value = '';
       newNumber = true;
       operator = null;
     } else if (buttonValue === '=') {
       if (operator && !newNumber) {
         calculateExpression();
         newNumber = true;
         operator = null;
       }
     } else {
       if (newNumber) {
         display.value = buttonValue;
       } else {
         display.value += buttonValue;
       }
       newNumber = false;
     }
   });
 });

 function calculateExpression() {
   const secondNumber = parseFloat(display.value);
   if (operator === '+') {
     display.value = parseFloat(inputValue) + secondNumber;
   } else if (operator === '-') {
     display.value = parseFloat(inputValue) - secondNumber;
   } else if (operator === '*') {
     display.value = parseFloat(inputValue) * secondNumber;
   } else if (operator === '/') {
     display.value = parseFloat(inputValue) / secondNumber;
   }
 }
});

