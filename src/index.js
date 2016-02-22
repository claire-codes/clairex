let getFoo = () => 42;

let replaceWhitespace = (str, replacement = '') => {
  return str.replace(new RegExp('\\s', 'g'), replacement);
}

let convertMiscChar = str => {
  let exps = [
    {char: /&/, replace: 'and'},
    {char: /#/, replace: 'number '},
    {char: /%/, replace: ' percent'},
    {char: /\/|\\/, replace: ' slash '},
    {char: /\*/, replace: ' star '}
  ];
  for (let i = 0; i < exps.length; i++) {
    str = str.replace(exps[i].char, exps[i].replace);
  }
  return str;
}

let toUrl = str => replaceWhitespace(str.trim(), '-').toLowerCase();

let squeeze = (str, range) => {
  let chars = [...str];
  let rangeRegexp = new RegExp(`[${range}]`, 'g');
  for (let j = 0; j < chars.length; j++) {
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

let changeMoney = str => {
  let exps = [
    {regex: /\$(\d+).(\d\d)/, replace: '$1 dollars $2 cents'},
    {regex: /\$(\d+)/, replace: '$1 dollars'},
    {regex: /\€(\d+).(\d\d)/, replace: '$1 euro $2 cents'},
    {regex: /\€(\d+)/, replace: '$1 euro'},
    {regex: /\£(\d+).(\d\d)/, replace: '$1 pounds $2 pence'},
    {regex: /\£(\d+)/, replace: '$1 pounds'}
  ];
  for (let i = 0; i < exps.length; i++) {
    str = str.replace(exps[i].regex, exps[i].replace);
  }
  return str;
}

export { getFoo, toUrl, squeeze, changeMoney, replaceWhitespace, convertMiscChar }
