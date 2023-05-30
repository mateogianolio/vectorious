import { toArray } from './toArray';
import { random } from './random';
import { bench } from '../bench';

bench(
  'core',
  'toArray',
  (n: number) => [random(n)],
  (x): void => {
    x.toArray();
  },
  (x): void => {
    toArray(x);
  }
);
