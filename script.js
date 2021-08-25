const btn = document.querySelector(".request-access-btn");
const errMsg = document.querySelector(".error-msg");
const input = document.querySelector("#input");

btn.addEventListener("click", (e) => {
  e.preventDefault();

  errMsg.classList.remove("show-error");

  const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (!input.value.match(mailFormat)) {
    errMsg.classList.add("show-error");
  }

  input.value = "";
});
