import { sign } from './sign';
import { random } from './random';
import { bench } from '../bench';

bench(
  'v',
  'sign',
  (n: number) => [random(n)],
  (x): void => {
    x.sign();
  },
  (x): void => {
    sign(x);
  }
);
