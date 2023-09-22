 var btnTranslate=document.querySelector("#btn-translate");
 var txtInput=document.querySelector("#txt-input");
 var OutputDiv=document.querySelector("#output");
 console.log(txtInput);
  
 var serverURL=	"https://api.funtranslations.com/translate/minion.json"


 function getTranslationURL(text){
  return serverURL+ "?" +"text=" + text
 }
 function errorHandler(error)
{
  console.log("error occured",error);

}
 function clickHandler(){
   //input
    var inputText=txtInput.value;

    //calling server for processing
    fetch(getTranslationURL(inputText))
      .then(response => response.json())
      .then(json=>{
        var translatedText=json.contents.translated;
        //output
        OutputDiv.innerText=translatedText;
      })
  };
  
btnTranslate.addEventListener("click",clickHandler);
