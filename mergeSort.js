let someArray = [4, 2,1,7,5,2];

const mergeSort = (arr, arrLow = 0, arrHigh = arr.length) => {
  if (arr.length < 2) {
    console.log(arr);
    return arr;
  } else if (arrLow < arrHigh) {
    console.log("hig", arrHigh, "lol", arrLow);
    let arrMiddle = Math.round((arrLow + arrHigh) / 2);
    let arrLeft = arr.slice(arrLow, arrMiddle);
    let arrRight = arr.slice(arrMiddle, arrHigh);
    console.log({arrLeft, arrRight})
    return [...mergeSort(arrLeft)].concat([...mergeSort(arrRight)])
  }
};

console.log(mergeSort(someArray));

const merge = (leftArr, rightArr) => {
  let [i, j, k] = [0, 0, 0];
  let leftLength = leftArr.length;
  let rightLength = rightArr.length;
  let returnedArr = [];
};
let arr1 = [2, 6, 4, 1];

//console.log(test(arr1));
