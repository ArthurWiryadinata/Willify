const navbarNav = document.querySelector(".navbar-nav");
document.querySelector("#menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

const menu = document.querySelector("#menu");

document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

document
  .getElementById("registrationForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var phone = document.getElementById("phone").value;
    var age = document.getElementById("age").value;
    var gender = document.querySelector('input[name="gender"]:checked');

    if (!username) {
      alert("Please enter your name.");
      return false;
    }

    if (!email) {
      alert("Please enter a valid Gmail address.");
      return false;
    } else if (!validateEmail(email)) {
      alert("Email must be a valid Gmail address (example@gmail.com).");
      return false;
    }

    if (!password) {
      alert("Please enter a password.");
      return false;
    } else if (!validatePassword(password)) {
      alert(
        "Password must include uppercase letters, lowercase letters, and symbols."
      );
      return false;
    }

    if(!phone){
      alert("Please enter a valid phone number.");
      return false;
    }

    else if (!validatePhone(phone)) {
      alert("Phone Number should be between 10 to 15");
      return false;
    }

    if(!age){
      alert("Enter Your Age");
      return false;
    }

    else if ((isNaN(age) || age <= 0)) {
      alert("Please enter a valid age.");
      return false;
    }

    if (!gender) {
      alert("Please select your gender.");
      return false;
    }

    alert("Form submitted successfully!");
    return true;
  });

function validateEmail(email) {
  return email.endsWith('@gmail.com') && email.indexOf('@') > 0 && email.length > 10;
}

function validatePassword(password) {
  let hasUpperCase = false;
  let hasLowerCase = false;
  let hasSymbol = false;
  
  for (let i = 0; i < password.length; i++) {
    const char = password[i];
    if (char >= 'A' && char <= 'Z') hasUpperCase = true;
    else if (char >= 'a' && char <= 'z') hasLowerCase = true;
    else if (!char.match(/[0-9]/)) hasSymbol = true;
  }

  return hasUpperCase && hasLowerCase && hasSymbol;
}

function validatePhone(phone) {
  return phone.length >= 10 && phone.length <= 15 && !isNaN(phone);
}
