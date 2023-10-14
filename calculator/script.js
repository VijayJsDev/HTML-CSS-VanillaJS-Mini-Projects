function add(){
    let num1 = parseFloat(document.getElementById('firstNumber').value);
    let num2 = parseFloat(document.getElementById('secondNumber').value);
    document.getElementById('result').innerHTML = "Result: " + (num1 + num2)
};
function subtract(){
    let num1 = parseFloat(document.getElementById('firstNumber').value);
    let num2 = parseFloat(document.getElementById('secondNumber').value);
    document.getElementById('result').innerHTML = "Result: "+ (num1 - num2);
}
function multiply(){
    let num1 = parseFloat(document.getElementById('firstNumber').value);
    let num2 = parseFloat(document.getElementById('secondNumber').value);
    document.getElementById('result').innerHTML = "Result: "+ (num1 * num2);
}
function divide(){
    let num1 = parseFloat(document.getElementById('firstNumber').value);
    let num2 = parseFloat(document.getElementById('secondNumber').value);
    if(num2 === 0){
        document.getElementById('result').innerHTML = "Cannot Be Divided By Zero";
    } else{
        document.getElementById('result').innerHTML = "Result: "+ (num1 / num2);
    }  
}
