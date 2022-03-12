/** Brack match algorithm
 * 

input:  text = “(()”
output: 1

input:  text = “(())”
output: 0

input:  text = “())(”
output: 2

 * 
 * 
 */

/** QUESTIONS CONSTRAINTS
*
* (()) -> 0
* ())  -> 1
* ())( -> 2
* 

((())()   )))(
((()))   )))(
      1 
)))(

if leftParen

*/

/** BRUTE FORCE
* 
T: O(?)
S: O(?)

We keep track of the left parenthesis and check if there is a matching right
leftParen = 0
emptyRightParen = 0
p = 0

Loop through text p < text.length
  ch = text[i]
  if missing === 0 && ch === ")"
    leftParen++
    p++
    
  // if right parenthesis
  if leftParen < 0 && ch === ")"
    leftParen--
    
  // if left parenthesis
  if ch === "("
    leftParen++


*
*/

/** OPTIMIZED
*
T: O(n)
S: O(1)

leftParen = 2
i = 0

while loop i < text.len
  j = i + 1
  if i === "("
    leftParen++
    if j === ")"
      leftParen--
  i++
  elseif i === ")"  
*     
*/

const theParenList = "((()))   )))("; //4, the left cluster cancels itself out

function bracketMatch(text) {
  // your code goes here
  let leftParen = 0;
  let emptyRightParen = 0;
  let p = 0;

  while (p < text.length) {
    let ch = text[p];
    if (leftParen === 0 && ch === ")") {
      emptyRightParen++;
    } else if (leftParen > 0 && ch === ")") {
      leftParen--;
    } else if (ch === "(") {
      leftParen++;
    }
    p++;
  }
  return leftParen + emptyRightParen;
}

console.log(bracketMatch(theParenList));
