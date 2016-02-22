import test from 'ava';
import 'babel-core/register';
import { getFoo, toUrl, squeeze, changeMoney, replaceWhitespace, convertMiscChar } from '../src/index';

test('clairex', t => {
  t.same(42, getFoo());
});

test('replaceWhitespace', t => {
  t.same(replaceWhitespace('foo bar','-'), 'foo-bar');
  t.same(replaceWhitespace('bish bash bosh','!'), 'bish!bash!bosh');
  t.same(replaceWhitespace('flim  flam   floop','*'), 'flim**flam***floop');
  t.same(replaceWhitespace(' braap  ','$'), '$braap$$');
  t.same(replaceWhitespace('oof','%'), 'oof');
  t.same(replaceWhitespace('good golly',''), 'goodgolly');
  t.same(replaceWhitespace('up side your head'), 'upsideyourhead');
});

test('convertMiscChar', t => {
  t.same(convertMiscChar('Me & You'), 'Me and You');
  t.same(convertMiscChar('#42'), 'number 42');
  t.same(convertMiscChar('110%'), '110 percent');
  t.same(convertMiscChar('a/b'), 'a slash b');
  t.same(convertMiscChar('a\\b'), 'a slash b');
  t.same(convertMiscChar('this*'), 'this star ');
});

test('toUrl', t => {
  t.same('foo-bar', toUrl('Foo Bar'));
});

test('#squeeze', t => {
  t.same('yelow mon', squeeze('yellow moon'));
  t.same(' now is the', squeeze('  now   is  the'));
  t.same('puters shot balls', squeeze('putters shoot balls', 'm-z'));
});

test('#changeMoney pounds only', t => {
  t.same('2 pounds', changeMoney('£2'));
  t.same('4 dollars', changeMoney('$4'));
  t.same('6 euro', changeMoney('€6'));
});

test('#changeMoney pounds and pennies', t => {
  t.same('2 pounds 34 pence', changeMoney('£2.34'));
  t.same('4 dollars 56 cents', changeMoney('$4.56'));
  t.same('6 euro 78 cents', changeMoney('€6.78'));
});
