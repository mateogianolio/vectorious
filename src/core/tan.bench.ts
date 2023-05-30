import { tan } from './tan';
import { random } from './random';
import { bench } from '../bench';

bench(
  'core',
  'tan',
  (n: number) => [random(n)],
  (x): void => {
    x.tan();
  },
  (x): void => {
    tan(x);
  }
);
