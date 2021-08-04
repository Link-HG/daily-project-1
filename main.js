const togglePasswordInput = document.querySelectorAll(".form-question button");

togglePasswordInput.forEach((element) => {
  element.addEventListener("click", function () {
    // Selectores
    const img = this.querySelector("span");
    const input = this.parentElement.querySelector("input")
      if (input.type === "password") {
        input.type = "text";
        img.className = "hide-password";
      } else {
        input.type = "password";
        img.className = "show-password";
      }
    },
    false
  );
});