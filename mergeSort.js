let someArray = [4, 2, 11, 12, 1, 0, 23,4, 2, 11, 12, 1, 0, 23]; // returns (14) [0, 0, 1, 1, 2, 2, 4, 4, 11, 11, 12, 12, 23, 23]

const merge = (leftArr, rightArr) => {
  let [i, j, k] = [0, 0, 0];
  let leftLength = leftArr.length;
  let rightLength = rightArr.length;
  let returnedArr = [];

  while (i <= leftLength - 1 && j <= rightLength - 1) {
    if (leftArr[i] < rightArr[j]) {
      returnedArr[k] = leftArr[i];
      console.log({ i, k });
      i++;
      k++;
      continue;
    } else {
      returnedArr[k] = rightArr[j];
      console.log({ j, k });
      j++;
      k++;
      continue;
    }
  }
  if (leftLength - 1 < i) {
    console.log("j copied");
    for (; j <= rightLength - 1; j++) {
      returnedArr[k] = rightArr[j];
      k++;
    }
  } else if (rightLength - 1 < j) {
    console.log("i copied");
    for (; i <= leftLength - 1; i++) {
      returnedArr[k] = leftArr[i];
      k++;
    }
  }
  return returnedArr;
};
const mergeSort = (arr, arrLow = 0, arrHigh = arr.length) => {
  if (arr.length < 2) {
    console.log(arr);
    return arr;
  } else if (arrLow < arrHigh) {
    console.log("hig", arrHigh, "lol", arrLow);
    let arrMiddle = Math.round((arrLow + arrHigh) / 2);
    let arrLeft = arr.slice(arrLow, arrMiddle);
    let arrRight = arr.slice(arrMiddle, arrHigh);
    console.log({ arrLeft, arrRight });
    return merge(mergeSort(arrLeft), mergeSort(arrRight));
  }
};

console.log(mergeSort(someArray));

let arr1 = [2, 6, 4, 1];

//console.log(merge([8],[1,5,2]))
