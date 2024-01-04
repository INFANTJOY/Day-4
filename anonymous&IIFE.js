// Anonymous Function
const printOddNumbers = function(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 !== 0) {
        console.log(arr[i]);
      }
    }
  };
  printOddNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  
  // IIFE
  (function(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 !== 0) {
        console.log(arr[i]);
      }
    }
  })([1, 2, 3, 4, 5, 6, 7, 8, 9]);

  // Anonymous Function
const titleCaps = function(arr) {
    for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1).toLowerCase();
    }
    return arr;
  };
  console.log(titleCaps(["apple", "banana", "cherry"]));
  
  // IIFE
  const titleCapsResult = (function(arr) {
    for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1).toLowerCase();
    }
    return arr;
  })(["apple", "banana", "cherry"]);
  console.log(titleCapsResult);

  // Anonymous Function
const sumArray = function(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  };
  console.log(sumArray([1, 2, 3, 4, 5]));
  
  // IIFE
  const sumResult = (function(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  })([1, 2, 3, 4, 5]);
  console.log(sumResult);

  // Anonymous Function
const getPrimeNumbers = function(arr) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      let isPrime = true;
      for (let j = 2; j < arr[i]; j++) {
        if (arr[i] % j === 0) {
          isPrime = false;
          break;
        }
      }
      if (arr[i] > 1 && isPrime) {
        result.push(arr[i]);
      }
    }
    return result;
  };
  console.log(getPrimeNumbers([2, 3, 4, 5, 6, 7, 8, 9, 10]));
  
  // IIFE
  const primeNumbersResult = (function(arr) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      let isPrime = true;
      for (let j = 2; j < arr[i]; j++) {
        if (arr[i] % j === 0) {
          isPrime = false;
          break;
        }
      }
      if (arr[i] > 1 && isPrime) {
        result.push(arr[i]);
      }
    }
    return result;
  })([2, 3, 4, 5, 6, 7, 8, 9, 10]);
  console.log(primeNumbersResult);

  // Anonymous Function
const getPalindromes = function(arr) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === arr[i].split('').reverse().join('')) {
        result.push(arr[i]);
      }
    }
    return result;
  };
  console.log(getPalindromes(["level", "radar", "apple", "banana"]));
  
  // IIFE
  const palindromesResult = (function(arr) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === arr[i].split('').reverse().join('')) {
        result.push(arr[i]);
      }
    }
    return result;
  })(["level", "radar", "apple", "banana"]);
  console.log(palindromesResult);

  // Anonymous Function
const getMedian = function(arr1, arr2) {
    const merged = arr1.concat(arr2).sort((a, b) => a - b);
    const mid = Math.floor(merged.length / 2);
    return merged.length % 2 === 0 ? (merged[mid - 1] + merged[mid]) / 2 : merged[mid];
  };
  console.log(getMedian([1, 2, 3], [4, 5, 6]));
  
  // IIFE
  const medianResult = (function(arr1, arr2) {
    const merged = arr1.concat(arr2).sort((a, b) => a - b);
    const mid = Math.floor(merged.length / 2);
    return merged.length % 2 === 0 ? (merged[mid - 1] + merged[mid]) / 2 : merged[mid];
  })([1, 2, 3], [4, 5, 6]);
  console.log(medianResult);

  // Anonymous Function
const removeDuplicates = function(arr) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      if (!result.includes(arr[i])) {
        result.push(arr[i]);
      }
    }
    return result;
  };
  console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
  
  // IIFE
  const uniqueArrayResult = (function(arr) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      if (!result.includes(arr[i])) {
        result.push(arr[i]);
      }
    }
    return result;
  })([1, 2, 2, 3, 4, 4, 5]);
  console.log(uniqueArrayResult);

  // Anonymous Function
const rotateArray = function(arr, k) {
    const n = arr.length;
    k = k % n; // To handle cases where k is greater than the length of the array
  
    for (let i = 0; i < k; i++) {
      const temp = arr.pop(); // Remove the last element
      arr.unshift(temp); // Add the removed element to the beginning
    }
  
    return arr;
  };
  
  console.log(rotateArray([1, 2, 3, 4, 5], 2));
  
  // IIFE
  const rotatedArrayResult = (function(arr, k) {
    const n = arr.length;
    k = k % n; // To handle cases where k is greater than the length of the array
  
    for (let i = 0; i < k; i++) {
      const temp = arr.pop(); // Remove the last element
      arr.unshift(temp); // Add the removed element to the beginning
    }
  
    return arr;
  })([1, 2, 3, 4, 5], 2);
  
  console.log(rotatedArrayResult);
  