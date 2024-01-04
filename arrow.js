const printOddNumbers = arr => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 !== 0) {
        console.log(arr[i]);
      }
    }
  };
  
  printOddNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9]);

  const titleCaps = arr => {
    for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1).toLowerCase();
    }
    return arr;
  };
  
  console.log(titleCaps(["apple", "banana", "cherry"]));

  const sumArray = arr => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  };
  
  console.log(sumArray([1, 2, 3, 4, 5]));

  const getPrimeNumbers = arr => {
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

  const getPalindromes = arr => {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === arr[i].split('').reverse().join('')) {
        result.push(arr[i]);
      }
    }
    return result;
  };
  
  console.log(getPalindromes(["level", "radar", "apple", "banana"]));
  