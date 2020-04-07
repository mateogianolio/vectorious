import { square } from './square';
import { random } from './random';
import { bench } from '../bench';

const { floor, sqrt } = Math;

bench(
  'v',
  'square',
  (n: number) => [random(floor(sqrt(n)), floor(sqrt(n)))],
  (x): void => {
    x.square();
  },
  (x): void => {
    square(x);
  }
);
