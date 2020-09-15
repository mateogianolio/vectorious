import { diagonal } from './diagonal';
import { random } from './random';
import { bench } from '../bench';

const { floor, sqrt } = Math;

bench(
  'NDArray',
  'diag',
  (n: number) => [random(floor(sqrt(n)), floor(sqrt(n)))],
  (x): void => {
    x.diagonal();
  },
  (x): void => {
    diagonal(x);
  }
);
