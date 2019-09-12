# generate-variable
`generate-variable` is a simple npm module to generate a unique variable using integer values. 

## How to use
Install npm module
`npm i generate-variable`<br />
Generate a unique alphabet sequence using integer.
```
import { numToVariable, variableToNum } from "generate-variable";
console.log(numToVariable(0)) //A
console.log(numToVariable(2756)) //BBA
console.log(variableToNum('BBA')) //2756
```
## Use case example
The author developed this library to compress known property keys and values.<br />
For an object with known variable names
```
const variables = ["property1", "property2", "property3", "Good", "Bad", "Not so good"];
let testObject = {
  property1: 'Good',
  property2: 'Bad',
  property3: 'Not so good'
 };
```
find the index of each variable name in our constant array and rename using `numToVariable`
```
Objects.keys(testObject).forEach((key) => {
  if (variables.includes(key)) {
    const newKey = numToVariable(variables.indexOf(key));
    testObject.rename(key, newKey);
  }
  if (variables.includes(testObject[key])) {
    const newValue = numToVariable(variables.indexOf(testObject[key]));
    testObject[key] = newValue;
  }
});
```
then the new compressed array looks like 
```
testObject = {
  A: D
  B: E
  C: F
 }
 ```
