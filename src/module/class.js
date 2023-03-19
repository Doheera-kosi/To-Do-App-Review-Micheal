/* eslint-disable import/no-cycle */
/* eslint-disable class-methods-use-this */
import { addToLocalStorage } from './localstorage';

class Task {
  constructor(array) {
    this.taskArray = array;
  }

  taskObject(addTask) {
    const eachTask = {
      description: addTask,
      completed: false,
      index: 0,
    };
    this.taskArray.push(eachTask);
  }

  reAssignIndex() {
    this.taskArray.forEach((element, i) => {
      element.index = i + 1;
    });
    addToLocalStorage();
  }

  removeTask(ptask) {
    this.taskArray = this.taskArray.filter((task) => task.description !== ptask.description);
  }

  getTasks() {
    let tasks;
    if (localStorage.getItem('storedTask') === null) {
      tasks = [];
    } else {
      tasks = JSON.parse(localStorage.getItem('storedTask'));
    }

    return tasks;
  }
}

const addedTask = new Task([]);

export default addedTask;
