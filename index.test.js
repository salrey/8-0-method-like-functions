const {
  myPushFunction,
  myPopFunction,
  myIncludesFunction,
  myIndexOfFunction,
  mySliceFunction,
  myJoinFunction,
  myReverseFunction,
  myUnshiftFunction
} = require("./index");

describe("myPushFunction()", () => {
  test("does not use the push method", () => {
    const array = ["module", "one", "is", "finally", "over"];
    const element = "yas";
    const funcString = myPushFunction(array, element).toString();
    expect(funcString.includes(".push")).toBe(false);
  });

  test("returns the new length of the array", () => {
    const array = ["module", "one", "is", "finally", "over"];
    const element = "yas";
    expect(myPushFunction(array, element)).toEqual(6);
  });

  test("mutates the original array", () => {
    const array = ["module", "one", "is", "finally", "over"];
    const element = "yas";
    myPushFunction(array, element);
    expect(array.length).toEqual(6);
  });

  test("adds an element to the end of the array", () => {
    const array = ["module", "one", "is", "finally", "over"];
    const element = "yas";
    myPushFunction(array, element);
    expect(array[array.length - 1]).toEqual("yas");
  });

  test("adds multiple elements to the end of the array", () => {
    expect(myPushFunction([1, 2, 3, 4, 5], 6, 7, 8)).toBe(8);
  });
});

describe("myPopFunction()", () => {
  test("returns undefined if the array is empty", () => {
    expect(myPopFunction([])).toBeUndefined();
  });

  test("returns the removed element from the array", () => {
    const array = [1, 2, 3, 4, 5, 6];
    const array2 = ["fire", "water", "earth", "air"];
    expect(myPopFunction(array)).toBe(6);
    expect(myPopFunction(array2)).toBe("air");
  });

  test("mutates the original array", () => {
    const array = [{ one: 1 }, { two: 2 }, { three: 3 }, { four: 4 }];
    const originalArrLength = array.length;
    myPopFunction(array);
    expect(array.length).toEqual(originalArrLength - 1);
  });

  test("does not use the pop method", () => {
    const array = ["module", "one", "is", "finally", "over"];
    const funcString = myPopFunction(array).toString();
    expect(funcString.includes(".pop")).toBe(false);
  });
});

describe("myIncludesFunction()", () => {
  test("returns false if the searched for element is not in the array", () => {
    const array = ["fire", "water", "earth", "air"];
    expect(myIncludesFunction(array, 5)).toBe(false);
    expect(myIncludesFunction([], 5)).toBe(false);
  });

  test("returns true if the searched for element is in the array", () => {
    const array = ["fire", "water", "earth", "air"];
    expect(myIncludesFunction(array, "air")).toBe(true);

    const numArr = [1, 2, 3, 4, 5];
    expect(myIncludesFunction(numArr, 5)).toBe(true);
  });

  test("does not use the includes method", () => {
    const array = ["module", "one", "is", "finally", "over"];
    const funcString = myIncludesFunction(array).toString();
    expect(funcString.includes(".includes")).toBe(false);
  });

  test("returns false if the searched for element is not in the array from the given starting index to the end of the array", () => {
    const array = ["fire", "water", "earth", "air"];
    expect(myIncludesFunction(array, "water", 2)).toBe(false);
  });

  test("returns true if the searched for element is in the array from the given starting index to the end of the array", () => {
    const array = ["fire", "water", "earth", "air"];
    expect(myIncludesFunction(array, "air", 2)).toBe(true);
    expect(myIncludesFunction([1, 2, 3, 4, 5], 2, 1)).toBe(true);
  });

  test("returns the correct boolean if the searched for element is in the array and the given starting index is negative", () => {
    const array = ["fire", "water", "earth", "air"];
    expect(myIncludesFunction(array, "air", -2)).toBe(true);

    const numArr = [1, 2, 3, 4, 5];
    expect(myIncludesFunction(numArr, 2, -2)).toBe(false);
    expect(myIncludesFunction(numArr, 2, -5)).toBe(true);
  });
});

describe("myIndexOfFunction()", () => {
  test("returns -1 if the searched for element is not in the array", () => {
    const array = ["fire", "water", "earth", "air"];
    expect(myIndexOfFunction(array, 5)).toBe(-1);
    expect(myIndexOfFunction([], 5)).toBe(-1);
  });

  test("returns the correct index if the searched for element is in the array", () => {
    const array = ["fire", "water", "earth", "air"];
    expect(myIndexOfFunction(array, "air")).toBe(3);

    const numArr = [1, 2, 3, 4, 5];
    expect(myIndexOfFunction(numArr, 5)).toBe(4);
  });

  test("does not use the indexOf method", () => {
    const array = ["module", "one", "is", "finally", "over"];
    const funcString = myIndexOfFunction(array).toString();
    expect(funcString.includes(".indexOf")).toBe(false);
  });

  test("returns -1 if the searched for element is not in the array from the given starting index to the end of the array", () => {
    const array = ["fire", "water", "earth", "air"];
    expect(myIndexOfFunction(array, "water", 2)).toBe(-1);
  });

  test("returns the correct index if the searched for element is in the array from the given starting index to the end of the array", () => {
    const array = ["fire", "water", "earth", "air"];
    expect(myIndexOfFunction(array, "air", 2)).toBe(3);

    const numArr = [1, 2, 3, 4, 5];
    expect(myIndexOfFunction(numArr, 2, 1)).toBe(1);
  });

  test("returns the correct boolean if the searched for element is in the array and the given starting index is negative", () => {
    const array = ["fire", "water", "earth", "air"];
    expect(myIndexOfFunction(array, "air", -2)).toBe(3);

    const numArr = [1, 2, 3, 4, 5];
    expect(myIndexOfFunction(numArr, 2, -2)).toBe(-1);
    expect(myIndexOfFunction(numArr, 2, -5)).toBe(1);
  });
});

describe("mySliceFunction()", () => {
  test("returns a shallow copy of the entire array if no start index or end index is given", () => {
    const array = ["fire", "water", "earth", "air"];
    expect(mySliceFunction(array)).toEqual(expect.arrayContaining(array));

    expect(array === mySliceFunction(array)).toBe(false);

    const numArr = [1, 2, 3, 4, 5];
    expect(mySliceFunction(numArr)).toEqual(expect.arrayContaining(numArr));

    const nestedArr = [1, 2, [3, 4, 5]];
    const innerArr = nestedArr[2];
    expect(mySliceFunction(nestedArr)[2] === innerArr).toBe(true);
  });

  test("returns a new array starting at the given start idx and to end of the array if no end index is given", () => {
    const array = ["fire", "water", "earth", "air"];
    const expected1 = ["earth", "air"];
    expect(mySliceFunction(array, 2)).toStrictEqual(expected1);

    const numArr = [1, 2, 3, 4, 5];
    const expected2 = [2, 3, 4, 5];
    expect(mySliceFunction(numArr, 1)).toStrictEqual(expected2);

    const nestedArr = [1, 2, [3, 4, 5]];
    const expected3 = [[3, 4, 5]];
    expect(mySliceFunction(nestedArr, 2)).toStrictEqual(expected3);
  });

  test("returns a new array starting at the given idx and up to but not including the given  end index", () => {
    const array = ["fire", "water", "earth", "air"];
    const expected1 = ["earth"];
    expect(mySliceFunction(array, 2, 3)).toStrictEqual(expected1);

    const numArr = [1, 2, 3, 4, 5];
    const expected2 = [2, 3, 4];
    expect(mySliceFunction(numArr, 1, 4)).toStrictEqual(expected2);

    const nestedArr = [1, 2, [3, 4, 5]];
    const expected3 = [2];
    expect(mySliceFunction(nestedArr, 1, 2)).toStrictEqual(expected3);
  });

  test("returns a new array starting at the given negative idx", () => {
    const array = ["fire", "water", "earth", "air"];
    const expected = ["earth", "air"];
    expect(mySliceFunction(array, -2)).toStrictEqual(expected);
  });

  test("returns a new array starting at the given idx and up to but not including the given negative index", () => {
    const array = ["fire", "water", "earth", "air"];
    const expected = ["earth"];
    expect(mySliceFunction(array, 2, -1)).toStrictEqual(expected);
  });

  test("returns a new array starting at the given index and up to the last element if the given end index is more than the length of the array", () => {
    const array = ["fire", "water", "earth", "air"];
    const expected1 = ["earth", "air"];
    expect(mySliceFunction(array, 2, 8)).toStrictEqual(expected1);

    const numArr = [1, 2, 3, 4, 5];
    const expected2 = [2, 3, 4, 5];
    expect(mySliceFunction(numArr, 1, 10)).toStrictEqual(expected2);
  });
  
  test("does not use the slice method", () => {
    const array = ["module", "one", "is", "finally", "over"];
    const funcString = mySliceFunction(array).toString();
    expect(funcString.includes(".slice")).toBe(false);
  });
});

describe("myJoinFunction()", () => {
  test("creates and returns a string by concatenating all of the elements in the array with a comma when a separator is not given", () => {
    const array = ["module", "one", "is", "finally", "over"];
    expect(myJoinFunction(array)).toEqual("module,one,is,finally,over");
  });

  test("creates and returns a string by concatenating all of the elements in the array with the given separator", () => {
    const array = ["module", "one", "is", "finally", "over"];
    expect(myJoinFunction(array, "")).toEqual("moduleoneisfinallyover");
    expect(myJoinFunction(array, " ")).toEqual("module one is finally over");
    expect(myJoinFunction(array, "_")).toEqual("module_one_is_finally_over");
    expect(myJoinFunction(array, "!!!")).toEqual(
      "module!!!one!!!is!!!finally!!!over"
    );
  });

  test("returns an empty string if given and empty array",()=>{
      expect(myJoinFunction([])).toEqual('');
      expect(myJoinFunction([],'')).toEqual('');
  });

  test("does not use the join method", () => {
    const array = ["module", "one", "is", "finally", "over"];
    const funcString = myJoinFunction(array).toString();
    expect(funcString.includes(".join")).toBe(false);
  });
});

describe("myReverseFunction()", () => {
    test("returns an array with the elements reversed", () => {
      const array = ["module", "one", "is", "finally", "over"];
      const expected1 = [ 'over', 'finally', 'is', 'one', 'module' ]
      expect(myReverseFunction(array)).toEqual(expected1);

      const numArr = [1,2,3,4,5];
      const expected2 = [5,4,3,2,1];
      expect(myReverseFunction(numArr)).toEqual(expected2);
    });
  
    test("does not use the reverse method", () => {
      const array = ["module", "one", "is", "finally", "over"];
      const funcString = myReverseFunction(array).toString();
      expect(funcString.includes(".reverse")).toBe(false);
    });
  });

  describe("myUnShiftFunction()", () => {
    test("returns an array with the correct length", () => {
      const array = ["module", "one", "is", "finally", "over"];
      const element = "yas";
      expect(myUnshiftFunction(array, element).length).toEqual(6);
    });
  
    test("adds an element to the start of the array", () => {
      const array = ["module", "one", "is", "finally", "over"];
      const element = "yas";
      expect(myUnshiftFunction(array, element)[0]).toEqual("yas");
    });
  
    test("adds multiple elements to the start of the array", () => {
      const numArr = [4,5,6,7,8];
      const expected = [1,2,3,4,5,6,7,8]  
      expect(myUnshiftFunction(numArr, 1,2,3).length).toBe(8);
      expect(myUnshiftFunction(numArr, 1,2,3)).toEqual(expect.arrayContaining(expected))

    });

    test("does not use the unshift method", () => {
        const array = ["module", "one", "is", "finally", "over"];
        const element = "yas";
        const funcString = myUnshiftFunction(array, element).toString();
        expect(funcString.includes(".unshift")).toBe(false);
      });
  });