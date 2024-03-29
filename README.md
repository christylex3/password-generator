# password-generator
This password generator generates a random password based upon the user's selected criteria. 

## How to Use Password Generator
This is how the app looks at first:

![Before Password Is Generated](./asset/image/the-beginning.jpg)

1. When the user clicks on the red button, "Generate Password", the user is prompt with entering a number for their desired character amount with restriction between 8 and 128. If their input is not a number or is an invalid number, the user is given the alert that warns them, "Invalid answer. Please enter a number between 8 and 128".
2. After, the user is prompted with criterias that ask what would the user like for their password to include such as lowercase, uppercase, numbers, and special characters. User must select at least one criteria to be included or else they are given the alert of "Please select at least one criteria".
3. Once user selects at least one desired criteria and they are given a random generated password. In the picture's case, the user selected "OK" to all criteria.

## Additional Pictures
When user enters invalid input for character amount:

![Invalid input for character amount](./asset/image/alert-invalid-number.jpg)

When user fails to select any criteria to include in their generated password:

![Please select at least one criteria](./asset/image/alert-criteria.jpg)

## How to Run Project
1. Go to  this [respository](https://github.com/christylex3/password-generator) on GitHub.
2. Clone it to your computer.
3. Find the `index.html` within the `password-generator` folder and open it with Visual Studio Code.
4. Then launch the `index.html` file to see the website, which should look like [this](https://christylex3.github.io/password-generator/).

## Credits
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor
* https://www.w3schools.com/js/js_string_methods.asp