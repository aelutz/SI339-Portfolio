// check that the emails match
document.querySelector("#contact-form").addEventListener("submit", function() {
  let email1 = document.querySelector("#email");
  let email2= document.querySelector("#confirmEmail");

  console.log(email1.value);
  console.log(email2.value);
  console.log("check emails");
  if (email1.value != email2.value) {
    alert("Emails must match");
    email2.focus()
    return false;
  }
  return true;


})