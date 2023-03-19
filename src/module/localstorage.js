/* eslint-disable import/no-cycle */
import addedTask from './class';
import displayList from './displaylist';

const addToLocalStorage = () => {
  const stringifyArray = JSON.stringify(addedTask.taskArray);
  localStorage.setItem('storedTask', stringifyArray);
};

const getFromLocalStorage = () => {
  const stringifyArray = localStorage.getItem('storedTask');
  addedTask.taskArray = JSON.parse(stringifyArray);
  displayList();
  console.log(addedTask.taskArray);
};

export { addToLocalStorage, getFromLocalStorage };