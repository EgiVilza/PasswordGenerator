// Assignment Code
var generateBtn = document.querySelector("#generate");

//Arrays
var characters = "asdfghjklzxcvbnmqwertyuiop"
var numbers = "1234567890"
var special = "!@#$%^&*()"
var charactersSplit = characters.split("")
var numbersSplit = numbers.split("")
var specialSplit = special.split("")
var generator = []
var password = []

// Write password to the #password input
function writePassword() {

  //var password = generatePassword();
  var passwordText = document.querySelector("#password");

  //Clear the fields from previous runs
  passwordText.value = ""
  generator = []
  password = []
  
  //For validating first Criteria
  var validCriteria = false;

  //Re-prompts the users until it has selected a valid character length
  while (validCriteria == false) {
    var charCriteria = prompt("Please Select Criteria: Length of characters (8 to 128)")
    if ((charCriteria > 7) && (charCriteria < 129)) {
      validCriteria = true
    }
  }
  
  //Character types criteria
  var typesCriteria = confirm("Please Select Criteria: Include Character types?")

  /*If Character types are chosen, users is given the option of choosing which
  types of characters to use*/
  if (typesCriteria == true) {
    var lowercaseCriteria = confirm("Please Select Criteria: Lowercase?")
    var uppercaseCriteria = confirm("Please Select Criteria: Uppercase?")
    var numericCriteria = confirm("Please Select Criteria: Numeric")
    var specialCriteria = confirm("Please Select Criteria: Special Characters");
  }
  

  //Adds the critera to the array named "generator"
  if (typesCriteria == true) {
    if (lowercaseCriteria == true) {
      for (var i = 0; i < charactersSplit.length; i++){
        generator.push(charactersSplit[i])
      }
    }
    if (uppercaseCriteria == true){
      for (var i = 0; i < charactersSplit.length; i++){
        generator.push(charactersSplit[i].toUpperCase())
      }
    }
    if (numericCriteria == true) {
      generator = generator.concat(numbersSplit)
    }
    if (specialCriteria == true) {
      generator = generator.concat(specialSplit)
    }
  }
  else {
    //If no criteria selected, that only characters are added into the generator
    generator = charactersSplit
  }

  //Randomizes an item from the generator array and pushes in onto the password array
  var randomizedGenerator = 0;
  for (var i = 0; i < charCriteria; i++) {
    randomizedGenerator = Math.round((Math.random() * (generator.length - 1)))
    password.push(generator[randomizedGenerator])
  }
  
  //displays the password array without the commas
  password = password.join('')
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

