import v = require('..');
import { bench } from '../bench';

const { random } = Math;
const r: (n: number) => v = (n: number): v => v.random(n);

bench(
  'v',
  'push',
  (n: number): [v, number] => [r(n), random()],
  (x: v, value: number): void => {
    x.push(value);
  },
  (x: v, value: number): void => {
    v.push(x, value);
  }
);
