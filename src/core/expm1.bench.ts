import { expm1 } from './expm1';
import { random } from './random';
import { bench } from '../bench';

bench(
  'v',
  'expm1',
  (n: number) => [random(n)],
  (x): void => {
    x.expm1();
  },
  (x): void => {
    expm1(x);
  }
);
