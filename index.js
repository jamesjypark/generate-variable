const numToAlpha = num => {
  if (num < 0 || num > 51) {
    return;
  }
  let startCharCode = 65;
  if (num >= 26) startCharCode = 71;
  return String.fromCharCode(num + startCharCode);
};

const numToVariable = num => {
  if (num <= 51) {
    return numToAlpha(num);
  } else {
    let variable = "";
    let digit = 0;
    let tempNum = num;
    while (tempNum >= 52) {
      digit++;
      tempNum = tempNum / 52;
    }
    while (digit) {
      let val = Math.pow(52, digit);
      variable += numToAlpha(Math.floor(num / val));
      num = num % val;
      digit--;
    }
    variable += numToAlpha(num);
    return variable;
  }
};

export default numToVariable;
