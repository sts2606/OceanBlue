console.log("work");
let formInput = document.querySelectorAll("input");
let formTextarea = document.querySelectorAll("textarea");
let formItems = [...formInput, ...formTextarea];
// formItems.forEach((el) => {
//   el.addEventListener("focus", deleteDefaultValue);
// });
// function deleteDefaultValue(e) {
//   //   e.target.value = null;
// }
// console.log(formInput);
let formButton = document.querySelector("button");
formButton.addEventListener("click", stopDefAction);

function stopDefAction(evt) {
  evt.preventDefault();
  formItems.forEach((el) => {
    el.value = null;
  });
}
