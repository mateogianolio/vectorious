import { equals } from './equals';
import { combine } from './combine';
import { array } from './array';

describe('(v) combine', () => {
  it('should return current vector if combined with empty vector', () => {
    equals(array([1, 2, 3]), array([1, 2, 3]).combine(array()));
  });

  it('should work as expected', () => {
    equals(array([1, 2, 3, 0, 1]), array([1, 2, 3]).combine(array([0, 1])));
  });

  it('should work as the static equivalent', () => {
    equals(array([1, 2, 3, 0, 1]), combine(array([1, 2, 3]), array([0, 1])));
  });
});
