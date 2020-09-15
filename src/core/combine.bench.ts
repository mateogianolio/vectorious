import { combine } from './combine';
import { random } from './random';
import { bench } from '../bench';

bench(
  'NDArray',
  'combine',
  (n: number) => [random(n), random(n)],
  (x, y): void => {
    x.combine(y);
  },
  (x, y): void => {
    combine(x, y);
  }
);
