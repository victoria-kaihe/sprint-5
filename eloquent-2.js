//Exercise 1
for (var hash = '#'; hash.length < 8; hash +='#')
  console.log(hash);


//Exercise 2
/*I couldn't completely figure this one out,
and what I got was completely different to the actual solution.
I got it to work for Fizz, and Buzz, but I couldn't get FizzBuzz
working and tbh I don't even fully understand the solution*/
for (var number = 1; number <= 100; number++) {
   if (number % 3 === 0) {
   console.log("Fizz");
   }
   else if (number % 5 === 0) {
   console.log("Buzz");
   }
   else if (number % 15 === 0) {
   console.log("FizzBuzz");
   }
   else console.log(number);
}

//Exercise 3
/*I could not for the life of me figure this out.
I understand like...three quarters of the solution*/
