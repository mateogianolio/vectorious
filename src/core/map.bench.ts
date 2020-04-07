import { map } from './map';
import { random } from './random';
import { bench } from '../bench';

bench(
  'v',
  'map',
  (n: number) => [random(n)],
  (x): void => {
    x.map((value: number) => value);
  },
  (x): void => {
    map(x, (value: number) => value);
  }
);
