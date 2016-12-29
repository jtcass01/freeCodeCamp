/*

Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

Note
You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything lower case in order to check for palindromes.

We'll pass strings with varying formats, such as "racecar", "RaceCar", and "race CAR" among others.

We'll also pass strings with special symbols, such as "2A3*3a2", "2A3  3a2", and "2_A3*3#A2".

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

    String.prototype.replace()

    String.prototype.toLowerCase()

*/
function palindrome(str) {
  var temp1 = "", temp2 = "";
  var array = [];
  //var expression = /\w/gi;
  var expression = /[a-z0-9]/gi;
  
  str = str.toLowerCase();
  
  array = str.split(" ");
  str = array.join("");
  
  str = str.match(expression);
  str = str.toString();

  for(var i = 0; i<str.length ; i++){
    if(str[i] !== ","){
      temp1 += str[i];
    }
  }
  
  
  for(var i = (temp1.length-1); i >= 0; i--){
    temp2 += temp1[i];
  }
  
  
  if(temp1 === temp2){
    return true;
  } else {
    return false;
  }
}
