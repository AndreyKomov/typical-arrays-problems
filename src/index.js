
exports.min = function min (array) {
  if (array instanceof Array===false || array.length===0) {
    return 0;
  } else {
    return Math.min.apply (null, array);
  }
}

exports.max = function max (array) {
  if (array instanceof Array===false || array.length===0) {
    return 0;
  } else {
    return Math.max.apply (null, array);
  }
}

exports.avg = function avg (array) {
  if (array instanceof Array===false || array.length===0) {
    return 0;
  } else {
  let a=0;
  for (let i = 0; i < array.length; i++) {
    a = a+array[i];
    
  }
  return a/array.length;
}
}
