import './style.css';
import EnterIcon from './img/arrow-enter.svg';
import RotateIcon from './img/arrows-rotate-solid.svg';
import EllipsisIcon from './img/ellipsis-vertical-solid.svg';

const tasks = [
  {
    description: 'Wash car',
    completed: false,
    index: 0,
  },
  {
    description: 'Go market',
    completed: true,
    index: 1,
  },
  {
    description: 'Clean garden',
    completed: false,
    index: 2,
  },
];

const listDiv = document.querySelector('.list-container');

const render = () => {
  const element = document.createElement('ul');
  const title = document.createElement('li');
  const input = document.createElement('li');
  const button = document.createElement('li');
  const refreshIcon = new Image();
  refreshIcon.src = RotateIcon;
  refreshIcon.classList.add('icon');
  const enterIcon = new Image();
  enterIcon.src = EnterIcon;
  enterIcon.classList.add('icon');

  title.innerHTML = '<p class=\'title\'>Today\'s To Do</p>';
  title.appendChild(refreshIcon);
  title.classList.add('row');
  element.appendChild(title);
  input.innerHTML = '<input class=\'input-text\' type=\'text\' placeholder=\'Add to your list...\'/>';
  input.appendChild(enterIcon);
  input.classList.add('row-input');
  element.appendChild(input);
  const sortedTasks = tasks.sort((a, b) => (a.index - b.index));
  sortedTasks.forEach((item) => {
    const moreIcon = new Image();
    const li = document.createElement('li');
    li.innerHTML = `<label class='${item.completed ? 'completed' : ''}'><input type="checkbox" id="cbox${item.index}" value="first_checkbox" class='checkbox' ${item.completed ? 'checked' : ''}> ${item.description}</label>`;
    li.appendChild(moreIcon);
    li.classList.add('row');
    li.classList.add('input');
    moreIcon.src = EllipsisIcon;
    moreIcon.classList.add('icon');
    element.appendChild(li);
  });
  button.innerHTML = '<button class=\'clearButton\' type=\'button\'>Clear all completed</button>';
  button.classList.add('row-button');
  element.appendChild(button);

  return element;
};

listDiv.appendChild(render());