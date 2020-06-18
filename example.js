function arrayDoubler(arr) {
  if (!arr.length) {
    return;
  }
  let newValue = arr[0] * 2;
  let newArray = [];
  let returnArray = newArray.push(newValue);
  return returnArray + arrayDoubler(arr.slice(1));
}
