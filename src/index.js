var getFoo = function() {
    return 42;
};

var toUrl = function(str) {
  // TODO: extrapolate replacement out
  return str.replace(new RegExp('\\s', 'g'), '-').toLowerCase();
}

var squeeze = function(str) {
  for (var i = 0; i < str.length - 1; i++) {
    if (str.charAt(i) === str.charAt(i+1)) {
      str = str.slice(0,i) + str.slice(i);
    }
  }
  return str;
}

export { getFoo, toUrl, squeeze }
