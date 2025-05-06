const arr = [1, 2, 3, 58, 3, 67]

function FindMax(ar) {
    // important: you need to spread the array to find the max in an array
    if (ar.length) {
        return Math.max(...ar);
    }

}

// console.log("FindMax", FindMax(arr))


//// sol2///


function FindMax1(ar) {
    return ar.reduce((max, current) => current > max ? current : max, ar[0])
}


// console.log("FindMax1", FindMax1(arr))



const arr1= [2,7,11,15];
const target = 9;

const findIndices = (arr, target) => {
    let res = [];
    let mp = {};
    if(arr.length<=1) return res;

    arr.forEach((char, index) => {
        const valToFind = (target-char);
        if(mp[valToFind]){
            res.push(index,mp[valToFind]);

        }
        else {
            mp[valToFind]= index
        }

    })
    return res;

}


console.log("findIndices****", findIndices(arr1, target))


// *
// **
// ***
// ****
// *****

function printPattern(num){
    var res='';
    for(let i=0;i<num;i++){
        for(let j=0;j<=i;j++){
            res+='*';
        }
        res+='\n';
    }
    return res;

}

console.log("print pattern ************", printPattern(5))



