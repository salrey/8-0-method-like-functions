const {
  myPushFunction,
  myPopFunction,
  myIncludesFunction,
  myIndexOfFunction,
  mySliceFunction,
  myJoinFunction,
  myReverseFunction,
  myUnshiftFunction,
} = require("./index");

describe("myPushFunction()", () => {
  test("returns the new length of the array", () => {
    const array1 = ["module", "one", "is", "finally", "over"];
    const element1 = "yas";
    const actual1 = myPushFunction(array1, element1);
    const expected1 = 6;
    expect(actual1).toEqual(expected1);

    const array2 = [1, 1, 2];
    const element2 = 3;
    const actual2 = myPushFunction(array2, element2);
    const expected2 = 4;
    expect(actual2).toEqual(expected2);
  });

  test("adds an element to the end of the array", () => {
    const actual1 = ["module", "one", "is", "finally", "over"];
    const element1 = "yas";
    myPushFunction(actual1, element1);
    const expected1 = ["module", "one", "is", "finally", "over", "yas"];
    expect(actual1).toEqual(expected1);

    const actual2 = [1, 1, 2];
    const element2 = 3;
    myPushFunction(actual2, element2);
    const expected2 = [1, 1, 2, 3];
    expect(actual2).toEqual(expected2);
  });

  test.skip("adds multiple elements to the end of the array", () => {
    expect(myPushFunction([1, 2, 3, 4, 5], 6, 7, 8)).toBe(8);
  });

  test("does not use the push method", () => {
    const array = ["module", "one", "is", "finally", "over"];
    const element = "yas";
    const funcString = myPushFunction.toString();
    expect(funcString.includes(".push")).toBe(false);
  });
});

describe("myPopFunction()", () => {
  test("returns undefined if the array is empty", () => {
    expect(myPopFunction([])).toBeUndefined();
  });

  test("returns the removed element from the array", () => {
    const array1 = [1, 2, 3, 4, 5, 6];
    const actual1 = myPopFunction(array1);
    const expected1 = 6;
    expect(actual1).toBe(expected1);

    const array2 = ["fire", "water", "earth", "air"];
    const actual2 = myPopFunction(array2);
    const expected2 = "air";
    expect(actual2).toBe(expected2);
  });

  test("changes the original array's length", () => {
    const array1 = [{ one: 1 }, { two: 2 }, { three: 3 }];
    myPopFunction(array1);
    const actual1 = array1.length;
    const expected1 = 2;
    expect(actual1).toEqual(expected1);

    const array2 = ["fire", "water", "earth", "air"];
    myPopFunction(array2);
    const actual2 = array2.length;
    const expected2 = 3;
    expect(actual2).toEqual(expected2);
  });

  test("removes the last element from the array", () => {
    const actual1 = [{ one: 1 }, { two: 2 }, { three: 3 }, { four: 4 }];
    myPopFunction(actual1);
    const expected1 = [{ one: 1 }, { two: 2 }, { three: 3 }];
    expect(actual1).toEqual(expected1);

    const actual2 = ["fire", "water", "earth", "air"];
    myPopFunction(actual2);
    const expected2 = ["fire", "water", "earth"];
    expect(actual2).toEqual(expected2);
  });

  test("does not use the pop method", () => {
    const array = ["module", "one", "is", "finally", "over"];
    const funcString = myPopFunction.toString();
    expect(funcString.includes(".pop")).toBe(false);
  });
});

describe("myIncludesFunction()", () => {
  test("returns false if the searched for element is not in the array", () => {
    const array1 = ["fire", "water", "earth", "air"];
    const actual1 = myIncludesFunction(array1, "love");
    const expected1 = false;
    expect(actual1).toEqual(expected1);

    const array2 = [1, 1, 2, 3, 5, 8];
    const actual2 = myIncludesFunction(array2, 4);
    const expected2 = false;
    expect(actual2).toEqual(expected2);
  });

  test("returns true if the searched for element is in the array", () => {
    const array1 = ["fire", "water", "earth", "air"];
    const actual1 = myIncludesFunction(array1, "water");
    const expected1 = true;
    expect(actual1).toEqual(expected1);

    const array2 = ["fire", "water", "earth", "air"];
    const actual2 = myIncludesFunction(array2, "earth");
    const expected2 = true;
    expect(actual2).toEqual(expected2);
  });

  test.skip("returns false if the searched for element is not in the array from the given starting index to the end of the array", () => {
    const array1 = ["fire", "water", "earth", "air"];
    const actual1 = myIncludesFunction(array1, "water", 2);
    const expected1 = false;
    expect(actual1).toEqual(expected1);

    const array2 = [4, 8, 15, 16, 23, 42];
    const actual2 = myIncludesFunction(array2, 4, 1);
    const expected2 = false;
    expect(actual2).toEqual(expected2);
  });

  test.skip("returns true if the searched for element is in the array from the given starting index to the end of the array", () => {
    const array1 = ["fire", "water", "earth", "air"];
    const actual1 = myIncludesFunction(array1, "air", 2);
    const expected1 = true;
    expect(actual1).toEqual(expected1);

    const array2 = [1, 2, 3, 4, 5];
    const actual2 = myIncludesFunction(array2, 2, -2);
    const expected2 = false;
    expect(actual2).toEqual(expected2);
  });

  test.skip("can handle negative starting indices, searching from that many elements from the END of the array", () => {
    const array1 = ["fire", "water", "earth", "air"];
    const actual1 = myIncludesFunction(array1, "air", -2);
    const expected1 = true;
    expect(actual1).toEqual(expected1);

    const array2 = [1, 2, 3, 4, 5];
    const actual2 = myIncludesFunction(array2, 2, -5);
    const expected2 = true;
    expect(actual2).toEqual(expected2);
  });

  test("does not use the includes method", () => {
    const array = ["module", "one", "is", "finally", "over"];
    const funcString = myIncludesFunction.toString();
    expect(funcString.includes(".includes")).toBe(false);
  });
});

describe("myIndexOfFunction()", () => {
  test("returns -1 if the searched for element is not in the array", () => {
    const array1 = ["fire", "water", "earth", "air"];
    const actual1 = myIndexOfFunction(array1, "love");
    const expected1 = -1;
    expect(actual1).toEqual(expected1);

    const array2 = [1, 1, 2, 3, 5, 8];
    const actual2 = myIndexOfFunction(array2, 4);
    const expected2 = -1;
    expect(actual2).toEqual(expected2);
  });

  test("returns the correct index if the searched for element is in the array", () => {
    const array1 = ["fire", "water", "earth", "air"];
    const actual1 = myIndexOfFunction(array1, "water");
    const expected1 = 1;
    expect(actual1).toEqual(expected1);

    const array2 = ["fire", "water", "earth", "air"];
    const actual2 = myIndexOfFunction(array2, "earth");
    const expected2 = 2;
    expect(actual2).toEqual(expected2);
  });

  test.skip("returns -1 if the searched for element is not in the array from the given starting index to the end of the array", () => {
    const array1 = ["fire", "water", "earth", "air"];
    const actual1 = myIndexOfFunction(array1, "water", 2);
    const expected1 = -1;
    expect(actual1).toEqual(expected1);

    const array2 = [4, 8, 15, 16, 23, 42];
    const actual2 = myIndexOfFunction(array2, 4, 1);
    const expected2 = -1;
    expect(actual2).toEqual(expected2);
  });

  test.skip("returns the correct index if the searched for element is in the array from the given starting index to the end of the array", () => {
    const array1 = ["fire", "water", "earth", "air"];
    const actual1 = myIndexOfFunction(array1, "air", 2);
    const expected1 = 3;
    expect(actual1).toEqual(expected1);

    const array2 = [1, 2, 3, 4, 5];
    const actual2 = myIndexOfFunction(array2, 2, 1);
    const expected2 = 1;
    expect(actual2).toEqual(expected2);
  });

  test.skip("can handle negative starting indices, searching from that many elements from the END of the array", () => {
    const array1 = ["fire", "water", "earth", "air"];
    const actual1 = myIndexOfFunction(array1, "air", -2);
    const expected1 = 3;
    expect(actual1).toEqual(expected1);

    const array2 = [1, 2, 3, 4, 5];
    const actual2 = myIndexOfFunction(array2, 2, -2);
    const expected2 = -1;
    expect(actual2).toEqual(expected2);
  });

  test("does not use the indexOf method", () => {
    const array = ["module", "one", "is", "finally", "over"];
    const funcString = myIndexOfFunction.toString();
    expect(funcString.includes(".indexOf")).toBe(false);
  });
});

describe("mySliceFunction()", () => {
  test("returns a copy of the entire array if no start index or end index is given", () => {
    const array1 = ["fire", "water", "earth", "air"];
    const actual1 = mySliceFunction(array1);
    expect(actual1).toEqual(array1);

    const array2 = [1, 2, 3, 4, 5];
    const actual2 = mySliceFunction(array2);
    expect(actual2).toEqual(array2);
  });

  test("returns an array that has the same contents as the array passed in but is not a reference to that array", () => {
    const array = ["fire", "water", "earth", "air"];
    const actual = mySliceFunction(array);
    expect(actual === array).toBe(false);
  });

  test("returns a new array starting at the given start index and ending at the end of the array", () => {
    const array1 = ["fire", "water", "earth", "air"];
    const actual1 = mySliceFunction(array1, 2);
    const expected1 = ["earth", "air"];
    expect(actual1).toEqual(expected1);

    const array2 = [1, 2, 3, 4, 5];
    const actual2 = mySliceFunction(array2, 1);
    const expected2 = [2, 3, 4, 5];
    expect(actual2).toEqual(expected2);

    const array3 = [1, 2, [3, 4, 5]];
    const actual3 = mySliceFunction(array3, 2);
    const expected3 = [[3, 4, 5]];
    expect(actual3).toEqual(expected3);
  });

  test("returns a new array starting at the given index and up to but not including the given end index", () => {
    const array1 = ["fire", "water", "earth", "air"];
    const actual1 = mySliceFunction(array1, 2, 3);
    const expected1 = ["earth"];
    expect(actual1).toEqual(expected1);

    const array2 = [1, 2, 3, 4, 5];
    const actual2 = mySliceFunction(array2, 1, 4);
    const expected2 = [2, 3, 4];
    expect(actual2).toEqual(expected2);

    const array3 = [1, 2, [3, 4, 5]];
    const actual3 = mySliceFunction(array3, 1, 2);
    const expected3 = [2];
    expect(actual3).toEqual(expected3);
  });

  test.skip("returns a new array starting at the given negative index", () => {
    const array1 = ["fire", "water", "earth", "air"];
    const actual1 = mySliceFunction(array1, -2);
    const expected1 = ["earth", "air"];
    expect(actual1).toEqual(expected1);

    const array2 = [1, 2, 3, 4, 5];
    const actual2 = mySliceFunction(array2, -4, 4);
    const expected2 = [2, 3, 4];
    expect(actual2).toEqual(expected2);
  });

  test.skip("returns a new array starting at the given index and up to but not including the given negative index", () => {
    const array1 = ["fire", "water", "earth", "air"];
    const actual1 = mySliceFunction(array1, 2, -1);
    const expected1 = ["earth"];
    expect(actual1).toEqual(expected1);

    const array2 = [1, 2, 3, 4, 5];
    const actual2 = mySliceFunction(array2, 1, -1);
    const expected2 = [2, 3, 4];
    expect(actual2).toEqual(expected2);
  });

  test.skip("returns a new array starting at the given index and up to the last element if the given end index is more than the length of the array", () => {
    const array1 = ["fire", "water", "earth", "air"];
    const actual1 = mySliceFunction(array1, 2, 8);
    const expected1 = ["earth", "air"];
    expect(actual1).toEqual(expected1);

    const array2 = [1, 2, 3, 4, 5];
    const actual2 = mySliceFunction(array2, 1, 10);
    const expected2 = [2, 3, 4, 5];
    expect(actual2).toEqual(expected2);
  });

  test("does not use the slice method", () => {
    const array = ["module", "one", "is", "finally", "over"];
    const funcString = mySliceFunction.toString();
    expect(funcString.includes(".slice")).toBe(false);
  });
});

describe("myJoinFunction()", () => {
  test("creates and returns a string by concatenating all of the elements in the array with a comma when a separator is not given", () => {
    const array1 = ["module", "one", "is", "finally", "over"];
    const actual1 = myJoinFunction(array1);
    const expected1 = "module,one,is,finally,over";
    expect(actual1).toBe(expected1);

    const array2 = ["I've", "got", "to", "celebrate", "you", "baby"];
    const actual2 = myJoinFunction(array2);
    const expected2 = "I've,got,to,celebrate,you,baby";
    expect(actual2).toBe(expected2);
  });

  test("creates and returns a string by concatenating all of the elements in the array with the given separator", () => {
    const array1 = ["module", "one", "is", "finally", "over"];
    const actual1 = myJoinFunction(array1, " ");
    const expected1 = "module one is finally over";
    expect(actual1).toBe(expected1);

    const actual2 = myJoinFunction(array1, "");
    const expected2 = "moduleoneisfinallyover";
    expect(actual2).toBe(expected2);

    const actual3 = myJoinFunction(array1, "_");
    const expected3 = "module_one_is_finally_over";
    expect(actual3).toBe(expected3);

    const array2 = ["I've", "got", "to", "celebrate", "you", "baby"];
    const actual4 = myJoinFunction(array2, "...");
    const expected4 = "I've...got...to...celebrate...you...baby";
    expect(actual4).toBe(expected4);
  });

  test("returns an empty string if given an empty array", () => {
    expect(myJoinFunction([])).toEqual("");
    expect(myJoinFunction([], "")).toEqual("");
  });

  test("does not use the join method", () => {
    const array = ["module", "one", "is", "finally", "over"];
    const funcString = myJoinFunction.toString();
    expect(funcString.includes(".join")).toBe(false);
  });
});

describe("myReverseFunction()", () => {
  test("returns the array with the elements reversed", () => {
    const array1 = ["module", "one", "is", "finally", "over"];
    const expected1 = ["over", "finally", "is", "one", "module"];
    const actual1 = myReverseFunction(array1);
    expect(actual1).toEqual(expected1);

    const array2 = [1, 2, 3, 4, 5];
    const actual2 = myReverseFunction(array2);
    const expected2 = [5, 4, 3, 2, 1];
    expect(actual2).toEqual(expected2);
  });

  test("reverses the original array", () => {
    const array1 = ["I've", "got", "to", "celebrate", "you", "baby"];
    const expected1 = ["baby", "you", "celebrate", "to", "got", "I've"];
    myReverseFunction(array1);
    expect(array1).toEqual(expected1);

    const array2 = ["oh", "hi", "there"];
    const expected2 = ["there", "hi", "oh"];
    myReverseFunction(array2);
    expect(array2).toEqual(expected2);
  });

  test("mutates the original array", () => {
    const array = ["module", "one", "is", "finally", "over"];
    expect(myReverseFunction(array)).toEqual(array);
  });

  test("does not use the reverse method", () => {
    const array = ["module", "one", "is", "finally", "over"];
    const funcString = myReverseFunction.toString();
    expect(funcString.includes(".reverse")).toBe(false);
  });
});

describe("myUnShiftFunction()", () => {
  test("returns the new length of the array", () => {
    const array = ["module", "one", "is", "finally", "over"];
    const element = "yas";
    expect(myUnshiftFunction(array, element)).toEqual(6);
  });

  test("mutates the original array", () => {
    const array = ["module", "one", "is", "finally", "over"];
    const element = "yas";
    myUnshiftFunction(array, element);
    expect(array.length).toEqual(6);
  });

  test("adds an element to the start of the array", () => {
    const array = ["module", "one", "is", "finally", "over"];
    const element = "yas";
    myUnshiftFunction(array, element);
    expect(array[0]).toEqual("yas");
  });

  test.skip("adds multiple elements to the start of the array", () => {
    const numArr = [1, 2, 3, 4, 5];
    expect(myUnshiftFunction(numArr, 6, 7, 8)).toBe(8);
    expect(numArr).toStrictEqual([6, 7, 8, 1, 2, 3, 4, 5]);
  });

  test("does not use the unshift method", () => {
    const array = ["module", "one", "is", "finally", "over"];
    const element = "yas";
    const funcString = myUnshiftFunction.toString();
    expect(funcString.includes(".unshift")).toBe(false);
  });
});
