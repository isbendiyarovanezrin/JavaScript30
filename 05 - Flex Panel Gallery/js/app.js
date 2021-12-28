const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => panel.addEventListener("click", toggleOpen));
panels.forEach((panel) =>
  panel.addEventListener("transitionend", toggleActive)
);

function toggleOpen() {
  this.classList.toggle("open");
}

function toggleActive(e) {
  if (e.propertyName.includes("flex")) {
    this.classList.toggle("open-active");
  }
}

// loader
$(window).on("load", () => {
  setTimeout(removeLoader, 1500);
});

function removeLoader() {
  $("#loadingDiv").fadeOut(500, () => {
    $("#loadingDiv").remove();
  });
}
