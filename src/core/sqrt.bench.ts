import { sqrt } from './sqrt';
import { random } from './random';
import { bench } from '../bench';

bench(
  'NDArray',
  'sqrt',
  (n: number) => [random(n)],
  (x): void => {
    x.sqrt();
  },
  (x): void => {
    sqrt(x);
  }
);
