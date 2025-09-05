var search= function binaryFunction(nums, target) {
    let left=0;
    let right=nums.length-1;
    while (right>=left) {
        let middle= Math.floor((right+left)/2);
        if (target=== nums[middle]) {
            return middle;
        }
        else if (target<nums[middle]) {
            right=middle-1;
        }
        else {
            left=middle +1;
        }
    }
    return -1;
}

let arr=[1,2,4,9,25];
let result=search("")
console.log("Array: " + arr);
console.log("Target: " +result);