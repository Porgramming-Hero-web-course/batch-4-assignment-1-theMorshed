// function declaration
function removeDuplicates(nums: number[]): number[] {
    let uniqueNums: number[] = [];
    nums.forEach(num => {
        if (!uniqueNums.includes(num)) {
            uniqueNums.push(num);
        }
    })
    return uniqueNums;
}

// function invoke
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));