const inputFieldEl = document.getElementById("result");
const ButtonsEl = document.querySelectorAll("button");

    ButtonsEl[i].addEventListener("click", function(){
        const buttonValue = ButtonsEl[i].textContent ;
        if(buttonValue === "C"){
            clear(); 
        }else if (buttonValue === "="){
            calculate();
        }else if (buttonValue === "D"){
            deleteCarca(buttonValue);
        }else {
            appendVAlue(buttonValue);
        }

       
    });


function clear (){
    inputFieldEl.value = "";
}

function calculate(){
    inputFieldEl.value = eval(inputFieldEl.value);
}

function deleteCarca(buttonValue){
    inputFieldEl.value = inputFieldEl.value.slice(0, -1); 
}

function appendVAlue(buttonValue){
    inputFieldEl.value += buttonValue ;
}





