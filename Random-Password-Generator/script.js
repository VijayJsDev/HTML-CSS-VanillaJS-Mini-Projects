const inputField = document.getElementById('inputField');
const dragSlider = document.getElementById('dragSlider');
const sliderValue = document.getElementById('sliderValueShow');
const button = document.getElementById('btn');
const upperCase = document.getElementById('upperCase');
const lowerCase = document.getElementById('lowerCase');
const number = document.getElementById('numbers');
const symbol = document.getElementById('symbols')


dragSlider.addEventListener("change", function() {
    sliderValue.innerHTML = `Current Length: ${dragSlider.value}`;
})

const upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '01234567890';
const symbols = '!@#$%^&*()?/'

btn.addEventListener("click", () => {
    inputField.value = passwordGenerator();
})


function passwordGenerator(){
    let length = dragSlider.value;
    let characters = "";
    let password = "";

    characters+= upperCase.checked ? upperCaseLetters : "";
    characters+= lowerCase.checked ? lowerCaseLetters : "";
    characters+= number.checked ? numbers : "";
    characters+= symbol.checked ? symbols : "";

    for( i = 0; i < length; i++){
        password+= characters.charAt(Math.floor(Math.random() * characters.length))
    }
    return password;
};
