const input = document.getElementById("myInput");
const btn = document.getElementById("myBtn");
const deleteBtn = document.getElementById("delete");

const btnClick = () => {
  localStorage.setItem("key1", input.value);
};

btn.addEventListener("click", btnClick);
deleteBtn.addEventListener("click", () => {
  localStorage.removeItem("key1");
});

if (localStorage.getItem("key1")) {
  alert(localStorage.getItem("key1"));
}

// local storage use in example of shooping website cart,
// if anyone add item in cart it will be save in local storage
// for temporary.
