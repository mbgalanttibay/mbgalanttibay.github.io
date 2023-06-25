const input = document.querySelector(`input`);
const enterBtn = document.querySelector(`.enterBtn`);
const ul = document.querySelector(`ul`);
let number = 0;

const enterItem = function () {
  if (input.value.length > 0) {
    const wrapper1 = document.createElement(`div`);
    const wrapper2 = document.createElement(`div`);
    wrapper1.classList.add(`wrapper`);
    const li = document.createElement(`li`);
    const delBtn = document.createElement(`button`);
    const doneBtn = document.createElement(`button`);
    delBtn.classList.add(`delete`);
    doneBtn.classList.add(`done`);
    delBtn.textContent = `X`;
    doneBtn.textContent = `Done`;
    li.textContent = input.value;
    ul.append(wrapper1);
    wrapper1.append(li, wrapper2);
    wrapper2.append(delBtn, doneBtn);
    input.value = "";
  }
};

const doneAndDelete = function (event) {
  if (event.target.classList.contains(`delete`)) {
    event.target.parentElement.parentElement.remove();
  } else if (event.target.classList.contains(`done`)) {
    event.target.parentElement.parentElement.firstChild.classList.toggle(
      `lineThrough`
    );
    event.target.parentElement.parentElement.classList.toggle(`lastOrder`);
  }
};
const returnBtn = function (e) {
  if (e.keyCode === 13) {
    enterItem();
  }
};

enterBtn.addEventListener(`click`, enterItem);
ul.addEventListener(`click`, doneAndDelete);
input.addEventListener(`keypress`, returnBtn);
