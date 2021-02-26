let inputDate = document.querySelector('input');
inputDate.valueAsDate = new Date();
 
let select = document.querySelector('select');
let textArea = document.querySelector('textarea');

let buttonClick = document.querySelector('button');
buttonClick.addEventListener('click', () => {
    let selectedCategory = select.options[select.selectedIndex].value;
    let selectedDate = inputDate.value.split('-').splice(1,2).reverse().join('.');
    let text = textArea.value;
    let masHelp = [selectedCategory, text, selectedDate];

    let tr = document.createElement('tr');
    for (let i = 0; i < 3; i++) {
        let td = document.createElement('td');
        td.textContent = masHelp[i];
        tr.append(td);
    }
    tr.childNodes[1].className = 'text';
    let table = document.querySelector('table');
    table.append(tr); 

    textArea.value = '';
})