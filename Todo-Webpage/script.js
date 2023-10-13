const inputField = document.getElementById('inputField');
const listContainer = document.getElementById('listContainer');

function addTask() {  
    if(inputField.value === ""){
        alert("Input Field Should Not Be Empty");
    }  else{
    let newTask = inputField.value;
    let li = document.createElement('li');
    li.textContent = newTask;
    li.addEventListener("click", function () {
        this.remove();
    })
    listContainer.append(li)
    inputField.value = "";
}};