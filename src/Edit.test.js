import ToDoList from './modules/ToDoList.js';
import Task from './modules/Task.js';
import CompleteTask from './modules/CompleteTask.js';

describe('Test for Edit and Update methods', () => {
  const list = new ToDoList();
  test('Edit item in ToDo -> index:1 description buy a car', () => {
    const data = new Task('buy food');
    list.add(data);
    const newTask = { description: 'buy a car', index: 1 };
    list.edit(newTask);
    expect(JSON.parse(localStorage.getItem('data'))[0].description).toBe('buy a car');
  });
  test('Complete task number 1 to true', () => {
    const completed = new CompleteTask();
    completed.changeState(1);
    expect(JSON.parse(localStorage.getItem('data'))[0].completed).toBeTruthy();
  });
  test('Complete task number 1 to false', () => {
    const completed = new CompleteTask();
    completed.changeState(1);
    expect(JSON.parse(localStorage.getItem('data'))[0].completed).toBeFalsy();
  });
  test('Complete task number 1 to true and Clear completed', () => {
    const data = new Task('go to school');
    list.add(data);
    const completed = new CompleteTask();
    completed.changeState(1);
    list.clearCompleted();
    expect(JSON.parse(localStorage.getItem('data'))).toHaveLength(1);
  });
});