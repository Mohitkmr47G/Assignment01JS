// Q.01-Create a javascript file, using javascript comments, List all the datatypes of Javascript, and specify an 
// example for each of them.

// Ans-    String : "I m Mohit Kumar"
//         Number : 10
//         NaN : Not a Nummber
//         boolean : true/false
//         BigInt :  7465
//         Undefined : ndefined
//         Null : null
//         Symbol : Symbol
//         Array : [1, 2, "Mohit", true]
//         Object: {id: 101, name: "Mohit", Course: "Full Stack Web Development"} 


// Q.02- Create an array of 10 products that you have recently purchased or viewed on an e-commerce site

// Ans- let Array = 
// ["Phone", "Laptop", "Ipad", "Fridge", "AC", "Study Table", "TV", "Headphone", "Books"]

// 3. Create an object of a student registry of 5 students whose key is the registration number and the value is the student name. Registration number starts from 1 and continues.

// Ans- let obj =
//  { 
//     01:"Mohit"
//     02:"Harsha"
//     03:"Karan"
//     04:"Varsha"
//     05:"Maya" 
//  }

//04 Specify an example for all the datatypes in Javascript, store the values in a variable, and verify the type of value stored.

                    // String
// Ans-  let Name = "Hello, I m PW Skills Student"
// console.log(typeof Name); 

            // Number
//   let var1 = 100;
//   console.log(typeof var1);
                       
        // Floating
// let var2 = 50.10;
// console.log(typeof var2);
                          
            // NaN
//  let var3 = NaN;
//  console.log(typeof var3);
           
        // BigInt
// let BigInt = 7512;
// console.log(typeof BigInt);
               
        // Boolean
// let bool = true;
// console.log(typeof bool);
           
        // Undefined
// let var4 = undefined;
// console.log(typeof var4);
           
        // NUll
// let var5 = null;
// console.log(var5);
            
        // Symbol
// let var6 = Symbol ("Hello");
// console.log(typeof var6);
            
        // Array
// let var7 = [1, 3, "Mohit", true]
// console.log(typeof var7);
               
        // Object
// let var8 = {
//     id:101,
//     Name:"Mohit",
//     Age:20
// }
// console.log(typeof var8);


// 2. Create 2 valid variables and 2 invalid variables and print them onto the console. Comment the results and error messages.

        // valid Variables
//  Ans - let name = "Mohit";
// console.log(name); output: Mohit

// let age = 20;
// console.log(age);  output: 20


            // Invalid Variables

    // let 2name = "mohit"
    // console.log(2name);  Output: SyntaxError: Invalid or unexpected token

    // let var = 20;
    // console.log(var);   Output: SyntaxError: Unexpected token 'var'




    // Write a program that prints the multiplication table in the textbook format of any number specified
	
	// let n = 5;
	// for (let i = 1; i <= 10; ++i)
	// 	console.log(n + " * " + i +
	// 		" = " + n * i);



    // Write a program to perform all the arithmetic operations[except increment and decrement operators] of javascript of any two numbers stored in the variables num1 and num2. Also, print the results to the console.

//      let x = 5;
//         let y = 2;
//        let addition = x + y;
//        let substraction = x - y;
//        let multiplication = x*y;
//        let division = x/y;
//        let modulus = x%y;
//        let power = x**y;

// console.log("Addition of x and y:" + addition);
// console.log("substraction of x and y:" + substraction);
// console.log("multiplication of x and y:" + multiplication);
// console.log("division of x and y:" + division);
// console.log("modulus of x and y:" + modulus);
// console.log("power of x and y:" + power);


// Write a program to find out the perimeter of a rectangle. Print the results to the console.



	// function areaRectangle(a, b) {
	// 	let area = a * b;
	// 	return area;
	// }

	// function perimeterRectangle(a, b) {
	// 	let perimeter = 2 * (a + b);
	// 	return perimeter;
	// }
	// let a = 5;
	// let b = 6;
	// console.log("Area = " + areaRectangle(a, b));
	// console.log("Perimeter = " + perimeterRectangle(a, b));


//         Write a program to demonstrate the results of comparison operators. Note that both the truth and false 
// condition for each operator must be specified.


//  greater than

// let val_1 = 40 > 54; 
// console.log(val_1) // returns false

// less than

// let val_2 = 40 < 54; 
// console.log(val_2); // returns true

// greater than or equal to

// let val_3 = 15 >= 20; 
// console.log(val_3); // returns false

// less than or equal to

// let val_4 = 15 <= 20; 
// console.log(val_4); // returns true

// equal to

// let val_5 = 7 == '7'; // returns true
// console.log(val_5);

// strict equal to

// let val_6 = 7 === '7'; // returns false
// console.log(val_6);

// not equal to

// let val_7 = 7 != '7'; // returns false
// console.log(val_7);

// strict not equal to

// let val_8 = 7 !== '7'; // returns true
// console.log(val_8);

// compare numbers

// let a = 5;
// let b = 10; 
// console.log(a > b);  // false 
// console.log(a < b); // true


// compare strings

// let str_1 = 'Good';
// let str_2 = 'Bad';
// let str_compared = str_2 < str_1;

// // 1st output
// console.log(str_compared); // true

// // 2nd output
// console.log(str_1.charCodeAt(0)); // output is 71

// // 3rd output
// console.log(str_2.charCodeAt(0)); // output is 66


// Write a program of traffic control that accepts the traffic light displayed and prints the message. If the traffic light is red print the vehicles must stop.


// var signal = ["green", "yellow", "red"];

// if (signal == "red") {
//     console.log("Danger");
// }

// else if (signal == "yellow") {
//     console.log("Stop");
// }

// else {
//     console.log("Cross the road");
// }


// Write a program to print the largest of 2 numbers.


// let input1 = parseInt(prompt("Enter first number:"));
// let input2 = parseInt(prompt("Enter second number:"));
// if (input1 == input2) {
//     console.log(input1 + " is equal to " + input2);
// } else if (input1 > input2) {
//     console.log(input1 + " is larger than " + input2);
// } else {
//     console.log(input1 + " is lesser than " + input2);
// }


// Write a program that takes a number as input and outputs "Fizz" if it is divisible by 3, "Buzz" if it is divisible by 5, and "FizzBuzz" if it is divisible by both 3 and 5. Note that any number can be passed and not restricted to the numbers divisible by 3 or 5.

// let i;
// for (i=1; i<=100; i++)
// {
//     // number divisible by 3 and 5 will
//     // always be divisible by 15, print
//     // 'FizzBuzz' in place of the number
//     if (i%15 == 0)   
//         document.write("FizzBuzz" + " ");
     
//     // number divisible by 3? print 'Fizz'
//     // in place of the number
//     else if ((i%3) == 0)
//         document.write("Fizz" + " ");               
     
//     // number divisible by 5, print 'Buzz'
//     // in place of the number
//     else if ((i%5) == 0)                   
//         document.write("Buzz" + " ");               
 
//     else // print the number       
//         document.write(i + " ");               
// }



// Write a program that takes in a day of the week (e.g., Monday, Tuesday, etc.) and outputs the number of days until the weekend.


// const day = "Tuesday"; let daysUntilWeekend;
// switch (day) {
// case "Monday":
// console.log(`There are 5 day(s) until
// break;
// case "Tuesday":
// console.log(There are 4 day(s) until
// break;
// case "Wednesday":
// console.log(There are 3 day(s) until
// break;
// case "Thursday":
// console.log(There are 2 day(s) until
// break;
// case "Friday":
// console.log(`There are 1 day(s) until
// break;
// case "Saturday":
// case "Sunday":
// console.log(There are 0 day(s) until
// break;
// default:
// daysUntilWeekend = "Invalid day";
// break;




// Write a program that takes in a number between 1 and 12 and outputs the corresponding month of the year.

// const monthNumber = 1;
// switch (monthNumber) {
// case 1:
// console.log("January");
// break;
// case 2:
// console.log("February");
// break;
// case 3:
// console.log("March");
// break;
// case 4:
// console.log("April");
// break;
// case 5:
// console.log("May");
// break;
// case 6:
// console.log("June");
// break;
// case 7:
// console.log("July");
// break;
// case 8:
// console.log("August");
// break;
// case 9:
// console.log("September");
// break;
// case 10:
// console.log("October");
// break;
// case 11:
// console.log("November");
// break;
// case 12:
// console.log("December");
// break;
// default:
// console.log("Invalid month number");
// }


// Write a program that takes in a number and outputs whether it is positive, negative, or zero.

// let number = 0; number == 0
// ? console.log("The number is zero")
// : number > 0
// ? console.log("The number is greater than zero")
// : console.log("The number is lesser than zero");


// Create a program that takes in two numbers and prints the larger one

// let num1
// =
// 10;
// let num2 = 10;
// num1 == num2
// ? console.log("Both the numbers are equal.")
// : num1 > num2
// ? console.log(`The larger number among the two numbers is ${num1}.`)
// : console.log(The larger number among the two numbers is ${num2}.`);


// Write a program that generates the multiplication table in the textbook format for a given number

// let number = 5;
// for (let i = 1; i <= 10; i++) {
// }
// console.log(${number} * ${i} = ${number * i}`);


// Write a program that prints all the positive even numbers till the number specified


// let number = 10;
// for (let i = 1; i <= number; i++) {
// if (i % 2 == 0) {
// console.log(i);
// }
// }











