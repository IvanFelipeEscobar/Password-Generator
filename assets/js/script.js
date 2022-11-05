// Assignment Code
//generate button selector
var generateBtn = document.querySelector("#generate");
// arrays of different character types available for randomization
var numbers = [`0`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`]
var specialChar = [`~`, `!`, `@`, `#`, `$`, `%`, `^`, `&`, `*`, `/`, `_`, '?', ':', `+`]
var lowerCase = [`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`, `j`, `k`, `l`, `m`, `n`, `o`, `p`, `q`, `r`, `s`, `t`, `u`, `v`, 'w', `x`, `y`, `z`]
var upperCase = [`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`, `L`, `M`, `N`, `O`, `P`, `Q`, `R`, `S`, `T`, `U`, `V`, `W`, `X`, `Y`, `Z`]

//randomization customization variables
var inputLength = ``
var inputNumbers
var inputSpecialCharacters
var inputLowerCase
var inputUpperCase


function generatePassword() {
  inputLength = (prompt(`Enter value between 8-128 to set the length of generated password`));
    //loop to set length within specified expected range
  while(inputLength < 8 || inputLength > 128) {
    alert("Password length must be between 8-128 characters Try again");
    var inputLength = (prompt(`Enter value between 8-128 to set the length of generated password`))

    // alert box displaying number selected 
    alert(`Your password will have ${inputLength} characters`);}

 //confirm boxes used to set character type preferences (numbers, special characters, upper case and lower case letters)
return inputLength;
  
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
