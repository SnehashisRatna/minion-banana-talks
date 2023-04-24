let btnTranslate = document.querySelector("#btn-translate") ;
let txtInput = document.querySelector("#txt-input");
let outputDiv = document.querySelector("#output");



function clickEventHandler(){
   outputDiv.innerText = "asdasfsfa" + txtInput.value ; 
};

btnTranslate.addEventListener("click" ,  clickEventHandler) ;