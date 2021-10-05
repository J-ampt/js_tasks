'use strict'
// function descending_ord(min= 10, max= 50, div= 3){
//   for(i=max;i>=min;i--){
//     if(i%div==0){
//       console.log(i)
//     }
//   }
// }

// descending_ord()



function checkMath(num1=5, num2=4, operator='*'){
  const res = window.eval(num1+operator+num2)

  if(prompt("Solve "+num1+operator+num2+"=")==res){
    return 0;
  }
  else{
    checkMath()
  }

}

checkMath(17, 30,'+')
