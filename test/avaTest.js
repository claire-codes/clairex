import test from 'ava';
import 'babel-core/register';
import { getFoo } from '../src/index';

test('clairex', t => {
  t.same(42, getFoo());
});

test('foo', t => {
    t.pass();
});

test('bar', async t => {
    const bar = Promise.resolve('bar');

    t.is(await bar, 'bar');
});
