// Assignment Code

// it's the red button
var generateBtn = document.querySelector("#generate");


  // Step #1: Prompt the user for the password criteria:
  //      a) Password length: minimum 8 characters and maximum 128 characters
  //      b) Lowercase, uppercase, numbers, special characters
  // Step #2: Validate the input
  // Step #3: Generate password based on criteria.
  // Step #4: Display password to the page. (Already done)

function generatePassword() {

// Prompts user to put in a number between 8 and 128
  var userCharAnswer = prompt("How many characters should the password contain? (8 min and 128 max)");

  // Tests if the user's input is a number
  if (isNaN(userCharAnswer)) {
    alert("Invalid answer. Please enter a number.");
  } else {
      var userLowercaseAnswer = window.confirm("Should the password contain lowercase letters?");
      var userUppercaseAnswer = window.confirm("Should the password contain uppercase letters?");
      var userNumberAnswer = window.confirm("Should the password contain numbers?");
      var userSpecialNumAnswer = window.confirm("Should the password contain special characters?");
    // } else {
    //   alert("Invalid answer. Please enter a number between 8 and 128.");
    // }
  }
}


  //needs to return the generated password. So make genrated password a variable adn return the variable
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



