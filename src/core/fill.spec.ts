import { equals } from './equals';
import { fill } from './fill';
import { array } from './array';

describe('(v) fill', () => {
  it('should work as expected', () => {
    const x = array([1, 1, 1]);
    const y = array([0, 0, 0]);

    equals(x, y.fill(1));
  });

  it('should work as expected with function argument', () => {
    const x = array([0, 1, 2]);
    const y = array([0, 0, 0]);

    equals(x, y.fill((index: number) => index));
  });

  it('should work as the static equivalent', () => {
    const x = array([1, 1, 1]);
    const y = array([0, 0, 0]);

    equals(x, fill(y, 1));
  });
});
