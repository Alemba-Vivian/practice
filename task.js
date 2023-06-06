// Write the function camelize(str) that changes dash-separated words like 
// “my-short-string” into camel-cased “myShortString”.
// That is: removes all dashes, each word after dash becomes uppercased.

function camelize(str){
 return str
 .split("-")
 .map((str1, index)=>(index===0) ? str1: str1[0].toUpperCase() + str1.slice(1))
 .join("");
    
}
console.log(camelize("background-color"));

// Write a function filterRange(arr, a, b) that gets an array arr,
// looks for elements with values higher or equal to a and 
// lower or equal to b and return a result as an array.
// The function should not modify the array. It should return the new array.

function filterRange(arr, a, b){
    let results = arr.filter(item=>{
        if(item >= a && item <= b){
            return true;
        }
     })
    return results;
}
console.log(filterRange([5, 3, 8, 1], 1, 4));

// Write a function filterRangeInPlace(arr, a, b) that gets an array arr 
// and removes from it all values except those that are between a and b. 
// The test is: a ≤ arr[i] ≤ b.
// The function should only modify the array. It should not return anything.

function filterRangeInPlace(arr, a, b){
    for(let i =0; i < arr.length; i++){
        let val = arr[i];
      //remove if outside the interval
        if(val < a || val > b){
            arr.splice(i, 1);
            i--;
        }
    }
}
let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4

console.log( arr ); // [3, 1]


//sort in decreasing order
let arr2 = [5, 2, 1, -10, 8];

// ... your code to sort it in decreasing order
let result = arr2.sort((a,b)=>b-a);
console.log( arr2 ); // 8, 5, 2, 1, -10

//copy and sort array
// We have an array of strings arr. 
// We’d like to have a sorted copy of it, but keep arr unmodified.
// Create a function copySorted(arr) that returns such a copy.

function copySorted(arr){
return arr.slice().sort();
 

}

let arr3 = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(arr3);

console.log( sorted ); // CSS, HTML, JavaScript
console.log( arr3); // HTML, JavaScript, CSS (no changes)

//create an extendable calculator
// Create a constructor function Calculator that creates “extendable” calculator objects.
// The task consists of two parts.
// First, implement the method calculate(str) that takes a string like "1 + 2" in 
// the format “NUMBER operator NUMBER” (space-delimited) and returns the result.
//  Should understand plus + and minus -.





