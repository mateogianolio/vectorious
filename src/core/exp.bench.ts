import { exp } from './exp';
import { random } from './random';
import { bench } from '../bench';

bench(
  'NDArray',
  'exp',
  (n: number) => [random(n)],
  (x): void => {
    x.exp();
  },
  (x): void => {
    exp(x);
  }
);
