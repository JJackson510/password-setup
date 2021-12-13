// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "1234567890";
const characters = "!@#$%^&*(){}[]=<>/,.";

function randomCharFromString(stringValue) {
  var randomNumber = Math.floor(Math.random() * stringValue.length);
  return stringValue[randomNumber];
}

function passwordLength() {
  var length;
  var isLengthvalid = false;

  while (!isLengthvalid) {
    var lengthPrompt = parseInt(
      window.prompt(
        "How many characters would you like the password to be? Must be between 8 and 128."
      )
    );

    if (!lengthPrompt) {
      alert("Length is required to create a password");
    } else if (lengthPrompt < 8 || lengthPrompt > 128) {
      alert("You must choose between 8 and 128");
    } else {
      length = lengthPrompt;
      isLengthvalid = true;
    }
  }

  return length;
}
function passwordCriteriaWithoutPrompts() {
  var criteriaArr = [];
  alert("Password will have numbers, upper case letters, lower case letters, and characters");
  criteriaArr.push(numbers);
  criteriaArr.push(characters);
  criteriaArr.push(lowerCaseLetters);
  criteriaArr.push(upperCaseLetters);

  return criteriaArr;
}
function passwordCriteria() {
  var criteriaArr = [];
  var isCriteriaValid = false;

  while (!isCriteriaValid) {
    var confirmNumber = window.confirm("Will this have numbers?");
    var confirmCharacter = window.confirm("Will this have characters?");
    var confirmLowerCase = window.confirm("Will this have lower case letters?");
    var confirmUpperCase = window.confirm("Will this have upper case letters?");

    if (
      !confirmNumber &&
      !confirmCharacter &&
      !confirmLowerCase &&
      !confirmUpperCase
    ) {
      alert("Must have one of each character!");
    } else {
      if (confirmNumber) {
        criteriaArr.push(numbers);
      }
      if (confirmCharacter) {
        criteriaArr.push(characters);
      }
      if (confirmLowerCase) {
        criteriaArr.push(lowerCaseLetters);
      }
      if (confirmUpperCase) {
        criteriaArr.push(upperCaseLetters);
      }
      isCriteriaValid = true;
    }
  }

  return criteriaArr;
}

function generatePassword() {
  var length = passwordLength();
  var criteriaArr = passwordCriteriaWithoutPrompts();
  var password = [];

  for (let index = 0; index < length; index++) {
    var criteria = criteriaArr[Math.floor(Math.random() * criteriaArr.length)];
    password.push(randomCharFromString(criteria));
  }

  return password.join("");
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);