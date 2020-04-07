import { swap } from './swap';
import { random } from './random';
import { bench } from '../bench';

bench(
  'v',
  'swap',
  (n: number) => [random(n), Math.floor(Math.random() * Math.sqrt(n)), Math.floor(Math.random() * Math.sqrt(n))],
  (x, i: number, j: number): void => {
    x.swap(i, j);
  },
  (x, i: number, j: number): void => {
    swap(x, i, j);
  }
);
