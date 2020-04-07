import { toString } from './toString';
import { random } from './random';
import { bench } from '../bench';

bench(
  'v',
  'toString',
  (n: number) => [random(n)],
  (x): void => {
    x.toString();
  },
  (x): void => {
    toString(x);
  }
);
