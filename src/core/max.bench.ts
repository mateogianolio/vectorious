import { max } from './max';
import { random } from './random';
import { bench } from '../bench';

bench(
  'core',
  'max',
  (n: number) => [random(n)],
  (x): void => {
    x.max();
  },
  (x): void => {
    max(x);
  }
);
