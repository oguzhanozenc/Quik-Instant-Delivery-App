document.addEventListener("DOMContentLoaded", function () {
  const continueWithoutMembershipLink = document.getElementById(
    "continueWithoutMembership"
  );
  const signupForm = document.getElementById("signupForm");

  continueWithoutMembershipLink.addEventListener("click", function (event) {
    event.preventDefault();

    window.location.href = "./app.html";
  });

  signupForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const fullNameValue = document.getElementById("fullName").value;
    const emailValue = document.getElementById("email").value;

    localStorage.setItem("fullName", fullNameValue);
    localStorage.setItem("email", emailValue);

    window.location.href = "./app.html";
  });
});
