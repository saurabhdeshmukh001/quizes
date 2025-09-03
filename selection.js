function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];        // current element to be placed
    let j = i - 1;

    // Shift elements that are greater than key
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }

    // Place key at its correct position
    arr[j + 1] = key;
  }
  return arr;
}

// Example usage
let numbers = [5, 3, 6, 2, 4, 1];
console.log("Sorted:", insertionSort(numbers));