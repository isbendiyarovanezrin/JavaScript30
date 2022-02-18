const checkboxs = document.querySelectorAll('.item input[type="checkbox"]');
let lastChecked;

function handleClick(e) {
  let inBetween = false;

  if (e.shiftKey && this.checked) {
    checkboxs.forEach((checkbox) => {
      console.log(checkbox, inBetween);

      if (checkbox === lastChecked || checkbox === this) {
        inBetween = !inBetween;
        console.log("It's started!");
      }

      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }

  lastChecked = this;
}

checkboxs.forEach((checkbox) =>
  checkbox.addEventListener("click", handleClick)
);
