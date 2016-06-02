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
/*function vowels(string) { //Create a function that takes string as a parameter
    var vowelLetters = ["a", "e", "i", "o", "u"];
    for (var i = 0; i < vowels.length; i++) {
        if (string === vowels[i]) {
            return true
        }
    }
    return false;
}
console.log(vowels('alabama'));
console.log(vowels('What evil odd ducks!'));*/


//Part 1
/*function getName (anObj) {
    var name = anObj.name;
    return name;
}

console.log(getName({name: "Luisa", age: 25}));
console.log(getName({name: "Grace", age: 31}));*/

//Part 2
/*function totalLetters (array) {
    var total = 0;
    for (var i = 0; i < array.length; i++) {
        total = total + array[i].length
    }
    return total
}

console.log(totalLetters(['javascript', 'is', 'awesome']));*/

//Part 3
/*function keyValue (a, b) {
    var obj = {};
    obj[a] = b;
    return obj
}

console.log(keyValue('city', 'Denver'));*/

//Part 4
/*function negativeIndex (x, negativeNumber) {
    return x[x.length + negativeNumber];
}

console.log(negativeIndex(['a', 'b', 'c', 'd', 'e'], -2));*/

//Part 5
/*function removeM (string) {
    //returns removes all 'm' characters from the string. 
    return string.replace(/m/g,'');
}
console.log(removeM('family'));
console.log(removeM('memory'));*/

//Part 6
/*function printObject (object) {
    for (var key in object) {
        console.log(key + " is " + object[key]);
    }
}

printObject({ a: 10, b: 20, c: 30 });
printObject({ firstName: 'pork', lastName: 'chops' });*/

//Part 7
/*function vowels (string) {
    var array = string.split("");
    var newArray = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i] === "a" || array[i] === "e" || array[i] === "i" || array[i] === "o" || array[i] === "u") {
            newArray.push(array[i]);    
            }
    }
    return newArray;
}

console.log(vowels('alabama'));
console.log(vowels('What evil odd ducks!'));*/

//Part 8
/*function twins (array) {
    for (var i = 0; i < array.length; i+=2) {
        if (array[i] !== array[i+1] || array[i] === undefined) {
            return false;
        }
    }
    return true;
}

console.log(twins(['a', 'a', 'b', 'b', 'c', 'c']));
console.log(twins(['a', 'a', 'b', 'c', 'd', 'd']));
console.log(twins(['a', 'a', 'b', 'z']));
console.log(twins(['a', 'a', undefined]));*/

//Part 9
/*function or (arrayOfBooleans) {
    //Takes an array of Booleans
    for (var i = 0; i < arrayOfBooleans.length; i++) {
        if (arrayOfBooleans[i] === true) {
            return true
        }

    }
    return false
    //Evaluates them to find out if any of the booleans in the array equals the value true
    //If it finds a true value, the function 
    //returns true immediately and stops checking values
}

console.log(or([false, false, true, false])); //should return true
console.log(or([false, false, false])); //should return false
console.log(or([])); //should return false*/


//Part 10
/*function unique (arrayOfStrings) {
    var newArray = []; //Create the new array that the loop creates
    for (var i = 0; i < arrayOfStrings.length; i++) { //Takes the array of strings and
        if (newArray.indexOf(arrayOfStrings[i]) === -1) { //Filters through them to find the unique values, while ignoring if the ones that aren't unique
            newArray.push(arrayOfStrings[i]);       
        }
    }
    return newArray; //Returns a new array of the unique values/no duplicates
}
console.log(unique(['a', 'b', 'a', 'c', 'd', 'd']));
console.log(unique(['todd', 'avery', 'maria', 'avery']));*/

