import { ok } from 'assert';
import { equals } from './equals';
import { lu } from './lu';
import { array } from './array';

describe('(v) lu', () => {
  it('should work as expected', () => {
    const x = array([
      [1, 3, 5],
      [2, 4, 7],
      [1, 1, 0],
    ]);
    const ys = [
      array([
        [1, 0, 0],
        [0.5, 1, 0],
        [0.5, -1, 1],
      ]),
      array([
        [2, 4, 7],
        [0, 1, 1.5],
        [0, 0, -2],
      ]),
    ];

    ok(equals(ys, x.lu().slice(0, 2)));
  });

  it('should work as expected', () => {
    const x = array([
      [11, 9, 24, 2],
      [1, 5, 2, 6],
      [3, 17, 18, 1],
      [2, 5, 7, 1],
    ]);
    const ys = [
      array([
        [1, 0, 0, 0],
        [0.27273, 1, 0, 0],
        [0.09091, 0.2875, 1, 0],
        [0.18182, 0.23125, 0.0036, 1],
      ]),
      array([
        [11, 9, 24, 2],
        [0, 14.54545, 11.45455, 0.45455],
        [0, 0, -3.475, 5.6875],
        [0, 0, 0, 0.51079],
      ]),
    ];

    const [lower, upper] = x.lu();
    ok(
      equals(
        ys[0],
        lower.map((value: number) => Number(value.toFixed(5)))
      )
    );
    ok(
      equals(
        ys[1],
        upper.map((value: number) => Number(value.toFixed(5)))
      )
    );
  });

  it('should work as the static equivalent', () => {
    const x = array([[1, 1, 1]]);

    ok(equals(x.copy().lu(), lu(x)));
  });
});
