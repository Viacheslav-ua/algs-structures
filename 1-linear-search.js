const array = [1, 4, 2, 8, 9, 0, 43, 8, 45, 2, 4, 0, 6, 54, 5]

let count = 0

function linearSearch(arr, item) {
  for (let i = 0; i < arr.length; i++) {
    count++
    if (arr[i] === item) {
      return i
    }
  }
  return null
}

console.log(linearSearch(array, 54), count);