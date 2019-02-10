import { Matrix, Vector } from './';
import * as assert from 'assert';

describe('Matrix', () => {
  describe('Matrix(data, options)', () => {
    it('should work equivalent to Matrix.fromTypedArray when data is a typed array', () => {
      var a = new Matrix(new Float64Array([1, 2, 3]), { shape: [1, 3] });
      var b = Matrix.fromTypedArray(new Float64Array([1, 2, 3]), [1, 3]);

      assert.deepEqual(a, b);
    });

    it('should work equivalent to Matrix.fromArray when data is a regular 2d array', () => {
      var a = new Matrix([[1, 2, 3]]);
      var b = Matrix.fromArray([[1, 2, 3]]);

      assert.deepEqual(a, b);
    });

    it('should work equivalent to Matrix.fromMatrix when data is a Matrix', () => {
      var a = new Matrix(new Matrix([[1, 2, 3]]));
      var b = Matrix.fromMatrix(new Matrix([[1, 2, 3]]));

      assert.deepEqual(a, b);
    });

    it('should work equivalent to Matrix.fromVector when data is a Vector', () => {
      var a = new Matrix(new Vector([1, 2, 3]));
      var b = Matrix.fromVector(new Vector([1, 2, 3]));

      assert.deepEqual(a, b);
    });

    it('should work equivalent to Matrix.fromShape when data is a shape', () => {
      var a = new Matrix(3, 2);
      var b = new Matrix({ shape: [3, 2] });
      var c = Matrix.fromShape([3, 2]);

      assert.deepEqual(a, c);
      assert.deepEqual(b, c);
    });
  });

  describe('Matrix.fromTypedArray(data, shape)', () => {
    it('should work as expected', () => {
      var a = new Matrix(new Float64Array([1, 2, 3]), { shape: [1, 3] });

      assert(a instanceof Matrix);
      assert.equal(a.type, Float64Array);
      assert.deepEqual(a.shape, [1, 3]);
    });
  });

  describe('Matrix.fromArray(array)', () => {
    it('should work as expected', () => {
      var a = Matrix.fromArray([[1, 2, 3]]);

      assert(a instanceof Matrix);
      assert.equal(a.type, Float64Array);
      assert.deepEqual(a.data, [1, 2, 3]);
      assert.deepEqual(a.shape, [1, 3]);
    });
  });

  describe('Matrix.fromMatrix(matrix)', () => {
    it('should work as expected', () => {
      var a = Matrix.fromArray([[1, 2, 3]]);
      var b = Matrix.fromMatrix(a);

      assert(b instanceof Matrix);
      assert.deepEqual(a, b);
    });
  });

  describe('Matrix.fromVector(vector, shape)', () => {
    it('should work as expected', () => {
      var v = new Vector([1, 2, 3]);
      var a = Matrix.fromVector(v);

      assert(a instanceof Matrix);
      assert.equal(a.type, v.type);
      assert.deepEqual(a.data, [1, 2, 3]);
      assert.deepEqual(a.shape, [3, 1]);
    });
  });

  describe('Matrix.fromShape(shape)', () => {
    it('should work as expected', () => {
      var a = Matrix.fromShape([3, 2]);

      assert(a instanceof Matrix);
      assert.equal(a.type, Float64Array);
      assert.deepEqual(a.data, [0, 0, 0, 0, 0, 0]);
      assert.deepEqual(a.shape, [3, 2]);
    });
  });

  describe('Matrix.add(a, b)', () => {
    it('should work as the static equivalent of a.add(b)', () => {
      var a = new Matrix([[1, 1, 1]]);
      var b = new Matrix([[1, 2, 3]]);

      assert.deepEqual(new Matrix(a).add(b), Matrix.add(a, b));
    });
  });

  describe('Matrix.subtract(a, b)', () => {
    it('should work as the static equivalent of a.subtract(b)', () => {
      var a = new Matrix([[1, 1, 1]]);
      var b = new Matrix([[1, 2, 3]]);

      assert.deepEqual(new Matrix(a).subtract(b), Matrix.subtract(a, b));
    });
  });

  describe('Matrix.scale(a, scalar)', () => {
    it('should work as the static equivalent of a.scale(scalar)', () => {
      var a = new Matrix([[1, 1, 1]]);

      assert.deepEqual(new Matrix(a).scale(5), Matrix.scale(a, 5));
    });
  });

  describe('Matrix.product(a, b)', () => {
    it('should work as the static equivalent of a.product(b)', () => {
      var a = new Matrix([[3, 2, 1]]);
      var b = new Matrix([[1, 2, 3]]);

      assert.deepEqual(new Matrix(a).product(b), Matrix.product(a, b));
    });
  });

  describe('Matrix.multiply(a, b)', () => {
    it('should work as the static equivalent of a.multiply(b)', () => {
      var a = new Matrix([[1], [2], [3]]);
      var b = new Matrix([[1, 1, 1]]);

      assert.deepEqual(new Matrix(a).multiply(b), Matrix.multiply(a, b));
    });
  });

  describe('Matrix.plu(a)', () => {
    it('should work as the static equivalent of a.plu()', () => {
      var a = new Matrix([[1, 3, 5], [2, 4, 7], [1, 1, 0]]);

      assert.deepEqual(new Matrix(a).plu(), Matrix.plu(a));
    });
  });

  describe('Matrix.augment(a, b)', () => {
    it('should work as the static equivalent of a.augment(b)', () => {
      var a = new Matrix([[1, 1, 1]]);
      var b = new Matrix([[1, 2, 3]]);

      assert.deepEqual(new Matrix(a).augment(b), Matrix.augment(a, b));
    });
  });

  describe('Matrix.equals(a, b)', () => {
    it('should work as the static equivalent of a.equals(b)', () => {
      var a = new Matrix([[1, 1, 1]]);
      var b = new Matrix([[1, 1, 1]]);

      assert.deepEqual(new Matrix(a).equals(b), Matrix.equals(a, b));
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
