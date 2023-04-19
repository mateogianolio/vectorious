import { deepStrictEqual } from 'assert';
import { array } from './array';
import { toArray } from './toArray';

describe('(v) toArray', () => {
  it('should work as expected', () => {
    deepStrictEqual([], array().toArray());
    deepStrictEqual([0, 1, 2, 3, 4, 5, 6, 7], array([0, 1, 2, 3, 4, 5, 6, 7]).toArray());
    deepStrictEqual(
      [
        [0, 1, 2, 3],
        [4, 5, 6, 7],
      ],
      array([
        [0, 1, 2, 3],
        [4, 5, 6, 7],
      ]).toArray()
    );
    deepStrictEqual(
      [
        [
          [0, 1],
          [2, 3],
        ],
        [
          [4, 5],
          [6, 7],
        ],
      ],
      array([
        [
          [0, 1],
          [2, 3],
        ],
        [
          [4, 5],
          [6, 7],
        ],
      ]).toArray()
    );
    deepStrictEqual(
      [[0], [1], [2], [3], [4], [5], [6], [7]],
      array([[0], [1], [2], [3], [4], [5], [6], [7]]).toArray()
    );
    deepStrictEqual(
      [
        [1, 4, 7],
        [2, 5, 8],
        [3, 6, 9],
      ],
      array([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ]).T.toArray()
    );
  });

  it('should work as the static equivalent', () => {
    deepStrictEqual([], array().toArray());
    deepStrictEqual([0, 1, 2, 3, 4, 5, 6, 7], toArray(array([0, 1, 2, 3, 4, 5, 6, 7])));
    deepStrictEqual(
      [
        [0, 1, 2, 3],
        [4, 5, 6, 7],
      ],
      toArray(
        array([
          [0, 1, 2, 3],
          [4, 5, 6, 7],
        ])
      )
    );
    deepStrictEqual(
      [
        [
          [0, 1],
          [2, 3],
        ],
        [
          [4, 5],
          [6, 7],
        ],
      ],
      toArray(
        array([
          [
            [0, 1],
            [2, 3],
          ],
          [
            [4, 5],
            [6, 7],
          ],
        ])
      )
    );
  });
});
