const selfReduce = function(fn, initialValue) {
  let arr = Array.prototype.slice.call(this);
  let res;
  let startIndex;
  if (initialValue === undefined) {
    for (let i = 0; i < arr.length; i++) {
      if (!arr.hasOwnProperty(i)) continue;
      startIndex = i;
      res = arr[i];
      break;
    }
  } else {
    res = initialValue;
  }

  for (let i = ++startIndex || 0; i < arr.length; i++) {
    if (!arr.hasOwnProperty(i)) continue;
    res = fn.call(null, res, arr[i], i, this);
  }
  return res;
};

Array.prototype.selfReduce = selfReduce;
