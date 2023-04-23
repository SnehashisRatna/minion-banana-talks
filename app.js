let btnTranslate = document.querySelector("#btn-translate") ;
let txtInput = document.querySelector("#txt-input");




function clickEventHandler(){
    console.log("Clicked!");
    console.log("input" , txtInput.value);

};

btnTranslate.addEventListener("click" ,  clickEventHandler) ;