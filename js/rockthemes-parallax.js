jQuery(window).on('load',function() {
  function c(a) {
    function c() {
      if (Modernizr.backgroundsize) {
        var b = 0;
        if ("function" == typeof jQuery.fn.rockthemes_get_background_image_size) {
          var h = a.find(".parallax-mask-class").rockthemes_get_background_image_size();
          a.find(".parallax-mask-class > .row").each(function() {
            b += jQuery(this).height();
          });
          d < b || e <= b ? (a.find(".parallax-mask-class").css({height:b}), d = b) : d > b && (a.find(".parallax-mask-class").css({height:e}), d = e);
          var l = !1;
          768 > m.width() && (l = !0);
          l ? (l = parseInt(m.height()) / h.height, h.height > b ? a.find(".parallax-mask-class").css({"background-size":h.width + "px " + h.height + "px"}) : (l = parseInt(b) / h.height, a.find(".parallax-mask-class").css({"background-size":l * h.width + 10 + "px " + (parseInt(b) + 10) + "px"}))) : a.find(".parallax-mask-class").css({"background-size":"100% auto"});
        }
      }
    }
    a.hasClass("rockthemes-fullwidth-colored") && a.removeClass("rockthemes-fullwidth-colored").attr("style", "");
    var d = parseInt(a.attr("parallax-mask-height")), e = d;
    a.attr("parallax-bg-image");
    var g = '<div class="parallax-mask-class" style="background:url(' + a.attr("parallax-bg-image") + ") 50% 0 no-repeat " + (Modernizr.ismobile ? "" : "fixed") + "; height:" + d + 'px; background-size:100% auto;"></div>';
    a.wrapInner(g);
    Modernizr.ismobile || a.find(".parallax-mask-class").parallax("50%", 0.1);
    m.scroll(function() {
      var b = "50% " + -(m.scrollTop() / a.data("speed")) + "px";
      a.css({backgroundPosition:b});
    }).smartresize(c);
    jQuery("<img/>").attr("src", a.attr("parallax-bg-image")).on('load',function() {
      jQuery(this).remove();
      c();
    });
  }
  function n(a) {
    function c() {
      if (Modernizr.backgroundsize) {
        var b = 0;
        if ("function" == typeof jQuery.fn.rockthemes_get_background_image_size) {
          var h = a.find(".parallax-mask-class").rockthemes_get_background_image_size();
          a.find(".parallax-mask-class > .row").each(function() {
            b += jQuery(this).height();
          });
          d < b || e <= b ? (a.find(".parallax-mask-class").css({height:b}), d = b) : d > b && (a.find(".parallax-mask-class").css({height:e}), d = e);
          var l = !1;
          768 > m.width() && (l = !0);
          l ? (l = parseInt(m.height()) / h.height, h.height > b ? a.find(".parallax-mask-class").css({"background-size":h.width + "px " + h.height + "px"}) : (l = parseInt(b) / h.height, a.find(".parallax-mask-class").css({"background-size":l * h.width + 10 + "px " + (parseInt(b) + 10) + "px"}))) : a.find(".parallax-mask-class").css({"background-size":"100% auto"});
        }
      }
    }
    a.hasClass("rockthemes-fullwidth-colored") && a.removeClass("rockthemes-fullwidth-colored").attr("style", "");
    var d = parseInt(a.attr("parallax-mask-height")), e = d;
    a.attr("parallax-bg-image");
    var g = '<div class="parallax-mask-class" style="background:url(' + a.attr("parallax-bg-image") + ") 50% 0 no-repeat ; height:" + d + 'px; background-size:100% auto;"></div>';
    a.wrapInner(g);
    m.smartresize(c);
    jQuery("<img/>").attr("src", a.attr("parallax-bg-image")).on('load',function() {
      jQuery(this).remove();
      c();
    });
  }
  var m = jQuery(window);
  setTimeout(function() {
    jQuery(".rockthemes-parallax").each(function() {
      if (jQuery(this).attr("parallax-model")) {
        switch(jQuery(this).attr("parallax-model")) {
          case "use_image_height":
            jQuery(this);
            break;
          case "height_specific":
            c(jQuery(this));
            break;
          case "no_parallax_only_image":
            n(jQuery(this));
            break;
          case "full_height":
            parallax_full_height();
        }
      }
    });
  }, 150);
});
(function(c, n) {
  var m = function(a, c, d) {
    var e;
    return function() {
      var g = this, b = arguments;
      e ? clearTimeout(e) : d && a.apply(g, b);
      e = setTimeout(function() {
        d || a.apply(g, b);
        e = null;
      }, c || 100);
    };
  };
  jQuery.fn[n] = function(a) {
    return a ? this.bind("resize", m(a)) : this.trigger(n);
  };
})(jQuery, "smartresize");
(function(c) {
  "function" === typeof define && define.amd ? define(["jquery"], c) : "object" === typeof exports ? module.exports = c : c(jQuery);
})(function(c) {
  function n(a) {
    var b = a || window.event, n = d.call(arguments, 1), q = 0, k = 0, f = 0, p = 0;
    a = c.event.fix(b);
    a.type = "mousewheel";
    "detail" in b && (f = -1 * b.detail);
    "wheelDelta" in b && (f = b.wheelDelta);
    "wheelDeltaY" in b && (f = b.wheelDeltaY);
    "wheelDeltaX" in b && (k = -1 * b.wheelDeltaX);
    "axis" in b && b.axis === b.HORIZONTAL_AXIS && (k = -1 * f, f = 0);
    q = 0 === f ? k : f;
    "deltaY" in b && (q = f = -1 * b.deltaY);
    "deltaX" in b && (k = b.deltaX, 0 === f && (q = -1 * k));
    if (0 !== f || 0 !== k) {
      p = Math.max(Math.abs(f), Math.abs(k));
      if (!g || p < g) {
        g = p;
      }
      q = Math[1 <= q ? "floor" : "ceil"](q / g);
      k = Math[1 <= k ? "floor" : "ceil"](k / g);
      f = Math[1 <= f ? "floor" : "ceil"](f / g);
      a.deltaX = k;
      a.deltaY = f;
      a.deltaFactor = g;
      n.unshift(a, q, k, f);
      e && clearTimeout(e);
      e = setTimeout(m, 200);
      return(c.event.dispatch || c.event.handle).apply(this, n);
    }
  }
  function m() {
    g = null;
  }
  var a = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"], p = "onwheel" in document || 9 <= document.documentMode ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"], d = Array.prototype.slice, e, g;
  if (c.event.fixHooks) {
    for (var b = a.length;b;) {
      c.event.fixHooks[a[--b]] = c.event.mouseHooks;
    }
  }
  c.event.special.mousewheel = {version:"3.1.6", setup:function() {
    if (this.addEventListener) {
      for (var a = p.length;a;) {
        this.addEventListener(p[--a], n, !1);
      }
    } else {
      this.onmousewheel = n;
    }
  }, teardown:function() {
    if (this.removeEventListener) {
      for (var a = p.length;a;) {
        this.removeEventListener(p[--a], n, !1);
      }
    } else {
      this.onmousewheel = null;
    }
  }};
  c.fn.extend({mousewheel:function(a) {
    return a ? this.bind("mousewheel", a) : this.trigger("mousewheel");
  }, unmousewheel:function(a) {
    return this.unbind("mousewheel", a);
  }});
});