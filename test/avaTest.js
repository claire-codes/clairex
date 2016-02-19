import test from 'ava';
import 'babel-core/register';
import { getFoo, toUrl, squeeze } from '../src/index';

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
