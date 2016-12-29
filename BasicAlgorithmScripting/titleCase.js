
/*

Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

    String.prototype.split()

*/

function titleCase(str) {
  var words = [];

  str = str.toLowerCase();
  
  words = str.split(" ");
  
  for(var i = 0; i < words.length; i++){
    words[i] = capitalizeFirstLetter(words[i]);
  }
  
  str = words.join(" ");
  
  return str;
}

function capitalizeFirstLetter(str){
  return str.charAt(0).toUpperCase() + str.slice(1);
}

titleCase("I'm a little tea pot");
