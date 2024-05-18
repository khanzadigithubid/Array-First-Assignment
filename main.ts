//Q.1: Create an array named fruits that contains the following string elements: "apple", "banana", "mango", "orange".

let fruitsName: string[] = ["apple", "banana", "mango", "orange"];
console.log(fruitsName);

//Q.2: Declare an array named numbers that can contain only number elements and initialize it with the values 10, 20, 30, and 40.

let numbers: number[] = [10, 20, 30, 40];
console.log(numbers);

//Q.3: Access the third element of the fruits array and assign it to a variable named thirdFruit.

let fruitsNames: string[] = ["apple", "banana", "mango", "orange"];
let thirdFruit = fruitsName[2];
console.log(thirdFruit);

//Q.4: Change the second element of the numbers array to 25.

let changeNumber: number[] = [10, 20, 30, 40];
changeNumber[1] = 25;
console.log(changeNumber);

//Q.5: Add the element "grape" to the end of the fruits array using the method.

let fruits: string[] = ["apple", "banana", "mango", "orange"];
fruits.push("grape");
console.log(fruits);

//Q.6: Remove the last element from the fruits array using the method and assign it to a variable named lastFruit.

let lastFruit: string[] = ["apple", "banana", "mango", "orange"];
lastFruit.pop();
console.log(lastFruit);

//Q.7: Remove the first element from the fruits array using the method and assign it to a variable named firstFruit.

let firstFruit: string[] = ["apple", "banana", "mango", "orange", "grape"];
firstFruit.shift();
console.log(firstFruit);

//Q.8: Add the element "kiwi" to the beginning of the fruits array using the method.

let fruit: string[] = ["apple", "banana", "mango", "orange"];
fruit.unshift("kiwi");
console.log(fruit);

//Q.9: Remove 2 elements from the fruits array starting from index 1 using the method.

let fr: string[] = ["apple", "banana", "mango", "orange", "grapef", "peach"];
fruits.splice(1, 2);
console.log(fr);


//Q.10: Insert the elements "pineapple" and "pear" at index 2 of the fruits array using the method.

let fru: string[] = ["apple", "banana", "mango", "orange"];
fruits.splice(2, 0, "pineapple", "pear");
console.log(fru);

//Q.11: Create a new array named citrusFruits that contains the first two elements of the fruits array using the method.

let frui: string[] = ["apple", "banana", "mango", "orange", "grape", "peach"];
let citrusFruits: string[] = frui.slice(0, 2);
console.log(citrusFruits);

//Q.12: Create a new array named lastTwoFruits that contains the last two elements of the fruits array using the method.

let frt: string[] = ["apple", "banana", "mango", "orange", "grapefruit", "lemon"];
let lastTwoFruits: string[] = frt.slice(-2);
console.log(lastTwoFruits);