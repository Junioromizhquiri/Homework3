
var specialCharacters = [
   '@', '%', '.', ',', '/', '?','>', '<', ';', ':', '[', ']', '[', '{', '}', '=', '-', ')', '(', '*', '&', '^', '$', '#', '!', '_', '+' ];

var numericCharacters = [
  '1', '2', '3', '4', '5', '6', '7', '8', '9', '0' ];

var lowerCasedCharacters = [
  'a', 'b', 'c', 'v', 'b', 'n', 'm' ,'z', 'x', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p' ];

var upperCasedCharacters = [
    'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P' ];

  function getPasswordOptions() {
    var length = parseInt(
      prompt("How many characters would you like your password to have")
    );

    if (isNaN(length) === true) {
      alert("Please provide a number of characters you would like");
      return;
    }

    if (length < 8) {
      alert("Password cannot be less than 8 characters")
      return;
    }

    if (length > 128) {
      alert("Password cannot be more than 128 characters")
      return;
    }

    var hasSpecialCharacters = confirm("Click Ok to confirm including special charaters."
    );
    
    var hasNumericCharacters = confirm("click Ok to confirm including numeric characters."
    );

    var hasLowerCasedCharacters = confirm("click Ok to confirm including lowercase characters."
    );

    var hasUpperCasedCharacters = confirm("click Ok to confrim including uppercase characters."
    );

    if (
      hasSpecialCharacters === false &&
      hasNumericCharacters === false &&
      hasLowerCasedCharacters === false &&
      hasUpperCasedCharacters === false
    ) {
      alert("must have at least one of these (Lowercase, Uppercase, SpecialCharacters, NumericChareacters, characters");
      return;
    }

    var passwordOptions= {
      length: length,
      hasSpecialCharacters: hasSpecialCharacters,
      hasNumericCharacters: hasNumericCharacters,
      hasLowerCasedCharacters: hasLowerCasedCharacters,
      hasUpperCasedCharacters: hasUpperCasedCharacters
    };
    return passwordOptions;
  }

function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex];

  return randElement;
}
function generatePassword() {
  var options = getPasswordOptions();
  var result = [];
  var possibleCharacters = [];
  var guaranteedCharacters = [];

  if (options.hasSpecialCharacters) {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
    guaranteedCharacters.push(getRandom(specialCharacters));
  }
  if (options.hasNumericCharacters) {
    possibleCharacters = possibleCharacters.concat(numericCharacters);
    guaranteedCharacters.push(getRandom(numericCharacters));
  }
  if (options.hasLowerCasedCharacters) {
    possibleCharacters = possibleCharacters.concat(lowerCasedCharacters);
    guaranteedCharacters.push(getRandom(lowerCasedCharacters));
  }
  if (options.hasUpperCasedCharacters) {
    possibleCharacters = possibleCharacters.concat(upperCasedCharacters);
    guaranteedCharacters.push(getRandom(upperCasedCharacters));
  }
  for (var i = 0; i <options.length; i++) {
    var possibleCharacter = getRandom(possibleCharacters);
    result.push(possibleCharacter);
  }
  for (var i = 0; i < guaranteedCharacters.length; i++) {
result[i] = guaranteedCharacters[i];
  }
  return result.join('');
}

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
