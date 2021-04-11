let $inputDate = document.querySelector('.date');
$inputDate.valueAsDate = new Date();
const formatDate = { month: 'numeric', day: 'numeric' };

let $selectedCategory = document.querySelector('.categories');
let $textArea = document.querySelector('.pullText');

let $buttonAdd = document.querySelector('.addButton');
let todoItems = []

function renderTodoItem(item) {
    let $tr = document.createElement('tr');
    for (let key in item) {
        let $td = document.createElement('td');
        $td.textContent = key == 'date' ? new Date(item[key]).toLocaleDateString('ru-RU', formatDate) : item[key];
        $tr.append($td);
    }
    $tr.childNodes[1].className = 'text';
    let $table = document.querySelector('.list');
    $table.append($tr);
}

$buttonAdd.addEventListener('click', () => {
    let task = {
        category: $selectedCategory.value,
        text: $textArea.value,
        date: $inputDate.valueAsDate
    };
    todoItems.push(task);

    localStorage.setItem('tasks', JSON.stringify(todoItems));

    renderTodoItem(task);

    $textArea.value = '';
})

if (localStorage.getItem('tasks') != undefined) {
    let backFromStorage = JSON.parse(localStorage.getItem('tasks'));
    backFromStorage.forEach(toDoElement => {
        renderTodoItem(toDoElement);
        todoItems.push(toDoElement);
    });
}