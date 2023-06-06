let arr = ["I", "want", "to", "go", "home"];
delete arr[1];
console.log(arr);
console.log(arr.length);

let study =["I","study","javascript"];
study.splice(1,1); //from index 1 remove 1 element
study.splice(1,2); //from index 1 remove 2 elements
console.log(study);

//removing and replacing
let course =["I", "study","programming","right","now"];
course.splice(0,3,"lets", "dance"); //from index 0, remove 3 elements and replace it with lets dance
console.log(course);

//removing
let food =["chapo","beans","rice","kuku","meat"];
food.splice(0,2); //from index 0, removes 2 elements
console.log(food); // rice, kuku, meat is returned

//inserting elements using splice
let names =["I","love", "programming","using","javascript"];
names.splice(5,0,"complex","language");
console.log(names);

//negative indexes are allowed
let num =[1,2,5];
num.splice(-1, 0,3,4);
console.log(num);

//array slice method
//it is much simpler than arr.splice() method
let tryName =["t","e","s","t"];
console.log(tryName.slice(1,3));
console.log(tryName.slice(-2));
//arr.slice() method also creates a copy of the original array
console.log(tryName.slice());

//concat
//it creates a new array that includes values from other arrays and additional items
let digits = [1,2];
console.log(digits.concat(3,4));
console.log(digits.concat([3,4],[5,6]));

//normally it only copies elements from arrays
let arrays =[1,2];
let arrayLike={
    0:"something",
    1:"else",
    length:2,
    [Symbol.isConcatSpreadable]:true,
}
console.log(arrays.concat(arrayLike));

//iterate:forEach
//The arr.forEach method allows to run a function for every element of the array.
let visitors =["Bilbo", "Gandalf", "Nazgul"];
visitors.forEach((visitor,index,array) =>{
    console.log(visitor);
    console.log(`${visitor} is at index  ${index} in ${array}`);
});

//searching in an array
//indexOf/lastIndexOf and includes
//arr.indexOf(item, from) and arr.includes(item, from) have the same syntax and work similarly the same
//arr.indexOf(item, from) looks for item from index from, returns the index where it was found, otherwise -1
//arr.includes(item, from) looks for item from index from, returns true if found.

let nums =[1,2,false];
console.log(nums.indexOf(1));
console.log(nums.indexOf(2));
console.log(nums.indexOf(false));
console.log(nums.indexOf(null));

//using includes
console.log(nums.includes(false));
//using lastIndexOf
//it works the same as indexOf, but looks from right to left
let fruits =["Apple","Orange","Apple","Mango"];
console.log(fruits.indexOf('Apple'));
console.log(fruits.lastIndexOf('Apple'));

const things=[NaN];
console.log(things.indexOf(NaN)); //return -1, which is wrong
console.log(things.includes(NaN)); // returns true

//an array of users
let users = [
    {id: 1, name: "John"},
    {id: 2, name: "Pete"},
    {id: 3, name: "Mary"},
    {id: 1, name: "John"},
  ];

//find the name of the person with id==1
let results =users.find(user=> user.id===1);
console.log(results);
console.log(results.name);
// Find the index of the first John
let results2 = users.findIndex(user=>user.name==="John");
console.log(results2);
// Find the index of the last John
let results3 = users.findLastIndex(user=>user.name==="John");
console.log(results3);

//filter
// The find method looks for a single (first) element 
// that makes the function return true.If there may be many, we can use arr.filter(fn).
let websiteUsers = [
    {id: 1, name: "John"},
    {id: 2, name: "Pete"},
    {id: 3, name: "Mary"}
  ];

  // returns array of the first two users with less than 3 id
  let results4 = websiteUsers.filter(user=> user.id < 3);
  console.table(results4);
  console.log(results4.length);

  //transform an array
  //map
  let apartments =["Chinese","marakwet","soweto","Ngara","Desai"]
  let results5 = apartments.map(apartment=>{
    return apartment.length;
  })
console.log(results5);
//sort()
//sorts the array in place, changing its element order
function compare(a,b){
    if(a > b) return 1;
    if(a===b) return 0;
    if(a < b) return -1;
}
let people=[1,8,15,6];
let results6 = people.sort(compare);
console.log(results6);

[1, -2, 15, 2, 0, 8].sort(function(a, b) {
    console.log( a + " <> " + b );
    return a - b;
  });

  let matunda =[1,23,67,3,5,6,10];
  let results7= matunda.sort((a,b)=>a-b);
  console.log(results7);

//   Use localeCompare for strings
let countries = ['Österreich', 'Andorra', 'Vietnam'];
let results8= countries.sort((a,b)=>a.localeCompare(b));
console.log(results8);

//reverse
//the method arr.reverse reverses the order of elements in an array
let num1 =[1,2,3,8,9,7];
num1.reverse();
console.log(num1);

let str =["java","javascript","html","python","react"];
str.reverse();
console.log(str);

//split and join
//str.split(delim) splits string into an array by the given delimit
let schools = "Nyabisawa,Oyugi ogango,Nyamira,Oriwo,Jonyo";
let str1 = schools.split(', ');
console.log(str1);
for(let school of str1){
    console.log(`a message to ${school}.`);
}

//split into letters
let value ="test";
let str2 = value.split("");
console.log(str2); 
let rev = str2.reverse();
console.log(rev);
let joins = rev.join("");
console.log(joins);

//arr.join() does the reverse to split
//creates a string of array of item joined by a glue between them
let words =['my','name','is','vivian'];
let str3 = words.join(';');
console.log(str3);

//reduce/reduceRight
let add =[1,2,3,4,5];
let result9 =add.reduce((accumulator,item)=>(accumulator + item),0);
console.log(result9);

//array.isArray()
//arrays do not form a separate language type
console.log(Array.isArray({}));
console.log(Array.isArray([]));


console.log(typeof {});
console.log(typeof []);


