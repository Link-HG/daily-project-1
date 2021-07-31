const inputFormTogglePassword = document.querySelectorAll(".form-question button");

inputFormTogglePassword.forEach((element) => {
  element.addEventListener("click", function () {
      const img = this.querySelector("img");
      const input = this.parentElement.querySelector("input");

      if (input.type === "password") {
        input.type = "text";
        img.src = "img/hide-password.svg";
      } else {
        input.type = "password";
        img.src = "img/show-password.svg";
      }
    },
    false
  );
});
