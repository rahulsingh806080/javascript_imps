const selfMap = function(fn, context) {
  let arr = Array.prototype.slice.call(this);
  let mappedArr = Array();
  for (let i = 0; i < arr.length; i++) {
    if (!arr.hasOwnProperty(i)) continue;
    mappedArr[i] = fn.call(context, arr[i], i, this);
  }
  return mappedArr;
};

Array.prototype.selfMap = selfMap;
