(function() {
  'use strict';
  
  function Vector() {
    var self = this;
    self.values = [];
    self.length = 0;
    
    var argument,
        i;
    for(i = 0; i < arguments.length; i++) {
      argument = arguments[i];
    
      if(argument instanceof Vector)
        self.combine(argument);
      else if(typeof argument === 'object')
        self.combine(Vector.construct(argument));
      else
        self.push(argument);
    }
    
    return self;
  }
  
  // array of arguments to function arguments (e.g. f.construct([a, b, c]) => f(a, b, c))
  Function.prototype.construct = function(args) {
    var object = Object.create(this.prototype);
    this.apply(object, args);
    return object;
  };
  
  Vector.prototype.add = function(vector) {
    if(this.length !== vector.length)
      throw new Error('sizes do not match!');
    
    var copy = new Vector(),
        a = this.values,
        b = vector.values,
        i, l;
    for(i = 0, l = this.length; i < l; i++)
      copy.push(a[i] + b[i]);
    
    return copy;
  };
  
  Vector.prototype.subtract = function(vector) {
    if(this.length !== vector.length)
      throw new Error('sizes do not match');
    
    var copy = new Vector(),
        a = this.values,
        b = vector.values,
        i, l;
    for(i = 0, l = this.length; i < l; i++)
      copy.push(a[i] - b[i]);
    
    return copy;
  };
  
  Vector.prototype.scale = function(scalar) {
    var copy = new Vector(),
        values = this.values,
        i, l;
    for(i = 0, l = this.length; i < l; i++)
      copy.push(values[i] * scalar);
    
    return copy;
  };
  
  Vector.prototype.normalize = function() {
    var copy = new Vector(this);
    return copy.scale(1 / copy.magnitude());
  };
  
  Vector.prototype.project = function(vector) {
    return vector.scale(this.dot(vector) / vector.dot(vector));
  };
  
  Vector.prototype.zeros = function(count) {
    if(count < 0)
      throw new Error('invalid size');
    
    var zeros = [],
        i;
    for(i = 0; i < count; i++)
      zeros.push(0);

    return Vector.construct(zeros);
  };
  
  Vector.prototype.ones = function(count) {
    if(count < 0)
      throw new Error('invalid size');
    
    var ones = [],
        i;
    for(i = 0; i < count; i++)
      ones.push(1);
    
    return Vector.construct(ones);
  };
  
  Vector.range = function() {
    var args = [].slice.call(arguments, 0),
        backwards = false,
        start, step, end;
    
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
    
    if(end - start < 0) {
      var copy = end;
      end = start;
      start = copy;
      backwards = true;
    }
    
    if(step > end - start)
      throw new Error('invalid range');
    
    var vector = new Vector(),
        i;
    for(i = start; i < end; i += step)
      vector.push(backwards ? end - i + start : i);
    
    return vector;
  };

  Vector.prototype.dot = function(vector) {
    if(this.length !== vector.length)
      throw new Error('sizes do not match');
    
    var result = 0,
        a = this.values,
        b = vector.values,
        i, l;
    
    for(i = 0, l = this.length; i < l; i++)
      result += a[i] * b[i];
    
    return result;
  };
  
  Vector.prototype.magnitude = function() {
    var result = 0,
        values = this.values,
        i, l;
    for(i = 0, l = this.length; i < l; i++)
      result += values[i] * values[i];
    
    return Math.sqrt(result);
  };
  
  Vector.prototype.angle = function(vector) {
    return Math.acos(this.dot(vector) / this.magnitude() * vector.magnitude());
  };

  Vector.prototype.equals = function(vector) {
    if(this.length !== vector.length)
      return false;
    
    var a = this.values,
        b = vector.values,
        i = 0, l = this.length;
    
    while(i < l && a[i] === b[i++]) {};
    
    return i === l;
  };

  Vector.prototype.get = function(index) {
    if(index < 0 || index > this.length - 1)
      throw new Error('index out of bounds');
    
    return this.values[index];
  };
  
  Vector.prototype.min = function() {
    var min = Number.POSITIVE_INFINITY,
        values = this.values,
        value,
        i, l;
    
    for(i = 0, l = values.length; i < l; i++) {
      value = values[i];
      if(value < min)
        min = value;
    }
    
    return min;
  };
  
  Vector.prototype.max = function() {
    var max = Number.NEGATIVE_INFINITY,
        values = this.values,
        value,
        i, l;
    
    for(i = 0, l = this.length; i < l; i++) {
      value = values[i];
      if(value > max)
        max = value;
    }
    
    return max;
  };
  
  Vector.prototype.set = function(index, value) {
    if(index < 0 || index > this.length - 1)
      throw new Error('index out of bounds');
    
    this.values[index] = value;
    return this;
  };
  
  Vector.prototype.combine = function(vector) {
    var values = vector.values,
        i, l;
    for(i = 0, l = vector.length; i < l; i++)
      this.push(values[i]);
    
    return this;
  };
  
  Vector.prototype.push = function(value) {
    this.values.push(value);
    this.length++;
    
    return this;
  };
  
  Vector.prototype.map = function(callback) {
    var vector = new Vector(this),
        i;
    for(i = 0; i < this.length; i++)
      vector.values[i] = callback(vector.values[i]);
    
    return vector;
  };
  
  Vector.prototype.each = function(callback) {
    var i;
    for(i = 0; i < this.length; i++)
      callback(this.values[i], i);
    
    return this;
  };

  Vector.prototype.toString = function() {
    return '[' + this.values.join(', ') + ']';
  };
  
  Vector.prototype.toArray = function() {
    return this.values;
  };
  
  module.exports = Vector;
})();