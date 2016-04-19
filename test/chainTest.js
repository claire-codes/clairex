import test from 'ava';
import 'babel-core/register';
import { getChain } from '../src/chain';

test('chain', t => {
  t.same(24, getChain());
});
