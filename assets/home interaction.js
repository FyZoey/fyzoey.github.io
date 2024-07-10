const overlayTrigger = document.getElementById("overlayTrigger");
const overlay = document.getElementById("overlay");
const closeIcon = document.getElementById("closeIcon");
const body = document.body;

overlayTrigger.addEventListener("click", () => {
  overlay.classList.toggle("hide");
  disableVerticalScroll();
});

closeIcon.addEventListener("click", () => {
    overlay.classList.toggle("hide");
    enableVerticalScroll();
  });

function disableVerticalScroll() {
body.style.overflowY = "hidden";
body.addEventListener("touchmove", preventDefaultScroll, { passive: false });
}

function enableVerticalScroll() {
body.style.overflowY = "";
body.removeEventListener("touchmove", preventDefaultScroll);
}

function preventDefaultScroll(event) {
event.preventDefault();
}