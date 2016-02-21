import test from 'ava';
import 'babel-core/register';
import { getFoo, toUrl, squeeze, changeMoney } from '../src/index';

test('clairex', t => {
  t.same(42, getFoo());
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
