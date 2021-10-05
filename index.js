'use strict'



const obj ={};
obj.prop1 = 12;
obj['prop2'] =22;

const multiplication = function(min=1,max=10){
  const table = {};
  for(let i=min; i<=max; i++){
    for(let j=1; j<=max; j++){
      table[`${i} * ${j} = `] = i*j;
    }
  }
  return table;
}
console.log(multiplication());

const task = function(str, obj){
  return obj[str];
}


const str = '2 * 3 = ';
const table = multiplication();
console.log(task(str,table));