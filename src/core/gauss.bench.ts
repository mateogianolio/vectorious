import { gauss } from './gauss';
import { random } from './random';
import { bench } from '../bench';

const { floor, sqrt } = Math;

bench(
  'NDArray',
  'gauss',
  (n: number) => [random(floor(sqrt(n)), floor(sqrt(n)))],
  (x): void => {
    x.gauss();
  },
  (x): void => {
    gauss(x);
  }
);
