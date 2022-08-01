/*let x = 99;

while ( x > 0) {
  if (x === 1) {
    console.log(`${x} bottle of juice on the wall! ${x} bottle of juice! Take one down, pass it around... ${x - 1} bottles of juice on the wall!`)
  }
  else if (x === 2) {
    console.log(`${x} bottles of juice on the wall! ${x} bottles of juice! Take one down, pass it around... ${x - 1} bottle of juice on the wall!`)
  }
  else {
    console.log(`${x} bottles of juice on the wall! ${x} bottles of juice! Take one down, pass it around... ${x - 1} bottles of juice on the wall!`)
  }
  
  x = x - 1;
}
*/

// countdown, liftoff!

/*let seconds = 60;

while (seconds > -1) {
  if (seconds === 50) {
    console.log(`Orbiter transfers from ground to internal power`)
  }
  else if (seconds === 31) {
    console.log(`Ground launch sequencer is go for auto sequence start`)
  }
  else if (seconds === 16) {
    console.log(`Activate launch pad sound suppression system`)
  }
  else if (seconds === 10) {
    console.log(`Activate main engine hydrogen burnoff system`)
  }
  else if (seconds === 6) {
    console.log(`Main engine start`)
  }
  else if (seconds === 0) {
    console.log('Solid rocket booster ignition and liftoff!')
  }
  else {
    console.log(`T-${seconds} seconds`)
  }

  seconds = seconds - 1;
}
*/

// For Loop
//when loop starts "i" is set to 0. Then it checks the condition and see that "i" is less than 6, and finally it checks how to get to the next step
/*
for (let i = 0; i < 6; i = i + 1) {
  console.log("Printing out i = " + i);
}

//Nested Loops
for (let x = 0; x < 3; x = x + 1) {
  for (let y = 0; y < 2; y = y + 1) {
      console.log(x + ", " + y);
  }
}
*/

//Increment and Decrement Operators
//x++ is the postfix operator, which means that it returns the value before incrementing it:
//let x = 2;
//x++ //returns 2 then assigns 3 as the value of x
//console.log(x); // logs out 3

//++x is the prefix operator, which means that it returns the value after incrementing it:
/*
let x = 2;
++x // assigns 31 as the value of x then returns 3
console.log(x); // logs out 3
*/
/*
for (let x = 9; x >= 1; x--) {
  console.log("hello " + x)
}
*/
/*
for (let x = 12; x <= 479001601; x = x*(x-1) ) {
  console.log(x)
}
*/

/*let num = 1;

while (num < 20) {
  if (num % 5 === 0 && num % 3 === 0) {
    console.log("JuliaJames")
  }
  else if (num % 5 === 0) {
    console.log("James")
  }
  else if (num % 3 === 0) {
    console.log("Julia")
  }
  else {
    console.log(num)
  }
  num++
}
*/

//FIZZ BUZZ SHORT SOLUTION

/*
let x = 1

while (x < 20) {
  x++;
  x % 15 == '0' ? console.log("JuliaJames") :
      x % 3 == '0'? console.log("James") :
          x % 5 == '0' ? console.log("Julia") :
              console.log(x)
}

*/

/*
let solution = 1;

for (let i = 1; i <= 12; i++) {
  solution *= i;
}

console.log(solution);
*/

/*
 * Programming Quiz: Find my Seat
 * 
 * Write a nested for loop to print out all of the different seat combinations in the theater.
 * The first row-seat combination should be 0-0 
 * The last row-seat combination will be 25-99
 * 
 * Things to note: 
 *  - the row and seat numbers start at 0, not 1
 *  - the highest seat number is 99, not 100
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should use a nested `for` loop'
 * - Your code should produce the expected output
 */
 
// Write your code here
//nested loop

/*
for (let row = 0; row <= 25; row = row +1) {
  for (let seat = 0; seat <100; seat = seat +1) {
    console.log(row +"-" + seat);
   }
}
*/
// FUNCTIONS

//reverse a string
/*
function reverseString(reverseMe) {
  let reversed = "";
  for (let i = reverseMe.length - 1; i >= 0; i--) {
      reversed += reverseMe[i];
  }
  return reversed;
}

console.log(reverseString("Julia"));
*/
// sometimes the function takes parameters, that's the text within the brakets, you can add multiple parameters separated by a comah
/*
function doubleGreeting(name, otherName) {
  // code to greet two people!
}

*/
/*
function findAverage(x, y) {
  const answer = (x + y) / 2;
  return answer;
}

const avg = findAverage(5, 9);
console.log(avg)
*/

function laugh(num) {
  for (const num = "ha"; num < 4; num = num++)
  return num
  
}
console.log(laugh())


