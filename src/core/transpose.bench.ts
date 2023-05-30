import { transpose } from './transpose';
import { random } from './random';
import { bench } from '../bench';

const { floor, sqrt } = Math;

bench(
  'core',
  'transpose',
  (n: number) => [random(floor(sqrt(n)), floor(sqrt(n)))],
  (x): void => {
    x.transpose();
  },
  (x): void => {
    transpose(x);
  }
);
