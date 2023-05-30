import { cos } from './cos';
import { random } from './random';
import { bench } from '../bench';

bench(
  'core',
  'cos',
  (n: number) => [random(n)],
  (x): void => {
    x.cos();
  },
  (x): void => {
    cos(x);
  }
);
