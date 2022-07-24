// console.log(typeof null); //o/p:object
// console.log(typeof undefined); //o/p:undefined

// // let a;
// // console.log(a); //o/p:undefined
// // console.log(x); //o/p:x is not defined-- Reference error

// // console.log(null == undefined); //o/p:true
// // console.log(null === undefined); //o/p:false
// // let b = null; //valid
// // console.log(b); //o/p:null

// //null is actual value but undefined is a variable which is declared but not initialized

// function foo() {
//   var variable1, variable2;

//   variable1 = 5;
//   variable2 = 6;
//   return variable1 + variable2;
// }
// console.log(foo());

// function compute_join_point(s1, s2) {
//   var temp, n, sum;
//   while (s1 != s2) {
//     if (s1 > s2) {
//       temp = s1;
//       s1 = s2;
//       s2 = temp;
//     }
//     n = s1;
//     sum = 0;
//     while (n > 0) {
//       sum += n % 10;
//       n /= 10;
//     }
//     s1 += sum;
//   }
//   return s1;
// }

// console.log(compute_join_point(471, 480));

// function getDigitsSum(x) {
//   var sum = 0;
//   while (x != 0) {
//     sum += x % 10;
//     x /= 10;
//   }

//   return sum;
// }

// function findJoinPoint(seq1, seq2) {
//   while (seq1 != seq2) {
//     if (seq1 < seq2) {
//       if (seq1 == 0) return -1; // no chance to join, seq1 is 0

//       seq1 += getDigitsSum(seq1);
//     } else if (seq2 < seq1) {
//       if (seq2 == 0) return -2; // no chance to join, seq2 is 0

//       seq2 += getDigitsSum(seq2);
//     }
//   }

//   return seq1;
// }
// console.log(findJoinPoint(471, 480));
