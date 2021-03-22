let inputDate = document.querySelector('.date');
inputDate.valueAsDate = new Date();
 
let select = document.querySelector('.categories');
let textArea = document.querySelector('.pullText');

let buttonClick = document.querySelector('.addButton');
let todoItems = [];

function renderTodoItem(item) {
    let tr = document.createElement('tr');
    for (let key in item) {
        let td = document.createElement('td');
        td.textContent = key == 'date' ? item[key].slice(5).replace('-', '.') : item[key];
        tr.append(td);
    }
    tr.childNodes[1].className = 'text';
    let table = document.querySelector('.list');
    table.append(tr); 
}

buttonClick.addEventListener('click', () => {
    let selectedCategory = select.value;
    let selectedDate = inputDate.value;
    let text = textArea.value;
    let tasks = {
        category: selectedCategory,
        text: text,
        date: selectedDate
    };
    todoItems.push(tasks);

    localStorage.setItem('tasks', JSON.stringify(todoItems));

    renderTodoItem(tasks);
    
    textArea.value = '';
})

if (localStorage.getItem('tasks') != undefined) {
    let backFromStorage = JSON.parse(localStorage.getItem('tasks'));
    backFromStorage.forEach(toDoElement => {
        renderTodoItem(toDoElement);
        todoItems.push(toDoElement);
    });
}