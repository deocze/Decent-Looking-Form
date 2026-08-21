let passwordField = document.querySelector("#password");
let confirmPasswordField = document.querySelector("#passwordConfirmed");

confirmPasswordField.addEventListener("keydown", (e) =>
  checkPass(passwordField, confirmPasswordField),
);

function checkPass(oPass, cPass) {
  console.log("Running");
  let originalPass = oPass.value;
  let confirmedPass = cPass.value;
  if (originalPass === confirmedPass) {
    console.log("Yay");
  }
}
