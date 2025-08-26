//in this problem, all the numbers in the array are repeated twice except one, find that one number
var singleNum= function (nums) {
    let xor=0;
    for (let x=0; x<nums.length; x++) {
        xor= xor^nums[x];
    }
    return xor;
}

let arr=[1,1,3,4,4];
let findMissingNum=singleNum(arr);
console.log("Original Array: " + arr);
console.log("The single number is: "+ findMissingNum);