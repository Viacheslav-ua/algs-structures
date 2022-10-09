const array = [3, 4, 1, 9, 37, 14, 98, 56, 3, 6, 0, 3, 23, 33, -2. - 8, 7, 3, 23]

let count = 0

function selectionSort(arr) {

  for (let i = 0; i < arr.length; i++) {

    let indexMin = i
    for (let j = i + 1; j < array.length; j++) {
      if (arr[j] < arr[indexMin]) {
        indexMin = j
      }
      count++
    }
    let tmp = arr[i]
    arr[i] = arr[indexMin]
    arr[indexMin] = tmp
  }
  return arr
}



console.log(selectionSort(array), count);