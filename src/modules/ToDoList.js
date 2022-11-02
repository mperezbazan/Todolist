import EllipsisIcon from '../img/ellipsis-vertical-solid.svg';

export default class ToDoList {
  constructor() {
    this.list = JSON.parse(localStorage.getItem('data')) || [];
  }

  add(data) {
    const index = this.list.length + 1;
    data.index = index;
    this.list.push(data);
    localStorage.setItem('data', JSON.stringify(this.list));
  }

  remove(index) {
    this.list.splice(index, 1);
    localStorage.setItem('data', JSON.stringify(this.list));
  }

  edit(data) {
    console.log(data, this.list);
  }

  getAll() {
    const data = [];
    this.list.forEach((item) => {
      const moreIcon = new Image();
      const li = document.createElement('li');
      li.id = `task-${item.index}`;
      li.innerHTML = `<label class='${item.completed ? 'completed' : ''}'><input type="checkbox" id="cbox${item.index}" value="first_checkbox" class='checkbox' ${item.completed ? 'checked' : ''}> ${item.description}</label>`;
      li.appendChild(moreIcon);
      li.classList.add('row');
      li.classList.add('input');
      moreIcon.src = EllipsisIcon;
      moreIcon.classList.add('icon');
      moreIcon.classList.add('edit');
      moreIcon.id = `icon-${item.index}`;
      data.push(li);
    });
    return data;
  }

  reindex() {
    let counter = 1;
    this.list.forEach((item) => {
      item.id = counter;
      counter += 1;
    });
  }
}