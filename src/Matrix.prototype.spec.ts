import { Matrix, Vector } from './';
import * as assert from 'assert';

function round(value: number, precision: number) {
  return Number(value.toFixed(precision))
}

describe('Matrix.prototype', () => {
  describe('.multiply()', () => {
    it('should throw error if sizes do not match', () => {
      const a = new Matrix([[1, 2], [3, 4]]);
      const b = new Matrix([[1, 2]]);

      assert.throws(a.multiply.bind(a, b), Error);
    });

    it('should work as expected', () => {
      const a = new Matrix([[1, 2]]);
      const b = new Matrix([[1], [2]]);
      const c = new Matrix([[5]]);
      const d = new Matrix([[1, 2], [2, 4]]);

      const e = new Matrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
      const f = new Matrix([[ 30,  36,  42], [ 66,  81,  96], [102, 126, 150]]);

      const g = new Matrix([[0,1,0], [1,0,0], [0,0,1]]);
      const h = new Matrix([[1,3,5], [2,4,7], [1,1,0]]);
      const i = new Matrix([[2, 4, 7], [1, 3, 5], [1, 1, 0]]);

      assert.deepEqual(c, a.multiply(b));
      assert.deepEqual(d, b.multiply(a));
      assert.deepEqual(f, e.multiply(e));
      assert.deepEqual(i, g.multiply(h));
    });
  });

  describe('.transpose()', () => {
    const a = new Matrix([[1, 2]]);
    const b = new Matrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
    const c = new Matrix([[1], [2]]);
    const d = new Matrix([[1, 4, 7], [2, 5, 8], [3, 6, 9]]);
    const e = Matrix.random(20, 20);

    it('should work as expected', () => {

      assert.deepEqual(a, c.T);
      assert.deepEqual(c, a.T);

      assert.deepEqual(b, d.T);
      assert.deepEqual(d, b.T);

      assert.deepEqual(e, e.T.T);
    });
  });

  describe('.inverse()', () => {
    it('should throw error if matrix is not square', () => {
      const a = new Matrix([[1, 2]]);

      assert.throws(a.inverse.bind(a), Error);
    });

    it('should throw error if matrix is not invertible', () => {
      const a = new Matrix([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
      ]);

      assert.throws(a.inverse.bind(a), Error);
    });

    it('should work as expected', () => {
      const a = new Matrix([
        [2, -1, 0],
        [-1, 2, -1],
        [0, -1, 2]
      ]);
      const b = new Matrix([
        [3/4, 1/2, 1/4],
        [1/2, 1, 1/2],
        [1/4, 1/2, 3/4]
      ]);

      // need to round result to avoid floating point rounding errors, e.g. 0.99999999994
      assert.deepEqual(b, a.inverse().map((value: number) => round(value, 2)));
    });
  });

  describe('.gauss()', () => {
    it('should work as expected', () => {
      const a = new Matrix([[1, 2, 3], [3, 4, 5]]);
      const b = new Matrix([[1, 0, -1], [0, 1, 2]]);

      assert.deepEqual(b, a.gauss());

      const c = new Matrix([[1, 2, -1, -4], [2, 3, -1, -11], [-2, 0, -3, 22]]);
      const d = new Matrix([[1, 0, 0, -8], [0, 1, 0, 1], [0, 0, 1, -2]]);

      assert.deepEqual(d, c.gauss());
    });
  });

  describe('.lu()', () => {
    it('should work as expected', () => {
      const a = new Matrix([[1, 3, 5], [2, 4, 7], [1, 1, 0]]);
      const b = [
        new Matrix([[1, 0, 0], [0.5, 1, 0], [0.5, -1, 1]]),
        new Matrix([[2, 4, 7], [0, 1, 1.5], [0, 0, -2]])
      ];

      assert.deepEqual(b, a.lu().slice(0, 2));

      const c = new Matrix([[11, 9, 24, 2], [1, 5, 2, 6], [3, 17, 18, 1], [2, 5, 7, 1]]);
      const d = [
        new Matrix([[1, 0, 0, 0], [0.27273, 1, 0, 0], [0.09091, 0.2875, 1, 0], [0.18182, 0.23125, 0.0036, 1]]),
        new Matrix([[11, 9, 24, 2], [0, 14.54545, 11.45455, 0.45455], [0, 0, -3.475, 5.6875], [0, 0, 0, 0.51079]]),
      ];

      const [lower, upper]: [Matrix, Matrix, Int32Array] = c.lu();
      assert.deepEqual(d[0], lower.map((value: number) => round(value, 5)));
      assert.deepEqual(d[1], upper.map((value: number) => round(value, 5)));
    });
  });

  describe('.plu()', () => {
    it('should work as expected', () => {
      const a = new Matrix([[1, 3, 5], [2, 4, 7], [1, 1, 0]]);
      const b = new Matrix([[2, 4, 7], [0.5, 1, 1.5], [0.5, -1, -2]]);
      const ipiv = new Int32Array([1, 1, 2]);

      const plu = a.plu();
      assert.deepEqual(ipiv, plu.pop());
      assert.deepEqual(b, plu.pop());
    });
  });

  describe('.lusolve()', () => {
    it('should work as expected', () => {
      const a = new Matrix([[1, 3, 5], [2, 4, 7], [1, 1, 0]]);
      const rhs = new Matrix([[1], [3], [5]]);
      const x = new Matrix([[3.25], [1.75], [-1.5]]);

      const plu = a.plu(),
          lu = plu[0],
          ipiv = plu[1];

      lu.lusolve(rhs, ipiv);
      assert.deepEqual(x, rhs);
    });
  });

  describe('.solve()', () => {
    it('should work as expected', () => {
      const a = new Matrix([[1, 3, 5], [2, 4, 7], [1, 1, 0]]);
      const rhs = new Matrix([[1], [3], [5]]);
      const x = new Matrix([[3.25], [1.75], [-1.5]]);

      assert.deepEqual(x, a.solve(rhs));
    });
  });

  describe('.augment()', () => {
    it('should return current matrix when combined with empty matrix', () => {
      const a = new Matrix([[1, 2], [3, 4]]);

      assert.deepEqual(a, a.augment(new Matrix()));
    });

    it('should work as expected', () => {
      const a = new Matrix([[1, 2], [3, 4]]);
      const b = new Matrix([[5, 6], [7, 8]]);
      const c = new Matrix([[1, 2, 5, 6], [3, 4, 7, 8]]);

      assert.deepEqual(c, a.augment(b));
    });
  });

  describe('.diag()', () => {
    it('should work as expected', () => {
      const a = new Matrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
      const b = new Matrix([[1, 2, 3, 4], [5, 6, 7, 8]]);

      assert.deepEqual(new Vector([1, 5, 9]), a.diag());
      assert.deepEqual(new Vector([1, 6]), b.diag());
    });
  });

  describe('.trace()', () => {
    it('should work as expected', () => {
      const a = new Matrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
      const b = new Matrix([[1, 2], [3, 4]]);

      assert.equal(15, a.trace());
      assert.equal(5, b.trace());
    });
  });

  describe('.determinant()', () => {
    it('should throw error if matrix is not square', () => {
      const a = new Matrix([[0, 0]]);
      assert.throws(a.determinant.bind(a), Error);
    });

    it('should work as expected', () => {
      const a = new Matrix([[1, 2], [3, 4]]);
      const b = new Matrix([[1, 5, 6], [3.3, 9, 10], [7, 9, 3.2]]);
      const c = new Matrix([[2, -1, 1], [-1, -2, 1], [-1, -1, -1]]);

      assert.equal(-2, round(a.determinant(), 2));
      assert.equal(36.2, round(b.determinant(), 2));
      assert.equal(7, round(c.determinant(), 2));
    });
  });

  describe('.get()', () => {
    it('should throw error if index out of bounds', () => {
      const a = new Matrix([[1, 2], [3, 4]]);

      assert.throws(a.get.bind(a, -1, 0), Error);
      assert.throws(a.get.bind(a, 0, -1), Error);
      assert.throws(a.get.bind(a, 2, 0), Error);
      assert.throws(a.get.bind(a, 0, 2), Error);
    });

    it('should work as expected', () => {
      const a = new Matrix([[1, 2], [3, 4], [5, 6]]);

      assert.equal(1, a.get(0, 0));
      assert.equal(2, a.get(0, 1));
      assert.equal(3, a.get(1, 0));
      assert.equal(4, a.get(1, 1));
      assert.equal(5, a.get(2, 0));
    });
  });

  describe('.set()', () => {
    it('should throw error if index out of bounds', () => {
      const a = new Matrix([[1, 2], [3, 4]]);

      assert.throws(a.set.bind(a, -1, 0), Error);
      assert.throws(a.set.bind(a, 0, -1), Error);
      assert.throws(a.set.bind(a, 2, 0), Error);
      assert.throws(a.set.bind(a, 0, 2), Error);
    });

    it('should work as expected', () => {
      const a = new Matrix([[1, 2], [3, 4]]);
      a.set(0, 0, 0);
      a.set(0, 1, 1);
      a.set(1, 0, 0);
      a.set(1, 1, 1);

      assert.equal(0, a.get(0, 0));
      assert.equal(1, a.get(0, 1));
      assert.equal(0, a.get(1, 0));
      assert.equal(1, a.get(1, 1));
    });
  });

  describe('.swap()', () => {
    it('should throw error if index out of bounds', () => {
      const a = new Matrix([[1, 2], [3, 4]]);

      assert.throws(a.swap.bind(a, -1, 0), Error);
      assert.throws(a.swap.bind(a, 0, -1), Error);
      assert.throws(a.swap.bind(a, 2, 0), Error);
      assert.throws(a.swap.bind(a, 0, 2), Error);
    });

    it('should work as expected', () => {
      const a = new Matrix([[1, 2], [3, 4], [5, 6]]);
      a.swap(0, 1);
      assert.deepEqual(new Matrix([[3, 4], [1, 2], [5, 6]]), a);

      a.swap(0, 2);
      assert.deepEqual(new Matrix([[5, 6], [1, 2], [3, 4]]), a);
    });
  });

  describe('.map()', () => {
    it('should work as expected', () => {
      const a = new Matrix([[1, 2, 3], [4, 5, 6]]);
      const b = a.map(element => element * 2);

      assert.deepEqual(new Matrix([[2, 4, 6], [8, 10, 12]]), b);
    });
  });

  describe('.each()', () => {
    it('should work as expected', () => {
      const a = new Matrix([[1, 2], [3, 4]]);
      const b = Matrix.zeros(2, 2);

      a.each((value, i, j) => {
        b.set(i, j, value * j);
      });

      assert.deepEqual(new Matrix([[0, 2], [0, 4]]), b);
    });
  });

  describe('.reduce()', () => {
    it('should work as expected', () => {
      function sum(a: number, b: number) {
        return a + b;
      }

      const a = new Matrix([[1, 2, 3]]);
      const b = new Matrix([[1, 2, 3], [4, 5, 6]]);

      assert.deepEqual(6, a.reduce(sum));
      assert.deepEqual(21, b.reduce(sum));
    });
  });

  describe('.rank()', () => {
    it('should work as expected', () => {
      const a = new Matrix([[1, 2, 1], [-2, -3, 1], [3, 5, 0]]);
      const b = new Matrix([[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]]);
      const c = new Matrix([[1, 1, 1], [2, 2, 2], [3, 3, 3]]);
      const d = new Matrix([[0, 0, 0], [0, 0, 0]]);

      assert.equal(a.rank(), 2);
      assert.equal(b.rank(), 2);
      assert.equal(c.rank(), 1);
      assert.equal(d.rank(), 0);

      assert.equal(a.rank(), Matrix.rank(a));
    });
  });

  describe('.toString()', () => {
    it('should work as expected', () => {
      assert.equal('[[1,2], \n[3,4]]', new Matrix([[1, 2], [3, 4]]).toString());
        assert.equal('[[1,2], \n[3,4], \n[5,6]]', new Matrix([[1, 2], [3, 4], [5, 6]]).toString());
    });
  });

  describe('.toArray()', () => {
    it('should work as expected', () => {
      assert.deepEqual([[1, 2], [3, 4]], new Matrix([[1, 2], [3, 4]]).toArray());
      assert.deepEqual([[1, 2], [3, 4], [5, 6]], new Matrix([[1, 2], [3, 4], [5, 6]]).toArray());
    });
  });
});
