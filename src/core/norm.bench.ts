import { norm } from './norm';
import { random } from './random';
import { bench } from '../bench';

bench(
  'v',
  'norm',
  (n: number) => [random(n)],
  (x): void => {
    x.norm();
  },
  (x): void => {
    norm(x);
  }
);
