import v = require('..');
import { bench } from '../bench';
bench(
  'v',
  'random',
  (n: number): [number] => [n],
  (n: number): void => {
    v.random(n);
  }
);
