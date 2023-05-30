import { normalize } from './normalize';
import { random } from './random';
import { bench } from '../bench';

bench(
  'core',
  'normalize',
  (n: number) => [random(n)],
  (x): void => {
    x.normalize();
  },
  (x): void => {
    normalize(x);
  }
);
