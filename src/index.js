let getFoo = () => 42;

let replaceWhitespace = (str, replacement = '') => {
  return str.replace(new RegExp('\\s', 'g'), replacement);
}

let convertMiscChar = str => {
  let exps = [
    {char: /&/g, replace: 'and'},
    {char: /#/g, replace: 'number '},
    {char: /%/g, replace: ' percent'},
    {char: /\/|\\/g, replace: ' slash '},
    {char: /\*/g, replace: ' star '},
    {char: /@/g, replace: ' at '}
    // brackets
  ];
  for (let i = 0; i < exps.length; i++) {
    str = str.replace(new RegExp(exps[i].char), exps[i].replace);
  }
  return str;
}

let convertPunctuation = str => {
  let exps = [
    {punc: '\\{|\\}', replace: 'brace'},
    {punc: '\\(|\\)', replace: ' bracket '},
    {punc: '\'', replace: ''},
    {punc: '"', replace: ''},
    {punc: ',', replace: ''},
    {punc: '\(\\w\)\\.\(\\s\)', replace: '$1$2'},
    {punc: '\\.', replace: ' dot '},
    {punc: '!', replace: ''},
    {punc: '\\?', replace: ''}
  ];
  for (let i = 0; i < exps.length; i++) {
    str = str.replace(new RegExp(exps[i].punc, 'g'), exps[i].replace);
  }
  return str;
}

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
    {regex: /\$(\d+).(\d\d)/g, replace: '$1 dollars $2 cents'},
    {regex: /\$(\d+)/g, replace: '$1 dollars'},
    {regex: /\€(\d+).(\d\d)/g, replace: '$1 euro $2 cents'},
    {regex: /\€(\d+)/g, replace: '$1 euro'},
    {regex: /\£(\d+).(\d\d)/g, replace: '$1 pounds $2 pence'},
    {regex: /\£(\d+)/g, replace: '$1 pounds'}
  ];
  for (let i = 0; i < exps.length; i++) {
    str = str.replace(new RegExp(exps[i].regex), exps[i].replace);
  }
  return str;
}

let toUrl = str => replaceWhitespace(changeMoney(convertPunctuation(convertMiscChar(squeeze(str.trim(),' ')))), '-').toLowerCase();

export { getFoo, toUrl, squeeze, changeMoney, replaceWhitespace, convertMiscChar, convertPunctuation }
