import { pow } from './pow';
import { random } from './random';
import { bench } from '../bench';

bench(
  'v',
  'pow',
  (n: number) => [random(n), Math.random()],
  (x, exponent: number): void => {
    x.pow(exponent);
  },
  (x, exponent: number): void => {
    pow(x, exponent);
  }
);
