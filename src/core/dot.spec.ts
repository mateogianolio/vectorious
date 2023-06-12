import { strictEqual } from 'assert';

import * as blas from '../blas';
import { dot } from './dot';
import { array } from './array';

describe('(v) dot', () => {
  it('should work as expected', () => {
    const x = array([1, 2, 3]);
    const y = array([4, 5, 6]);

    strictEqual(32, x.dot(y));
  });

  it('should work with inc_x !== inc_y', () => {
    const x = array([1, 2, 3]);
    const y = array([1, 2, 3, 4, 5, 6], {
      shape: [3],
      strides: [2],
    });

    strictEqual(22, x.dot(y));
  });

  it('should work as the static equivalent', () => {
    const x = array([1, 2, 3]);
    const y = array([4, 5, 6]);

    strictEqual(32, dot(x, y));
  });
});

describe('(v) dot', () => {
  beforeEach(() => {
    jest.spyOn(blas, 'dot').mockImplementation(() => {
      throw new Error();
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should work as expected', () => {
    const x = array([1, 2, 3]);
    const y = array([4, 5, 6]);

    strictEqual(32, x.dot(y));
  });

  it('should work as the static equivalent', () => {
    const x = array([1, 2, 3]);
    const y = array([4, 5, 6]);

    strictEqual(32, dot(x, y));
  });
});
