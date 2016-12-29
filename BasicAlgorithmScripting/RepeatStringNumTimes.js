
/*

Repeat a given string (first argument) num times (second argument). Return an empty string if num is not a positive number.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

    Global String Object

*/


function repeatStringNumTimes(str, num) {
  // repeat after me
  var result = "";
  
  for(var i = 0; i < num; i++){
    result += str;
  }
  
  return result;
}

repeatStringNumTimes("abc", 3);
