import { acos } from './acos';
import { random } from './random';
import { bench } from '../bench';

bench(
  'core',
  'acos',
  (n: number) => [random(n)],
  (x): void => {
    x.acos();
  },
  (x): void => {
    acos(x);
  }
);
