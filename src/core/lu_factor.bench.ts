import { lu_factor } from './lu_factor';
import { random } from './random';
import { bench } from '../bench';

const { floor, sqrt } = Math;

bench(
  'NDArray',
  'lu_factor',
  (n: number) => [random(floor(sqrt(n)), floor(sqrt(n)))],
  (x): void => {
    x.lu_factor();
  },
  (x): void => {
    lu_factor(x);
  }
);
