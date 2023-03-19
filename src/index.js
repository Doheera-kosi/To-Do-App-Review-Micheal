/* eslint-disable no-restricted-syntax */
import './style.css';

import addedTask from './module/class';
import { addToLocalStorage, getFromLocalStorage } from './module/localstorage';
import displayList from './module/displaylist';
import checkBox from './module/checkbox';

const filledTask = document.getElementById('addButton');
filledTask.addEventListener('click', () => {
  const myTask = document.getElementById('addTask');
  if (myTask.value) {
    addedTask.taskObject(myTask.value);
    addedTask.reAssignIndex();
    displayList();
    myTask.value = '';
    checkBox();
  } else {
    alert('Kindly fill the task to add');
  }
});

const handleInputChange = (id) => {
  const theid = document.getElementById(`edible${id}`);
  for (const p of addedTask.taskArray) {
    if (p.index === id) {
      p.description = theid.value;
    }
  }
  addToLocalStorage();
  displayList();
};

if (localStorage.getItem('storedTask') == null) {
  addToLocalStorage();
} else {
  getFromLocalStorage();
}

const clearBtn = document.getElementById('clear');
clearBtn.addEventListener('click', () => {
  const task = addedTask.getTasks();
  const newArr = task.filter((each) => each.completed === false);
  addedTask.taskArray = newArr;
  addToLocalStorage();
  addedTask.reAssignIndex();
  window.location.reload();
});

window.handleInputChange = handleInputChange;
checkBox();