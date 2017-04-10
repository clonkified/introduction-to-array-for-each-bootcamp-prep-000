function changeCompletely(el, index, ar) {
  ar[index] = el * 100;
}

function doToElementsInArray(array, callback) {
  array.forEach(callback);
}
