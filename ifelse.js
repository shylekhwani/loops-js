// Ans 1 & 2 //
/*

Very often when you write code, you want to perform different actions for different decisions.

You can use conditional statements in your code to do this.

In JavaScript we have the following conditional statements:

Use (if) to specify a block of code to be executed, if a specified condition is true
Use (else) to specify a block of code to be executed, if the same condition is false
Use (else if) to specify a new condition to test, if the first condition is false
Use (switch) to specify many alternative blocks of code to be executed

*/

const grades = 80;

if (grades > 90) {
  console.log("You Got A grade");
} else if (grades > 70 && grades < 90) {
  console.log("You got B grade");
} else if (grades > 50 && grades < 70) {
  console.log("You gat C grade");
} else {
  console.log("You got a F grade");
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Ans 3 & 4 //

/*

Loops are used in JavaScript to perform repeated tasks based on a condition. 
Conditions typically return true or false . 
A loop will continue running until the defined condition returns false

*/

let num = 1;
for (num; num < 10; num++) {
  console.log(`num at position ${num}`);
}

let num2 = 11;
for (num2; num2 < 25; num2++) {
  console.log(`num2 at position ${num2}`);
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Ans 5 //
let num3 = 0;
while (num3 <= 25) {
  console.log(`numbers at  ascending order ${num3}`);
  num3++;
}

let num4 = 25;
while (num4 >= 0) {
  console.log(`numbers at  decending order ${num4}`);
  num4--;
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
