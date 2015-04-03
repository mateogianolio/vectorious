(function() {
  'use strict';
  
  var Vector = require('./vector.js');
  
  function Matrix() {
    var self = this;
    self.rows = [];
    
    var argument,
        i;
    for(i = 0; i < arguments.length; i++) {
      argument = arguments[i];
      var j;
      if(argument instanceof Matrix) {
        self.augment(argument);
      } else if(argument instanceof Vector) {
        self.rows.push(argument);
      } else if(typeof argument === 'number') {
        for(j = 0; j < argument; j++)
          self.rows.push(new Vector().zeros(argument));
      } else if(typeof argument === 'object') {
        for(j = 0; j < argument.length; j++) {
          if(argument[j] instanceof Vector)
            self.rows.push(argument[j]);
          else
            self.rows.push(Vector.construct(argument[j]));
        }
      }
    }
    
    return self;
  }

  Matrix.prototype.add = function(matrix) {
    var copy = new Matrix(this),
        i;
    for(i = 0; i < copy.rows.length; i++)
      copy.rows[i] = copy.rows[i].add(matrix.rows[i]);
    
    return copy;
  };
  
  Matrix.prototype.subtract = function(matrix) {
    var copy = new Matrix(this),
        i;
    for(i = 0; i < this.rows.length; i++)
      copy.rows[i] = copy.rows[i].subtract(matrix.rows[i]);
    
    return copy;
  };
  
  Matrix.prototype.scale = function(scalar) {
    var copy = new Matrix(this),
        i;
    for(i = 0; i < this.rows.length; i++)
      copy.rows[i] = copy.rows[i].scale(scalar);
    
    return copy;
  };
  
  Matrix.prototype.zeros = function(i, j) {
    if(i <= 0 || j <= 0)
      throw new Error('invalid size');
    
    var rows = [],
        row;
    for(var row = 0; row < i; row++)
      rows.push(new Vector().zeros(j));
    
    return Matrix.construct(rows);
  };
  
  Matrix.prototype.ones = function(i, j) {
    if(i <= 0 || j <= 0)
      throw new Error('invalid size');
    
    var rows = [],
        row;
    for(row = 0; row < i; row++)
      rows.push(new Vector().ones(j));
    
    return Matrix.construct(rows);
  };
  
  Matrix.prototype.multiply = function(matrix) {
    if(this.rows[0].length !== matrix.rows.length)
      throw new Error('sizes do not match');
    
    var copy = new Matrix().zeros(this.rows.length, matrix.rows[0].length);
    
    var sum = 0;
    for(var i = 0; i < this.rows.length; i++) {
      for(var j = 0; j < matrix.rows[0].length; j++) {
        sum = 0;
        for(var k = 0; k < this.rows[0].length; k++)
          sum += this.get(i, k) * matrix.get(k, j);
        
        copy.set(i, j, sum);
      }
    }
    
    return copy;
  };
  
  Matrix.prototype.transpose = function() {
    var matrix = new Matrix().zeros(this.rows[0].length, this.rows.length);
    var i, j;
    for(i = 0; i < this.rows.length; i++)
      for(j = 0; j < this.rows[0].length; j++)
        matrix.set(j, i, this.get(i, j));
    
    return matrix;
  };
  
  Matrix.prototype.gauss = function() {
    var copy = new Matrix(this),
        lead = 0,
        rows = this.rows.length,
        cols = this.rows[0].length,
        pivot,
        i, j;
    
    for(i = 0; i < rows; i++) {
      if(cols <= lead)
        return;
      
      j = i;
      while(copy.get(j, lead) === 0) {
        j++;
        if(rows === j) {
          j = i;
          lead++;
          
          if(cols === lead)
            return;
        }
      }
      
      this.swap(i, j);
      
      pivot = copy.get(i, lead);
      if(pivot !== 0)
        copy.rows[i].scale(1 / pivot);
      
      for(j = 0; j < rows; j++) {
        if(j !== i)
          copy.rows[j].subtract(copy.rows[i].scale(copy.get(j, lead)));
      }
      
      lead++;
    }
    
    for(i = 0; i < rows; i++) {
      pivot = 0;
      for(j = 0; j < cols; j++)
        if(!pivot)
          pivot = copy.get(i, j);
      
      if(pivot)
        copy.rows[i].scale(1 / pivot);
    }
    
    return copy;
  };

  Matrix.prototype.augment = function(matrix) {
    var i;
    for(i = 0; i < matrix.rows.length; i++) {
      if(!(this.rows[i] instanceof Vector))
        this.rows[i] = new Vector();
      
      this.rows[i].combine(matrix.rows[i]);
    }
    
    return this;
  };
  
  Matrix.prototype.identity = function(size) {
    if(size < 0)
      throw new Error('invalid size');
    
    var matrix = new Matrix().zeros(size, size),
        i, j;
    for(i = 0; i < size; i++)
      for(j = 0; j < size; j++)
        if(i === j)
          matrix.set(i, j, 1);
    
    return matrix;
  };

  Matrix.prototype.diag = function() {
    var elements = [],
        i, j;
    
    for(i = 0; i < this.rows.length; i++)
      for(j = 0; j < this.rows[0].length; j++)
        if(i === j)
          elements.push(this.get(i, j));
    
    return Vector.construct(elements);
  };

  Matrix.prototype.trace = function() {
    var diagonal = this.diag(),
        result = 0,
        i;
    
    for(i = 0; i < diagonal.length; i++)
      result += diagonal.get(i);
    
    return result;
  };

  Matrix.prototype.equals = function(matrix) {
    if(this.rows.length !== matrix.rows.length)
      return false;
    
    var i;
    for(i = 0; i < this.rows.length; i++)
      if(!this.rows[i].equals(matrix.rows[i]))
        return false;
    
    return true;
  };

  Matrix.prototype.get = function(i, j) {
    return this.rows[i].get(j);
  };
      
  Matrix.prototype.set = function(i, j, value) {
    this.rows[i].set(j, value);
    return this;
  };
  
  Matrix.prototype.swap = function(i, j) {
    if(i < 0 || j < 0 || i > this.rows.length - 1 || j > this.rows.length - 1)
      throw new Error('index out of bounds');
    
    var copy = this.rows[i];
    this.rows[i] = this.rows[j];
    this.rows[j] = copy;
    
    return this;
  };
  
  Matrix.prototype.map = function(callback) {
    var matrix = new Matrix(this),
        i;
    for(i = 0; i < this.rows.length; i++)
      matrix.rows[i] = callback(matrix.rows[i]);
    
    return matrix;
  };
  
  Matrix.prototype.each = function(callback) {
    var i;
    for(i = 0; i < this.rows.length; i++)
      callback(this.rows[i], i);
    
    return this;
  };
  
  Matrix.prototype.toString = function() {
    var result = [],
        i;
    for(i = 0; i < this.rows.length; i++)
      result.push(this.rows[i].toString());
    
    return '[' + result.join(', \n') + ']';
  };
  
  Matrix.prototype.toArray = function() {
    var result = [],
        i;
    for(i = 0; i < this.rows.length; i++)
      result.push(this.rows[i].toArray());
    
    return result;
  };
  
  module.exports = Matrix;
})();