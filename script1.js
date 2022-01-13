// Assignment code here
function lowercase() {
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    return alphabet[Math.floor(Math.random() * alphabet.length)]
}
console.log(lowercase());

function uppercase() {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    return alphabet[Math.floor(Math.random() * alphabet.length)]
}
console.log(uppercase());

function number() {
    const number = "0123456789"
    return number[Math.floor(Math.random() * number.length)]
}
console.log(number());

function specialchar() {
    const specialchar = "!@#$%^&*()<>;'+-_/?"
    return specialchar[Math.floor(Math.random() * specialchar.length)]
}
console.log(specialchar());


var passwordlength = window.prompt("Please choose a password length of 8 to 128 characters");
while (passwordlength < 8 || passwordlength > 128) {
  alert("Password must be between 8 and 128 characters");
  var passwordlength = window.prompt("Please choose a password length of 8 to 128 characters");
} 
console.log(passwordlength);

var lowerCase = window.confirm("Would you like to include lowercase characters?");
if (lowerCase === true); {
    lowercase(); 
    }
console.log(lowerCase);

var upperCase = window.confirm("Would you like to include uppercase characters?");
if (upperCase === true); {
    uppercase(); 
}
  console.log(upperCase);

var numeric = window.confirm("Would you like to include numeric characters?");
if (numeric === true); {
    number();  
}
  console.log(numeric);

var specialChar = window.confirm("Would you like to include special characters?");
if (specialChar === true); {
    specialchar();
}
  console.log(specialChar);

// function gather() {}
//  if(lowerCase()){
//     lowercase();
// }
// console.log(gather);



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
