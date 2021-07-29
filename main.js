const paymenMethod = document.querySelectorAll(".payment-method div")
let currentlySelected;
paymenMethod.forEach(element => {
  if (element.classList.contains("check-selected")) {
    currentlySelected = element;
  }
  element.addEventListener("click", function() {
    currentlySelected.classList.remove("check-selected");
    currentlySelected = this;
    this.classList.add("check-selected")
    this.querySelector("input[type='radio']").checked = true;
  }, false);
});
