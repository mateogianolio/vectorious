import { sum } from './sum';
import { random } from './random';
import { bench } from '../bench';

bench(
  'NDArray',
  'sum',
  (n: number) => [random(n)],
  (x): void => {
    x.sum();
  },
  (x): void => {
    sum(x);
  }
);
