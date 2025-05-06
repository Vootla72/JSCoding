
// Given an array of integers, return the difference between the largest and smallest integers in the array.
// solution 1 with built in methods and two variables

function maxDiff(arr) {
    if (arr.length < 2) return 0;
    let minVal = arr[0];
    let maxVal = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < minVal) minVal = arr[i];
        if (arr[i] > maxVal) maxVal = arr[i]
    }
    return maxVal - minVal;
}
console.log("maxDifff-----", maxDiff([1, 4, 9, -1, 10]))

/// solution 2 with built in methods and Math object

function maxDiff(arr) {
    return Math.max(...arr) - Math.min(...arr);
}

console.log("maxDifff-----", maxDiff([1, 4, 9, -1, 10]));


//// sol 3 without built in methods

function maxDiff(arr) {
    let minVal = arr[0];
    let maxDiff = -Infinity;
    for(let i=1;i<arr.length;i++){
        if(arr[i]<minVal) minVal = arr[i];
        else {
            diff = arr[i]-minVal;
            if(diff>maxDiff) maxDiff = diff;
        }
       
    }
    return maxDiff;

}

console.log("maxDifff-----", maxDiff([1, 4, 9, -1, 10]));