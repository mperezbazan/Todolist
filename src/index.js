import './style.css';
import EnterIcon from './img/arrow-enter.svg';
import RotateIcon from './img/arrows-rotate-solid.svg';
import ToDoList from './modules/ToDoList.js';
import Task from './modules/Task.js';
import CompleteTask from './modules/CompleteTask.js';

const tasks = new ToDoList();
const listDiv = document.querySelector('.list-container');
listDiv.innerHTML = '';

const renderTitle = () => {
  const title = document.createElement('div');
  const refreshIcon = new Image();
  refreshIcon.src = RotateIcon;
  refreshIcon.classList.add('icon');
  refreshIcon.id = 'refreshButton';
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
  button.innerHTML = '<button class=\'clearButton\' type=\'button\' id=\'clearButton\'>Clear all completed</button>';
  button.classList.add('row-button');
  return button;
};
const refreshList = () => {
  listDiv.replaceChild(renderList(), listDiv.childNodes[2]);
};

listDiv.appendChild(renderTitle());
listDiv.appendChild(renderInput());
listDiv.appendChild(renderList());
listDiv.appendChild(renderFoot());
const addButton = listDiv.querySelector('#addButton');
const inputText = listDiv.querySelector('#addItem');
function addListener() {
  const editButtons = listDiv.querySelectorAll('.edit');
  editButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
      const { id } = e.target;
      const index = id.substring(id.indexOf('-') + 1, id.length);
      const row = document.querySelector(`#task-${index}`);
      row.classList.add('editMode');
      const rowInput = document.querySelector(`#editItem-${index}`);
      const rowLabel = document.querySelector(`#label-${index}`);
      const editIcon = document.querySelector(`#edit-${index}`);
      const deleteIcon = document.querySelector(`#delete-${index}`);
      rowLabel.classList.toggle('display-none');
      rowInput.classList.toggle('display-none');
      editIcon.classList.toggle('display-none');
      deleteIcon.classList.toggle('display-none');
    });
  });
  const deleteButtons = document.querySelectorAll('.delete');
  deleteButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
      const { id } = e.target;
      const index = id.substring(id.indexOf('-') + 1, id.length);
      tasks.remove(index);
      tasks.reindex();
      refreshList();
      addListener();
    });
  });
  const liNode = listDiv.querySelectorAll('li');
  liNode.forEach((node) => {
    node.addEventListener('dblclick', (e) => {
      const { id } = e.target;
      const index = id.substring(id.indexOf('-') + 1, id.length);
      const row = document.querySelector(`#task-${index}`);
      if (!row.classList.contains('editMode')) {
        row.classList.add('editMode');
        const rowInput = document.querySelector(`#editItem-${index}`);
        const rowLabel = document.querySelector(`#label-${index}`);
        const editIcon = document.querySelector(`#edit-${index}`);
        const deleteIcon = document.querySelector(`#delete-${index}`);
        rowLabel.classList.toggle('display-none');
        rowInput.classList.toggle('display-none');
        editIcon.classList.toggle('display-none');
        deleteIcon.classList.toggle('display-none');
        rowInput.select();
      }
    });
  });
  const inputEditText = document.querySelectorAll('.input-edit-text');
  inputEditText.forEach((node) => {
    node.addEventListener('blur', (e) => {
      const { id, value } = e.target;
      const index = id.substring(id.indexOf('-') + 1, id.length);
      const row = document.querySelector(`#task-${index}`);
      row.classList.remove('editMode');
      const rowInput = document.querySelector(`#editItem-${index}`);
      const rowLabel = document.querySelector(`#label-${index}`);
      const editIcon = document.querySelector(`#edit-${index}`);
      const deleteIcon = document.querySelector(`#delete-${index}`);
      rowLabel.classList.toggle('display-none');
      rowInput.classList.toggle('display-none');
      editIcon.classList.toggle('display-none');
      deleteIcon.classList.toggle('display-none');
      const data = {
        description: value,
        index,
      };
      tasks.edit(data);
      tasks.reindex();
      refreshList();
      addListener();
    });
    node.addEventListener('keypress', (e) => {
      if (e.keyCode === 13) {
        const { id } = e.target;
        const index = id.substring(id.indexOf('-') + 1, id.length);
        const rowInput = document.querySelector(`#editItem-${index}`);
        rowInput.blur();
      }
    });
  });
  const checkboxs = listDiv.querySelectorAll('.checkbox');
  checkboxs.forEach((checkbox) => {
    checkbox.addEventListener('change', (e) => {
      const { id } = e.target;
      const index = id.substring(id.indexOf('-') + 1, id.length);
      const completed = new CompleteTask();
      completed.changeState(index);
      refreshList();
      addListener();
    });
  });
}
addButton.addEventListener('click', () => {
  const data = new Task(inputText.value);
  tasks.add(data);
  inputText.value = '';
  tasks.reindex();
  refreshList();
  addListener();
});
inputText.addEventListener('keypress', (e) => {
  if (e.keyCode === 13) {
    const data = new Task(inputText.value);
    tasks.add(data);
    inputText.value = '';
    tasks.reindex();
    refreshList();
    addListener();
  }
});
const refreshButton = document.querySelector('#refreshButton');
refreshButton.addEventListener('click', () => {
  refreshList();
  addListener();
});
const clearButton = document.querySelector('#clearButton');
clearButton.addEventListener('click', () => {
  tasks.clearCompleted();
  tasks.reindex();
  refreshList();
  addListener();
});

addListener();
