var  translatepirate = document.querySelector("#translateBtn");
var clearbtn = document.querySelector("#clearBtn");
var pirate = document.querySelector(".pirate");
var input = document.querySelector("#textInput");
var output = document.querySelector(".output");
translatepirate.addEventListener("click", function handleEvent(){
    fetch("	https://api.funtranslations.com/translate/pirate.json?text="+input.value)

    .then(res => res.json())
    .then(translatedText => output.textContent = translatedText["contents"]["translated"]);
    
    pirate.style.display = "block";
});

clearbtn.addEventListener("click", function handleEvent(){
    output.textContent = "";
    input.value="";
    pirate.style.display = "none";

});