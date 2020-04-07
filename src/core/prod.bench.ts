import { prod } from './prod';
import { random } from './random';
import { bench } from '../bench';

bench(
  'v',
  'prod',
  (n: number) => [random(n)],
  (x): void => {
    x.prod();
  },
  (x): void => {
    prod(x);
  }
);
