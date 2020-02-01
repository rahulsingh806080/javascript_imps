const selfFlat = function(depth = 1) {
  let arr = Array.prototype.slice.call(this);
  if (depth === 0) return arr;
  return arr.reduce((pre, cur) => {
    if (Array.isArray(cur)) {
      return [...pre, ...selfFlat.call(cur, depth - 1)];
    } else {
      return [...pre, cur];
    }
  }, []);
};

Array.prototype.selfFlat = selfFlat;
