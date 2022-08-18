// Exercise 1 Section

console.log("EXERCISE 1:\n==========\n");
console.log("Exercise 1 For Loop");
//for loop odd number check
for (let num = 0; num <= 100; num++) {
    if (num % 2 == 1) {
      console.log(`${num} is Odd`);
    } else {
    }
  }

 console.log("Exercise 1 While Loop") ;
//While Loop ODD number check
 let whileNum = 0;

 while (whileNum <= 100) {
   if (whileNum % 2 == 1) {
     console.log(whileNum, "is Odd");
   }
 
   whileNum++;
 }


// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

// let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
// let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
// let n = Math.round(Math.random() * (1000 - 1) + 1);
// let start = Math.round(Math.random() * (10 - 1) + 1);

console.log("FIZZBUZZ: For Loop");

for (let num = 1; num <= 100; num++) {
    let output = "";
    //set output to blank so it prints nothing

  if (num % 3 == 0) {
    // FIZZ
    output += "FIZZ";
    //If the number is divisible by 3, set output euqal to output + "FIZZ"
  }

  if (num % 5 == 0) {
    // BUZZ
    output += "BUZZ";
    //If the number is divisble by 5, set output equal to output + "BUZZ"

    //This ensures that if a number is divisible by both 3 and 5, it will print "FIZZBUZZ"
  }

  output && console.log(num, output);
  //Prints output if blank, which will not print a line in the console AND will print the number, and if its divisible by 3 or 5 based on the rules above
}


console.log("FIZZBUZZ: While Loop");

let whilenumfizz = 1;

while (whilenumfizz <= 100) {
    let output = "";
    if (whilenumfizz % 3 == 0) {
        // FIZZ
        output += "FIZZ";
        //If the number is divisible by 3, set output euqal to output + "FIZZ"
      }
    
      if (whilenumfizz % 5 == 0) {
        // BUZZ
        output += "BUZZ";
        //If the number is divisble by 5, set output equal to output + "BUZZ"
    
        //This ensures that if a number is divisible by both 3 and 5, it will print "FIZZBUZZ"
      }
      
      output && console.log(whilenumfizz, output);
      whilenumfizz++

}


console.log("EXERCISE 4:\n==========\n");
console.log("Find Value: Foor Loop");

let value = Math.round(Math.random() * 500); // creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500

// search for value
for (let num = 0; num <= n; num++) {
  if (num == value) {
    console.log("Found Value");
    break;
  } else if (num == n) {
    console.log("Didn't find value");
  }
}

console.log("EXERCISE 5:\n==========\n");

// Exercise 5: Custom FIZZ BUZZ
console.log("Custom FIZZBUSS using for loop");

let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
n = Math.round(Math.random() * (1000 - 1) + 1);
start = Math.round(Math.random() * (10 - 1) + 1);

for (let i = start; i <= n; i++) {
  if (i % fizzDivisor == 0 && i % buzzDivisor == 0) {
    console.log(i, "FIZZBUZZ");
  } else if (i % fizzDivisor == 0) {
    console.log(i, "FIZZ");
  } else if (i % buzzDivisor == 0) {
    console.log(i, "BUZZ");
  }
}