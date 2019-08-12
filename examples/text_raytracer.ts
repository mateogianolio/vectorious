// Ported from Rust from
// URL: https://gist.github.com/joshmarinacci/c84d0979e100d107f685
// URL: http://joshondesign.com/2014/09/17/rustlang
// tslint:disable: max-classes-per-file
import v = require('../src');

const render: (pixel: string) => void = process.stdout.write.bind(process.stdout);

class Ray {
  public dir: v;
  public orig: v;

  public constructor(orig: v, dir: v) {
    this.orig = orig;
    this.dir = dir;
  }
}

class Sphere {
  public center: v;
  public color: v;
  public radius: number;

  public constructor(center: v, radius: number, color: v) {
    this.center = center;
    this.radius = radius;
    this.color = color;
  }

  public normal(pt: v): v {
    return v.subtract(pt, this.center).normalize();
  }
}

class Light {
  public color: v;
  public position: v;

  public constructor(position: v, color: v) {
    this.position = position;
    this.color = color;
  }
}

class Hit {
  public obj: Sphere;
  public value: number;

  public constructor(obj: Sphere, value: number) {
    this.obj = obj;
    this.value = value;
  }
}

const clamp:
(x: number, a: number, b: number) => number =
(x: number, a: number, b: number): number => {
  if (x < a) {
    return a;
  }

  if (x > b) {
    return b;
  }

  return x;
};

const diffuseShading:
(pi: v, obj: Sphere, light: Light) => v =
(pi: v, obj: Sphere, light: Light): v => {
  const n: v = obj.normal(pi);
  const lam1: number = v.subtract(light.position, pi).normalize().dot(n);
  const lam2: number = clamp(lam1, 0, 1);

  return v.scale(light.color, lam2 * 0.5).add(v.scale(obj.color, 0.3));
};

const intersectSphere:
(ray: Ray, center: v, radius: number) => number | undefined =
(ray: Ray, center: v, radius: number): number | undefined => {
  const l: v = v.subtract(center, ray.orig);
  const tca: number = l.dot(ray.dir);
  if (tca < 0) {
    return undefined;
  }

  const d2: number = v.dot(l, l) - tca * tca;
  const r2: number = radius * radius;
  if (d2 > r2) {
    return undefined;
  }

  const thc: number = Math.sqrt(r2 - d2);
  const t0: number = tca - thc;
  if (t0 > 1e4) {
    return undefined;
  }

  return t0;
};

const range:
(lo: number, hi: number, cb: (value: number) => void) => void =
(lo: number, hi: number, cb: (value: number) => void): void => {
  let i: number;
  for (i = lo; i < hi; i += 1) {
    cb(i);
  }
};

// Declare colors
const WHITE: v = new v([1, 1, 1]);
const RED: v = new v([1, 0, 0]);
const GREEN: v = new v([0, 1, 0]);
const BLUE: v  = new v([0, 0, 1]);

// Declare lighting
const LIGHT1: Light = new Light(new v([0.7, -1, 1.7]), WHITE);

const shadePixel:
(ray: Ray, obj: Sphere, tval: number) => number =
(ray: Ray, obj: Sphere, tval: number): number => {
  const pi: v = v.add(ray.orig, v.scale(ray.dir, tval));
  const color: v = diffuseShading(pi, obj, LIGHT1);
  const col: number = (color.data[0] + color.data[1] + color.data[2]) / 3;

  return Math.floor(col * 6);
};

// Declare pixel intensities & screen size
const lut: string[] = ['.', '-', '+', '*', 'X', 'M'];
const w: number = 20 * 4;
const h: number = 10 * 4;

// Declare scene
const scene: Sphere[] = [
  new Sphere(new v([-1, 0, 3]), 0.3, RED),
  new Sphere(new v([0, 0, 3]), 0.8, GREEN),
  new Sphere(new v([1, 0, 3]), 0.4, BLUE),
];

// Render scene
range(0, h, (j: number): void => {
  range(0, w, (i: number): void => {
    const ray: Ray = new Ray(
      new v([0, 0, 0]),
      new v([(i - w / 2) / w, (j - h / 2) / h, 1]).normalize()
    );

    let hit: Hit | undefined;
    let minRet: number | undefined;
    let pixel: string;
    let k: number;

    for (k = 0; k < scene.length; k += 1) {
      const obj: Sphere = scene[k];
      const ret: number | undefined = intersectSphere(ray, obj.center, obj.radius);

      if (typeof ret === 'undefined') {
        continue;
      }

      // Draw the closest intersecting point
      if (typeof minRet === 'undefined' || ret < minRet) {
        minRet = ret;
        hit = new Hit(obj, ret);
      }
    }

    pixel = typeof hit !== 'undefined'
      ? lut[shadePixel(ray, hit.obj, hit.value)]
      : ' ';

    render(pixel);
  });

  render('\n');
});
