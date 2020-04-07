import { cbrt } from './cbrt';
import { random } from './random';
import { bench } from '../bench';

bench(
  'v',
  'cbrt',
  (n: number) => [random(n)],
  (x): void => {
    x.cbrt();
  },
  (x): void => {
    cbrt(x);
  }
);
