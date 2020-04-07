import { forEach } from './forEach';
import { random } from './random';
import { bench } from '../bench';

bench(
  'v',
  'forEach',
  (n: number) => [random(n)],
  (x): void => {
    x.forEach((value: number) => value);
  },
  (x): void => {
    forEach(x, (value: number) => value);
  }
);
