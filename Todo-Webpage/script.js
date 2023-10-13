const inputField = document.getElementById('inputField');
const listContainer = document.getElementById('listContainer');

const addTask = () => {
    let newTask = inputField.value;
    let li = document.createElement('li')
    li.textContent = newTask;
    li.addEventListener("click", function () {
        this.remove();
    })
};