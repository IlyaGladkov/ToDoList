let inputDate = document.getElementsByClassName('date')[0];
inputDate.valueAsDate = new Date();
 
let select = document.getElementsByClassName('categories')[0];
let textArea = document.getElementsByClassName('pullText')[0];

let buttonClick = document.getElementsByClassName('addButton')[0];
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
    let table = document.getElementsByClassName('list')[0];
    table.append(tr); 

    textArea.value = '';
})