
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
