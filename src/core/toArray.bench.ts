import { toArray } from './toArray';
import { random } from './random';
import { bench } from '../bench';

bench(
  'NDArray',
  'toArray',
  (n: number) => [random(n)],
  (x): void => {
    x.toArray();
  },
  (x): void => {
    toArray(x);
  }
);
