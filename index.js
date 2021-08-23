/**
 * Appends an element or multiple elements to the end of an array. Do not use the push method.
 * @param {Array[]} array - an array of with any kind of elements.
 * @param {*} element - an element of any kind.
 * @returns {number} the new length of the array.
 */

function myPushFunction(array, element, element1, element2) {
  array[array.length] = element;
  if (element1 && element2) {
    array[array.length] = element1;     
    array[array.length] = element2; 
  };
  return array.length;
};

/**
 * Removes the last element of the array and returns the removed element or undefined if the array is empty. Do not use the pop method.
 * @param {Array[]} array - an array of with any kind of elements.
 * @returns {*} the element that was removed.
 */
function myPopFunction(array) {
  if (array.length === 0) {
    return undefined;
  };
  const lastElement = array[array.length-1] 
  array.length = array.length - 1;
  return lastElement; 
};

// //Check
// const array = [1, 2, 3, 4]
// console.log(myPopFunction(array))

/**
 * Determine whether an array includes a specific value within its entries. Do not use the includes method.
 * @param {Array[*]} array - an array of with any kind of elements.
 * @param {*} searchElement - an element of any type that you are searching for in the array.
 * @returns {boolean} returns true or false if the searchElement is found in the array.
 */
function myIncludesFunction(array, searchElement, searchIndex) {
  let result = false;

  if (searchIndex < 0) {
    for (let i = array.length + searchIndex; i < array.length; i++) {
      if (searchElement === array[i]) {
        result = true;
      }; 
    };
  } else if (searchIndex) {
    for (let i = searchIndex; i < array.length; i++) {
      if (searchElement === array[i]) {
        result = true;
      }; 
    };
  } else {
    for (let i = 0; i < array.length; i++) {
      if (searchElement === array[i]) {
        result = true;
      }; 
    };
  };

  return result; 
};

/**
 * Return the first index in an array where a specified value is found. Do not use the indexOf method.
 * @param {Array[*]} array - an array of with any kind of elements.
 * @param {*} searchElement - an element of any type that you are searching for in the array.
 * @returns {number} returns the index at with the searchElement is found or -1.
 */
function myIndexOfFunction(array, searchElement, searchIndex) {
  let result = -1;

  if (searchIndex < 0) {
    for (let i = array.length + searchIndex; i < array.length; i++) {
      if (searchElement === array[i]) {
        result = i;
      }; 
    };
  } else if (searchIndex) {
    for (let i = searchIndex; i < array.length; i++) {
      if (searchElement === array[i]) {
        result = i;
      }; 
    };
  } else {
    for (let i = 0; i < array.length; i++) {
      if (searchElement === array[i]) {
        result = i;
      }; 
    };
  };

  return result;
};

/**
 * Returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified. Do not use the slice method.
 * @param {Array[*]} array - an array of with any kind of elements.
 * @param {number} [startIdx] - an optional number representing the starting index of the extraction. The startIdx can be negative.
 * @param {number} [endIdx] - an optional number representing the ending index of the extraction (non-inclusive). The endIdx can be negative.
 * @returns {Array[*]} returns a new array containing the extracted elements.
 */
function mySliceFunction(array, startIdx, endIdx) {
  const extractedElements = [];
  
  if (endIdx < 0) {
    for (let i = startIdx; i < array.length + endIdx; i++) {
      extractedElements[i-startIdx] = array[i];
    };
  } else if (startIdx < 0) {
    if (endIdx) {
      for (let i = array.length + startIdx; i < endIdx; i++) {
        extractedElements[i-(array.length + startIdx)] = array[i];
      };
    } else {
      for (let i = array.length + startIdx; i < array.length; i++) {
        extractedElements[i-(array.length + startIdx)] = array[i];
      };
    };
  } else if (endIdx < array.length) {
    for (let i = startIdx; i < endIdx; i++) {
      extractedElements[i-startIdx] = array[i];
    };
  } else if (startIdx) {
    for (let i = startIdx; i < array.length; i++) {
      extractedElements[i-startIdx] = array[i];
    };
  } else {
    for (let i = 0; i < array.length; i++) {
      extractedElements[i] = array[i];
    };
  };

  return extractedElements;

};

// Check 
// const array = [1, 2, 3, 4, 5]
// let startIdx = 2
// let endIdx = -1
// console.log(mySliceFunction(array, startIdx, endIdx))

/**
 * Creates and returns a new string by concatenating all of the elements in an array, separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator. Do not use the join method.
 * @param {Array[*]} array - an array of with any kind of elements
 * @param {string} [separator] - an optional string to separate each pair of adjacent elements of the array. If no separator is specific the default separator should be a comma (",")
 * @returns {string} returns a new array containing the extracted elements
 */
function myJoinFunction(array, separator) { 
  if (separator === undefined) {
    separator = ",";
  }; 

  let newList = "";

  for (let i = 0; i < array.length; i++) {
    newList += array[i]; 
    if (array.length > 1 && i < array.length -1) {
      newList += separator;
    }; 
  };
  
  return newList;
};

/**
 * Returns an array with the elements reverse. The first array element becomes the last, and the last array element becomes the first. Do not use the reverse method.
 * @param {Array[*]} array - an array of with any kind of elements
 * @returns {Array[*]} returns the array with the elements reversed.
 */
function myReverseFunction(array) {
  const newList = [];

  for (let i = 0; i < array.length; i++) {
    newList[i] = array[i]; 
  };
  for (let i = array.length - 1; i >= 0; i--) {
    array[(array.length - 1) - i] = newList[i];
  };

  return array;
};

// Check
// const array = [1, 2, 3, 4, 5];
// console.log(myReverseFunction(array))

/**
 * Returns an array with one or more elements added to the front of the array followed by the original elements. Do not use the unshift method.
 * @param {Array[*]} array - an array of with any kind of elements.
 * @param {*} newElement - an element of any type to add to the front of the array.
 * @returns {number} returns the new length of the array.
 */
function myUnshiftFunction(array, newElement, newElement1, newElement2) {
const newList = []

  for (let i = array.length -1; i >= 0; i--) {
      array[i + arguments.length -1] = array[i]
    }
  for (let i = 1; i < arguments.length; i++) {
    newList[i-1] = arguments[i]
  }
  for (let i = 0; i < newList.length; i++) {
    array[i] = newList[i]
  }
  
  const newLength = array.length
  
  return newLength
}

//check 
const array = [1, 2, 3, 4, 5];
let newElement = 6
let newElement1 = 7
let newElement2 = 8
console.log(myUnshiftFunction(array, newElement, newElement1, newElement2))

module.exports = {
  myPushFunction,
  myPopFunction,
  myIncludesFunction,
  myIndexOfFunction,
  mySliceFunction,
  myJoinFunction,
  myReverseFunction,
  myUnshiftFunction
};
