let arr=[5,4,2,1];
function bubbleSort(arr) {
    let n=arr.length;
    for (let i=0; i<n-1; i++) {
        for (let j=0; j<n-1-i; j++) {
            if (arr[j]>arr[j+1]) {
                let temp=arr[j];
            arr[j]=arr[j+1];
            arr[j+1]=temp;
            isSwapped=true;
            }
        }
        if(!isSwapped) {
            break;
        }
    }
    return arr;
}


let result=bubbleSort(arr);
console.log("Original Array: " + arr);
console.log("Sorted Array: " + result);