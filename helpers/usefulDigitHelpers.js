console.warn("Move decimals from the right:");
console.log("15/10 ->" + 15 / 10);
console.log("25/100 ->" + 25 / 100);

console.warn("Get numbers from the right:");
console.log("555123%10 ->" + (555123 % 10));
console.log("555123%100 ->" + (555123 % 100));

console.log(5 % 10); // 5

n = 11;
while (n-- > 10) {
  //compares then substracts
  console.log(n); // display 10 once
}

const set = new Set("1");
console.log(set);
