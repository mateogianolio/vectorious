import { set } from './set';
import { random } from './random';
import { bench } from '../bench';

bench(
  'v',
  'set',
  (n: number) => [random(n), Math.floor(Math.random() * n),  Math.random()],
  (x, i: number, alpha: number) => {
    x.set(i, alpha);
  },
  (x, i: number, alpha: number) => {
    set(x, i, alpha);
  }
);
