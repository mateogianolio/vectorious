import { equals } from './equals';
import { slice } from './slice';
import { array } from './array';
import { throws } from 'assert';

describe('(v) slice', () => {
  it('should throw error if step is zero or negative', () => {
    const x = array([1, 2, 3, 4]);

    throws(() => x.slice(0, 4, 0), Error);
    throws(() => x.slice(0, 4, -1), Error);
  });

  it('should work with negative begin/end', () => {
    const x = array([1, 2, 3, 4]);

    equals(x.slice(-4, 4), x.slice(0, 4));
    equals(x.slice(-2, 4), x.slice(2, 4));
    equals(x.slice(0, -2), x.slice(0, 2));
  });

  it('should work with reversed begin/end', () => {
    const x = array([1, 2, 3, 4]);

    equals(x.slice(0, 4), x.slice(4, 0));
  });

  it('should work as expected in 1 dimension', () => {
    const x = array([1, 2, 3, 4]);

    equals(array([1, 3]), x.slice(0, 4, 2));
    equals(array([2, 4]), x.slice(1, 4, 2));
    equals(array([1, 2]), x.slice(0, 2));
    equals(array([2, 3]), x.slice(1, 3));
  });

  it('should work as expected in 2 dimensions', () => {
    const x = array([
      [1, 2],
      [3, 4],
      [5, 6],
      [7, 8],
    ]);

    equals(array([[1, 2], [5, 6]]), x.slice(0, 4, 2));
    equals(array([[3, 4], [7, 8]]), x.slice(1, 4, 2));
    equals(array([[1, 2], [3, 4]]), x.slice(0, 2));
    equals(array([[3, 4], [5, 6]]), x.slice(1, 3));
  });

  it('should work as the static equivalent', () => {
    const x = array([1, 2, 3, 4]);

    equals(x.slice(0, 4, 2), slice(x, 0, 4, 2));
  });
});
