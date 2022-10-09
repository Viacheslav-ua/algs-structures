const array = [3, 4, 1, 9, 37, 14, 98, 56, 3, 6, 0, 3, 23, 33, -2. - 8, 7, 3, 23]

let count = 0

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if(arr[j+1] < arr[j]) {
        let tmp = arr[j]
        arr[j] = arr[j+1]
        arr[j+1] = tmp
         
      }
      count += 1
    }
  }
  return arr
}


console.log('length-', array.length);
console.log(bubbleSort(array));
console.log('count-',count)