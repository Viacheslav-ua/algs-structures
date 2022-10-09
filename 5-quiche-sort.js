const array = [3, 4, 1, 9, 37, 14, 98, 56, 3, 6, 0, 3, 23, 33, -2, -8, 7, 3, 23]

let count = 0

function quicheSort(arr) {
  if(arr.length <= 1) {
      return arr
  }
  let pivotIndex = Math.floor(arr.length / 2)
  let pivot = arr[pivotIndex]
  let less = []
  let greater = []

  for (let i = 0; i < arr.length; i++) {
    count += 1

    if(i === pivotIndex) 
        continue
    
    if(arr[i] < pivot) {
        less.push(arr[i])
    } else {
        greater.push(arr[i])
    }
      
  }

  return [...quicheSort(less), pivot, ...quicheSort(greater)]
}

console.log(quicheSort(array));
console.log('length-', array.length);
console.log('count-',count)