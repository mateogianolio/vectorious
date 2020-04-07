import { atanh } from './atanh';
import { random } from './random';
import { bench } from '../bench';

bench(
  'v',
  'atanh',
  (n: number) => [random(n)],
  (x): void => {
    x.atanh();
  },
  (x): void => {
    atanh(x);
  }
);
