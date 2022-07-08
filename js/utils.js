function getIntRandomNumber(firstNumber, secondNumber) {
  if(firstNumber < 0 || secondNumber < 0){
    throw new Error(`positive number expected ${[secondNumber, firstNumber]}`);
  }

  if (firstNumber > secondNumber) {
    throw new Error(`first argument must be lesser than second ${[secondNumber, firstNumber]}`);
  }

  return Math.floor(Math.random() * (secondNumber - firstNumber +  1)) + firstNumber;
}

function checkStringLength(string, maxLength) {
  return string.length <= maxLength;
}

function getRandomArrayElement(arr) {
  return arr[getIntRandomNumber(0, arr.length - 1)];
}

function getRandomUniqElement(array) {
  let arr = array.slice();

  return () => {
    if (!arr.length) {
      arr = array.slice();
    }

    return arr.splice(getIntRandomNumber(0, arr.length - 1), 1)[0];
  };
}


const makeElement = (tagName, className, text) => {
  const element = document.createElement(tagName);
  element.classList.add(className);

  if (text) {
    element.textContent = text;
  }

  return element;
};

const ifEscEvent = (evt) => evt.keyCode === 27;

export {getIntRandomNumber, checkStringLength, getRandomArrayElement, getRandomUniqElement, makeElement, ifEscEvent};
