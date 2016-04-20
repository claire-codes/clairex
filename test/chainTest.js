import test from 'ava';
import 'babel-core/register';
import { chainObj } from '../src/chain';

test('chain', t => {
  t.same('red apple', chainObj.makeItRed('apple').val());
  t.same('', chainObj.shoutIt().val());
  t.same('RED VINE', chainObj.makeItRed('vine').shoutIt().val());
  t.same('red banana', chainObj.shoutIt().makeItRed('banana').val());
});
