const formElem = document.getElementById("form")
const kmElem = document.getElementById("km");
const ageElem = document.getElementById("age");
// const btnElem = document.getElementById("btn");

form.addEventListener("submit",function(event){
event.preventDefault();
console.log(kmElem.value);
console.log(ageElem.value);
}
)
