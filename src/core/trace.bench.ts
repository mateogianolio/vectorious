import { trace } from './trace';
import { random } from './random';
import { bench } from '../bench';

const { floor, sqrt } = Math;

bench(
  'v',
  'trace',
  (n: number) => [random(floor(sqrt(n)), floor(sqrt(n)))],
  (x): void => {
    x.trace();
  },
  (x): void => {
    trace(x);
  }
);
