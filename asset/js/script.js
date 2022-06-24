// Assignment Code

// it's the red button
var generateBtn = document.querySelector("#generate");


  // Step #1: Prompt the user for the password criteria:
  //      a) Password length: minimum 8 characters and maximum 128 characters
  //      b) Lowercase, uppercase, numbers, special characters
  // Step #2: Validate the input
  // Step #3: Generate password based on criteria.
  // Step #4: Display password to the page. (Already done)

// *** charCodeAt() returns the unicode of the character at a specificed positon in a string

// Testing unicode process
// var alphabet = "abcdefghijklmnopqrstuvwxyz";
// var specialChar = "!";
// var getUnicode = alphabet.charCodeAt(specialChar);

// console.log(getUnicode);

// *** Shows whose unicode it is
// *** String.fromCharCode();
// *** 97 = a
// *** 122 = z
// *** 65 = uppercase

// lowercaseArray = [
//   a,
//   b,
//   c,
//   d,
//   e,
//   f,
//   g,
//   h,
//   i
// ]

var codeRevealed = String.fromCharCode();
console.log(codeRevealed);

//for lowercase
// var numCode;
for (var n = 97; n > 123; n++) {
  var numCode = String.fromCharCode(n);
  console.log(numCode);
}

// console.log(lowercaseLetters);
// console.log(uppercaseLetters);


// **** Create for-loop to store all lowercase letters, uppercase letters, special characters, and numbers from unicode
// var hi = "hi"
// var goodbye = "bye"
// console.log(hi += bye);

// var uppercaseArray = 
// var userPrefSaved = [userLowercaseAnswer, userUppercaseAnswer, ];

var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz"
var uppercaseLetters = lowercaseLetters.toUpperCase();
var numbers = "01234567890";
var specialChar = "~`!@#$%^&*()-_+={}[]|\\/:;\"'<>,.?";


  function userPreferences (x) {
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
    result = Math.random() * generator
  }


// var testCase = window.confirm("Hi");
// console.log(testCase);

function generatePassword() {
  var userCharAnswer = prompt("How many characters should the password contain? (8 - 128)");
  if (isNaN(userCharAnswer)) {
    alert("Invalid answer. Please enter a number.");
  } else {
    if (userCharAnswer > 7 && userCharAnswer < 129) {
      userPreferences(userCharAnswer);
      // return*******
    } else {
      alert("Invalid answer. Please enter a number between 8 and 128.");
    }
  }
}

  //needs to return the generated password. So make genrated password a variable and return the variable
  // return;

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  // this line displays the generated password on screen
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



