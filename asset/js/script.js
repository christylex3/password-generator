// Assignment Code
var generateBtn = document.querySelector("#generate");

var userCharAnswer;
var userLowercaseAnswer;
var userUppercaseAnswer;
var userNumberAnswer;
var userSpecialCharAnswer;
var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz"
var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "01234567890";
var specialChar = "~`!@#$%^&*()-_+={}[]|\\/:;\"'<>,.?";

function userPreferences () {
  userCharAnswer = prompt("How many characters should the password contain? (8 - 128)");

  if(isNaN(userCharAnswer)) {
    alert("Invalid answer. Please enter a number.");
    return;
  }
  
  if (userCharAnswer < 8 || userCharAnswer > 128) {
    alert("Invalid answer. Please enter a number between 8 and 128.");
    return;
  }

  userLowercaseAnswer = window.confirm("Should the password contain lowercase letters?");
  userUppercaseAnswer = window.confirm("Should the password contain uppercase letters?");
  userNumberAnswer = window.confirm("Should the password contain numbers?");
  userSpecialCharAnswer = window.confirm("Should the password contain special characters?");
}

function generatePassword() {
  userPreferences();

  var generator = "";
  var result = "";

  if (userLowercaseAnswer) {
    generator += lowercaseLetters;
  }

  if (userUppercaseAnswer) {
    generator += uppercaseLetters;
  }

  if (userNumberAnswer) {
    generator += numbers;
  }

  if (userSpecialCharAnswer) {
    generator += specialChar;
  }

  if (generator === "" && (userCharAnswer > 7 && userCharAnswer < 129)) {
    alert("Please select at least one criteria.");
  }

  for (var i = 0; i < userCharAnswer; i++) {
    result += generator.charAt(Math.floor(Math.random() * (generator.length-1)));
  }

  return result;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  // this line displays the generated password on screen
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);