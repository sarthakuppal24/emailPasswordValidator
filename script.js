let email = document.querySelector("#email");
let password = document.querySelector("#password");
let eform = document.querySelector("form");

eform.addEventListener("submit", (e) => {
  e.preventDefault();

  let isValid = true;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/;

  let emailInp = emailRegex.test(email.value);
  let passInp = passwordRegex.test(password.value);

  if (!emailInp) {
    document.querySelector("#emailError").textContent = "Incorrect email";
    document.querySelector("#emailError").style.display = "block";
    isValid = false;
  } else {
    document.querySelector("#emailError").style.display = "none";
  }

  if (!passInp) {
    document.querySelector("#passwordError").textContent = "Incorrect password";
    document.querySelector("#passwordError").style.display = "block";
    isValid = false;
  } else {
    document.querySelector("#passwordError").style.display = "none";
  }

  if (isValid) {
    alert("Everything is Right ✅");
  }
});
