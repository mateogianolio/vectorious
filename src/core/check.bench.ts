import { check } from './check';
import { random } from './random';
import { bench } from '../bench';

bench(
  'NDArray',
  'check',
  (n: number) => [random(n), Math.floor(Math.random() * n)],
  (x, i: number): void => {
    x.check(i);
  },
  (x, i: number): void => {
    check(x, i);
  }
);
