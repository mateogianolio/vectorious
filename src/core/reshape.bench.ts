import { reshape } from './reshape';
import { random } from './random';
import { bench } from '../bench';

bench(
  'v',
  'reshape',
  (n: number) => [random(n), n],
  (x, n: number): void => {
    x.reshape(n);
  },
  (x, n: number): void => {
    reshape(x, n);
  }
);
