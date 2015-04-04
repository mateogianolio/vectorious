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
          self.rows.push(Vector.zeros(argument));
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
  
  Matrix.add = function(a, b) {
    return new Matrix(a).add(b);
  };

  Matrix.prototype.add = function(matrix) {
    var result = [],
        a = this.rows,
        b = matrix.rows,
        i, l;
    for(i = 0, l = a.length; i < l; i++)
      result.push(a[i].add(b[i]));
    
    return Matrix.construct(result);
  };
  
  Matrix.subtract = function(a, b) {
    return new Matrix(a).subtract(b);
  };
  
  Matrix.prototype.subtract = function(matrix) {
    var result = [],
        a = this.rows,
        b = matrix.rows,
        i, l;
    for(i = 0, l = a.length; i < l; i++)
      result.push(a[i].subtract(b[i]));
    
    return Matrix.construct(result);
  };
  
  Matrix.prototype.scale = function(scalar) {
    var result = [],
        rows = this.rows,
        i, l;
    for(i = 0, l = rows.length; i < l; i++)
      result.push(rows[i].scale(scalar));
    
    return Matrix.construct(result);
  };
  
  Matrix.zeros = function(i, j) {
    if(i <= 0 || j <= 0)
      throw new Error('invalid size');
    
    var result = [],
        row;
    for(row = 0; row < i; row++)
      result.push(Vector.zeros(j));
    
    return Matrix.construct(result);
  };
  
  Matrix.ones = function(i, j) {
    if(i <= 0 || j <= 0)
      throw new Error('invalid size');
    
    var result = [],
        row;
    for(row = 0; row < i; row++)
      result.push(Vector.ones(j));
    
    return Matrix.construct(result);
  };
  
  Matrix.multiply = function(a, b) {
    return new Matrix(a).multiply(b);
  };
  
  Matrix.prototype.multiply = function(matrix) {
    if(this.rows[0].length !== matrix.rows.length)
      throw new Error('sizes do not match');
    
    var l = this.rows.length,
        m = matrix.rows[0].length,
        n = this.rows[0].length;
    
    var result = Matrix.zeros(l, m),
        sum,
        i, j, k,
        l, m, n;
    for(i = 0; i < l; i++) {
      for(j = 0; j < m; j++) {
        sum = 0;
        for(k = 0; k < n; k++)
          sum += this.get(i, k) * matrix.get(k, j);
        
        result.set(i, j, sum);
      }
    }
    
    return result;
  };
  
  Matrix.prototype.transpose = function() {
    var l = this.rows.length,
        m = this.rows[0].length;
    
    var result = Matrix.zeros(m, l),
        i, j;
    for(i = 0; i < l; i++)
      for(j = 0; j < m; j++)
        result.set(j, i, this.get(i, j));
    
    return result;
  };
  
  Matrix.prototype.gauss = function() {
    var l = this.rows.length,
        m = this.rows[0].length;
    
    var copy = new Matrix(this),
        lead = 0,
        pivot,
        i, j;
    
    for(i = 0; i < l; i++) {
      if(m <= lead)
        return;
      
      j = i;
      while(copy.get(j, lead) === 0) {
        j++;
        if(l === j) {
          j = i;
          lead++;
          
          if(m === lead)
            return;
        }
      }
      
      copy.swap(i, j);
      
      pivot = copy.get(i, lead);
      if(pivot !== 0)
        copy.rows[i] = copy.rows[i].scale(1 / pivot);
      
      for(j = 0; j < l; j++) {
        if(j !== i)
          copy.rows[j] = copy.rows[j].subtract(copy.rows[i].scale(copy.get(j, lead)));
      }
      
      lead++;
    }
    
    for(i = 0; i < l; i++) {
      pivot = 0;
      for(j = 0; j < m; j++)
        if(!pivot)
          pivot = copy.get(i, j);
      
      if(pivot)
        copy.rows[i] = copy.rows[i].scale(1 / pivot);
    }
    
    return copy;
  };
  
  Matrix.augment = function(a, b) {
    return new Matrix(a).augment(b);
  };

  Matrix.prototype.augment = function(matrix) {
    var rows = this.rows,
        i, l;
    for(i = 0, l = matrix.rows.length; i < l; i++) {
      if(!(rows[i] instanceof Vector))
        rows[i] = new Vector();
      
      rows[i].combine(matrix.rows[i]);
    }
    
    return this;
  };
  
  Matrix.prototype.identity = function(size) {
    if(size < 0)
      throw new Error('invalid size');
    
    var matrix = Matrix.zeros(size, size),
        i, j;
    for(i = 0; i < size; i++)
      for(j = 0; j < size; j++)
        if(i === j)
          matrix.set(i, j, 1);
    
    return matrix;
  };

  Matrix.prototype.diag = function() {
    var result = [],
        i, j, l, m;
    
    for(i = 0, l = this.rows.length; i < l; i++)
      for(j = 0, m = this.rows[0].length; j < m; j++)
        if(i === j)
          result.push(this.get(i, j));
    
    return Vector.construct(result);
  };

  Matrix.prototype.trace = function() {
    var diagonal = this.diag(),
        result = 0,
        i, l;
    
    for(i = 0, l = diagonal.length; i < l; i++)
      result += diagonal.get(i);
    
    return result;
  };
  
  Matrix.equals = function(a, b) {
    return new Matrix(a).equals(b);
  };

  Matrix.prototype.equals = function(matrix) {
    if(this.rows.length !== matrix.rows.length)
      return false;
    
    var a = this.rows,
        b = matrix.rows,
        i, l;
    for(i = 0, l = a.length; i < l; i++)
      if(!a[i].equals(b[i]))
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
    var result = new Matrix(this),
        rows = result.rows,
        i, l;
    for(i = 0, l = this.rows.length; i < l; i++)
      rows[i] = callback(rows[i]);
    
    return result;
  };
  
  Matrix.prototype.each = function(callback) {
    var rows = this.rows,
        i, l;
    for(i = 0, l = rows.length; i < l; i++)
      callback(rows[i], i);
    
    return this;
  };
  
  Matrix.prototype.toString = function() {
    var result = [],
        rows = this.rows,
        i, l;
    for(i = 0, l = rows.length; i < l; i++)
      result.push(rows[i].toString());
    
    return '[' + result.join(', \n') + ']';
  };
  
  Matrix.prototype.toArray = function() {
    var result = [],
        rows = this.rows,
        i, l;
    for(i = 0, l = rows.length; i < l; i++)
      result.push(rows[i].toArray());
    
    return result;
  };
  
  module.exports = Matrix;
})();