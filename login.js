document.addEventListener("DOMContentLoaded", function () {
  const loginTitle = document.getElementById("login-title");
  const signupTitle = document.getElementById("signup-title");
  const loginForm = document.getElementById("login-form");
  const signupForm = document.getElementById("signup-form");

  loginTitle.addEventListener("click", function () {
    loginForm.classList.add("active-form");
    signupForm.classList.remove("active-form");
    loginTitle.classList.add("active-title");
    signupTitle.classList.remove("active-title");
  });

  signupTitle.addEventListener("click", function () {
    signupForm.classList.add("active-form");
    loginForm.classList.remove("active-form");
    signupTitle.classList.add("active-title");
    loginTitle.classList.remove("active-title");
  });
});
