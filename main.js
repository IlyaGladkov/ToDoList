let inputDate = document.querySelector('.date');
inputDate.valueAsDate = new Date();
 
let select = document.querySelector('.categories');
let textArea = document.querySelector('.pullText');

let buttonClick = document.querySelector('.addButton');
let arrStorage = [];

function createNewThing(needData) {
    let tr = document.createElement('tr');
    for (let i = 0; i < 3; i++) {
        let td = document.createElement('td');
        td.textContent = needData[i];
        tr.append(td);
    }
    tr.childNodes[1].className = 'text';
    let table = document.querySelector('.list');
    table.append(tr); 
}

buttonClick.addEventListener('click', () => {
    let selectedCategory = select.options[select.selectedIndex].value;
    let selectedDate = inputDate.value.split('-').splice(1,2).reverse().join('.');
    let text = textArea.value;
    let masHelp = [selectedCategory, text, selectedDate];
    arrStorage.push(masHelp);

    localStorage.setItem('tasks', JSON.stringify(arrStorage));

    createNewThing(masHelp);
    
    textArea.value = '';
})

if (localStorage.getItem('tasks') != undefined) {
    let backFromStorage = JSON.parse(localStorage.getItem('tasks'));
    backFromStorage.forEach(ToDoElement => {
        createNewThing(ToDoElement);
    });
}