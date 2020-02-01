function normalFunction(num) {
  console.log("first time is called ");
  return num + "abc";
}

function cacheFunction(fn) {
  var cachedObj = Object.create(null);

  return function cachedFn(str) {
    if (!cachedObj[str]) {
      var r = fn(str);
      cachedObj[str] = r;
    }
    return cachedObj[str];
  };
}
