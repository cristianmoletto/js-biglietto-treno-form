const formElem = document.getElementById("form");
const kmElem = document.getElementById("km");
const ageElem = document.getElementById("age");
let risultato = document.getElementById("risultato");
// const btnElem = document.getElementById("btn");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const age = parseInt(ageElem.value);
  const km = parseInt(kmElem.value);
  console.log("km",km)

  let finalPrice = 0;
  let discount = 0;
  let basicPrice = km * 0.21;
  console.log(basicPrice)

  if (age > 65) {
    discount = 0.4;
    finalPrice = basicPrice - basicPrice * discount;
  } else if (age < 18) {
    discount = 0.2;
    finalPrice = basicPrice - basicPrice * discount;
  } else {
    finalPrice = basicPrice;
  }

  const finalPriceFormatted = finalPrice.toFixed(2);
  formElem.reset();

  risultato.innerHTML = 
  `Sconto applicato del ${discount*100}%.\n\nIl prezzo del biglietto è di € ${finalPriceFormatted}`;

});

