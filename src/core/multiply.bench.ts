import { multiply } from './multiply';
import { random } from './random';
import { bench } from '../bench';

const { floor, sqrt } = Math;

bench(
  'v',
  'multiply',
  (n: number) => [random(floor(sqrt(n)), floor(sqrt(n))), random(floor(sqrt(n)), floor(sqrt(n)))],
  (x, y): void => {
    x.multiply(y);
  },
  (x, y): void => {
    multiply(x, y);
  }
);
