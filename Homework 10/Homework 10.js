//homework 1

function filterNumbersArr(numbers) {
  return numbers.filter(function(x) {
      return x > 0;
    });
}

//homework 2

function findFirstPositive(array){
  var foundNum = array.find(function(number) {
    return number >= 0;
  });
  return foundNum;
}

//homework 3

function isPalindrome(str) {
  var reverse = str.toLowerCase()
                   .split('')
                   .reverse()
                   .join('');
  return str.toLowerCase() == reverse;
}

//homework 4

function areAnagrams(str1, str2) {
  str1 = str1.toLowerCase()
             .split('')
             .sort()
             .join('');

  str2 = str2.toLowerCase()
             .split('')
             .sort()
             .join('');
  return str1 == str2;
}

//homework 5

function divideArr(array, divider) {
  var output = [];
  while(array.length >= divider){
    var innerArray = array.splice(0, divider);
    output.push(innerArray);
  }
  if (array.length !== 0) {
    output.push(array);
  }
  return output;
}