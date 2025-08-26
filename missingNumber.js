var findMissingNumber=function (nums) {
    nums.sort((a,b)=>a-b);
    if (nums[0]!=0) {
        return 0;
    }
    for (let x=1; x<nums.length; x++) {
        if (nums[x]!==nums[x-1]+1) {
            return nums[x-1]+1;
        }
    }
    return nums.length;
}

//testing it out:
let arr=[1,0,3];
let findNumber=findMissingNumber(arr);
console.log("Original Array: " + arr);
console.log("The missing number in array: " + findNumber);
