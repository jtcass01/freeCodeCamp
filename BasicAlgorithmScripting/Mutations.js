

/*

Return true if the string in the first element of the array contains all of the letters of the string in the second
element of the array.

For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in
the first, ignoring case.

The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".

Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

    String.prototype.indexOf()

*/

function mutation(arr) {
  var word1 = "", word2 = "";
  
  if(arr[0].length < arr[1].length){
    word1 = arr[0];
    word2 = arr[1];
  } else {
    word1 = arr[1];
    word2 = arr[0];
  }
  
  word1 = word1.toLowerCase();
  word2 = word2.toLowerCase();
  
  for(var i = 0; i < word1.length; i++){
    if(word2.indexOf(word1.charAt(i)) === -1){
       return false;
    } 
  }
  
  return true;
}

mutation(["Mary", "Army"]);
