import { abs } from './abs';
import { random } from './random';
import { bench } from '../bench';

bench(
  'v',
  'abs',
  (n: number) => [random(n)],
  (x): void => {
    x.abs();
  },
  (x): void => {
    abs(x);
  }
);
