var btnTranslate = document.querySelector("#btn-translate-one") ;
var txtInput = document.querySelector("#txt-input-one");
var outputDiv = document.querySelector("#output-one");




var serverURL = "https://api.funtranslations.com/translate/minion.json" ;


function getTranslationURL(text) {
   return `${serverURL}?text=${text}` 
}



function errorHandler(error) {
   console.log("error occured", error);
   alert("something wrong with server! try again after some time");
   
}



function clickEventHandler(){
   var inputText = txtInput.value ; //talking input

   //calling server for processing
   fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then(json => {
          var translatedText = json.contents.translated;
          outputDiv.innerText = translatedText ;
         })
    .catch(errorHandler)

};




btnTranslate.addEventListener("click" ,  clickEventHandler) ;
