import { ok } from 'assert';
import { equals } from './equals';
import { project } from './project';
import { array } from './array';

describe('(v) project', () => {
  it('should work as expected', () => {
    const x = array([2, 1]);
    const y = array([-3, 4]);
    const z = array([6 / 25, -8 / 25]);

    ok(equals(z, x.project(y)));
  });

  it('should work as the static equivalent', () => {
    const x = array([2, 1]);
    const y = array([-3, 4]);
    const z = array([6 / 25, -8 / 25]);

    ok(equals(z, project(x, y)));
  });
});
