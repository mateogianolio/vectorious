import { log2 } from './log2';
import { random } from './random';
import { bench } from '../bench';

bench(
  'v',
  'log2',
  (n: number) => [random(n)],
  (x): void => {
    x.log2();
  },
  (x): void => {
    log2(x);
  }
);
