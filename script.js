// if the input number is evenly divisible by the lowest number possible, return that number and the result of dividing it by that number. see if you can evenly divide the result.

// function primeNumber(num){
//   var primeFactors = [];
//   var j = 0;
//   for(i=2; i<=num; i++) {
//     if (num % i == 0) {
//       primeFactors[j] = i;
//       j++;
//     }
//   }
//   console.log(primeFactors);
// }

// function primeFactor(num){
//   function numIterate(num) {
//     for(i=0; i<=num; i++){return i;}
//   }
//   if (num % numIterate(num) == 0) {
//     console.log(num);
//     console.log(i);
//   }
// }

// function findPrimeFactors(num) {
//   var primeFactors = [];
//   var numTemp = num;
//   var j = 0;
//   for (i=2; i<=numTemp; i++) {
//     if (numTemp % i == 0) {
//       numTemp = numTemp/i;
//       primeFactors[j] = i;
//       j++;
//     }
//   }
//   console.log(primeFactors);
// }

function findPrimeFactors(num) {
  var primeFactors = [];
  var j = 0;
  for (i=2; i<=num; i++) {
    if (num % i === 0) {
      num /= i;
      primeFactors[j] = i;
      j++;
    }
  }
  console.log(primeFactors);
}

findPrimeFactors(2);
findPrimeFactors(3);
findPrimeFactors(4);
findPrimeFactors(6);
findPrimeFactors(9);
findPrimeFactors(12);
findPrimeFactors(15);
