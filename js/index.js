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

// Clean button

const cleanUp = document.querySelector('.clen');
clenUp.addEventListener('click', cleanUpPressed);

function cleanUpPressed(e){
   e.preventDefault();
   e.innerText = '';
}
// стерти останій символ

let OurNumber = [i];
const backSpace = document.querySelector('.back');
backSpace.addEventListener('click', backSpacePressed);
function backSpacePressed(e) {
    e.preventDefault();
    OurNumber.splice(OurNumber.length-1, 1);
    display.value = OurNumber.join("");
console.log(OurNumber);
}




