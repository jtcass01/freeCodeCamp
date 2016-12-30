
/*

Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

    Array.prototype.push()

    Array.prototype.slice()

*/


function chunkArrayInGroups(arr, size) {
  // Break it up.
  var temp = [];
  var pairs = arr.length / size;
  
  
  for(var i = 0; i < pairs; i++){
    temp.push(arr.slice(i*size, i*size+size));
  }
    
  return temp;  
}

 chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2);
