import { toString } from './toString';
import { random } from './random';
import { bench } from '../bench';

bench(
  'NDArray',
  'toString',
  (n: number) => [random(n)],
  (x): void => {
    x.toString();
  },
  (x): void => {
    toString(x);
  }
);
