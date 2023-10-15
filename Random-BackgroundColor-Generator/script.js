function getRandomColor() {
    let letters = '0123456789ABCDEFG';
    let color = '#';
    for(let i=0; i<6; i++){
        color+= letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
function showRandomColor() {
    let newColor = getRandomColor();
    document.body.style.backgroundColor = newColor;
    document.getElementById('currentColor').innerHTML = document.body.style.backgroundColor
};