import { normalize } from './normalize';
import { random } from './random';
import { bench } from '../bench';

bench(
  'NDArray',
  'normalize',
  (n: number) => [random(n)],
  (x): void => {
    x.normalize();
  },
  (x): void => {
    normalize(x);
  }
);
