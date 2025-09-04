//using linear search to find a specific element in the array
let array=[1,5,7,10];
function linearSearch(array, target) {
    for (let i=0; i<array.length; i++) {
        if(target==array[i]) {
            return i;
        }
    }
    return -1;
}

let result=linearSearch(array,10);
console.log("Element found at index:" +result);
