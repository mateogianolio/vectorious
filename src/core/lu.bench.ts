import { lu } from './lu';
import { random } from './random';
import { bench } from '../bench';

const { floor, sqrt } = Math;

bench(
  'core',
  'lu',
  (n: number) => [random(floor(sqrt(n)), floor(sqrt(n)))],
  (x): void => {
    x.lu();
  },
  (x): void => {
    lu(x);
  }
);
