import { subtract } from './subtract';
import { random } from './random';
import { bench } from '../bench';

bench(
  'core',
  'subtract',
  (n: number) => [random(n), random(n)],
  (x, y): void => {
    x.subtract(y);
  },
  (x, y): void => {
    subtract(x, y);
  }
);
