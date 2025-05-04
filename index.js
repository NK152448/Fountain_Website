const navToggle = document.getElementById("nav-toggle")
const mobileNav = document.getElementById("mobile-nav")
const logToggle = document.getElementById("log-toggle")
const mobileLog = document.getElementById("mobile-log")
navToggle.addEventListener("click", function () {
  mobileNav.classList.toggle("active")
})
logToggle.addEventListener("click", function () {
  mobileLog.classList.toggle("active")
})