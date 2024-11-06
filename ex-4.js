function findOdd(nums) {
  // Start coding here
  let odd = 0;
  for (i = 0; i < nums.length; i++) {
    if (nums[i] % 2 !== 0) {
      odd++;
    }
  }
  return odd;
}

let result1 = findOdd([0]);
let result2 = findOdd([1, 1, 2]);
let result3 = findOdd([1, 2, 2, 3, 3, 4, 3, 3, 1]);

console.log(result1); // 0
console.log(result2); // 2
console.log(result3); // 4

//console.log(typeof result2);
