import { equilateral } from './equilateral';
import { random } from './random';
import { bench } from '../bench';

bench(
  'v',
  'equilateral',
  (n: number) => [random(n), random(n)],
  (x, y): void => {
    x.equilateral(y);
  },
  (x, y): void => {
    equilateral(x, y);
  }
);
