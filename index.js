"use strict";


const inputBill = document.querySelector(`.bill`);
const inputTip = document.querySelector(`.tip`);
const inputTotal = document.querySelector(`.total`);
const buttonCalculate = document.querySelector(`.calculate`);


buttonCalculate.addEventListener(`click`, () =>{

    calculateFunction();

});

inputBill.addEventListener(`keyup`, (e) =>{

    if(e.keyCode === 13){

        calculateFunction();

    }

});


const calculateFunction = () =>{

    if(inputBill.value > 0){

        inputTip.value = inputBill.value * 0.15;
        
        inputTotal.value = Number(inputTip.value) + Number(inputBill.value);

    }

};