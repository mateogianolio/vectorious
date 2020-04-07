import { acos } from './acos';
import { random } from './random';
import { bench } from '../bench';

bench(
  'v',
  'acos',
  (n: number) => [random(n)],
  (x): void => {
    x.acos();
  },
  (x): void => {
    acos(x);
  }
);
