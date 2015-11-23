(function () {
  'use strict';

  var memcpy = require('./memcpy');

  function Vector () {
    var self = this;
    self.type = Float64Array;
    self.length = 0;

    var argument,
        i;
    for (i = 0; i < arguments.length; i++) {
      argument = arguments[i];

      if (argument instanceof Vector) {
        self.combine(argument);
      } else if (argument instanceof self.type) {
        self.buffer = argument.buffer;
        self.values = argument;
        self.length = argument.length;
      } else if (typeof argument === 'object')
        self.combine(Vector.construct(argument));
      else if (typeof argument === 'function')
        this.type = argument;
      else
        self.push(argument);
    }

    return self;
  }

  // Function.prototype.construct
  // ?> converts an array of arguments to function arguments
  //    (e.g. f.construct([a, b, c]) <=> new f(a, b, c))
  // => returns a new instance of an object with the specified args
  Function.prototype.construct = function (args) {
    var object = Object.create(this.prototype);
    this.apply(object, args);
    return object;
  };

  // Vector(.prototype).add
  // ?> adds two vectors a and b together
  // => returns a new vector containing the sum of a and b
  Vector.add = function (a, b) {
    return a.add(b);
  };
  Vector.prototype.add = function (vector) {
    if (this.length !== vector.length)
      throw new Error('sizes do not match!');

    var result = Vector.zeros(this.length),
        a = this.values,
        b = vector.values,
        i, l;
    for (i = 0, l = this.length; i < l; i++)
      result.values[i] = a[i] + b[i];

    return result;
  };

  // Vector(.prototype).subtract
  // ?> subtracts the vector b from vector a
  // => returns a new vector containing the difference between a and b
  Vector.subtract = function (a, b) {
    return a.subtract(b);
  };
  Vector.prototype.subtract = function (vector) {
    if (this.length !== vector.length)
      throw new Error('sizes do not match');

    var result = Vector.zeros(this.length),
        a = this.values,
        b = vector.values,
        i, l;
    for (i = 0, l = this.length; i < l; i++)
      result.values[i] = a[i] - b[i];

    return result;
  };

  // Vector.prototype.scale
  // ?> multiplies all elements of a vector with a specified scalar
  // => returns a new resultant scaled vector
  Vector.prototype.scale = function (scalar) {
    var result = Vector.zeros(this.length),
        values = this.values,
        i, l;
    for (i = 0, l = this.length; i < l; i++)
      result.values[i] = values[i] * scalar;

    return result;
  };

  // Vector.prototype.normalize
  // ?> normalizes a vector, i.e. divides all elements with the magnitude
  // => returns a new resultant normalized vector
  Vector.prototype.normalize = function () {
    var result = new Vector(this.values);
    return result.scale(1 / result.magnitude());
  };

  // Vector(.prototype).project
  // ?> projects the vector a onto the vector b using
  //    the projection formula (b * (a * b / b * b))
  // => returns a new resultant projected vector
  Vector.project = function (a, b) {
    return a.project(b);
  };
  Vector.prototype.project = function (vector) {
    return vector.scale(this.dot(vector) / vector.dot(vector));
  };

  // Vector.zeros
  // ?> creates a vector containing zeros (0) of count size, takes
  //    an optional type argument which should be an instance of TypedArray
  // => returns a new vector of the specified size and type
  Vector.zeros = function (count, type) {
    if (count < 0)
      throw new Error('invalid size');
    else if (count === 0)
      return new Vector();

    var result = new Vector();
    result.type = type !== undefined ? type : Float64Array;
    result.buffer = new ArrayBuffer(count * result.type.BYTES_PER_ELEMENT);
    var zeros = new result.type(result.buffer),
        i;
    for (i = 0; i < count; i++) {
      zeros[i] = 0;
      result.length++;
    }

    result.values = zeros;
    return result;
  };

  // Vector.ones
  // ?> creates a vector containing ones (1) of count size, takes
  //    an optional type argument which should be an instance of TypedArray
  // => returns a new vector of the specified size and type
  Vector.ones = function (count, type) {
    if (count < 0)
      throw new Error('invalid size');
    else if (count === 0)
      return new Vector();

    var result = new Vector();
    result.type = type !== undefined ? type : Float64Array;
    result.buffer = new ArrayBuffer(count * result.type.BYTES_PER_ELEMENT);
    var ones = new result.type(result.buffer),
        i;
    for (i = 0; i < count; i++) {
      ones[i] = 1;
      result.length++;
    }

    result.values = ones;
    return result;
  };

  // Vector.range
  // ?> creates a vector containing a range (can be either ascending or descending)
  //    of numbers specified by the arguments provided (e.g. Vector.range(0, .5, 2)
  //    gives a vector containing all numbers in the interval [0, 2) separated by
  //    steps of 0.5), takes an optional type argument which should be an instance of
  //    TypedArray
  // => returns a new vector containing the specified range and type
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

    var vector = Vector.zeros(Math.ceil((end - start) / step), type),
        i, j;
    for (i = start, j = 0; i < end; i += step, j++)
      vector.values[j] = backwards ? end - i + start : i;

    return vector;
  };

  // Vector(.prototype).dot
  // ?> performs dot multiplication with two vectors a and b
  // => returns the dot product of the two vectors (always a number)
  Vector.dot = function (a, b) {
    return a.dot(b);
  };
  Vector.prototype.dot = function (vector) {
    if (this.length !== vector.length)
      throw new Error('sizes do not match');

    var result = 0,
        a = this.values,
        b = vector.values,
        i, l;

    for (i = 0, l = this.length; i < l; i++)
      result += a[i] * b[i];

    return result;
  };

  // Vector.prototype.magnitude
  // ?> calculates the magnitude of a vector using the Pythagorean theorem
  // => returns the magnitude (norm) of the vector (always a number)
  Vector.prototype.magnitude = function () {
    var result = 0,
        values = this.values,
        i, l;
    for (i = 0, l = this.length; i < l; i++)
      result += values[i] * values[i];

    return Math.sqrt(result);
  };

  // Vector(.prototype).angle
  // ?> determines the angle between two vectors a and b
  // => returns the angle between the two vectors in radians
  Vector.angle = function (a, b) {
    return a.angle(b);
  };
  Vector.prototype.angle = function (vector) {
    return Math.acos(this.dot(vector) / this.magnitude() * vector.magnitude());
  };

  // Vector(.prototype).equals
  // ?> checks the equality of two vectors a and b
  // => returns true if the two vectors are equal, false otherwise
  Vector.equals = function (a, b) {
    return a.equals(b);
  };
  Vector.prototype.equals = function (vector) {
    if (this.length !== vector.length)
      return false;

    var a = this.values,
        b = vector.values,
        i = 0, l = this.length;


    while(i < l && a[i] === b[i]) { i++; }

    return i === l;
  };

  // Vector.prototype.get
  // ?> gets the element at index from a vector
  // => returns the element at index
  Vector.prototype.get = function (index) {
    if (index < 0 || index > this.length - 1)
      throw new Error('index out of bounds');

    return this.values[index];
  };

  // Vector.prototype.min
  // ?> gets the minimum value (smallest) element of a vector
  // => returns the smallest element of the vector
  Vector.prototype.min = function () {
    var min = Number.POSITIVE_INFINITY,
        values = this.values,
        value,
        i, l;

    for (i = 0, l = values.length; i < l; i++) {
      value = values[i];
      if (value < min)
        min = value;
    }

    return min;
  };

  // Vector.prototype.max
  // ?> gets the maximum value (largest) element of a vector
  // => returns the largest element of the vector
  Vector.prototype.max = function () {
    var max = Number.NEGATIVE_INFINITY,
        values = this.values,
        value,
        i, l;

    for (i = 0, l = this.length; i < l; i++) {
      value = values[i];
      if (value > max)
        max = value;
    }

    return max;
  };

  // Vector.prototype.set
  // ?> sets the element at index to value
  // => returns this for function chaining
  Vector.prototype.set = function (index, value) {
    if (index < 0 || index > this.length - 1)
      throw new Error('index out of bounds');

    this.values[index] = value;
    return this;
  };

  // Vector(.prototype).combine
  // ?> combines two vectors a and b (appends b to a)
  // => returns the vector b appended to vector a
  Vector.combine = function (a, b) {
    return new Vector(a).combine(b);
  };
  Vector.prototype.combine = function (vector) {
    if (!vector.length)
      return this;
    else if (!(this.values instanceof this.type)) {
      this.buffer = new ArrayBuffer(vector.buffer.byteLength);
      this.type = vector.type;
      memcpy(this.buffer, vector.buffer);
      this.values = new this.type(this.buffer);
      this.length = this.values.length;
      return this;
    }

    var buffer = new ArrayBuffer(this.buffer.byteLength + vector.buffer.byteLength);
    memcpy(buffer, this.buffer);
    memcpy(buffer, this.buffer.byteLength, vector.buffer);

    this.buffer = buffer;
    this.values = new this.type(this.buffer);
    this.length = this.values.length;

    return this;
  };

  // Vector.prototype.push
  // ?> pushes a new value into a vector
  // => returns this for function chaining
  Vector.prototype.push = function (value) {
    if (!(this.values instanceof this.type)) {
      this.buffer = new ArrayBuffer(this.type.BYTES_PER_ELEMENT);
      this.values = new this.type(this.buffer);
      this.values[0] = value;
    } else {
      var l = this.buffer.byteLength,
          buffer = new ArrayBuffer(l + this.type.BYTES_PER_ELEMENT);

      memcpy(buffer, this.buffer);
      var values = new this.type(buffer);
      values[this.length] = value;

      this.buffer = buffer;
      this.values = values;
    }

    this.length++;
    return this;
  };

  // Vector.prototype.map
  // ?> maps a function callback to all elements of the vector
  // => returns the resultant mapped vector
  Vector.prototype.map = function (callback) {
    var vector = new Vector(this.values),
        i;
    for (i = 0; i < this.length; i++)
      vector.values[i] = callback(vector.values[i]);

    return vector;
  };

  // Vector.prototype.each
  // ?> functional version of for-looping the vector, is equivalent
  //    to Array.prototype.forEach
  // => returns this for function chaining
  Vector.prototype.each = function (callback) {
    var i;
    for (i = 0; i < this.length; i++)
      callback(this.values[i], i);

    return this;
  };

  // Vector.prototype.toString
  // ?> converts a vector into a readable formatted string
  // => returns a string of the vector's contents
  Vector.prototype.toString = function () {
    var result = '',
        i;
    for (i = 0; i < this.length; i++)
      result += i > 0 ? ', ' + this.values[i] : this.values[i];

    return '[' + result + ']';
  };

  // Vector.prototype.toArray
  // ?> converts a vector into a javascript array
  // => returns an array containing all elements of the vector
  Vector.prototype.toArray = function () {
    if (!this.values)
      return [];

    return Array.prototype.slice.call(this.values);
  };

  module.exports = Vector;
})();
