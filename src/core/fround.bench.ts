import { fround } from './fround';
import { random } from './random';
import { bench } from '../bench';

bench(
  'core',
  'fround',
  (n: number) => [random(n)],
  (x): void => {
    x.fround();
  },
  (x): void => {
    fround(x);
  }
);
