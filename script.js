// Assignment code here
var generateBtn = document.querySelector("#generate");

function generatePassword() {

  var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var specialchar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+"];
  var answers = [];
  var pword = [];

  var passwordlength = window.prompt("Please choose a password length of 8 to 128 characters");
  while (passwordlength < 8 || passwordlength > 128) {
    alert("Password must be between 8 and 128 characters");
    var passwordlength = window.prompt("Please choose a password length of 8 to 128 characters");
  }
  console.log(passwordlength);

  var lowerCase = window.confirm("Would you like to include lowercase characters?");

  var upperCase = window.confirm("Would you like to include uppercase characters?");

  var numeric = window.confirm("Would you like to include numeric characters?");

  var specialCharacters = window.confirm("Would you like to include special characters?");

  if (lowerCase) {
    answers = answers.concat(lowercase);
  }
  if (upperCase) {
    answers = answers.concat(uppercase);
  }
  if (numeric) {
    answers = answers.concat(numbers);
  }
  if (specialCharacters) {
    answers = answers.concat(specialchar);
  }

  for (var i = 0; i < passwordlength; i++) {
    pword.push(answers[Math.floor(Math.random() * answers.length)]);
  }

  return pword.join("");
}

// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function copyToClipboard() {
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

