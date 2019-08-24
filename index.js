const numToAlpha = num => {
  if (num < 0 || num > 51) {
    return;
  }
  let startCharCode = 65;
  if (num >= 26) startCharCode = 71;
  return String.fromCharCode(num + startCharCode);
};

const alphaToNum = char => {
  let num = char.charCodeAt(0);
  if (num < 91) {
    return num - 65;
  }
  return num - 71;
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

const variableToNum = str => {
  let sum = 0;
  while (str) {
    sum += alphaToNum(str[0]) * Math.pow(52, str.length - 1);
    str = str.slice(1);
  }
  return sum;
};

module.exports = {
  numToVariable,
  variableToNum
};
