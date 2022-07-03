function getIntRandomNumber(FirstNumber, SecondNumber) {
  if(FirstNumber < 0 || SecondNumber < 0){
    throw new Error(`positive number expected ${[SecondNumber, FirstNumber]}`);
  }

  if (FirstNumber > SecondNumber) {
    [SecondNumber, FirstNumber] = [FirstNumber, SecondNumber];
  }

  return Math.floor(Math.random() * (SecondNumber - FirstNumber +  1)) + FirstNumber;
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

export {getIntRandomNumber, checkStringLength, getRandomArrayElement, getRandomUniqElement};
