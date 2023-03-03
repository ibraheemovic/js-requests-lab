const randRest = () => {
  let rest = [
    ["Mr.-Paul's-Supper-Club", `http://www.mrpaulssupperclub.com/`],

    ["Iconos Gastro Cantina", `https://www.iconosgastrocantina.com/`],

    ["Noa", `https://noaminneapolis.com/`],

    ["Mother Dough Bakery", `http://www.motherdougbakery.com/`],
  ];

  let randNum = Math.floor(Math.random() * 4);

  alert(`Eat at ${rest[randNum][0]}, and here is the link ${rest[randNum][1]}`);
};

document.querySelector(`button`).addEventListener(`click`, randRest);
