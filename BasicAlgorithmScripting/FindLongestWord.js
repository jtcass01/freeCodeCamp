
/*

Return the length of the longest word in the provided sentence.

Your response should be a number.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

    String.prototype.split()

    String.length

*/

function findLongestWord(str) {
  var words = [];
  var largestWord = 0;
  
  words = str.split(" ");
  
  for(var i = 0; i < words.length; i++){
    if(words[i].length > largestWord){
      largestWord = words[i].length;
    }
  }
  
  return largestWord;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
