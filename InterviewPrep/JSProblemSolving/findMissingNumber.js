const ar1=[1,2,3,5,6];


//Imp:  here is to find the missing number. so the n wll be length+1;
TC: O(n);
SC: O(1);

function findMissingNumber(arr){
    const n = (arr.length)+1;
    console.log("n value",n);
    const sum = (n*(n+1))/2;
    return arr.reduce((total,curr)=> total-=curr, sum);
    
}

console.log("findMissingNumber", findMissingNumber(ar1))

// sol2: using xor operation
// TC: O(n);
// SC: O(1);


function findMissingNumber1(arr) {

    const n = arr.length + 1;
    let xorNum = 0;
    for (let i = 1; i <= n; i++) {
        xorNum = xorNum ^ i;

    }
    for (let ele of arr) {
        xorNum = xorNum ^ ele;
    }
    return xorNum;

}

console.log("findMissingNumber1", findMissingNumber1(ar1))