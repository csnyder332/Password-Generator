Assignment code here


Get references to the #generate element
var generateBtn = document.querySelector("#generate");

Write password to the #password input
function generatePassword() {
    
  var passwordlength = window.prompt("Please choose a password length of 8 to 128 characters");
  if (passwordlength < 8 || passwordlength > 128) {
    alert("Password must be between 8 and 128 characters");
    return false;
  } console.log(passwordlength);

  var lowerCase = window.confirm("Would you like to include lowercase characters?");
  if (lowerCase === true); {
    return true;
  
  var upperCase = window.confirm("Would you like to include uppercase characters?");
  if (upperCase === true); {
   
  }
  var numeric = window.confirm("Would you like to include numeric characters?");
  if (numeric === true); {
    
  }
  var specialCharacters = window.confirm("Would you like to include special characters?");
  if (specialCharacters === true); {
    alert("Password must be contain at least 1 special character");
  }

  var type = [];*/

  function lowerCase() {
      const alphabetlower = str.split('abcdefghijklmnopqrstuvwxyz');
      console.log(alphabetlower[26]);
  }
  
 

  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);

