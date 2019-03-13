import {
  deepStrictEqual,
  throws,
} from 'assert';

import { Matrix } from './';

describe('Matrix', () => {
  describe('Matrix.binOp(a, b, (a, b) => a + b)', () => {
    it('should work as the static equivalent of a.binOp(b, (a, b) => a + b)', () => {
      const x: Matrix = new Matrix([[1, 1, 1]]);
      const y: Matrix = new Matrix([[1, 2, 3]]);
      const f: (a: number, b: number) => number = (a: number, b: number): number => a + b;

      deepStrictEqual(x.copy().binOp(y, f), Matrix.binOp(x, y, f));
    });
  });

  describe('Matrix.add(a, b)', () => {
    it('should work as the static equivalent of a.add(b)', () => {
      const x: Matrix = new Matrix([[1, 1, 1]]);
      const y: Matrix = new Matrix([[1, 2, 3]]);

      deepStrictEqual(x.copy().add(y), Matrix.add(x, y));
    });
  });

  describe('Matrix.subtract(a, b)', () => {
    it('should work as the static equivalent of a.subtract(b)', () => {
      const x: Matrix = new Matrix([[1, 1, 1]]);
      const y: Matrix = new Matrix([[1, 2, 3]]);

      deepStrictEqual(x.copy().subtract(y), Matrix.subtract(x, y));
    });
  });

  describe('Matrix.scale(a, scalar)', () => {
    it('should work as the static equivalent of a.scale(scalar)', () => {
      const x: Matrix = new Matrix([[1, 1, 1]]);

      deepStrictEqual(x.copy().scale(5), Matrix.scale(x, 5));
    });
  });

  describe('Matrix.product(a, b)', () => {
    it('should work as the static equivalent of a.product(b)', () => {
      const x: Matrix = new Matrix([[3, 2, 1]]);
      const y: Matrix = new Matrix([[1, 2, 3]]);

      deepStrictEqual(x.copy().product(y), Matrix.product(x, y));
    });
  });

  describe('Matrix.multiply(a, b)', () => {
    it('should work as the static equivalent of a.multiply(b)', () => {
      const x: Matrix = new Matrix([[1], [2], [3]]);
      const y: Matrix = new Matrix([[1, 1, 1]]);

      deepStrictEqual(x.copy().multiply(y), Matrix.multiply(x, y));
    });
  });

  describe('Matrix.plu(a)', () => {
    it('should work as the static equivalent of a.plu()', () => {
      const x: Matrix = new Matrix([[1, 3, 5], [2, 4, 7], [1, 1, 0]]);

      deepStrictEqual(x.copy().plu(), Matrix.plu(x));
    });
  });

  describe('Matrix.augment(a, b)', () => {
    it('should work as the static equivalent of a.augment(b)', () => {
      const x: Matrix = new Matrix([[1, 1, 1]]);
      const y: Matrix = new Matrix([[1, 2, 3]]);

      deepStrictEqual(x.copy().augment(y), Matrix.augment(x, y));
    });
  });

  describe('Matrix.equals(a, b)', () => {
    it('should work as the static equivalent of a.equals(b)', () => {
      const x: Matrix = new Matrix([[1, 1, 1]]);
      const y: Matrix = new Matrix([[1, 1, 1]]);

      deepStrictEqual(x.copy().equals(y), Matrix.equals(x, y));
    });
  });

  describe('Matrix.identity()', () => {
    it('should throw error if invalid size', () => {
      throws(Matrix.identity.bind(new Matrix(), -1) as () => void, Error);
      throws(Matrix.identity.bind(new Matrix(), 0) as () => void, Error);
    });

    it('should work as expected', () => {
      deepStrictEqual(new Matrix([[1, 0, 0], [0, 1, 0], [0, 0, 1]]), Matrix.identity(3));
    });
  });

  describe('Matrix.magic()', () => {
    it('should throw error if invalid size', () => {
      throws(Matrix.magic.bind(new Matrix(), -1) as () => void, Error);
      throws(Matrix.identity.bind(new Matrix(), 0) as () => void, Error);
    });

    it('should work as expected', () => {
      deepStrictEqual(new Matrix([[8, 1, 6], [3, 5, 7], [4, 9, 2]]), Matrix.magic(3));
    });
  });

  describe('Matrix.zeros()', () => {
    it('should throw error if invalid size', () => {
      throws(Matrix.zeros.bind(new Matrix(), 0, 0) as () => void, Error);
      throws(Matrix.zeros.bind(new Matrix(), -1, 1) as () => void, Error);
      throws(Matrix.zeros.bind(new Matrix(), 1, -1) as () => void, Error);
    });

    it('should work as expected', () => {
      deepStrictEqual(new Matrix([[0, 0, 0]]), Matrix.zeros(1, 3));
      deepStrictEqual(new Matrix([[0], [0], [0]]), Matrix.zeros(3, 1));
      deepStrictEqual(new Matrix([[0, 0], [0, 0]]), Matrix.zeros(2, 2));
    });
  });

  describe('Matrix.ones()', () => {
    it('should throw error if invalid size', () => {
      throws(Matrix.ones.bind(new Matrix(), 0, 0) as () => void, Error);
      throws(Matrix.ones.bind(new Matrix(), -1, 1) as () => void, Error);
      throws(Matrix.ones.bind(new Matrix(), 1, -1) as () => void, Error);
    });

    it('should work as expected', () => {
      deepStrictEqual(new Matrix([[1, 1, 1]]), Matrix.ones(1, 3));
      deepStrictEqual(new Matrix([[1], [1], [1]]), Matrix.ones(3, 1));
      deepStrictEqual(new Matrix([[1, 1], [1, 1]]), Matrix.ones(2, 2));
    });
  });
});
