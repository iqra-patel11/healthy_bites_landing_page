// script.js

document.addEventListener("DOMContentLoaded", () => {
    const loginBtn = document.querySelector(".btn.login");
    const signupBtn = document.querySelector(".btn.signup");
  
    if (loginBtn) {
      loginBtn.addEventListener("click", () => {
        alert("Redirecting to login page...");
        // window.location.href = "/login";
      });
    }
  
    if (signupBtn) {
      signupBtn.addEventListener("click", () => {
        alert("Redirecting to signup page...");
        // window.location.href = "/signup";
      });
    }
  
    const exploreBtn = document.querySelector(".explore-btn");
    if (exploreBtn) {
      exploreBtn.addEventListener("click", () => {
        window.scrollTo({
          top: document.querySelector(".items-section").offsetTop,
          behavior: "smooth"
        });
      });
    }
  });
  