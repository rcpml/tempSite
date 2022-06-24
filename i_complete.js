"use strict";

function maxDigitSum(n) {
  let num = n; 
  let digit = num % 10;
  console.log(Math.floor(num / 10));
  return num
}
// maxDigitSum(756)

function overTheRoad(address, n){
    return n*2+1-address
  }

function popGrowth(current, rate, inout, targetNum) {
    let years = 0;
    let currentNum = current
    let growthRate =  rate/100;
    while (currentNum < targetNum) {
        currentNum = currentNum + currentNum*growthRate + inout;
        years++
    }
    return years;
}
// console.log(popGrowth(100, 5, 10, 200));

//Arrays of cats and dogs
function dogsCatchCats(arr, range) {
    
}
// console.log(dogsCatchCats(["D","C","C","C","D","D"], 1));

function stringer(num) {
    return [...num.toString()];
}
// console.log(stringer(5548));

function biggestPair(arr) {
    arr.sort((a, b) => b - a);
    return arr[0]+arr[1]
}

// console.log(biggestPair([12, 24, 9]));

function checkDivisible(num) {
  let res = [];
  for (let i = 0; i < num/2+1; i++) {
    if (num % i == 0) res.push(i);
  }
  return res;
}

// console.log(checkDivisible(28));

function jumpCalculator(level) {
  let counter = 0;
  let jumpCount = 0;
  for (let i = 0; i < level; i++) {
    if (counter < level) {
      if (counter + 3 <= level) {
        counter += 3;
        jumpCount++;
      } else if (counter + 2 <= level) {
        counter += 2;
        jumpCount++;
      } else if (counter + 1 <= level) {
        counter += 1;
        jumpCount++;
      }
    }
    if (counter == level) break;
  }
  return jumpCount;
}
// console.log(jumpCalculator(4));


function romanToInt(s) {
  const romanNumbers = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000,
  }
  let res = 0;
  for (let i = 0; i < s.length; i++) {
      if ((romanNumbers[s[i]]>= romanNumbers[s[i+1]]) || !(s[i+1]) ) {
          res += romanNumbers[s[i]];
      } else {
              res -= romanNumbers[s[i]];
          }
  }
  return res;
}
// console.log(romanToInt("MCMXCIV")); //1994


let arr = ["a1","b2","c3","d4","e5","f6","g7"];

function shuffle(array) {
    let m = array.length, t, i;
    // While there remain elements to shuffle…

    while (m) {
      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);

      // And swap it with the current element.
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }
    return array;
  }

// hash table sample below
  let values = [11, 33, 66, 88];
  let hashTable = {};
  values.forEach((value, index) => hashTable[value] = index);
// console.log(hashTable);
  
  function twoSum(nums, target) {
    let numsIndexes = {};
  
    for (let i = 0; i < nums.length; i += 1) {
      let currentDifference = target - nums[i];
  
      if (numsIndexes[currentDifference] !== undefined && numsIndexes[currentDifference] !== i) {
        return [i, numsIndexes[currentDifference]];
      } else {
        numsIndexes[nums[i]] = i;
      }
    }
  }
// console.log(twoSum([2,7,11,15],9));

function decryptSchoolCipher(str) {
  let strArr = str.map(char => Number(char));
  console.log(strArr);
  let res = [];

  for (let i = 0; i < strArr.length; i++) {
    // res.push(String.fromCharCode(strArr[i]));
  }
  // return res.reverse().join().toString();
}

// console.log(decryptSchoolCipher("'101' '99' '105' '108' '65'"));