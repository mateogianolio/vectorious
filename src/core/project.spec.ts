import {
  deepStrictEqual,
  throws,
} from 'assert';

import { project } from './project';
import { array } from './array';

describe('(v) project', () => {
  it('should throw error if sizes do not match', () => {
    const x = array([1]);
    const y = array([1, 2]);

    throws(() => { x.project(y); }, Error);
  });

  it('should work as expected', () => {
    const x = array([2, 1]);
    const y = array([-3, 4]);
    const z = array([6 / 25, -8 / 25]);

    deepStrictEqual(z, x.project(y));
  });

  it('should work as the static equivalent', () => {
    const x = array([2, 1]);
    const y = array([-3, 4]);
    const z = array([6 / 25, -8 / 25]);

    deepStrictEqual(z, project(x, y));
  });
});
