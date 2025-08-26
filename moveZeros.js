//program to move all zeros of an array to the end
var moveZeros=function(nums) {
    let x=0;
    for (let i=0; i<nums.length; i++) {
        if (nums[i]!=0) {
            nums[x]=nums[i];
            x++;
        }
    }
    for (let j=x; j<nums.length; j++) {
        nums[j]=0;
    }
}

let arr=[1,3,0,7,9,0];
let newArrayLength=moveZeros(arr);
console.log("Original Array: " + arr);
console.log("Number of zeroes: " + newArrayLength);
console.log(arr.slice(0,newArrayLength));