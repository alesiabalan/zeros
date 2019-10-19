module.exports = function zeros(expression) {
  let array = expression.split("*");
  let count = 0;

  let result = array.reduce((prev, curr) => {
    let currentRes;
    if (curr.includes("!!")) {
      currentRes = _doubleFactorial(curr.slice(0, -2));
    } else {
      currentRes = _factorial(curr.slice(0, -1));
    }
    return multiply(prev, currentRes);
  }, "1");

  function _factorial(value) {
    if (+value === 1) {
      return "1";
    } else {
      return multiply(_factorial(value - 1 + ""), value);
    }
  }

  function _doubleFactorial(value) {
    if (+value % 2 === 0) {
      if (+value === 2) {
        return "2";
      } else {
        return multiply(_doubleFactorial(value - 2 + ""), value);
      }
    } else {
      if (+value === 1) {
        return "1";
      } else {
        return multiply(_doubleFactorial(value - 2 + ""), value);
      }
    }
  }

  for (let i = result.length - 1; i >= 0; i--) {
    if (result[i] == "0") {
      count++;
    } else {
      break;
    }
  }
  return count;
};

function multiply(first, second) {
  let array = [];

  first = first.split("");
  second = second.split("");

  first.reverse();
  second.reverse();

  for (let i = 0; first[i] >= 0; i++) {
    for (let j = 0; second[j] >= 0; j++) {
      if (!array[i + j]) array[i + j] = 0;
      array[i + j] += first[i] * second[j];
    }
  }

  for (let i = 0; array[i] >= 0; i++) {
    if (array[i] >= 10) {
      if (!array[i + 1]) array[i + 1] = 0;
      array[i + 1] += parseInt(array[i] / 10);
      array[i] %= 10;
    }
  }

  return array.reverse().join("");
}
