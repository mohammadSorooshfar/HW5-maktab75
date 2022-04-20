let arr = [1, 2, 3];
function addToList(...params) {
  arr = [...arr, ...params];
}
addToList(5, 6, 7);
console.log(arr);
