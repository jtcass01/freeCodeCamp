
/*

One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift 
cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N',
'B' ↔  'O' and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do 
pass them on.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

    String.prototype.charCodeAt()

    String.fromCharCode()

*/

function rot13(str) { // LBH QVQ VG!
  var arr = [];
  var temp = "";
  var charCount = 0;
  
  for(var i = 0; i < str.length; i++){
    if(isCharacter(str[i])){
      arr.push(str.charCodeAt(i));

 
      if((arr[charCount]-13) < 65){
        arr[charCount] += 13;
      } else {
        arr[charCount] -= 13;
      }
      
  
      temp += String.fromCharCode(arr[charCount]);
      
      charCount++;
    } else {
      temp += str[i];
    }
  }
  
  return temp;
}

function isCharacter(str) {
  return (str.length === 1 && str.match(/[a-z]/i));
} 

          
// Change the inputs below to test
rot13("SERR PBQR PNZC");
