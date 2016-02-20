var getFoo = function() {
  return 42;
};

var toUrl = function(str) {
  // TODO: extrapolate replacement out
  return str.replace(new RegExp('\\s', 'g'), '-').toLowerCase();
}

var squeeze = function(str, range) {
  let chars = [...str];
  var rangeRegexp = new RegExp(`[${range}]`, 'g');
  for (var j = 0; j < chars.length; j++) {
    if (chars[j] === chars[j+1]) {
      // if range === undefined i.e. false
      if (!range) {
        chars[j] = '';
      } else if (chars[j].match(rangeRegexp)) {
        chars[j] = '';
      }
    }
  }
  return chars.join('');
}

var changeMoney = function(str) {
  var exps = [
    {regex: /\$(\d+)/, replace: '$1 dollars'},
    {regex: /\€(\d+)/, replace: '$1 euros'},
    {regex: /\£(\d+)/, replace: '$1 pounds'}
  ];
  for (var i = 0; i < exps.length; i++) {
    str = str.replace(exps[i].regex, exps[i].replace);
  }
  return str;
}

export { getFoo, toUrl, squeeze, changeMoney }
