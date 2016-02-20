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

test('#changeMoney', t => {
  t.same('2 pounds', changeMoney('£2'));
  t.same('4 dollars', changeMoney('$4'));
  t.same('6 euros', changeMoney('€6'));
});
