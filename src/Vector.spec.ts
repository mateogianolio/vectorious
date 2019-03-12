import { Vector } from './';
import * as assert from 'assert';

describe('Vector', () => {
  describe('Vector.binOp(a, b, (a, b) => a + b)', () => {
    it('should work as the static equivalent of a.binOp(b, (a, b) => a + b)', () => {
      const a = new Vector([1, 1, 1]);
      const b = new Vector([1, 2, 3]);
      const f = (a: number, b: number): number => a + b;

      assert.deepEqual(a.copy().binOp(b, f), Vector.binOp(a, b, f));
    });
  });

  describe('Vector.add(a, b)', () => {
    it('should work as the static equivalent of a.add(b)', () => {
      const a = new Vector([2, 3, 4]);
      const b = new Vector([1, 2, 3]);

      assert.deepEqual(a.copy().add(b), Vector.add(a, b));
    });
  });

  describe('Vector.subtract(a, b)', () => {
    it('should work as the static equivalent of a.subtract(b)', () => {
      const a = new Vector([2, 3, 4]);
      const b = new Vector([1, 2, 3]);

      assert.deepEqual(a.copy().subtract(b), Vector.subtract(a, b));
    });
  });

  describe('Vector.dot(a, b)', () => {
    it('should work as the static equivalent of a.dot(b)', () => {
      const a = new Vector([2, 3, 4]);
      const b = new Vector([1, 2, 3]);

      assert.deepEqual(a.copy().dot(b), Vector.dot(a, b));
    });
  });

  describe('Vector.scale(a, scalar)', () => {
    it('should work as the static equivalent of a.scale(scalar)', () => {
      const a = new Vector([2, 3, 4]);

      assert.deepEqual(a.copy().scale(5), Vector.scale(a, 5));
    });
  });

  describe('Vector.normalize(a)', () => {
    it('should work as the static equivalent of a.normalize()', () => {
      const a = new Vector([2, 3, 4]);

      assert.deepEqual(a.normalize(), Vector.normalize(a));
    });
  });

  describe('Vector.project(a, b)', () => {
    it('should work as the static equivalent of a.project(b)', () => {
      const a = new Vector([2, 3, 4]);
      const b = new Vector([1, 2, 3]);

      assert.deepEqual(a.copy().project(b), Vector.project(a, b));
    });
  });

  describe('Vector.angle(a, b)', () => {
    it('should work as the static equivalent of a.angle(b)', () => {
      const a = new Vector([0, 1, 0]);
      const b = new Vector([1, 0, 1]);

      assert.deepEqual(a.copy().angle(b), Vector.angle(a, b));
    });
  });

  describe('Vector.equals(a, b)', () => {
    it('should work as the static equivalent of a.equals(b)', () => {
      const a = new Vector([0, 1, 0]);
      const b = new Vector([1, 0, 1]);

      assert.deepEqual(a.copy().equals(b), Vector.equals(a, b));
    });
  });

  describe('Vector.combine(a, b)', () => {
    it('should work as the static equivalent of a.combine(b)', () => {
      const a = new Vector([0, 1, 0]);
      const b = new Vector([1, 0, 1]);

      assert.deepEqual(a.copy().combine(b), Vector.combine(a, b));
    });
  });

  describe('Vector.zeros()', () => {
    it('should throw error if argument < 0', () => {
      assert.throws(Vector.zeros.bind(new Vector(), -1), Error);
    });

    it('should return empty vector if argument === 0', () => {
      assert.deepEqual(new Vector(), Vector.zeros(0));
    });

    it('should create Vector(0, 0, 0)', () => {
      assert.deepEqual(new Vector([0, 0, 0]), Vector.zeros(3));
    });
  });

  describe('Vector.ones()', () => {
    it('should throw error if argument < 0', () => {
      assert.throws(Vector.ones.bind(new Vector(), -1), Error);
    });

    it('should return empty vector if argument === 0', () => {
      assert.deepEqual(new Vector(), Vector.ones(0));
    });

    it('should create Vector(1, 1, 1)', () => {
      assert.deepEqual(new Vector([1, 1, 1]), Vector.ones(3));
    });
  });

  describe('Vector.random()', () => {
    it('should throw error if count < 0', () => {
      assert.throws(Vector.random.bind(new Vector(), -1), Error);
    });

    it('should return empty vector if count === 0', () => {
      assert.deepEqual(new Vector(), Vector.random(0));
    });

    it('should work as expected with min and max', () => {
      assert(Vector.random(3).min() >= 0);
      assert(Vector.random(3).max() < 1);
    });
  });

  describe('.range()', () => {
    it('should throw error if wrong number or arguments supplied', () => {
      assert.throws(Vector.range.bind(new Vector(), 1), Error);
      assert.throws(Vector.range.bind(new Vector(), 1, 2, 3, 4), Error);
    });

    it('should throw error if step > start - end', () => {
      assert.throws(Vector.range.bind(new Vector(), 0, 0), Error);
      assert.throws(Vector.range.bind(new Vector(), 1, 3, 2), Error);
    });

    it('should work with type', () => {
      const a = Vector.range(0, 2, Int8Array);
      assert.deepEqual(a.type, Int8Array);
    });

    it('should work as expected', () => {
      const a = Vector.range(0, 5);
      const b = Vector.range(5, 2, 10);
      const c = Vector.range(5, 0);
      const d = Vector.range(5, 2, 0);

      assert.deepEqual(new Vector([0, 1, 2, 3, 4]), a);
      assert.deepEqual(new Vector([5, 7, 9]), b);
      assert.deepEqual(new Vector([5, 4, 3, 2, 1]), c);
      assert.deepEqual(new Vector([5, 3, 1]), d);
    });
  });
});
