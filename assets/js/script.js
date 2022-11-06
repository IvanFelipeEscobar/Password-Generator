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
  }
    // alert box displaying number selected 
    alert(`Your password will have ${inputLength} characters`);
    
    //confirm boxes used to set character type preferences (numbers, special characters, upper case and lower case letters)
  inputNumbers = (confirm(`Would you like to include numbers? select OK for YES, CANCEL for NO` ));
    //if-else statement used to indicate in alert box choice made
   if (inputNumbers){
  alert(`Numbers WILL be used in generated password`);
   }  else (alert(`Numbers will NOT be used in  generated password `));

  inputSpecialCharacters = (confirm(`Would you like to include special characters? select OK for YES, CANCEL for NO`));
   if (inputSpecialCharacters){
  alert(`Special characters WILL be used in generated password`);
    }  else (alert(`Special Characters will NOT be used in  generated password `));
 
  inputLowerCase = (confirm(`Would you like to include lower case letters? select OK for YES, CANCEL for NO` ));
   if (inputLowerCase){
  alert(`lower case letters WILL be used in generated password`);
    }  else (alert(`Lower case letters will NOT be used in  generated password `));


  inputUpperCase = (confirm(`Would you like to include upper case letters? select OK for YES, CANCEL for NO`));
   if (inputUpperCase){
  alert(`Upper case letters WILL be used in generated password`);
    }  else (alert(`Upper case letters will NOT be used in  generated password `));

     //loop to invalidate not choosing an attribute, will loop until atleast one attribut has been chosen
     while(inputNumbers === false && inputSpecialCharacters === false && inputLowerCase === false && inputSpecialCharacters === false){
      alert(`You must select atleast one attribute in order to generate password. Try Again.`)
      inputNumbers = (confirm(`Would you like to include numbers? select OK for YES, CANCEL for NO` ));
     //if-else statement used to indicate in alert box choice made
     if (inputNumbers){
     alert(`Numbers WILL be used in generated password`);
     }  else (alert(`Numbers will NOT be used in  generated password `));

    inputSpecialCharacters = (confirm(`Would you like to include special characters? select OK for YES, CANCEL for NO`));
     if (inputSpecialCharacters){
     alert(`Special characters WILL be used in generated password`);
     }  else (alert(`Special Characters will NOT be used in  generated password `));
 
     inputLowerCase = (confirm(`Would you like to include lower case letters? select OK for YES, CANCEL for NO` ));
     if (inputLowerCase){
     alert(`lower case letters WILL be used in generated password`);
     }  else (alert(`Lower case letters will NOT be used in  generated password `));


    inputUpperCase = (confirm(`Would you like to include upper case letters? select OK for YES, CANCEL for NO`));
     if (inputUpperCase){
     alert(`Upper case letters WILL be used in generated password`);
     }  else (alert(`Upper case letters will NOT be used in  generated password `));
     }

 
 
 //create empty array to save selected character attributes to
 
 var characterTypes = []

 //if statements using gathered responses to compile character types for customization. concat will add the cooresponding array, if they were selected on confirm boxes. each succesive if statement will compile (or not) each corresponding array
if (inputNumbers){
  characterTypes = characterTypes.concat(numbers)
   }  

if (inputSpecialCharacters){
    characterTypes = characterTypes.concat(specialChar)
    } 
if (inputLowerCase){
  characterTypes = characterTypes.concat(lowerCase)
    }  
if (inputUpperCase){
  characterTypes = characterTypes.concat(upperCase)
    }  
   console.log(characterTypes);
    
   //custom generated password that will be built based on selected attributes
   var customPassword = ``
// loop will run until input length has been met
   for (var i = 0; i < inputLength; i++) {
                          // math random wil select a random decimal value less than 1, math floor rounds down to largest int <= given number
                          // by multipylying it by array's length it will keep the random selected number to within the selected arrays selections
    customPassword = customPassword+ characterTypes[Math.floor(Math.random() * characterTypes.length)];
    console.log(customPassword)
   }
   return customPassword;
  
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
