// function declaration
function countWordOccurrences(str1: string, str2: string): number {
    let str1Lower = str1.toLowerCase();
    let str2Lower = str2.toLowerCase();
    let countStr2 = str1Lower.split(str2Lower).length - 1;
    return countStr2;
}

// function invoke
console.log(countWordOccurrences("TypeScript is great. I love TypeScript!", "typescript"));