const favColor = () => {
  let bckgrnd = document.createElement(`div`);
  let blue = document.createElement(`div`);
  let text = document.createElement(`h1`);

  text.textContent = `Blue`;
  blue.style.backgroundColor = `rgb(16,101,144)`;

  bckgrnd.classList.add(`bckgrnd`);
  blue.classList.add(`graphic`);
  text.classList.add(`text`);

  blue.appendChild(text);
  bckgrnd.appendChild(blue);
  document.body.appendChild(bckgrnd);

  setTimeout(() => document.querySelector(`.bckgrnd`).remove(), 2000);
};

const favPlace = () => {
  let bckgrnd = document.createElement(`div`);
  let place = document.createElement(`div`);
  let text = document.createElement(`h1`);

  text.textContent = `With Family`;
  place.style.backgroundImage = `url("https://images.unsplash.com/photo-1557263627-4451cec65c99?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80")`;

  bckgrnd.classList.add(`bckgrnd`);
  place.classList.add(`graphic`);
  text.classList.add(`text`);

  place.appendChild(text);
  bckgrnd.appendChild(place);
  document.body.appendChild(bckgrnd);

  setTimeout(() => document.querySelector(`.bckgrnd`).remove(), 2000);
};

const favRitual = () => {
  let bckgrnd = document.createElement(`div`);
  let place = document.createElement(`div`);
  let text = document.createElement(`h1`);

  text.textContent = `Skol Chant`;
  place.style.backgroundImage = `url("https://c.tenor.com/TCh7sgCxtkoAAAAd/diggs-skol.gif")`;

  bckgrnd.classList.add(`bckgrnd`);
  place.classList.add(`graphic`);
  text.classList.add(`text`);

  place.appendChild(text);
  bckgrnd.appendChild(place);
  document.body.appendChild(bckgrnd);

  setTimeout(() => document.querySelector(`.bckgrnd`).remove(), 2000);
};

const ye = () => {
  let ye = document.createElement(`div`);

  ye.classList.add(`yeGraphic`);

  document.body.appendChild(ye);
};

const noMoreYe = () => document.querySelector(`.yeGraphic`).remove();

document.querySelector(`#color`).addEventListener(`click`, favColor);
document.querySelector(`#place`).addEventListener(`click`, favPlace);
document.querySelector(`#ritual`).addEventListener(`click`, favRitual);
document.querySelector(`#ye`).addEventListener(`mouseover`, ye);
document.querySelector(`#ye`).addEventListener(`mouseout`, noMoreYe);
