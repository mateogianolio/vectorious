import { equals } from './equals';
import { matrix } from './matrix';
import { array } from './array';

describe('(v) matrix', () => {
  it('should work as expected', () => {
    const x = array(new Float32Array([0, 0, 0]), { shape: [3, 1] });

    equals(x, matrix(3, 1));
  });

  it('should work as expected in two dimensions', () => {
    const x = array([[0, 0], [0, 0]]);

    equals(x, matrix(2, 2));
  });
});
