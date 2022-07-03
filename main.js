"use strict";

function isValidSudoku(board) {
  let store = {
    rows: {},
    cols: {},
    square: {},
  };
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const box = board[i][j];
      if (!store["rows"][i] && box !== ".") {
        store["rows"][i] = [];
        store["rows"][i].push(box);
      } else if (box !== "." && !store["rows"][i].includes(box)) {
        store["rows"][i].push(box);
      } else if (store["rows"][i] && store["rows"][i].includes(box)) {
        return false;
      }

      if (!store["cols"][j] && box !== ".") {
        store["cols"][j] = [];
        store["cols"][j].push(box);
      } else if (box !== "." && !store["cols"][j].includes(box)) {
        store["cols"][j].push(box);
      } else if (store["cols"][j] && store["cols"][j].includes(box)) {
        return false;
      }

      const squareRowId = Math.ceil((i + 1) / 3);
      const squareColId = Math.ceil((j + 1) / 3);
      const squareId = `${squareRowId}-${squareColId}`;

      if (!store["square"][squareId] && box != ".") {
        store["square"][squareId] = [];
        store["square"][squareId].push(box);
      } else if (box != "." && !store["square"][squareId].includes(box)) {
        store["square"][squareId].push(box);
      } else if (
        store["square"][squareId] &&
        store["square"][squareId].includes(box)
      ) {
        return false;
      }
    }
  }
  console.log(store);
  return true;
}

// console.log(isValidSudoku([
//     ["5", "3", ".", ".", "7", ".", ".", ".", "."],
//     ["6", ".", ".", "1", "9", "5", ".", ".", "."],
//     [".", "9", "8", ".", ".", ".", ".", "6", "."],
//     ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
//     ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
//     ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
//     [".", "6", ".", ".", ".", ".", "2", "8", "."],
//     [".", ".", ".", "4", "1", "9", ".", ".", "5"],
//     [".", ".", ".", ".", "8", ".", ".", "7", "9"],
//   ]));

function rotateImage(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    let tracker = matrix.length - 1;

    for (let j = matrix.length - 1; j >= 0; j--) {
      let current = matrix[i].pop();

      matrix[tracker].unshift(current);

      tracker--;
    }
  }

  return matrix;
}

function redKnight(N, P) {
  return [(N + P) % 2 == 0 ? "White" : "Black", P * 2];
}
// console.log(redKnight(0, 12));
// console.log(redKnight(1, 8));



function threeSum(nums) {
  nums = nums.sort((a, b) => a - b);

  let result = [];

  for (let indexA = 0; indexA < nums.length - 2; indexA++) {
    let indexB = indexA + 1;
    let indexC = nums.length - 1;

    if (indexA > 0 && nums[indexA] === nums[indexA - 1]) continue;

    while (indexB < indexC) {
      let sum = nums[indexA] + nums[indexB] + nums[indexC];

      if (sum < 0) {
        indexB++;
      } else if (sum > 0) {
        indexC--;
      } else {
        result.push([nums[indexA], nums[indexB], nums[indexC]]);
        while (nums[indexB] === nums[indexB + 1]) indexB++;
        while (nums[indexC] === nums[indexC - 1]) indexC--;
        indexB++;
        indexC--;
      }
    }
  }
  return result;
}

  // console.log(threeSum([-1, 0, 1, 2, -1, -4]));


  function twoSum(nums, target) {
    let store = {};

    for (let i = 0; i < nums.length; i++) {
      store[nums[i]] = i;
    }

    for (let j = 0; j < nums.length; j++) {
      let diff = target - nums[j];

      if (store.hasOwnProperty(diff) && store[diff] !== j) {
        return [j, store[diff]];
      }
    }
  }
// console.log(twoSum([2, 7, 11, 15], 9));


function removeElement(nums, val) {
  for (let i = nums.length-1; i >= 0; i--) {
    if (nums[i] === val) {
      nums.splice(i, 1)
    }
  }
  return nums.length
}
// console.log(removeElement([3,2,2,3,2,], 2));

function removeElementTwo(nums, val) {
  return [...nums.filter(el => el != val)].length
}

// console.log(removeElementTwo([3,2,2,3,2,], 2));


function validParentheses(s) {

  if (s.length % 2 !== 0) return false;
  
  const stack = [];

  for (let i = 0; i < s.length; i++) {

    const top = stack[stack.length-1];

    if (s[i] === "(" || s[i] === "{" || s[i] === "[" ) {
      stack.push(s[i]);

    } else if (s[i] === ")" && top === "(" && stack.length !== 0) {
      stack.pop();

    } else if (s[i] === "]" && top === "[" && stack.length !== 0) {
      stack.pop();

    } else if (s[i] === "}" && top === "{" && stack.length !== 0) {
      stack.pop();
      
    } else {
      return false;
    }
  }
  return stack.length === 0
}

console.log(validParentheses("([{{{{}}}}])")); //true
console.log(validParentheses("((}]]")); //false
console.log(validParentheses("((}]]]")); //false