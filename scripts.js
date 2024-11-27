const button = document.querySelector('.button-task'); 
const input = document.querySelector('.input-task');
const CompleteList = document.querySelector('.list-tasks');

let item_list = JSON.parse(localStorage.getItem('tasks')) || []; 

function saveToLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(item_list)); 
}

function add_item() {
    const input_value = input.value.trim(); 

    if (input_value) {
        
        item_list.push({ text: input_value, completed: false }); 
        input.value = ''; 
        saveToLocalStorage(); 
        show_item(); 
    } else {
        alert('Digite uma tarefa antes de adicionar!'); 
    }
}

function show_item() {
    let novaLi = '';

    item_list.forEach((tarefa, index) => {
        const completedClass = tarefa.completed ? 'done' : ''; 
        novaLi += `
            <li class="task ${completedClass}">
                <img class="check-icon" src="./IMG/CHECKOK.png" alt="Check" onclick="completeTask(${index})">
                <p>${tarefa.text}</p>
                <img src="./IMG/DEL.png" alt="delete" onclick="deleteItem(${index})">
            </li>
        `;
    });

    CompleteList.innerHTML = novaLi;
}

function completeTask(index) {
  
    item_list[index].completed = !item_list[index].completed;
    saveToLocalStorage(); 
    show_item(); 
}

function deleteItem(index) {
    item_list.splice(index, 1); 
    saveToLocalStorage(); 
    show_item(); 
}


button.addEventListener('click', add_item);


show_item();
