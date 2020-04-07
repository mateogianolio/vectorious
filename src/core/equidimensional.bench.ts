import { equidimensional } from './equidimensional';
import { random } from './random';
import { bench } from '../bench';

bench(
  'v',
  'equidimensional',
  (n: number) => [random(n), random(n)],
  (x, y): void => {
    x.equidimensional(y);
  },
  (x, y): void => {
    equidimensional(x, y);
  }
);
