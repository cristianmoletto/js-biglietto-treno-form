const formElem = document.getElementById("form")
const kmElem = document.getElementById("km");
const ageElem = document.getElementById("age");
// const btnElem = document.getElementById("btn");

form.addEventListener("submit",function(event){
event.preventDefault();


const age = parseInt(kmElem.value);
const km = parseFloat(ageElem.value);

let message = "";
  let finalPrice = 0;
  let basicPrice = km * 0.21;

  if (age > 65) {
    finalPrice = basicPrice - basicPrice * 0.4;
  } else if (age < 18) {
    finalPrice = basicPrice - basicPrice * 0.2;
  } else {
    finalPrice = basicPrice;
  }

  const finalPriceFormatted = finalPrice.toFixed(2);

  message = `Il prezzo del biglietto è di € ${finalPriceFormatted}`;

  console.log(message);

}
)