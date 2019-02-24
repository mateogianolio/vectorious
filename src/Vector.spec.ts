import { Vector } from './';
import * as assert from 'assert';

describe('Vector', () => {
  describe('Vector.add(a, b)', () => {
    it('should work as the static equivalent of a.add(b)', () => {
      const a = new Vector([1, 1, 1]);
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
});
