let array = [7,2,3,4];

const mergeSort = (arr, i = 0, j = 0, k = 0) => {
  if (arr.length ===1) {
    console.log(arr);
    return arr;
  }
    let lengthOfArr = arr.length;
    let middleOfArray = Math.round(lengthOfArr / 2);
    let item1 = array.slice(0, middleOfArray);
    let item2 = array.slice(middleOfArray)
    return item1.concat(item2)
};

console.log(mergeSort(array) )
