import {
  deepStrictEqual,
  strictEqual,
  throws,
} from 'assert';

import { Vector } from './';

describe('Vector.prototype', () => {
  describe('constructor()', () => {
    it('should work with length', () => {
      const x: Vector = new Vector(2);
      const y: Vector = new Vector([0, 0]);

      deepStrictEqual(x, y);
    });
  });

  describe('.binOp()', () => {
    it('should work as expected', () => {
      const x: Vector = new Vector([1, 1, 1]);
      const y: Vector = new Vector([1, 2, 3]);
      const z: Vector = new Vector([2, 3, 4]);
      const sum: (a: number, b: number) => number = (a: number, b: number): number => a + b;

      deepStrictEqual(x.binOp(y, sum), z);
    });

    it('should throw error when sizes do not match', () => {
      const x: Vector = new Vector([1, 1, 1]);
      const y: Vector = new Vector([1, 2, 3, 4]);
      const sum: (a: number, b: number) => number = (a: number, b: number): number => a + b;

      throws(() => { x.binOp(y, sum); }, Error);
    });
  });

  describe('.normalize()', () => {
    it('should work as expected', () => {
      const x: Vector = new Vector([1, 1]);
      const y: Vector = new Vector([1 / Math.sqrt(2), 1 / Math.sqrt(2)]);

      deepStrictEqual(y, x.normalize());
    });
  });

  describe('.project()', () => {
    it('should throw error if sizes do not match', () => {
      const x: Vector = new Vector([1]);
      const y: Vector = new Vector([1, 2]);

      throws(() => { x.project(y); }, Error);
    });

    it('should work as expected', () => {
      const x: Vector = new Vector([2, 1]);
      const y: Vector = new Vector([-3, 4]);
      const z: Vector = new Vector([6 / 25, -8 / 25]);

      deepStrictEqual(z, x.project(y));
    });
  });

  describe('.magnitude()', () => {
    it('should return 0 if empty vector', () => {
      strictEqual(0, new Vector().magnitude());
    });

    it('should work as expected', () => {
      strictEqual(4, new Vector([1, 1, 1, 2, 3]).magnitude());
    });
  });

  describe('.angle()', () => {
    it('should work as expected', () => {
      const x: Vector = new Vector([1, 0]);
      const y: Vector = new Vector([0, 1]);

      strictEqual(Math.PI / 2, x.angle(y));
    });
  });

  describe('.get()', () => {
    it('should throw error if index out of bounds', () => {
      const x: Vector = new Vector([1, 2, 3]);
      throws(() => { x.get(-1); }, Error);
      throws(() => { x.get(3); }, Error);
    });

    it('should work as expected', () => {
      const x: Vector = new Vector([1, 3, 2, 4]);
      strictEqual(1, x.get(0));
      strictEqual(3, x.get(1));
      strictEqual(2, x.get(2));
      strictEqual(4, x.get(3));
    });
  });

  describe('.x, .y, .z, .w', () => {
    it('should retrieve properties as expected', () => {
      const x: Vector = new Vector([1, 2, 3, 4, 5]);

      strictEqual(x.x, 1);
      strictEqual(x.y, 2);
      strictEqual(x.z, 3);
      strictEqual(x.w, 4);
    });

    it('should set proeprties as expected', () => {
      const x: Vector = new Vector([-1, -1, -1, -1]);

      x.x = 0;
      x.y = 1;
      x.z = 2;
      x.w = 3;

      strictEqual(x.get(0), 0);
      strictEqual(x.get(1), 1);
      strictEqual(x.get(2), 2);
      strictEqual(x.get(3), 3);
    });
  });

  describe('.set()', () => {
    it('should throw error if index out of bounds', () => {
      const x: Vector = new Vector([1, 2]);
      throws(() => { x.set(-1, 0); }, Error);
      throws(() => { x.set(2, 0); }, Error);
    });

    it('should work as expected', () => {
      const x: Vector = new Vector([1, 2]);
      x.set(0, 0);
      x.set(1, 1);
      strictEqual(0, x.get(0));
      strictEqual(1, x.get(1));
    });
  });

  describe('.combine()', () => {
    it('should return current vector if combined with empty vector', () => {
      deepStrictEqual(new Vector([1, 2, 3]), new Vector([1, 2, 3]).combine(new Vector()));
    });

    it('should work as expected', () => {
      deepStrictEqual(new Vector([1, 2, 3, 0, 1]), new Vector([1, 2, 3]).combine(new Vector([0, 1])));
    });
  });

  describe('.push()', () => {
    it('should start with Vector(1, 2), push(3) to get Vector(1, 2, 3)', () => {
      deepStrictEqual(new Vector([1, 2, 3]), new Vector([1, 2]).push(3));
    });
  });

  describe('.map()', () => {
    it('should work as expected', () => {
      const x: Vector = new Vector([1, 2, 3]);
      const y: Vector = x.map((value: number) => value * value);

      deepStrictEqual(new Vector([1, 4, 9]), y);
    });
  });

  describe('.each()', () => {
    it('should work as expected', () => {
      const x: Vector = new Vector([1, 2, 3]);
      const y: Vector = new Vector();
      x.each((value: number, index: number) => {
        y.push(value * index);
      });

      deepStrictEqual(new Vector([0, 2, 6]), y);
    });
  });

  describe('.reduce()', () => {
    it('should work as expected', () => {
      const x: Vector = new Vector([1, 2, 3]);
      const y: Vector = new Vector([1, 2, 3, 4, 5, 6]);
      const sum: (a: number, b: number) => number = (a: number, b: number): number => a + b;

      deepStrictEqual(6, x.reduce(sum, 0));
      deepStrictEqual(21, y.reduce(sum));
    });

    it('should throw error if empty vector with no initial value', () => {
      const x: Vector = new Vector();
      const sum: (a: number, b: number) => number = (a: number, b: number): number => a + b;
      throws(() => { x.reduce(sum); }, Error);
    });
  });

  describe('.toString()', () => {
    it('should work as expected', () => {
      strictEqual('[1, 2, 3]', new Vector([1, 2, 3]).toString());
    });
  });

  describe('.toArray()', () => {
    it('should work as expected', () => {
      deepStrictEqual([], new Vector().toArray());
      deepStrictEqual([1, 2, 3], new Vector([1, 2, 3]).toArray());
    });
  });

  describe('.cross()', () => {
    it('should work as expected', () => {
      const x: Vector = new Vector([1, 2, 3]);
      const y: Vector = new Vector([2, 3, 4]);
      deepStrictEqual(new Vector([-1, 2, -1]), x.cross(y));
    });

    it('should throw an exception when lengths do not match', () => {
      const x: Vector = new Vector([1, 2, 3, 4]);
      const y: Vector = new Vector([5, 6, 7]);
      throws(() => { x.cross(y); }, Error);
    });
  });

  describe('.check()', () => {
    it('should throw error if the index is NaN', () => {
      const x: Vector = new Vector([1, 2, 3, 4]);

      throws(() => { x.check(NaN); }, Error);
    });
  });
});
