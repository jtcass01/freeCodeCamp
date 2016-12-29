
/*

function truncateString(str, num) {
  // Clear out that junk in your trunk
  if(str.length > num){
    if(num===1 || num === 2 ){
      return str.slice(0,num) + "...";
    } else {
      return str.slice(0,(num-3)) + "...";
    }
  } else {
    return str;
  }
}

truncateString("Absolutely Longer", 2);

*/


function truncateString(str, num) {
  // Clear out that junk in your trunk
  if(str.length > num){
    if(num===1 || num === 2 ){
      return str.slice(0,num) + "...";
    } else {
      return str.slice(0,(num-3)) + "...";
    }
  } else {
    return str;
  }
}

truncateString("Absolutely Longer", 2);
