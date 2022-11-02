import './style.css';
import EnterIcon from './img/arrow-enter.svg';
import RotateIcon from './img/arrows-rotate-solid.svg';
import ToDoList from './modules/ToDoList.js';
import Task from './modules/Task.js';

const tasks = new ToDoList();
const listDiv = document.querySelector('.list-container');
listDiv.innerHTML = '';
const renderTitle = () => {
  const title = document.createElement('div');
  const refreshIcon = new Image();
  refreshIcon.src = RotateIcon;
  refreshIcon.classList.add('icon');
  title.innerHTML = '<p class=\'title\'>Today\'s To Do</p>';
  title.appendChild(refreshIcon);
  title.classList.add('row');
  return title;
};
const renderInput = () => {
  const input = document.createElement('div');
  const enterIcon = new Image();
  enterIcon.src = EnterIcon;
  enterIcon.classList.add('icon');
  enterIcon.id = 'addButton';
  input.innerHTML = '<input class=\'input-text\' type=\'text\' name=\'addItem\' id=\'addItem\' placeholder=\'Add to your list...\'/>';
  input.appendChild(enterIcon);
  input.classList.add('row-input');
  return input;
};
const renderList = () => {
  const element = document.createElement('ul');
  element.id = 'list-content';
  const lis = tasks.getAll();
  lis.forEach((item) => {
    element.appendChild(item);
  });
  return element;
};
const renderFoot = () => {
  const button = document.createElement('div');
  button.innerHTML = '<button class=\'clearButton\' type=\'button\'>Clear all completed</button>';
  button.classList.add('row-button');
  return button;
};
listDiv.appendChild(renderTitle());
listDiv.appendChild(renderInput());
listDiv.appendChild(renderList());
listDiv.appendChild(renderFoot());
const addButton = listDiv.querySelector('#addButton');
const inputText = listDiv.querySelector('#addItem');
const listContent = listDiv.querySelector('#list-content');
addButton.addEventListener('click', () => {
  const data = new Task(inputText.value);
  tasks.add(data);
  inputText.value = '';
  listDiv.replaceChild(renderList(), listContent);
});
inputText.addEventListener('keypress', (e) => {
  if (e.keyCode === 13) {
    const data = new Task(inputText.value);
    tasks.add(data);
    inputText.value = '';
    listDiv.replaceChild(renderList(), listDiv.childNodes[2]);
  }
});
const editButtons = listDiv.querySelectorAll('.edit');
editButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    const { id } = e.target;
    const index = id.substring(id.indexOf('-') + 1, id.length);
    const row = listContent.querySelector(`#task-${index}`);
    row.classList.add('edit');
  });
});