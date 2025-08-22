// to remove duplicates from an array 
var removeDuplicates= function(nums) {
    let x=0;
    for (let i=0; i<nums.length; i++) {
       if (nums[i]>nums[x]) {
        x++;
        nums[x]=nums[i];
       }
    }
    return x+1; 
}

let arr=[1,1,2,3,5];
let newLength=removeDuplicates(arr);
console.log("Original Array: " +arr );
console.log("After removing duplicates: " +newLength); //returns the number of unique characters
console.log(arr.slice(0, newLength));