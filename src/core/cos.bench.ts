import { cos } from './cos';
import { random } from './random';
import { bench } from '../bench';

bench(
  'v',
  'cos',
  (n: number) => [random(n)],
  (x): void => {
    x.cos();
  },
  (x): void => {
    cos(x);
  }
);
