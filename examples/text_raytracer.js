(function (){
  // Ported from Rust from https://gist.github.com/joshmarinacci/c84d0979e100d107f685 http://joshondesign.com/2014/09/17/rustlang
  'use strict';
  var Vector = require('../vectorious').Vector,
      add = Vector.add,
      subtract = Vector.subtract,
      scale = Vector.scale,
      dot = Vector.dot,
      render = process.stdout.write.bind(process.stdout);

  function Ray(orig, dir) {
    this.orig = orig;
    this.dir = dir;
  }

  function Sphere(center, radius, color) {
    this.center = center;
    this.radius = radius;
    this.color = color;
  }

  Sphere.prototype.normal = function normal(pt) {
    return subtract(pt, this.center).normalize();
  }

  function Light(position, color) {
    this.position = position;
    this.color = color;
  }

  function Hit(obj, value) {
    this.obj = obj;
    this.value = value;
  }

  function shadePixel(ray, obj, tval) {
    var pi = add(ray.orig, scale(ray.dir, tval));
    var color = diffuseShading(pi, obj, LIGHT1);
    var col = (color.data[0] + color.data[1] + color.data[2]) / 3.0;
    return Math.floor(col * 6.0);
  }
  
  function intersectSphere(ray, center, radius) {
    var l = subtract(center, ray.orig);
    var tca = l.dot(ray.dir);
    if (tca < 0) {
      return null;
    }

    var d2 = dot(l, l) - tca * tca;
    var r2 = radius * radius;
    if (d2 > r2) {
      return null;
    }

    var thc = Math.sqrt(r2 - d2);
    var t0 = tca - thc;
    if (t0 > 1e4) {
      return null;
    }

    return t0;
  }

  function clamp(x, a, b) {
    if (x < a) return a;
    if (x > b) return b;
    return x;
  }

  function diffuseShading(pi, obj, light) {
    var n = obj.normal(pi);
    var lam1 = subtract(light.position, pi).normalize().dot(n);
    var lam2 = clamp(lam1, 0.0, 1.0);
    return scale(light.color, lam2 * 0.5).add(scale(obj.color, 0.3));
  }

  function range(lo, hi, cb) {
    for (var i = lo; i < hi; i++) {
      cb(i);
    }
  }

  // declare colors
  var WHITE = new Vector([1.0, 1.0, 1.0]),
      RED   = new Vector([1.0, 0.0, 0.0]),
      GREEN = new Vector([0.0, 1.0, 0.0]),
      BLUE  = new Vector([0.0, 0.0, 1.0]);

  // declare lighting
  var LIGHT1 = new Light(new Vector([0.7, -1.0, 1.7]), WHITE)

  // declare pixel intensities & screen size
  var lut = ['.', '-', '+', '*', 'X', 'M'],
      w = 20 * 4,
      h = 10 * 4;

  // declare scene
  var scene = [
    new Sphere(new Vector([-1.0, 0.0, 3.0]), 0.3, RED),
    new Sphere(new Vector([0.0, 0.0, 3.0]), 0.8, GREEN),
    new Sphere(new Vector([1.0, 0.0, 3.0]), 0.4, BLUE)
  ];

  // render scene
  range(0, h, function row(j) {
    range(0, w, function col(i) {
      var fw = parseFloat(w),
          fi = parseFloat(i),
          fj = parseFloat(j),
          fh = parseFloat(h);

      var ray = new Ray(
        new Vector([0.0, 0.0, 0.0]),
        new Vector([(fi - fw/2.0)/fw, (fj - fh/2.0)/fh, 1.0]).normalize()
      )

      var hit, minRet, pixel;

      for (var k = 0; k < scene.length; k++) {
        var obj = scene[k];
        var ret = intersectSphere(ray, obj.center, obj.radius);
        if (!ret) continue;

        // draw the closest intersecting point
        if (!minRet || ret < minRet) {
          minRet = ret;
          hit = new Hit(obj, ret);
        }
      }

      if (hit) {
        pixel = lut[shadePixel(ray, hit.obj, hit.value)];
      } else {
        pixel = ' ';
      }
      render(pixel);
    });
    render('\n');
  });
}());
