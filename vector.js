(function () {
  'use strict';

  /**
   * @method constructor
   * @desc Creates a two-dimensional `Vector` from the supplied arguments.
   **/
  function Vector (data) {
    this.type = Float64Array;
    this.length = 0;

    if (data instanceof Vector) {
      this.combine(data);
    } else if (data instanceof Array) {
      this.data = new this.type(data);
      this.length = data.length;
    } else if (data && data.buffer && data.buffer instanceof ArrayBuffer) {
      this.data = data;
      this.length = data.length;
      this.type = data.constructor;
    }
  }

  /**
   * Static method. Adds two vectors `a` and `b` together.
   * @param {Vector} a
   * @param {Vector} b
   * @returns {Vector} a vector containing the sum of `a` and `b`
   **/
  Vector.add = function (a, b) {
    return new Vector(a).add(b);
  };

  /**
   * Adds `vector` to the current vector.
   * @param {Vector} vector
   * @returns {Vector} this
   **/
  Vector.prototype.add = function (vector) {
    var l1 = this.length,
        l2 = vector.length;
    if (l1 !== l2)
      throw new Error('sizes do not match!');
    if (!l1 && !l2)
      return this;

    var i;
    for (i = 0; i < l1; i++)
      this.data[i] += vector.data[i];

    return this;
  };

  /**
   * Static method. Subtracts the vector `b` from vector `a`.
   * @param {Vector} a
   * @param {Vector} b
   * @returns {Vector} a vector containing the difference between `a` and `b`
   **/
  Vector.subtract = function (a, b) {
    return new Vector(a).subtract(b);
  };

  /**
   * Subtracts `vector` from the current vector.
   * @param {Vector} vector
   * @returns {Vector} this
   **/
  Vector.prototype.subtract = function (vector) {
    var l1 = this.length,
        l2 = vector.length;
    if (l1 !== l2)
      throw new Error('sizes do not match');

    if (!l1 && !l2)
      return this;

    var i;
    for (i = 0; i < l1; i++)
      this.data[i] -= vector.data[i];

    return this;
  };

  /**
   * Static method. Multiplies all elements of `vector` with a specified `scalar`.
   * @param {Vector} vector
   * @param {Number} scalar
   * @returns {Vector} a resultant scaled vector
   **/
  Vector.scale = function (vector, scalar) {
    return new Vector(vector).scale(scalar);
  };

  /**
   * Multiplies all elements of current vector with a specified `scalar`.
   * @param {Number} scalar
   * @returns {Vector} this
   **/
  Vector.prototype.scale = function (scalar) {
    var i;
    for (i = this.length - 1; i >= 0; i--)
      this.data[i] *= scalar;

    return this;
  };

  /**
   * Static method. Normalizes `vector`, i.e. divides all elements with the magnitude.
   * @param {Vector} vector
   * @returns {Vector} a resultant normalized vector
   **/
  Vector.normalize = function (vector) {
    return new Vector(vector).normalize();
  };

  /**
   * Normalizes current vector.
   * @returns {Vector} a resultant normalized vector
   **/
  Vector.prototype.normalize = function () {
    return this.scale(1 / this.magnitude());
  };

  /**
   * Static method. Projects the vector `a` onto the vector `b` using
   * the projection formula `(b * (a * b / b * b))`.
   * @param {Vector} a
   * @param {Vector} b
   * @returns {Vector} a new resultant projected vector
   **/
  Vector.project = function (a, b) {
    return a.project(new Vector(b));
  };

  /**
   * Projects the current vector onto `vector` using
   * the projection formula `(b * (a * b / b * b))`.
   * @param {Vector} vector
   * @returns {Vector} `vector`
   **/
  Vector.prototype.project = function (vector) {
    return vector.scale(this.dot(vector) / vector.dot(vector));
  };

  /**
   * Static method. Creates a vector containing zeros (`0`) of `count` size, takes
   * an optional `type` argument which should be an instance of `TypedArray`.
   * @param {Number} count
   * @param {TypedArray} type
   * @returns {Vector} a new vector of the specified size and `type`
   **/
  Vector.zeros = function (count, type) {
    if (count < 0)
      throw new Error('invalid size');
    else if (count === 0)
      return new Vector();

    type = type || Float64Array;
    var data = new type(count),
        i;

    for (i = 0; i < count; i++)
      data[i] = +0.0;

    return new Vector(data);
  };

  /**
   * Static method. Creates a vector containing ones (`1`) of `count` size, takes
   * an optional `type` argument which should be an instance of `TypedArray`.
   * @param {Number} count
   * @param {TypedArray} type
   * @returns {Vector} a new vector of the specified size and `type`
   **/
  Vector.ones = function (count, type) {
    if (count < 0)
      throw new Error('invalid size');
    else if (count === 0)
      return new Vector();

    type = type || Float64Array;
    var data = new type(count),
        i;

    for (i = 0; i < count; i++)
      data[i] = 1;

    return new Vector(data);
  };

  /**
   * Static method. Creates a vector containing a range (can be either ascending or descending)
   * of numbers specified by the arguments provided (e.g. `Vector.range(0, .5, 2)`
   * gives a vector containing all numbers in the interval `[0, 2)` separated by
   * steps of `0.5`), takes an optional `type` argument which should be an instance of
   * `TypedArray`.
   * @param {Number} start
   * @param {Number} step - optional
   * @param {Number} end
   * @returns {Vector} a new vector containing the specified range of the specified `type`
   **/
  Vector.range = function () {
    var args = [].slice.call(arguments, 0),
        backwards = false,
        start, step, end;

    var type = Float64Array;
    if (typeof args[args.length - 1] === 'function')
      type = args.pop();

    switch(args.length) {
      case 2:
        end = args.pop();
        step = 1;
        start = args.pop();
        break;
      case 3:
        end = args.pop();
        step = args.pop();
        start = args.pop();
        break;
      default:
        throw new Error('invalid range');
    }

    if (end - start < 0) {
      var copy = end;
      end = start;
      start = copy;
      backwards = true;
    }

    if (step > end - start)
      throw new Error('invalid range');

    var data = new type(Math.ceil((end - start) / step)),
        i, j;
    for (i = start, j = 0; i < end; i += step, j++)
      data[j] = backwards ? end - i + start : i;

    return new Vector(data);
  };

  /**
   * Static method. Creates a vector of `count` elements containing random
   * values between `0` and `1`, takes an optional `type` argument which
   * should be an instance of `TypedArray`.
   * @param {Number} count
   * @param {TypedArray} type
   * @returns {Vector} a new vector of the specified size and `type`
   **/
  Vector.random = function (count, type) {
    type = type || Float64Array;
    var data = new type(count),
        i;

    for (i = 0; i < count; i++)
      data[i] = Math.random();

    return new Vector(data);
  };

  /**
   * Static method. Performs dot multiplication with two vectors `a` and `b`.
   * @param {Vector} a
   * @param {Vector} b
   * @returns {Number} the dot product of the two vectors
   **/
  Vector.dot = function (a, b) {
    return a.dot(b);
  };

  /**
   * Performs dot multiplication with current vector and `vector`
   * @param {Vector} vector
   * @returns {Number} the dot product of the two vectors
   **/
  Vector.prototype.dot = function (vector) {
    if (this.length !== vector.length)
      throw new Error('sizes do not match');

    var a = this.data,
        b = vector.data,
        result = 0,
        i, l;

    for (i = 0, l = this.length; i < l; i++)
      result += a[i] * b[i];

    return result;
  };

  /**
   * Calculates the magnitude of a vector (also called L2 norm or Euclidean length).
   * @returns {Number} the magnitude (L2 norm) of the vector
   **/
  Vector.prototype.magnitude = function () {
    if (!this.length)
      return 0;

    var result = 0,
        data = this.data,
        i, l;
    for (i = 0, l = this.length; i < l; i++)
      result += data[i] * data[i];

    return Math.sqrt(result);
  };

  /**
   * Static method. Determines the angle between two vectors `a` and `b`.
   * @param {Vector} a
   * @param {Vector} b
   * @returns {Number} the angle between the two vectors in radians
   **/
  Vector.angle = function (a, b) {
    return a.angle(b);
  };

  /**
   * Determines the angle between the current vector and `vector`.
   * @param {Vector} vector
   * @returns {Number} the angle between the two vectors in radians
   **/
  Vector.prototype.angle = function (vector) {
    return Math.acos(this.dot(vector) / this.magnitude() * vector.magnitude());
  };

  /**
   * Static method. Checks the equality of two vectors `a` and `b`.
   * @param {Vector} a
   * @param {Vector} b
   * @returns {Boolean} `true` if the two vectors are equal, `false` otherwise
   **/
  Vector.equals = function (a, b) {
    return a.equals(b);
  };

  /**
   * Checks the equality of the current vector and `vector`.
   * @param {Vector} vector
   * @returns {Boolean} `true` if the two vectors are equal, `false` otherwise
   **/
  Vector.prototype.equals = function (vector) {
    if (this.length !== vector.length)
      return false;

    var a = this.data,
        b = vector.data,
        length = this.length,
        i = 0;

    while (i < length && a[i] === b[i])
      i++;
    return i === length;
  };

  /**
   * Gets the element at `index` from current vector.
   * @param {Number} index
   * @returns {Number} the element at `index`
   **/
  Vector.prototype.get = function (index) {
    if (index < 0 || index > this.length - 1)
      throw new Error('index out of bounds');

    return this.data[index];
  };

  /**
   * Gets the minimum value (smallest) element of current vector.
   * @returns {Number} the smallest element of the current vector
   **/
  Vector.prototype.min = function () {
    var min = Number.POSITIVE_INFINITY,
        data = this.data,
        value,
        i, l;

    for (i = 0, l = data.length; i < l; i++) {
      value = data[i];
      if (value < min)
        min = value;
    }

    return min;
  };

  /**
   * Gets the maximum value (largest) element of current vector.
   * @returns {Number} the largest element of current vector
   **/
  Vector.prototype.max = function () {
    var max = Number.NEGATIVE_INFINITY,
        data = this.data,
        value,
        i, l;

    for (i = 0, l = this.length; i < l; i++) {
      value = data[i];
      if (value > max)
        max = value;
    }

    return max;
  };

  /**
   * Sets the element at `index` to `value`.
   * @param {Number} index
   * @param {Number} value
   * @returns {Vector} this
   **/
  Vector.prototype.set = function (index, value) {
    if (index < 0 || index > this.length - 1)
      throw new Error('index out of bounds');

    this.data[index] = value;
    return this;
  };

  /**
   * Static method. Combines two vectors `a` and `b` (appends `b` to `a`).
   * @param {Vector} a
   * @param {Vector} b
   * @returns {Vector} `b` appended to vector `a`
   **/
  Vector.combine = function (a, b) {
    return new Vector(a).combine(b);
  };

  /**
   * Combines the current vector with `vector`
   * @param {Vector} vector
   * @returns {Vector} `vector` combined with current vector
   **/
  Vector.prototype.combine = function (vector) {
    if (!vector.length)
      return this;
    if (!this.length) {
      this.data = new vector.type(vector.data);
      this.length = vector.length;
      this.type = vector.type;
      return this;
    }

    var l1 = this.length,
        l2 = vector.length,
        d1 = this.data,
        d2 = vector.data;

    var data = new this.type(l1 + l2);
    data.set(d1);
    data.set(d2, l1);

    this.data = data;
    this.length = l1 + l2;

    return this;
  };

  /**
   * Pushes a new `value` into current vector.
   * @param {Number} value
   * @returns {Vector} `this`
   **/
  Vector.prototype.push = function (value) {
    return this.combine(new Vector([value]));
  };

  /**
   * Maps a function `callback` to all elements of current vector.
   * @param {Function} callback
   * @returns {Vector} `this`
   **/
  Vector.prototype.map = function (callback) {
    var data = new this.type(this.length),
        i;
    for (i = 0; i < this.length; i++)
      data[i] = callback(this.data[i], i);

    return new Vector(data);
  };

  /**
   * Functional version of for-looping the vector, is equivalent
   * to `Array.prototype.forEach`.
   * @param {Function} callback
   * @returns {Vector} `this`
   **/
  Vector.prototype.each = function (callback) {
    var i;
    for (i = 0; i < this.length; i++)
      callback(this.data[i], i);

    return this;
  };

  /**
   * Converts current vector into a readable formatted string.
   * @returns {String} a string of the vector's contents
   **/
  Vector.prototype.toString = function () {
    var result = '',
        i;
    for (i = 0; i < this.length; i++)
      result += i > 0 ? ', ' + this.data[i] : this.data[i];

    return '[' + result + ']';
  };

  /**
   * Converts current vector into a JavaScript array.
   * @returns {Array} an array containing all elements of current vector
   **/
  Vector.prototype.toArray = function () {
    if (!this.data)
      return [];

    return Array.prototype.slice.call(this.data);
  };

  module.exports = Vector;
}());
