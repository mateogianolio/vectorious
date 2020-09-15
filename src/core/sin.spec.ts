import { equals } from './equals';
import { sin } from './sin';
import { map } from './map';
import { random } from './random';

describe('(v) sin', () => {
  it('should work as expected', () => {
    const x = random(3);

    equals(map(x, (value: number) => Math.sin(value)), x.sin());
  });

  it('should work as the static equivalent', () => {
    const x = random(3);

    equals(map(x, (value: number) => Math.sin(value)), sin(x));
  });
});
