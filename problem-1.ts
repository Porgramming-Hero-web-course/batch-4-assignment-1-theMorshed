// function declaration
function sumArray(nums: number[]): number {
    let sum = 0;
    nums.forEach(n => sum += n);
    return sum;
}

// invoke function
console.log(sumArray([1, 2, 3, 4, 5]));