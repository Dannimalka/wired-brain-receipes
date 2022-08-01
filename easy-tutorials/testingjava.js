////const car = {
////  make: "Tesla",
////  model: "model S",
////  isBroken: false,//////

////  makeHornSound: f//unction() {
////    return "Honk h//onk!"
//// // }
//////}//
// 

////method is always inside an objec//t

//const myCar = `My car is ${car.make} ${car.model} and it's horn goes ${car.makeHornSound()}`
//console.log(myCar)

/*
 * Programming Quiz - Navigating the Food Chain
 *
 * Use a series of ternary operator to set the category to one of the following:
 *   - "herbivore" if an animal eats plants
 *   - "carnivore" if an animal eats animals
 *   - "omnivore" if an animal eats plants and animals
 *   - undefined if an animal doesn't eat plants or animals
 *
 * Notes
 *   - use the variables `eatsPlants` and `eatsAnimals` in your ternary expressions
 *   - `if` statements aren't allowed ;-)
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should have the variables `eatsPlants`, `eatsAnimals`
 * - Your code should include ternary statements. Do not use if....else statement. 
 * - Your code should produce the expected output
 */
 
// change the values of `eatsPlants` and `eatsAnimals` to test your code
//const eatsPlants = true;
//const eatsAnimals = false;
//let category;
//
//// your code
//category = eatsPlants ? (eatsAnimals ? "omnivore" : "herbivore") : (eatsAnimals ? "carnivore" : "undefined")
//
//// output
//console.log(category);

/*
 * Programming Quiz: Back to School
 *
 * Write a switch statement to set the average salary of a person based on their type of completed education.
 *
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should have the variables `education`, and `salary`
 * - Your code should include a switch statement
 * - Your code should produce the expected output
 */
 
// change the value of `education` to test your code
//const education = "no high school diploma";

// set the value of this based on a person's education
//let salary = 0;

// your code goes here

//switch (education) {
//  case "no high school diploma":
//  salary = "25636";
//  break;
//
//  case "a high school diploma":
//  salary = "35256";
//
//}
//console.log(`In 2015, a person with ${education} earned an average of $${salary.toLocaleString("en-US")}/year.`);



//basic loop

//let x = 1;
//while (x <= 1000000) {
//    console.log(x + " mississippi!");
//    x = x + 1;
//}

/*
 * Programming Quiz: JuliaJames
 */
/*
 * QUIZ REQUIREMENTS
 * - Your code should have a variable `x` with a starting value of `1`
 * - Your code should include a `while` loop
 * - Your `while` loop should have a stop condition
 * - Your code should use a conditional statement
 * - Your code should increment `x` by `1` each time the loop executes
 * - Your code should produce the expected output
 */
 
let x = 1;

while (x < 200) {
  if (x % 3 === 0 && x % 5 === 0) {
    console.log("FizzBuzz");
  }
  else if (x % 3 === 0) {
    console.log("Fizz");
  }
  else if (x % 5 === 0) {
    console.log("Buzz");
  }
  else {
  console.log(x);
  }

  x = x + 1;
}

