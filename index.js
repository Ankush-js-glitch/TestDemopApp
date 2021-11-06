var readlineSync = require('readline-sync');
// function add (numberOne , numberTwo , numberThree)
// function result (numberOne , numberTwo , numberThree){
//   // console.log("first number is :"+numberOne , "second number is:"+numberTwo)
// var add = (numberOne + numberTwo + numberThree)
// var output = (numberOne * numberTwo + numberThree )
// // var outputOne = (numberOne * numberTwo - numberThree )
// // return add;
//   return output;
// // return outputOne;
// }

// // // to call the function
// var firstOne = readlineSync.question ("First number is");
// var secondOne  = readlineSync.question ("Second number is");
// var thirdOne  = readlineSync.question ("Thuird number is");
// var output=result(parseInt(firstOne),parseInt(secondOne),parseInt(thirdOne));
// console.log("product of number one,number two and number 3 is:" + output)

// // to call the function
// var result = result (8,4,3)
// console.log (result)


// ex08: function to check the answer
var score = 0
function result ( question , answer)
{

var userName= readlineSync.question(question);
// console.log("my salary  is:" + mineSalary)

if(userName==answer)
{
  console.log('you are right ') 
  score = score+1
}
else
{
  console.log('you are wrong')
  score = score-1
}
console.log(score)
 }

 

 result ("what is your name" ,  "Ankush Kumar")
 result ( "where do you live" , "ajmer")
 result ("where do u work" ,  "itl" )

//  console.log ("your score is"  ,  score )
// for (let a = 5; a < 8; a++) {
  // Runs 5 times, with values of step 0 through 4.
  // console.log('Ankush');
// }
