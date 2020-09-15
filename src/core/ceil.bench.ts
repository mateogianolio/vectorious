import { ceil } from './ceil';
import { random } from './random';
import { bench } from '../bench';

bench(
  'NDArray',
  'ceil',
  (n: number) => [random(n)],
  (x): void => {
    x.ceil();
  },
  (x): void => {
    ceil(x);
  }
);
