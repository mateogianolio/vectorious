import { equals } from './equals';
import { normalize } from './normalize';
import { array } from './array';

describe('(v) normalize', () => {
  it('should work as expected', () => {
    const x = array([1, 1]);
    const y = array([1 / Math.sqrt(2), 1 / Math.sqrt(2)]);

    equals(y, x.normalize());
  });

  it('should work as the static equivalent', () => {
    const x = array([1, 1]);
    const y = array([1 / Math.sqrt(2), 1 / Math.sqrt(2)]);

    equals(y, normalize(x));
  });
});
