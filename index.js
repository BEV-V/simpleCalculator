const buttonsEl = document.querySelectorAll("button");

const inpuFieldEl = document.getElementById("result")

for(let i = 0; i < buttonsEl.length; i++) {
    buttonsEl[i].addEventListener("click", ()=>{
        const buttonValue = buttonsEl[i].textContent;
        if(buttonValue === "C") {
            clearResult();
        } else if (buttonValue === "=") {
            calculateResult();
        } else{
            appendValue(buttonValue);
        }
    });
}

function clearResult(){
    inpuFieldEl.value = "";
}

function calculateResult() {
    inpuFieldEl.value = eval(inpuFieldEl.value);
}

function appendValue(buttonValue) {
    inpuFieldEl.value += buttonValue;
    // inpuFieldEl.value = inpuFieldEl.value + buttonValue;
}