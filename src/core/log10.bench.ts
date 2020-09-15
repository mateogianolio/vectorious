import { log10 } from './log10';
import { random } from './random';
import { bench } from '../bench';

bench(
  'NDArray',
  'log10',
  (n: number) => [random(n)],
  (x): void => {
    x.log10();
  },
  (x): void => {
    log10(x);
  }
);
