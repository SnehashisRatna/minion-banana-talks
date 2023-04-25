let btnTranslate = document.querySelector("#btn-translate") ;
let txtInput = document.querySelector("#txt-input");
let outputDiv = document.querySelector("#output");

var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

function errorHandler(error) {
   console.log("error occured", error);
   alert("something wrong with server! try again after some time");
   
}

function getTranslationURL(text) {
   return serverURL + "text=" + text 
}

function clickEventHandler(){
   // outputDiv.innerText = "asdasfsfa" + txtInput.value ; 
   var inputText = txtInput.value ; //talking input

   //calling server for processing
   fetch(getTranslationURL(inputText))
    .then(Response => Response.json())
    .then(json => console.log(json.console.transalted))
    .catch(errorHandler)

};

btnTranslate.addEventListener("click" ,  clickEventHandler) ;