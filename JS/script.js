let firstValue = document.querySelector('.firstValue');
let zero = document.querySelector('.zero');
const displayOperation = document.querySelector('.displayOperation');
const historic = document.querySelector('.historic');
const dataHis = document.querySelector('.dataHis');
const closeHistoric = document.querySelector('.close');
const uil = document.querySelector('.uil');

const division = document.querySelector('#division');
const multiplication = document.querySelector('#multiplication');
const subtraction = document.querySelector('#subtraction');
const sum = document.querySelector('#sum');
const decimal = document.querySelector('.decimal');
let decimalConfirm;

let numbers = document.querySelector('.numbers');
const clear = document.querySelector('.clear');
const result = document.querySelector('.result');

const inputNumber = document.querySelectorAll('.inputNumber');
const operations = document.querySelectorAll('.operations');

uil.classList.add('null');

historic.addEventListener('click', () => {
    dataHis.classList.remove('hide');
    closeHistoric.classList.remove('hide');
});

closeHistoric.addEventListener('click', () => {
    closeHistoric.classList.add('hide');
    dataHis.classList.add('hide');
});

inputNumber.forEach(item => {
    item.addEventListener('click', (e) => {
        uil.classList.remove('null');
        zero.innerHTML = "";
        numbers.innerHTML += e.target.textContent;
    });
});

clear.addEventListener('click', () => {
    zero.innerHTML = 0;
    numbers.innerHTML = "";
    displayOperation.innerHTML = "";
    firstValue.innerHTML = "";
});

uil.addEventListener('click', () => {
    const numbersValue = numbers.textContent;
    numbers.innerHTML = numbersValue.substring(0, numbersValue.length - 1);

    if(numbersValue.length === 1){
        zero.innerHTML = 0;
        uil.classList.add('null');
    }
    if(numbersValue.value === undefined && numbersValue === "" ){
        zero.innerHTML = 0;
    }

});

operations.forEach( item => {
    item.addEventListener('click', (e) => {

        if(firstValue.textContent.length === 0 ){
            displayOperation.innerHTML = '';
        } else {
            displayOperation.innerHTML = e.target.textContent
        }

        if(numbers.textContent.length > 0 ){
            firstValue.innerHTML = numbers.textContent;
            numbers.innerHTML = "";
            displayOperation.innerHTML  = e.target.textContent;
        } 
    });
});

let resultOperation = '';

decimal.addEventListener('click', () => {
    
    const numbValue = numbers.textContent;
    const arrayNumbers = numbValue.split('');
    console.log(arrayNumbers);
    const resultArray = arrayNumbers.map( e => {
        if(e == '.'){
            decimalConfirm = 1;
        } else {
            decimalConfirm = 0;
        }
    })
    if(numbers.textContent.length > 0 && decimalConfirm == 0){
        numbers.innerHTML += '.';
    }
});

result.addEventListener('click', () => {

    if(displayOperation.textContent == "/"){
        resultOperation = (Number(firstValue.textContent)  / Number(numbers.textContent ));
    } else if(displayOperation.textContent == "*"){
        resultOperation = (Number(firstValue.textContent)  * Number(numbers.textContent ));
    } else if(displayOperation.textContent == "-"){
        resultOperation = (Number(firstValue.textContent)  - Number(numbers.textContent ));
    } else {
        resultOperation = (Number(firstValue.textContent)  + Number(numbers.textContent ));
    }

    if(numbers.textContent.length > 0 ){
        
        const contentResult = document.createElement('div');
        contentResult.classList.add('contentResult');
    
        let spanHis = document.createElement('span');
    
        spanHis.innerHTML = firstValue.textContent + ' ';
        spanHis.innerHTML += displayOperation.textContent + ' ';
        spanHis.innerHTML += numbers.textContent;
        
        numbers.innerHTML = resultOperation;
        displayOperation.innerHTML = "";
        firstValue.innerHTML = "";
        
        spanHis.innerHTML += ' = ' + numbers.textContent;
        console.log(spanHis);


        contentResult.appendChild(spanHis);
        dataHis.appendChild(contentResult);


    } else {
        numbers.innerHTML = '';

    }



});
