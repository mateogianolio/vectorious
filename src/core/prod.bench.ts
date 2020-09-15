import { prod } from './prod';
import { random } from './random';
import { bench } from '../bench';

bench(
  'NDArray',
  'prod',
  (n: number) => [random(n)],
  (x): void => {
    x.prod();
  },
  (x): void => {
    prod(x);
  }
);
