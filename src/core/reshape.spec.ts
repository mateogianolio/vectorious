import {
  ok,
  throws,
} from 'assert';

import { equals } from './equals';
import { reshape } from './reshape';
import { array } from './array';

describe('(v) reshape', () => {
  it('should throw error if new shape does not match length', () => {
    const f64 = new Float64Array([1, 2, 3, 4]);
    const x = array(f64);

    throws(() => { x.reshape(1, 2); }, Error);
  });

  it('should be able to create row vector of column vector', () => {
    const f64 = new Float64Array([1, 2, 3, 4]);
    const x = array(f64, { shape: [1, 4] });

    ok(equals(x.shape, [1, 4]));
    x.reshape(4, 1);
    ok(equals(x.shape, [4, 1]));
  });

  it('should work as the static equivalent', () => {
    const f64 = new Float64Array([1, 2, 3, 4]);
    const x = array(f64, { shape: [1, 4] });

    ok(equals(x.shape, [1, 4]));
    ok(equals(reshape(x, 4, 1).shape, [4, 1]));
  });
});
