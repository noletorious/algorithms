// CONSTRAINTS
// Will it always be a string?
// '' -> null
// [] -> null

const my_string = "Hello, my name is Noel";

// S: O(n)
// T: O(n)
function reverseString1(str) {
  // an empty array to hold the newly ordered array
  const reversed = [];
  // get the legnth of the string and minus 1 to get the end position
  const stringLength = str.length - 1;
  // loop through the array
  for (i = stringLength; i >= 0; i--) {
    reversed.push(str[i]);
  }
  const output = reversed.join("");
  return output;
}

// S:O(n)
// T:O(?)
function reverseString2(str) {
  return str.split("").reverse().join("");
}

function reverseString3(str) {
  return [...str].reverse().join("");
}

const rsinput = document.getElementById("rsinput");
rsinput.innerHTML += my_string;
const rspre = document.getElementById("rspre");
rspre.innerHTML += reverseString3;
const rsoutput = document.getElementById("rsoutput");
rsoutput.innerHTML += reverseString3(my_string);
