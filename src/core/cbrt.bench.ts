import { cbrt } from './cbrt';
import { random } from './random';
import { bench } from '../bench';

bench(
  'NDArray',
  'cbrt',
  (n: number) => [random(n)],
  (x): void => {
    x.cbrt();
  },
  (x): void => {
    cbrt(x);
  }
);
