console.log("hello world");

function handleSubmit(evt) {
  evt.preventDefault();

  alert("Form submited!");
}

let form = document.querySelector("form#contact");

form.addEventListener("submit", handleSubmit);

let img = document.querySelector(`img`);

img.addEventListener(`mouseover`, () => alert(`You rock!`));
