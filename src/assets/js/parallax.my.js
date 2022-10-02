/**
 * @module       Parallax.js
 * @author       Matthew Wagerfield - @wagerfield
 * @see     	 https://github.com/wagerfield/parallax
 * @license      MIT
 */
!(function(a, b, c) {
  "use strict";
  function g(a, b) {
    (this.element = a), (this.layers = a.getElementsByClassName("layer"));
    var c = {
      calibrateX: this.data(this.element, "calibrate-x"),
      calibrateY: this.data(this.element, "calibrate-y"),
      invertX: this.data(this.element, "invert-x"),
      invertY: this.data(this.element, "invert-y"),
      limitX: this.data(this.element, "limit-x"),
      limitY: this.data(this.element, "limit-y"),
      scalarX: this.data(this.element, "scalar-x"),
      scalarY: this.data(this.element, "scalar-y"),
      frictionX: this.data(this.element, "friction-x"),
      frictionY: this.data(this.element, "friction-y"),
      originX: this.data(this.element, "origin-x"),
      originY: this.data(this.element, "origin-y"),
    };
    for (var d in c) null === c[d] && delete c[d];
    this.extend(this, f, b, c),
      (this.calibrationTimer = null),
      (this.calibrationFlag = !0),
      (this.enabled = !1),
      (this.depths = []),
      (this.raf = null),
      (this.bounds = null),
      (this.ex = 0),
      (this.ey = 0),
      (this.ew = 0),
      (this.eh = 0),
      (this.ecx = 0),
      (this.ecy = 0),
      (this.erx = 0),
      (this.ery = 0),
      (this.cx = 0),
      (this.cy = 0),
      (this.ix = 0),
      (this.iy = 0),
      (this.mx = 0),
      (this.my = 0),
      (this.vx = 0),
      (this.vy = 0),
      (this.onMouseMove = this.onMouseMove.bind(this)),
      (this.onDeviceOrientation = this.onDeviceOrientation.bind(this)),
      (this.onOrientationTimer = this.onOrientationTimer.bind(this)),
      (this.onCalibrationTimer = this.onCalibrationTimer.bind(this)),
      (this.onAnimationFrame = this.onAnimationFrame.bind(this)),
      (this.onWindowResize = this.onWindowResize.bind(this)),
      this.initialise();
  }
  var d = "Parallax",
    e = 30,
    f = {
      relativeInput: !1,
      clipRelativeInput: !1,
      calibrationThreshold: 100,
      calibrationDelay: 500,
      supportDelay: 500,
      calibrateX: !1,
      calibrateY: !0,
      invertX: !0,
      invertY: !0,
      limitX: !1,
      limitY: !1,
      scalarX: 10,
      scalarY: 10,
      frictionX: 0.1,
      frictionY: 0.1,
      originX: 0.5,
      originY: 0.5,
    };
  (g.prototype.extend = function() {
    if (arguments.length > 1)
      for (var a = arguments[0], b = 1, c = arguments.length; b < c; b++) {
        var d = arguments[b];
        for (var e in d) a[e] = d[e];
      }
  }),
    (g.prototype.data = function(a, b) {
      return this.deserialize(a.getAttribute("data-" + b));
    }),
    (g.prototype.deserialize = function(a) {
      return (
        "true" === a ||
        ("false" !== a &&
          ("null" === a
            ? null
            : !isNaN(parseFloat(a)) && isFinite(a)
            ? parseFloat(a)
            : a))
      );
    }),
    (g.prototype.camelCase = function(a) {
      return a.replace(/-+(.)?/g, function(a, b) {
        return b ? b.toUpperCase() : "";
      });
    }),
    (g.prototype.transformSupport = function(d) {
      for (
        var e = b.createElement("div"),
          f = !1,
          g = null,
          h = !1,
          i = null,
          j = null,
          k = 0,
          l = this.vendors.length;
        k < l;
        k++
      )
        if (
          (null !== this.vendors[k]
            ? ((i = this.vendors[k][0] + "transform"),
              (j = this.vendors[k][1] + "Transform"))
            : ((i = "transform"), (j = "transform")),
          e.style[j] !== c)
        ) {
          f = !0;
          break;
        }
      switch (d) {
        case "2D":
          h = f;
          break;
        case "3D":
          if (f) {
            var m = b.body || b.createElement("body"),
              n = b.documentElement,
              o = n.style.overflow;
            b.body ||
              ((n.style.overflow = "hidden"),
              n.appendChild(m),
              (m.style.overflow = "hidden"),
              (m.style.background = "")),
              m.appendChild(e),
              (e.style[j] = "translate3d(1px,1px,1px)"),
              (g = a.getComputedStyle(e).getPropertyValue(i)),
              (h = g !== c && g.length > 0 && "none" !== g),
              (n.style.overflow = o),
              m.removeChild(e);
          }
      }
      return h;
    }),
    (g.prototype.ww = null),
    (g.prototype.wh = null),
    (g.prototype.wcx = null),
    (g.prototype.wcy = null),
    (g.prototype.wrx = null),
    (g.prototype.wry = null),
    (g.prototype.portrait = null),
    (g.prototype.desktop = !navigator.userAgent.match(
      /(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i
    )),
    (g.prototype.vendors = [
      null,
      ["-webkit-", "webkit"],
      ["-moz-", "Moz"],
      ["-o-", "O"],
      ["-ms-", "ms"],
    ]),
    (g.prototype.motionSupport = !!a.DeviceMotionEvent),
    (g.prototype.orientationSupport = !!a.DeviceOrientationEvent),
    (g.prototype.orientationStatus = 0),
    (g.prototype.propertyCache = {}),
    (g.prototype.initialise = function() {
      g.prototype.transform2DSupport === c &&
        ((g.prototype.transform2DSupport = g.prototype.transformSupport("2D")),
        (g.prototype.transform3DSupport = g.prototype.transformSupport("3D"))),
        this.transform3DSupport && this.accelerate(this.element);
      var b = a.getComputedStyle(this.element);
      "static" === b.getPropertyValue("position") &&
        (this.element.style.position = "relative"),
        this.updateLayers(),
        this.updateDimensions(),
        this.enable(),
        this.queueCalibration(this.calibrationDelay);
    }),
    (g.prototype.updateLayers = function() {
      (this.layers = this.element.getElementsByClassName("layer")),
        (this.depths = []);
      for (var a = 0, b = this.layers.length; a < b; a++) {
        var c = this.layers[a];
        this.transform3DSupport && this.accelerate(c),
          (c.style.position = a ? "absolute" : "relative"),
          (c.style.display = "block"),
          (c.style.left = 0),
          (c.style.top = 0),
          this.depths.push(this.data(c, "depth") || 0);
      }
    }),
    (g.prototype.updateDimensions = function() {
      (this.ww = a.innerWidth),
        (this.wh = a.innerHeight),
        (this.wcx = this.ww * this.originX),
        (this.wcy = this.wh * this.originY),
        (this.wrx = Math.max(this.wcx, this.ww - this.wcx)),
        (this.wry = Math.max(this.wcy, this.wh - this.wcy));
    }),
    (g.prototype.updateBounds = function() {
      (this.bounds = this.element.getBoundingClientRect()),
        (this.ex = this.bounds.left),
        (this.ey = this.bounds.top),
        (this.ew = this.bounds.width),
        (this.eh = this.bounds.height),
        (this.ecx = this.ew * this.originX),
        (this.ecy = this.eh * this.originY),
        (this.erx = Math.max(this.ecx, this.ew - this.ecx)),
        (this.ery = Math.max(this.ecy, this.eh - this.ecy));
    }),
    (g.prototype.queueCalibration = function(a) {
      clearTimeout(this.calibrationTimer),
        (this.calibrationTimer = setTimeout(this.onCalibrationTimer, a));
    }),
    (g.prototype.enable = function() {
      this.enabled ||
        ((this.enabled = !0),
        this.orientationSupport
          ? ((this.portrait = null),
            a.addEventListener("deviceorientation", this.onDeviceOrientation),
            setTimeout(this.onOrientationTimer, this.supportDelay))
          : ((this.cx = 0),
            (this.cy = 0),
            (this.portrait = !1),
            a.addEventListener("mousemove", this.onMouseMove)),
        a.addEventListener("resize", this.onWindowResize),
        (this.raf = requestAnimationFrame(this.onAnimationFrame)));
    }),
    (g.prototype.disable = function() {
      this.enabled &&
        ((this.enabled = !1),
        this.orientationSupport
          ? a.removeEventListener("deviceorientation", this.onDeviceOrientation)
          : a.removeEventListener("mousemove", this.onMouseMove),
        a.removeEventListener("resize", this.onWindowResize),
        cancelAnimationFrame(this.raf));
    }),
    (g.prototype.calibrate = function(a, b) {
      (this.calibrateX = a === c ? this.calibrateX : a),
        (this.calibrateY = b === c ? this.calibrateY : b);
    }),
    (g.prototype.invert = function(a, b) {
      (this.invertX = a === c ? this.invertX : a),
        (this.invertY = b === c ? this.invertY : b);
    }),
    (g.prototype.friction = function(a, b) {
      (this.frictionX = a === c ? this.frictionX : a),
        (this.frictionY = b === c ? this.frictionY : b);
    }),
    (g.prototype.scalar = function(a, b) {
      (this.scalarX = a === c ? this.scalarX : a),
        (this.scalarY = b === c ? this.scalarY : b);
    }),
    (g.prototype.limit = function(a, b) {
      (this.limitX = a === c ? this.limitX : a),
        (this.limitY = b === c ? this.limitY : b);
    }),
    (g.prototype.origin = function(a, b) {
      (this.originX = a === c ? this.originX : a),
        (this.originY = b === c ? this.originY : b);
    }),
    (g.prototype.clamp = function(a, b, c) {
      return (a = Math.max(a, b)), (a = Math.min(a, c));
    }),
    (g.prototype.css = function(a, b, d) {
      var e = this.propertyCache[b];
      if (!e)
        for (var f = 0, g = this.vendors.length; f < g; f++)
          if (
            ((e =
              null !== this.vendors[f]
                ? this.camelCase(this.vendors[f][1] + "-" + b)
                : b),
            a.style[e] !== c)
          ) {
            this.propertyCache[b] = e;
            break;
          }
      a.style[e] = d;
    }),
    (g.prototype.accelerate = function(a) {
      this.css(a, "transform", "translate3d(0,0,0)"),
        this.css(a, "transform-style", "preserve-3d"),
        this.css(a, "backface-visibility", "hidden");
    }),
    (g.prototype.setPosition = function(a, b, c) {
      (b += "px"),
        (c += "px"),
        this.transform3DSupport
          ? this.css(a, "transform", "translate3d(" + b + "," + c + ",0)")
          : this.transform2DSupport
          ? this.css(a, "transform", "translate(" + b + "," + c + ")")
          : ((a.style.left = b), (a.style.top = c));
    }),
    (g.prototype.onOrientationTimer = function() {
      this.orientationSupport &&
        0 === this.orientationStatus &&
        (this.disable(), (this.orientationSupport = !1), this.enable());
    }),
    (g.prototype.onCalibrationTimer = function() {
      this.calibrationFlag = !0;
    }),
    (g.prototype.onWindowResize = function() {
      this.updateDimensions();
    }),
    (g.prototype.onAnimationFrame = function() {
      this.updateBounds();
      var a = this.ix - this.cx,
        b = this.iy - this.cy;
      (Math.abs(a) > this.calibrationThreshold ||
        Math.abs(b) > this.calibrationThreshold) &&
        this.queueCalibration(0),
        this.portrait
          ? ((this.mx = this.calibrateX ? b : this.iy),
            (this.my = this.calibrateY ? a : this.ix))
          : ((this.mx = this.calibrateX ? a : this.ix),
            (this.my = this.calibrateY ? b : this.iy)),
        (this.mx *= this.ew * (this.scalarX / 100)),
        (this.my *= this.eh * (this.scalarY / 100)),
        isNaN(parseFloat(this.limitX)) ||
          (this.mx = this.clamp(this.mx, -this.limitX, this.limitX)),
        isNaN(parseFloat(this.limitY)) ||
          (this.my = this.clamp(this.my, -this.limitY, this.limitY)),
        (this.vx += (this.mx - this.vx) * this.frictionX),
        (this.vy += (this.my - this.vy) * this.frictionY);
      for (var c = 0, d = this.layers.length; c < d; c++) {
        var e = this.layers[c],
          f = this.depths[c],
          g = this.vx * f * (this.invertX ? -1 : 1),
          h = this.vy * f * (this.invertY ? -1 : 1);
        this.setPosition(e, g, h);
      }
      this.raf = requestAnimationFrame(this.onAnimationFrame);
    }),
    (g.prototype.onDeviceOrientation = function(a) {
      if (!this.desktop && null !== a.beta && null !== a.gamma) {
        this.orientationStatus = 1;
        var b = (a.beta || 0) / e,
          c = (a.gamma || 0) / e,
          d = this.wh > this.ww;
        this.portrait !== d &&
          ((this.portrait = d), (this.calibrationFlag = !0)),
          this.calibrationFlag &&
            ((this.calibrationFlag = !1), (this.cx = b), (this.cy = c)),
          (this.ix = b),
          (this.iy = c);
      }
    }),
    (g.prototype.onMouseMove = function(a) {
      var b = a.clientX,
        c = a.clientY;
      !this.orientationSupport && this.relativeInput
        ? (this.clipRelativeInput &&
            ((b = Math.max(b, this.ex)),
            (b = Math.min(b, this.ex + this.ew)),
            (c = Math.max(c, this.ey)),
            (c = Math.min(c, this.ey + this.eh))),
          (this.ix = (b - this.ex - this.ecx) / this.erx),
          (this.iy = (c - this.ey - this.ecy) / this.ery))
        : ((this.ix = (b - this.wcx) / this.wrx),
          (this.iy = (c - this.wcy) / this.wry));
    }),
    (a[d] = g);
})(window, document);
