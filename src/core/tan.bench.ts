import { tan } from './tan';
import { random } from './random';
import { bench } from '../bench';

bench(
  'v',
  'tan',
  (n: number) => [random(n)],
  (x): void => {
    x.tan();
  },
  (x): void => {
    tan(x);
  }
);
