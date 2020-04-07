import { get } from './get';
import { random } from './random';
import { bench } from '../bench';

bench(
  'v',
  'get',
  (n: number) => [random(n), Math.floor(Math.random() * n)],
  (x, i: number) => {
    x.get(i);
  },
  (x, i: number) => {
    get(x, i);
  }
);
