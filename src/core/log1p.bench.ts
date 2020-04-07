import { log1p } from './log1p';
import { random } from './random';
import { bench } from '../bench';

bench(
  'v',
  'log1p',
  (n: number) => [random(n)],
  (x): void => {
    x.log1p();
  },
  (x): void => {
    log1p(x);
  }
);
