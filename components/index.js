let inputEl = document.getElementById("inputEl");


function appendToDisplay(num) {
    inputEl.value = inputEl.value + num;
}

function calculate() {
    try {
        inputEl.value = eval(inputEl.value);
    } catch (err) {
        inputEl.value = "Error";
    }
}

function clearDisplay() {
    inputEl.value = "";
}