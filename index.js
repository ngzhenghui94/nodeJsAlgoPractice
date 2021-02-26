const nums = [1,-1,2,3]

// acc = 0, cv = 1 => acc = 1
// acc = 1, cv = -1 => acc = 0
// acc = 0, cv =2 => acc = 2
// acc = 2, cv = 3 => acc = 5
const sum = nums.reduce((accumulator, currentValue)=>{
  console.log("Accumulator: " + accumulator)
  console.log("CurrentValue" + currentValue)
  return accumulator + currentValue;
}, 0);

console.log(sum)

//initial value for accumulator is 0