function firstLetter(inputString) {
       if (inputString) {
        return inputString[0];
    }
    else {
        return undefined;
    }
}

function lastLetter(inputString) {
    if (inputString) {
        return inputString.slice(-1);
    }
    else {
        return undefined;
    }
}

function letterAtPosition(inputString, position) {
    if (inputString) {
        return inputString[position];
    }
}
    

function addTwoNumbers(num1, num2) {
   var result = num1 + num2;
   if(isNaN(num1)||isNaN(num2)){
       return undefined;
   }
   else {
       return num1 + num2;
   }
}


function multiplyTwoNumbers(num1, num2) {
   var result = num1 * num2;
   if(isNaN(num1)||isNaN(num2)){
       return undefined;
   }
   else {
       return num1 * num2;
   }
}

function calculator(operation, num1, num2) {
   if (operation === "add"){
       return (num1 + num2);
   }
   if (operation === "sub"){
       return (num1 - num2);
   }
   if (operation === "mult"){
       return (num1 * num2);
   }
   if (operation === "div"){
       return (num1 / num2);
   }
   else {
       return undefined;
   }
}


function repeatString(inputString, numRepetitions) {
    if (numRepetitions <= 0) {
        return "";
    } 
    else if (numRepetitions) {
        return inputString.repeat(numRepetitions);
    }
       else {
        return undefined;
    }
}

function reverseString(inputString) {

    var splitString = inputString.split('');
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join('');
    return joinArray;
    
}

function longestWord(inputString) {
    
    var splitString = inputString.split(' ');
    console.log(splitString);
    
    var longWord = "";
    
    for (var i= 0; i < splitString.length; i++){
        if(splitString[i].length > longWord.length){
            longWord = splitString[i]; 
        }
    }
    
    return longWord; 
}   
    
function capitalize(inputString) {
    if (inputString) 
        return inputString.toUpperCase();
    }

function sumOfNumbers(arrayOfNumbers) {
    if (typeof arrayOfNumbers !== "object") {
        return
    }
    var total = 0;
    for (var i = 0; i < arrayOfNumbers.length; i++){
        if(typeof arrayOfNumbers[i] !== "number") {
            return
        }
        total += arrayOfNumbers[i];
    }
    return total; 
}

function uniqueElements(array1, array2) {
    var arrayTemp = [];
   
   if (typeof array1 != "object" && typeof array2 != "object") {
       return;
   }
   
   for (var i = 0; i < array1.length; i++) {
       if (array2.indexOf(array1[i]) < 0) {
           arrayTemp.push(array1[i])
       }
   }
   
   for (var j = 0; j < array2.length; j++) {
       if (array1.indexOf(array2[j]) < 0) {
           arrayTemp.push(array2[j])
       }
   }
   return arrayTemp;
}
function isPalindrome(inputString) {
    
inputString = inputString.replace(/[^a-zA-Z ]/g, "").split(" ").join("").toLowerCase()

   var stringLength  = inputString.length;
   for (var i = 0; i < stringLength / 2; i++) {
       if (inputString.charAt(i) !== inputString.charAt(stringLength - 1 - i)) {
           return false;
       }
   }
   return true;
}
function wrapCharacter(inputString) {

}

function wrapWord(inputString) {

}

function bubbleSort(arrayOfNumbers) {

}

/***** DO NOT EDIT AFTER THIS LINE *****/
module.exports = {
    firstLetter: firstLetter,
    lastLetter: lastLetter,
    letterAtPosition: letterAtPosition,
    addTwoNumbers: addTwoNumbers,
    multiplyTwoNumbers: multiplyTwoNumbers,
    calculator: calculator,
    repeatString: repeatString,
    reverseString: reverseString,
    longestWord: longestWord,
    capitalize: capitalize,
    sumOfNumbers: sumOfNumbers,
    uniqueElements: uniqueElements,
    isPalindrome: isPalindrome,
    wrapCharacter: wrapCharacter,
    wrapWord: wrapWord,
    bubbleSort: bubbleSort
};