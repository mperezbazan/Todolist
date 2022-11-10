import ToDoList from './modules/ToDoList.js';
import Task from './modules/Task.js';

describe('Add/Remove items in ToDoList', () => {
  const list = new ToDoList();
  test('Add item in ToDo -> length equal 1', () => {
    const data = new Task('test');
    list.add(data);
    expect(JSON.parse(localStorage.getItem('data')).length).toBe(1);
  });
  test('Add new item and remove from list -> length equal 1', () => {
    const data = new Task('test1');
    list.add(data);
    list.remove(1);
    expect(JSON.parse(localStorage.getItem('data')).length).toBe(1);
  });
  test('Remove item in ToDo -> length equal 0', () => {
    list.remove(1);
    expect(JSON.parse(localStorage.getItem('data')).length).toBe(0);
  });
  test('Add Item buy a car', () => {
    const data = new Task('buy a car');
    list.add(data);
    expect(JSON.parse(localStorage.getItem('data'))[0].description).toBe('buy a car');
  });
  test('Add Item buy food and index equal 2', () => {
    const data = new Task('buy food');
    list.add(data);
    expect(JSON.parse(localStorage.getItem('data'))[1].index).toBe(2);
  });
});
