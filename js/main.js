function getIntRandomNumber(min, max) {
  let absMin = Math.abs(min);
  let absMax = Math.abs(max);
  
  if (absMin > absMax) {
    [absMax, absMin] = [absMin, absMax];
  }
  
  return Math.floor(Math.random() * (absMax - absMin +  1)) + absMin;
}
  
function checkStringLength(string, maxLength) {
  return string.length <= maxLength;
}
  
checkStringLength('строка', 4);
  
getIntRandomNumber(-12,33);