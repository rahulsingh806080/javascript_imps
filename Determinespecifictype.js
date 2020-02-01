function toRawType(value) {
  let _toString = Object.prototype.toString;

  let str = _toString.call(value);

  return str.slice(8, -1);
}
