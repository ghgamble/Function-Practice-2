//Part 1
/*var luisaObject = {
    name: "Luisa",
    age: 25
};

function getName(object) {
    return object.name;
}

console.log(getName(luisaObject)); */

//Part 2
/*var myArray = ["Grace", "and", "Tajar"];

function totalLetters(array) {
    var totalLength = 0;
    for (var i = 0; i < array.length; i++) {
        totalLength += array[i].length;
    }
    return totalLength;
}

console.log(totalLetters(myArray));*/

//Part 3
/*function keyValue (key, value) {
    var newObject = {};
    newObject[key] = value;
    return newObject;
}

console.log(keyValue("city", "Denver"));*/

//Part 4
/*function negativeIndex (array, negnumber) {
    return array[array.length + negnumber];
}

console.log(negativeIndex(['a', 'b', 'c', 'd', 'e'], -2));
console.log(negativeIndex(['jerry', 'sarah', 'sally'], -1));*/

//Part 5
/*function removeM(string) {//create the function with the parameter "string"
    return string.replace(/m/g, '');//return removed the letter m from the parameter "string"
}
console.log(removeM('family'));
console.log(removeM('memory'));*/

//Part 6
/*function printObject (obj) {//Write a function called printObject that takes "object" as a parameter
    var propertyName;
    for (propertyName in obj) {
        console.log(propertyName + " is " + obj[propertyName]);
    }
}

console.log(printObject({ a: 10, b: 20, c: 30 }));
console.log(printObject({ firstName: 'pork', lastName: 'chops' }));*/

//Part 7
function vowels(string) { //Create a function that takes string as a parameter
    return string.split(/[aeiou]/g);//Removes vowels from the string parameter
    //Turn the vowels from the removeVowels into an array
    
}

console.log(vowels('alabama'));









