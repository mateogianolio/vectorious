import { equals } from './equals';
import { map } from './map';
import { array } from './array';

describe('(v) map', () => {
  it('should work as expected', () => {
    const x = array([1, 2, 3]);

    equals(array([1, 4, 9]), x.map((value: number) => value * value));
  });

  it('should work as the static equivalent', () => {
    const x = array([1, 2, 3]);

    equals(array([1, 4, 9]), map(x, (value: number) => value * value));
  });
});
