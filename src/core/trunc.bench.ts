import { trunc } from './trunc';
import { random } from './random';
import { bench } from '../bench';

bench(
  'v',
  'trunc',
  (n: number) => [random(n)],
  (x): void => {
    x.trunc();
  },
  (x): void => {
    trunc(x);
  }
);
