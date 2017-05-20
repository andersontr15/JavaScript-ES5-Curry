function curry() {
  var fn = arguments[0];
  var arity = arguments[0].length;
  var args = Array.prototype.slice.call(arguments, 1);
  if(arity === args.length) {
    return fn(...args)
  }
  else {
    return function() {
      args = args.concat(Array.from(arguments));
      return curry(fn, ...args)
    }
  }
}
