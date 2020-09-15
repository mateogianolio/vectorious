import { sin } from './sin';
import { random } from './random';
import { bench } from '../bench';

bench(
  'NDArray',
  'sin',
  (n: number) => [random(n)],
  (x): void => {
    x.sin();
  },
  (x): void => {
    sin(x);
  }
);
