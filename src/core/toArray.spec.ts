import { equals } from './equals';
import { array } from './array';
import { toArray } from './toArray';

describe('(v) toArray', () => {
  it('should work as expected', () => {
    equals([], array().toArray());
    equals([0, 1, 2, 3, 4, 5, 6, 7], array([0, 1, 2, 3, 4, 5, 6, 7]).toArray());
    equals([[0, 1, 2, 3], [4, 5, 6, 7]], array([[0, 1, 2, 3], [4, 5, 6, 7]]).toArray());
    equals([[[0, 1], [2, 3]], [[4, 5], [6, 7]]], array([[[0, 1], [2, 3]], [[4, 5], [6, 7]]]).toArray());
  });

  it('should work as the static equivalent', () => {
    equals([], array().toArray());
    equals([0, 1, 2, 3, 4, 5, 6, 7], toArray(array([0, 1, 2, 3, 4, 5, 6, 7])));
    equals([[0, 1, 2, 3], [4, 5, 6, 7]], toArray(array([[0, 1, 2, 3], [4, 5, 6, 7]])));
    equals(
      [[[0, 1], [2, 3]], [[4, 5], [6, 7]]],
      toArray(array([[[0, 1], [2, 3]], [[4, 5], [6, 7]]]))
    );
  });
});
