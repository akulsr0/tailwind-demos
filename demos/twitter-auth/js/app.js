// User Id Elements
const userIdBox = document.getElementById("userIdBox");
const userIdLabel = document.getElementById("userIdLabel");
const userIdInput = document.getElementById("userIdInput");

// Password Elements
const passwordBox = document.getElementById("passwordBox");
const passwordLabel = document.getElementById("passwordLabel");
const passwordInput = document.getElementById("passwordInput");

// User Id input on focus
userIdInput.addEventListener("focus", () => {
  userIdBox.classList.remove("justify-center", "border");
  userIdBox.classList.add("border-blue-500", "border-2");
  userIdLabel.classList.remove("text-lg");
  userIdLabel.classList.add("text-blue-500", "text-sm");
});
// User Id input on blur
userIdInput.addEventListener("blur", () => {
  userIdBox.classList.remove("border-blue-500", "border-2");
  userIdBox.classList.add("justify-center", "border");
  if (userIdInput.value !== "") {
    userIdBox.classList.remove("justify-center");
    userIdLabel.classList.remove("text-blue-500");
    return;
  }
  userIdLabel.classList.remove("text-blue-500", "text-sm");
  userIdLabel.classList.add("text-lg");
});

// Password input on focus
passwordInput.addEventListener("focus", () => {
  passwordBox.classList.remove("justify-center", "border");
  passwordBox.classList.add("border-blue-500", "border-2");
  passwordLabel.classList.remove("text-lg");
  passwordLabel.classList.add("text-blue-500", "text-sm");
});
// Password input on blur
passwordInput.addEventListener("blur", () => {
  passwordBox.classList.remove("border-blue-500", "border-2");
  passwordBox.classList.add("justify-center", "border");
  if (passwordInput.value !== "") {
    passwordBox.classList.remove("justify-center");
    passwordLabel.classList.remove("text-blue-500");
    return;
  }
  passwordLabel.classList.remove("text-blue-500", "text-sm");
  passwordLabel.classList.add("text-lg");
});
