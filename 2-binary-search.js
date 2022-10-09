const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 8, 9, 10, 11, 12, 13, 14, 15,]

let count = 0

function binarySearch(arr, item) {
  let start = 0
  let end = arr.length
  let middle
  let found = false
  let position = -1

  while (found === false && start <= end) {
    count++
    middle = Math.floor((start + end) / 2)
    // console.log(start, end, middle)
    if (arr.at(middle) === item) {
      found = true
      position = middle
      return position
    }

    if (item < arr[middle]) {
      end = middle - 1
    } else {
      start = middle + 1
    }

  }
  return position
}

// console.log(binarySearch(array, 15), count);

function recursiveBinarySearch(arr, item, start, end) {
  let middle = Math.floor((start + end) / 2)
  count += 1
  if(item === arr[middle]) {
    return middle
  }

  if(item < arr[middle]) {
    return recursiveBinarySearch(arr, item, start, middle - 1)
  } else {
    return recursiveBinarySearch(arr, item, middle + 1, end)
  }
}

console.log(recursiveBinarySearch(array, 15, 0, array.length), count);