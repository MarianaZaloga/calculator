const display = document.querySelector('.display');
const digitsOpers = document.querySelectorAll('.digits button, .operations button' );
digitsOpers.forEach(digit => digit.addEventListener('click' , digitOperPressed) );

function digitOperPressed(e) {
    e.preventDefault();
    display.value += e.target.innerText;
}

const equal = document.querySelector('.eq');
equal.addEventListener('click' , equalPressed);

function equalPressed(e) {
   e.preventDefault();
   display.value = eval(display.value);
}

// заміна
const change = document.querySelector('.operations');
change.addEventListener('click', changePressed);
const operations = ['+', '-', '*', '/'];
function changePressed(e) {
    if(operators.indexOf(lastChar) > -1)
				 operations.replace(e , '');
    operations.preventDefault();
}

// Clean button

const cleanUp = document.querySelector('.clen');
clenUp.addEventListener('click', cleanUpPressed);

function cleanUpPressed(e){
   e.preventDefault();
   e.innerText = '';
}

// функція обмеження вводу букв
function isNum(e) {
     return Number(e) === e;
     alert = 'Ви введи букву!Введіть цифри!'}