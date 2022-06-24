// Assignment Code
var generateBtn = document.querySelector("#generate");

  // Step #1: Prompt the user for the password criteria:
  //      a) Password length: minimum 8 characters and maximum 128 characters
  //      b) Lowercase, uppercase, numbers, special characters
  // Step #2: Validate the input
  // Step #3: Generate password based on criteria.
  // Step #4: Display password to the page. (Already done)

// *** charCodeAt() returns the unicode of the character at a specificed positon in a string

var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz"
var uppercaseLetters = lowercaseLetters.toUpperCase();
var numbers = "01234567890";
var specialChar = "~`!@#$%^&*()-_+={}[]|\\/:;\"'<>,.?";

console.log("lower.charAt: " + lowercaseLetters.charAt(25));
console.log("lower.length: " + lowercaseLetters.length);
console.log("lower.charAt(length): " + lowercaseLetters.charAt(lowercaseLetters.length-1));
console.log("Math.random: " + Math.random() * 4);
console.log("Math.random with string.length: " + Math.random() * lowercaseLetters.length);
console.log("Math.floor and Math.random with string.length: " + Math.floor(Math.random() * lowercaseLetters.length) )
console.log(lowercaseLetters.charAt(Math.floor(Math.random()*lowercaseLetters.length)));


  function userPreferences (userCharAnswer) {
    var generator = "";
    var result = "";
    var userLowercaseAnswer = window.confirm("Should the password contain lowercase letters?");
    var userUppercaseAnswer = window.confirm("Should the password contain uppercase letters?");
    var userNumberAnswer = window.confirm("Should the password contain numbers?");
    var userSpecialNumAnswer = window.confirm("Should the password contain special characters?");
    if (userLowercaseAnswer) {
      generator += lowercaseLetters;
    }
    if (userUppercaseAnswer) {
      generator += uppercaseLetters;
    }
    if (userNumberAnswer) {
      generator += numbers;
    }
    if (userSpecialNumAnswer) {
      generator += specialChar
    }
    // console.log(generator.charAt(10));
    // now make for-loop to go through generator to pick out random chars based upon userCharAnswer
    // generator.charAt(Math.floor(Math.random() * ge))
    // for (var i = 0; i > userCharAnswer.length-1; i++) {
    //   result +=  generator.charAt(Math.floor(Math.random() * generator.length));
    // }
    // return result;
  }

function generatePassword() {
  var userCharAnswer = prompt("How many characters should the password contain? (8 - 128)");
  if (isNaN(userCharAnswer)) {
    alert("Invalid answer. Please enter a number.");
  } else {
    if (userCharAnswer > 7 && userCharAnswer < 129) {
      return userPreferences(userCharAnswer);
    } else {
      alert("Invalid answer. Please enter a number between 8 and 128.");
    }
  }
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