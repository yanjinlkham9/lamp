// var str = "hi";
// var a = 1;
// var b = {
//     name: "allie",
// };
// console.log(str);
// console.log(a);
// console.log(b);

function jsPrint(a, b, c) {
  console.log(a);
  console.log(b);
  console.log(c);
}
jsPrint(1, 2); //1,2, undefined
jsPrint(1, 2, 4); //1,2,4
jsPrint(1, 2, 4, 2, 4, 54); //1,2,4

function add(a, b) {
  return a + b; //number, string
}
