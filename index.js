
// Problem 1:Write a function named calculateDifference that takes two arguments and returns the difference between the first and second argument.

function calculateDifference(num1 , num2){
      return num1-num2;
} 

console.log(`Difference is: ${calculateDifference(10,2)}`);

// Problem 2:Write a function named isOdd that takes one argument and returns true if the number is odd, and false if it is not.

function isOdd(num){
   return num%2!==0;
    
}
console.log(`Is given number is odd? : ${isOdd(1)}`);

// Problem 3: Write a function named findMin that takes an array of numbers and returns the smallest number in the array.

function findMin(numbers){
   numbers.sort(function(a,b){
    return a-b;
   });
   return numbers[0];
}

console.log(`The smallest number is : ${findMin([11,69,445234,765,4,3])}`);


// Problem 4: Write a function named filterEvenNumbers that takes an array of numbers and returns a new array containing only the even numbers.

function filterEvenNumbers(numbers){
    return numbers.filter(x=> x%2===0 );

}
console.log(`The even numbers are : ${filterEvenNumbers([11,69,44,766,4,3])}`);


// Problem 5:Write a function named sortArrayDescending that takes an array of numbers and returns a new array sorted in descending order.

function sortArrayDescending(numbers){
    return numbers.sort(function(a,b){
        return b-a;
       });
}

console.log(`Sorted array in a descending order : ${sortArrayDescending([1,2,3,4,5,6,7,8])}`);

// Problem 6:Write a function named lowercaseFirstLetter that takes a string and returns the same string with the first letter lowercased.

function lowercaseFirstLetter (str){
    
     return str.charAt(0).toLowerCase().concat(str.slice(1)) ;
    
}

console.log(`String: ${lowercaseFirstLetter('DESHA')}`);


// Problem 7:Write a function named countVowels that takes a string and returns the number of vowels (a, e, i, o, u, A, E, I, O, U) in the string. It should filter vowels from the string.

function countVowels(string){
      let stringArray= Array.from(string);
      let vowels=['a','e','i','o','u','A','E','I','O','U'];
      let found=stringArray.filter(x=>vowels.includes(x));
      let foundLength= found.length;
      return {found , foundLength};
}
let {found , foundLength}=countVowels('Desha Das');
console.log(`Number of vowel in the String: ${foundLength} and the vowels are: ${found}`);

// Problem 8: Write a function named findAverage that takes an array of numbers and returns the average of all elements.

function findAverage(numbers){
   return numbers.reduce((sum,value)=> sum+=value)/(numbers.length);
}
console.log(`Average value : ${findAverage([1,2,3,4,5,6,7,8])}`);