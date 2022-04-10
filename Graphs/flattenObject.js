dict = {
  Key1: "1",
  Key2: {
    a: "2",
    b: "3",
    c: {
      d: "3",
      e: {
        "": "1",
      },
    },
  },
};

/**  Flatten Object
 
  result = {
    Key1: "1",
    Key2.a: "2",
    ...    
  }

  Time: O(n), had to loop over each key
  Space: O(n), creating a result obj based on each key

*/
const flattenObject = (obj, currentKey = "", res = {}) => {
  // Loop over the object
  for (i in obj) {
    // let newKey = `${currentKey}${currentKey === "" || i === "" ? "" : "."}${i}`;
    let newKey = currentKey === "" ? `${i}` : `${currentKey}.${i}`;
    if (typeof obj[i] === "object") {
      flattenObject(obj[i], newKey, res);
    } else {
      res[newKey] = obj[i];
    }
  }

  return res;
};

console.log(flattenObject(dict, "", {}));
