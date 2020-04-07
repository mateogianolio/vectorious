import { rank } from './rank';
import { random } from './random';
import { bench } from '../bench';

const { floor, sqrt } = Math;

bench(
  'v',
  'rank',
  (n: number) => [random(floor(sqrt(n)), floor(sqrt(n)))],
  (x): void => {
    x.rank();
  },
  (x): void => {
    rank(x);
  }
);
