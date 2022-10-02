import $ from "jquery";

const document = $(document);
const window = $(window);

/**
 * @module       RD Navbar
 * @author       Evgeniy Gusarov
 * @see          https://ua.linkedin.com/pub/evgeniy-gusarov/8a/a40/54a
 * @version      2.2.5
 */
(function() {
  var t;
  (t = "ontouchstart" in window),
    (function(n, o, e) {
      var a;
      (a = (function() {
        function a(t, a) {
          (this.options = n.extend(!0, {}, this.Defaults, a)),
            (this.$element = n(t)),
            (this.$clone = null),
            (this.$win = n(e)),
            (this.$doc = n(o)),
            (this.currentLayout = this.options.layout),
            (this.loaded = !1),
            (this.focusOnHover = this.options.focusOnHover),
            (this.focusTimer = !1),
            (this.cloneTimer = !1),
            (this.isStuck = !1),
            this.initialize();
        }
        return (
          (a.prototype.Defaults = {
            layout: "rd-navbar-static",
            deviceLayout: "rd-navbar-fixed",
            focusOnHover: !0,
            focusOnHoverTimeout: 800,
            linkedElements: ["html"],
            domAppend: !0,
            stickUp: !0,
            stickUpClone: !0,
            stickUpOffset: "100%",
            anchorNav: !0,
            anchorNavSpeed: 400,
            anchorNavOffset: 0,
            anchorNavEasing: "swing",
            autoHeight: !0,
            responsive: {
              0: {
                layout: "rd-navbar-fixed",
                deviceLayout: "rd-navbar-fixed",
                focusOnHover: !1,
                stickUp: !1,
              },
              992: {
                layout: "rd-navbar-static",
                deviceLayout: "rd-navbar-static",
                focusOnHover: !0,
                stickUp: !0,
              },
            },
            callbacks: {
              onToggleSwitch: !1,
              onToggleClose: !1,
              onDomAppend: !1,
              onDropdownOver: !1,
              onDropdownOut: !1,
              onDropdownToggle: !1,
              onDropdownClose: !1,
              onStuck: !1,
              onUnstuck: !1,
              onAnchorChange: !1,
            },
          }),
          (a.prototype.initialize = function() {
            var n;
            return (
              (n = this).$element
                .addClass("rd-navbar")
                .addClass(n.options.layout),
              t && n.$element.addClass("rd-navbar--is-touch"),
              n.options.domAppend && n.createNav(n),
              n.options.stickUpClone && n.createClone(n),
              n.$element.addClass("rd-navbar-original"),
              n.addAdditionalClassToToggles(
                ".rd-navbar-original",
                "toggle-original",
                "toggle-original-elements"
              ),
              n.applyHandlers(n),
              (n.offset = n.$element.offset().top),
              (n.height = n.$element.outerHeight()),
              (n.loaded = !0),
              n
            );
          }),
          (a.prototype.resize = function(o, e) {
            var a, s;
            return (
              (s = t ? o.getOption("deviceLayout") : o.getOption("layout")),
              (a = o.$element.add(o.$clone)),
              (s === o.currentLayout && o.loaded) ||
                (o.switchClass(a, o.currentLayout, s),
                null != o.options.linkedElements &&
                  n.grep(o.options.linkedElements, function(t, n) {
                    return o.switchClass(
                      t,
                      o.currentLayout + "-linked",
                      s + "-linked"
                    );
                  }),
                (o.currentLayout = s)),
              (o.focusOnHover = o.getOption("focusOnHover")),
              o
            );
          }),
          (a.prototype.stickUp = function(t, o) {
            function e() {
              "resize" === o.type
                ? t.switchClass(i, "", "rd-navbar--is-stuck")
                : i.addClass("rd-navbar--is-stuck"),
                (t.isStuck = !0);
            }
            var a, s, r, i, l;
            return (
              (s = t.getOption("stickUp")),
              (n("html").hasClass("ios") ||
                t.$element.hasClass("rd-navbar-fixed")) &&
                (s = !1),
              (a = t.$doc.scrollTop()),
              (i = null != t.$clone ? t.$clone : t.$element),
              (r = t.getOption("stickUpOffset")),
              (l =
                "string" == typeof r
                  ? r.indexOf("%") > 0
                    ? (parseFloat(r) * t.height) / 100
                    : parseFloat(r)
                  : r),
              s
                ? ((a >= l && !t.isStuck) || (a < l && t.isStuck)) &&
                  (t.$element
                    .add(t.$clone)
                    .find("[data-rd-navbar-toggle]")
                    .each(function() {
                      n.proxy(t.closeToggle, this)(t, !1);
                    })
                    .end()
                    .find(".rd-navbar-submenu")
                    .removeClass("opened")
                    .removeClass("focus"),
                  a >= l &&
                  !t.isStuck &&
                  !t.$element.hasClass("rd-navbar-fixed")
                    ? (t.options.callbacks.onStuck &&
                        t.options.callbacks.onStuck.call(t),
                      navigator.platform.match(/(Mac)/i)
                        ? setTimeout(e, 10)
                        : e())
                    : ("resize" === o.type
                        ? t.switchClass(i, "rd-navbar--is-stuck", "")
                        : i
                            .removeClass("rd-navbar--is-stuck")
                            .one(
                              "transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",
                              n.proxy(t.resizeWrap, t, o)
                            ),
                      (t.isStuck = !1),
                      t.options.callbacks.onUnstuck &&
                        t.options.callbacks.onUnstuck.call(t)))
                : (t.$element
                    .find(".rd-navbar-submenu")
                    .removeClass("opened")
                    .removeClass("focus"),
                  t.isStuck &&
                    (t.switchClass(i, "rd-navbar--is-stuck", ""),
                    (t.isStuck = !1),
                    t.resizeWrap(o))),
              t
            );
          }),
          (a.prototype.resizeWrap = function(t) {
            var n, o;
            if (null == (o = this).$clone && !o.isStuck)
              return (
                (n = o.$element.parent()),
                o.getOption("autoHeight")
                  ? ((o.height = o.$element.outerHeight()),
                    "resize" === t.type
                      ? (n
                          .addClass("rd-navbar--no-transition")
                          .css("height", o.height),
                        n[0].offsetHeight,
                        n.removeClass("rd-navbar--no-transition"))
                      : n.css("height", o.height))
                  : void n.css("height", "auto")
              );
          }),
          (a.prototype.createNav = function(t) {
            return (
              t.$element
                .find(".rd-navbar-dropdown, .rd-navbar-megamenu")
                .each(function() {
                  var t;
                  return (
                    (t = n(this)),
                    this.getBoundingClientRect(),
                    t.hasClass("rd-navbar-megamenu")
                      ? t.parent().addClass("rd-navbar--has-megamenu")
                      : t.parent().addClass("rd-navbar--has-dropdown")
                  );
                })
                .parents("li")
                .addClass("rd-navbar-submenu"),
              n('<span class="rd-navbar-submenu-toggle"></span>').insertAfter(
                ".rd-navbar-nav li.rd-navbar-submenu > a"
              ),
              t.options.callbacks.onDomAppend &&
                t.options.callbacks.onDomAppend.call(this),
              t
            );
          }),
          (a.prototype.createClone = function(t) {
            return (
              (t.$clone = t.$element
                .clone()
                .insertAfter(t.$element)
                .addClass("rd-navbar--is-clone")),
              t.addAdditionalClassToToggles(
                ".rd-navbar--is-clone",
                "toggle-cloned",
                "toggle-cloned-elements"
              ),
              t
            );
          }),
          (a.prototype.closeToggle = function(t, o) {
            var e, a, s, r, i, l, c;
            return (
              (a = n(o.target)),
              (i = !1),
              (l = this.getAttribute("data-rd-navbar-toggle")),
              t.options.stickUpClone && t.isStuck
                ? ((r = ".toggle-cloned"),
                  (s = ".toggle-cloned-elements"),
                  (c = !a.hasClass("toggle-cloned")))
                : ((r = ".toggle-original"),
                  (s = ".toggle-original-elements"),
                  (c = !a.hasClass("toggle-original"))),
              o.target !== this &&
                !a.parents(r + "[data-rd-navbar-toggle]").length &&
                !a.parents(s).length &&
                l &&
                c &&
                ((e = n(this)
                  .parents("body")
                  .find(l)
                  .add(n(this).parents(".rd-navbar")[0])).each(function() {
                  if (!i)
                    return (i =
                      !0 === (o.target === this || n.contains(this, o.target)));
                }),
                i ||
                  (e.add(this).removeClass("active"),
                  t.options.callbacks.onToggleClose &&
                    t.options.callbacks.onToggleClose.call(this, t))),
              this
            );
          }),
          (a.prototype.switchToggle = function(t, o) {
            var e, a, s;
            return (
              o.preventDefault(),
              n(this).hasClass("toggle-cloned")
                ? ((s = ".rd-navbar--is-clone"),
                  (e = ".toggle-cloned-elements"))
                : ((s = ".rd-navbar-original"),
                  (e = ".toggle-original-elements")),
              (a = this.getAttribute("data-rd-navbar-toggle")) &&
                (n(s + " [data-rd-navbar-toggle]")
                  .not(this)
                  .each(function() {
                    var t;
                    if ((t = this.getAttribute("data-rd-navbar-toggle")))
                      return n(this)
                        .parents("body")
                        .find(s + " " + t + e)
                        .add(this)
                        .add(
                          n.inArray(".rd-navbar", t.split(/\s*,\s*/i)) > -1 &&
                            n(this).parents("body")[0]
                        )
                        .removeClass("active");
                  }),
                n(this)
                  .parents("body")
                  .find(s + " " + a + e)
                  .add(this)
                  .add(
                    n.inArray(".rd-navbar", a.split(/\s*,\s*/i)) > -1 &&
                      n(this).parents(".rd-navbar")[0]
                  )
                  .toggleClass("active")),
              t.options.callbacks.onToggleSwitch &&
                t.options.callbacks.onToggleSwitch.call(this, t),
              this
            );
          }),
          (a.prototype.dropdownOver = function(t, o) {
            var e;
            if (t.focusOnHover) {
              if (
                ((e = n(this)),
                clearTimeout(o),
                t.options.callbacks.onDropdownOver &&
                  !t.options.callbacks.onDropdownOver.call(this, t))
              )
                return this;
              e.addClass("focus")
                .siblings()
                .removeClass("opened")
                .each(t.dropdownUnfocus);
            }
            return this;
          }),
          (a.prototype.dropdownTouch = function(t, o) {
            var e, a;
            if (((e = n(this)), clearTimeout(o), t.focusOnHover)) {
              if (((a = !1), e.hasClass("focus") && (a = !0), !a))
                return (
                  e
                    .addClass("focus")
                    .siblings()
                    .removeClass("opened")
                    .each(t.dropdownUnfocus),
                  !1
                );
              t.options.callbacks.onDropdownOver &&
                t.options.callbacks.onDropdownOver.call(this, t);
            }
            return this;
          }),
          (a.prototype.dropdownOut = function(t, o) {
            return (
              t.focusOnHover &&
                (n(this).one("mouseenter.navbar", function() {
                  return clearTimeout(o);
                }),
                t.options.callbacks.onDropdownOut &&
                  t.options.callbacks.onDropdownOut.call(this, t),
                clearTimeout(o),
                (o = setTimeout(
                  n.proxy(t.dropdownUnfocus, this, t),
                  t.options.focusOnHoverTimeout
                ))),
              this
            );
          }),
          (a.prototype.dropdownUnfocus = function(t) {
            return (
              n(this)
                .find("li.focus")
                .add(this)
                .removeClass("focus"),
              this
            );
          }),
          (a.prototype.dropdownClose = function(t, o) {
            return (
              o.target === this ||
                n(o.target).parents(".rd-navbar-submenu").length ||
                (n(this)
                  .find("li.focus")
                  .add(this)
                  .removeClass("focus")
                  .removeClass("opened"),
                t.options.callbacks.onDropdownClose &&
                  t.options.callbacks.onDropdownClose.call(this, t)),
              this
            );
          }),
          (a.prototype.dropdownToggle = function(t) {
            return (
              n(this)
                .toggleClass("opened")
                .siblings()
                .removeClass("opened"),
              t.options.callbacks.onDropdownToggle &&
                t.options.callbacks.onDropdownToggle.call(this, t),
              this
            );
          }),
          (a.prototype.goToAnchor = function(t, o) {
            var e, a;
            return (
              (a = this.hash),
              (e = n(a)),
              !!t.getOption("anchorNav") &&
                (e.length &&
                  (o.preventDefault(),
                  n("html, body")
                    .stop()
                    .animate(
                      {
                        scrollTop:
                          e.offset().top + t.getOption("anchorNavOffset") + 1,
                      },
                      t.getOption("anchorNavSpeed"),
                      t.getOption("anchorNavEasing"),
                      function() {
                        return t.changeAnchor(a);
                      }
                    )),
                this)
            );
          }),
          (a.prototype.activateAnchor = function(t) {
            var o, e, a, s, r, i, l, c, d, p, u, h;
            if (
              ((s = this),
              (u = s.$doc.scrollTop()),
              (h = s.$win.height()),
              (r = s.$doc.height()),
              (p = s.getOption("anchorNavOffset")),
              !s.options.anchorNav)
            )
              return !1;
            if (u + h > r - 50)
              return (
                (o = n('[data-type="anchor"]').last()).length &&
                  o.offset().top >= u &&
                  ((i = "#" + o.attr("id")),
                  (e = n(
                    '.rd-navbar-nav a[href^="' + i + '"]'
                  ).parent()).hasClass("active") ||
                    (e
                      .addClass("active")
                      .siblings()
                      .removeClass("active"),
                    s.options.callbacks.onAnchorChange &&
                      s.options.callbacks.onAnchorChange.call(o[0], s))),
                o
              );
            d = n('.rd-navbar-nav a[href^="#"]').get();
            for (l in d)
              (c = d[l]),
                (i = (a = n(c)).attr("href")),
                (o = n(i)).length &&
                  o.offset().top + p <= u &&
                  o.offset().top + o.outerHeight() > u &&
                  (a
                    .parent()
                    .addClass("active")
                    .siblings()
                    .removeClass("active"),
                  s.options.callbacks.onAnchorChange &&
                    s.options.callbacks.onAnchorChange.call(o[0], s));
            return null;
          }),
          // (a.prototype.getAnchor = function() {
          //   return history && history.state ? history.state.id : null;
          // }),
          // (a.prototype.changeAnchor = function(t) {
          //   return (
          //     history &&
          //       (history.state && history.state.id !== t
          //         ? history.replaceState({ anchorId: t }, null, t)
          //         : history.pushState({ anchorId: t }, null, t)),
          //     this
          //   );
          // }),
          (a.prototype.applyHandlers = function(t) {
            return (
              null != t.options.responsive &&
                t.$win
                  .on("resize.navbar", n.proxy(t.resize, t.$win[0], t))
                  .on("resize.navbar", n.proxy(t.resizeWrap, t))
                  .on(
                    "resize.navbar",
                    n.proxy(
                      t.stickUp,
                      null != t.$clone ? t.$clone : t.$element,
                      t
                    )
                  )
                  .on(
                    "orientationchange.navbar",
                    n.proxy(t.resize, t.$win[0], t)
                  )
                  .trigger("resize.navbar"),
              t.$doc
                .on(
                  "scroll.navbar",
                  n.proxy(
                    t.stickUp,
                    null != t.$clone ? t.$clone : t.$element,
                    t
                  )
                )
                .on("scroll.navbar", n.proxy(t.activateAnchor, t)),
              t.$element
                .add(t.$clone)
                .find("[data-rd-navbar-toggle]")
                .each(function() {
                  var o;
                  return (
                    (o = n(this)).on("click", n.proxy(t.switchToggle, this, t)),
                    o
                      .parents("body")
                      .on("click", n.proxy(t.closeToggle, this, t))
                  );
                }),
              t.$element
                .add(t.$clone)
                .find(".rd-navbar-submenu")
                .each(function() {
                  var o, e;
                  return (
                    (o = n(this)),
                    (e = o.parents(".rd-navbar--is-clone").length
                      ? t.cloneTimer
                      : t.focusTimer),
                    o.on(
                      "mouseleave.navbar",
                      n.proxy(t.dropdownOut, this, t, e)
                    ),
                    o
                      .find("> a")
                      .on(
                        "mouseenter.navbar",
                        n.proxy(t.dropdownOver, this, t, e)
                      ),
                    o
                      .find("> a")
                      .on(
                        "touchstart.navbar",
                        n.proxy(t.dropdownTouch, this, t, e)
                      ),
                    o
                      .find("> .rd-navbar-submenu-toggle")
                      .on("click", n.proxy(t.dropdownToggle, this, t)),
                    o
                      .parents("body")
                      .on("click", n.proxy(t.dropdownClose, this, t))
                  );
                }),
              t.$element
                .add(t.$clone)
                .find('.rd-navbar-nav a[href^="#"]')
                .each(function() {
                  return n(this).on("click", n.proxy(t.goToAnchor, this, t));
                }),
              t.$element
                .find(".rd-navbar-dropdown, .rd-navbar-megamenu")
                .each(function() {
                  var t, o;
                  (t = n(this)),
                    (o = this.getBoundingClientRect()).left + t.outerWidth() >=
                    e.innerWidth - 10
                      ? (this.className += " rd-navbar-open-left")
                      : o.left - t.outerWidth() <= 10 &&
                        (this.className += " rd-navbar-open-right");
                }),
              t
            );
          }),
          (a.prototype.switchClass = function(t, o, e) {
            var a;
            return (
              (a = t instanceof $ ? t : n(t))
                .addClass("rd-navbar--no-transition")
                .removeClass(o)
                .addClass(e),
              a[0].offsetHeight,
              a.removeClass("rd-navbar--no-transition")
            );
          }),
          (a.prototype.getOption = function(t) {
            var n, o;
            for (n in this.options.responsive) n <= e.innerWidth && (o = n);
            return null != this.options.responsive &&
              null != this.options.responsive[o][t]
              ? this.options.responsive[o][t]
              : this.options[t];
          }),
          (a.prototype.addAdditionalClassToToggles = function(t, o, e) {
            return n(t)
              .find("[data-rd-navbar-toggle]")
              .each(function() {
                var a;
                return (
                  n(this).addClass(o),
                  (a = this.getAttribute("data-rd-navbar-toggle")),
                  n(this)
                    .parents("body")
                    .find(t)
                    .find(a)
                    .addClass(e)
                );
              });
          }),
          a
        );
      })()),
        n.fn.extend({
          RDNavbar: function(t) {
            var o;
            if (!(o = n(this)).data("RDNavbar"))
              return o.data("RDNavbar", new a(this, t));
          },
        }),
        (e.RDNavbar = a);
    })(window.$, document, window),
    "undefined" != typeof module && null !== module
      ? (module.exports = window.RDNavbar)
      : "function" == typeof define &&
        require.amd &&
        require(["jquery"], function() {
          "use strict";
          return window.RDNavbar;
        });
}.call(this));
