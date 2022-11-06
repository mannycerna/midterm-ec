function twoSmallest(arr)
{


let first = arr[0];
let second = arr[1];
let smallArray = [];
// console.log(first, second);
  /-- Minimum of two elements else return undef --/
  if (arr.length < 2){
    return undefined;

  //--If array length = 2, then reorder the existing elements--//
  } else if (arr.length === 2){
    for(let i = 0; i < arr.length; i++){
        if (arr[i] > arr[1]){
        smallArray.unshift(arr[i])
        } else {smallArray.push(arr[i])}
    }
  }

   /-- find smallest number --/
  for (let i = 0; i < arr.length; i++)
  {
    if (arr[i] < first){
      first = arr[i];
      smallArray.unshift(arr[i]);
    }
}
  /-- find second smallest number*/
    for (let i = 0; i < arr.length; i++){
    if (arr[i] < second && arr[i] > first){
      second = arr[i];
      smallArray[1] = second;

        }
  }
  /--if they exist, remove unwanted elements--/
  if (smallArray.length > 2){
    smallArray.splice(2);
  }

  for(let i = 0; i < smallArray.length; i++){
    if (!(i in smallArray)) {
        smallArray[i] = 0;
    }
  }
    return smallArray;
}

  

let arr1 = [8, 7, 5, -2, 10];
let arr2 = [9];
let arr3 = [0, 6, 12, 1];
let arr4 = [122, 277, 409, 99];
let arr5 = [12, 15, 7, 100, 5, 200, 111, 1000, 11, 4];
let arr6 = [12, 17, 10, 2, 200, 7];
let arr7 = [12, 15, 100, 5, 200, 111, 1000, 11];
let arr8 = [3, 7];
let arr9 = [2, 7];

console.log(twoSmallest(arr1));
console.log(twoSmallest(arr2));
console.log(twoSmallest(arr3));
console.log(twoSmallest(arr4));
console.log(twoSmallest(arr5));
console.log(twoSmallest(arr6));
console.log(twoSmallest(arr7));
console.log(twoSmallest(arr8));
console.log(twoSmallest(arr9));


 if (typeof twoSmallest === 'undefined') {
    twoSmallest = undefined
  }


 module.exports = {
    twoSmallest,
  }
