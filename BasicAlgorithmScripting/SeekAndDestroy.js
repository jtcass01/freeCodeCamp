
/*

You will be provided with an initial array (the first argument in the destroyer function), followed by one or more 
arguments. Remove all elements from the initial array that are of the same value as these arguments.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

    Arguments object

    Array.prototype.filter()

*/


function destroyer(arr) {
  // Remove all the values
  var args = Array.prototype.slice.call(arguments,1);

  arr = arr.filter(function (value){
    for(var i = 0; i < args.length; i++){
      if(args[i] === value){
        return false;
      }
    }
    return true;
  });
  
  return arr;
}

destroyer([3, 5, 1, 2, 2], 2, 3, 5);
