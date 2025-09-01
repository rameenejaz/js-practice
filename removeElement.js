var removeElement= function(nums, val) { //nums here is an array 
    let x=0;
    for (let i=0; i<nums.length; i++) {
        if (nums[i]!=val) {
            nums[x]=nums[i];
            x++;
        }
    }
    return x;
}

let arr=[1,2,2,3,4,5];
let value=2;
let newLength=removeElement(arr,value);
console.log("Original Array: " + arr);
console.log ("After removing element" + value +", Array Length: " +newLength);
console.log(arr.slice(0,newLength));