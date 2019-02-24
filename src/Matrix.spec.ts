import { Matrix } from './';
import * as assert from 'assert';

describe('Matrix', () => {
  describe('Matrix.add(a, b)', () => {
    it('should work as the static equivalent of a.add(b)', () => {
      var a = new Matrix([[1, 1, 1]]);
      var b = new Matrix([[1, 2, 3]]);

      assert.deepEqual(a.copy().add(b), Matrix.add(a, b));
    });
  });

  describe('Matrix.subtract(a, b)', () => {
    it('should work as the static equivalent of a.subtract(b)', () => {
      var a = new Matrix([[1, 1, 1]]);
      var b = new Matrix([[1, 2, 3]]);

      assert.deepEqual(a.copy().subtract(b), Matrix.subtract(a, b));
    });
  });

  describe('Matrix.scale(a, scalar)', () => {
    it('should work as the static equivalent of a.scale(scalar)', () => {
      var a = new Matrix([[1, 1, 1]]);

      assert.deepEqual(a.copy().scale(5), Matrix.scale(a, 5));
    });
  });

  describe('Matrix.product(a, b)', () => {
    it('should work as the static equivalent of a.product(b)', () => {
      var a = new Matrix([[3, 2, 1]]);
      var b = new Matrix([[1, 2, 3]]);

      assert.deepEqual(a.copy().product(b), Matrix.product(a, b));
    });
  });

  describe('Matrix.multiply(a, b)', () => {
    it('should work as the static equivalent of a.multiply(b)', () => {
      var a = new Matrix([[1], [2], [3]]);
      var b = new Matrix([[1, 1, 1]]);

      assert.deepEqual(a.copy().multiply(b), Matrix.multiply(a, b));
    });
  });

  describe('Matrix.plu(a)', () => {
    it('should work as the static equivalent of a.plu()', () => {
      var a = new Matrix([[1, 3, 5], [2, 4, 7], [1, 1, 0]]);

      assert.deepEqual(a.copy().plu(), Matrix.plu(a));
    });
  });

  describe('Matrix.augment(a, b)', () => {
    it('should work as the static equivalent of a.augment(b)', () => {
      var a = new Matrix([[1, 1, 1]]);
      var b = new Matrix([[1, 2, 3]]);

      assert.deepEqual(a.copy().augment(b), Matrix.augment(a, b));
    });
  });

  describe('Matrix.equals(a, b)', () => {
    it('should work as the static equivalent of a.equals(b)', () => {
      var a = new Matrix([[1, 1, 1]]);
      var b = new Matrix([[1, 1, 1]]);

      assert.deepEqual(a.copy().equals(b), Matrix.equals(a, b));
    });
  });

  describe('Matrix.identity()', () => {
    it('should throw error if invalid size', () => {
      assert.throws(Matrix.identity.bind(new Matrix(), -1), Error);
      assert.throws(Matrix.identity.bind(new Matrix(), 0), Error);
    });

    it('should work as expected', () => {
      assert.deepEqual(new Matrix([[1, 0, 0], [0, 1, 0], [0, 0, 1]]), Matrix.identity(3));
    });
  });

  describe('Matrix.magic()', () => {
    it('should throw error if invalid size', () => {
      assert.throws(Matrix.magic.bind(new Matrix(), -1), Error);
      assert.throws(Matrix.identity.bind(new Matrix(), 0), Error);
    });

    it('should work as expected', () => {
      assert.deepEqual(new Matrix([[8, 1, 6], [3, 5, 7], [4, 9, 2]]), Matrix.magic(3));
    });
  });

  describe('Matrix.zeros()', () => {
    it('should throw error if invalid size', () => {
      assert.throws(Matrix.zeros.bind(new Matrix(), 0, 0), Error);
      assert.throws(Matrix.zeros.bind(new Matrix(), -1, 1), Error);
      assert.throws(Matrix.zeros.bind(new Matrix(), 1, -1), Error);
    });

    it('should work as expected', () => {
      assert.deepEqual(new Matrix([[0, 0, 0]]), Matrix.zeros(1, 3));
      assert.deepEqual(new Matrix([[0], [0], [0]]), Matrix.zeros(3, 1));
      assert.deepEqual(new Matrix([[0, 0], [0, 0]]), Matrix.zeros(2, 2));
    });
  });

  describe('Matrix.ones()', () => {
    it('should throw error if invalid size', () => {
      assert.throws(Matrix.ones.bind(new Matrix(), 0, 0), Error);
      assert.throws(Matrix.ones.bind(new Matrix(), -1, 1), Error);
      assert.throws(Matrix.ones.bind(new Matrix(), 1, -1), Error);
    });

    it('should work as expected', () => {
      assert.deepEqual(new Matrix([[1, 1, 1]]), Matrix.ones(1, 3));
      assert.deepEqual(new Matrix([[1], [1], [1]]), Matrix.ones(3, 1));
      assert.deepEqual(new Matrix([[1, 1], [1, 1]]), Matrix.ones(2, 2));
    });
  });
});
