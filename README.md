# Vectorious

Vectorious is a generalized n-dimensional matrix and vector library written in JavaScript and can be used both in node.js and the browser.

## Vector

The following vector operations and methods are implemented in ```vector.js```.

### Addition

```javascript
// (Vector, Vector) => (Vector)
Vector.prototype.add = function(vector)
```

### Subtraction

```javascript
// (Vector, Vector) => (Vector)
Vector.prototype.subtract = function(vector)
```

### Multiplication by scalar

```javascript
// (Vector, Number) => (Vector)
Vector.prototype.scale = function(scalar)
```

### Normalization

```javascript
// (Vector) => (Vector)
Vector.prototype.normalize = function()
```

### Dot product

```javascript
// (Vector, Vector) => (Number)
Vector.prototype.dot = function(vector)
```

### Magnitude

```javascript
// (Vector) => (Number)
Vector.prototype.magnitude = function()
```

### Angle

```javascript
// (Vector, Vector) => (Angle)
Vector.prototype.angle = function(vector)
```

### Equality

```javascript
// (Vector, Vector) => (Boolean)
Vector.prototype.equals = function(vector)
```

### Get and set

```javascript
// (Vector, Number) => (Number)
Vector.prototype.get = function(index)
```

```javascript
// (Vector, Number) => (Vector)
Vector.prototype.set = function(index)
```

## Display

```javascript
// (Vector) => (String)
Vector.prototype.toString = function()
```