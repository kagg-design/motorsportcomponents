(function() {
  function p() {
    function b() {
      1 > d.length || jQuery.each(d, function(b, f) {
        d[b].element.height(d[b].element.width() / d[b].width * d[b].height);
      });
    }
    if (!(1 > jQuery('object[type="application/x-shockwave-flash"]').length)) {
      var d = [], f = setTimeout(function() {
      }, 10);
      jQuery('object[type="application/x-shockwave-flash"]').each(function() {
        d.push({element:jQuery(this), height:jQuery(this).attr("height"), width:jQuery(this).attr("width")});
      });
      jQuery(window).resize(function() {
        clearTimeout(f);
        f = setTimeout(b, 100);
      });
      b();
    }
  }
  function m() {
    jQuery(".added").remove();
    jQuery(".team-member-article").removeClass("current");
    var b = +jQuery(".team-member-content").width(), d = +jQuery(".team-member-article").width(), b = Math.floor(b / (d + 20));
    0 == b && (b = 1);
    jQuery(".team-member-article.show:nth-of-type(" + (b + "n") + ")").after('<div class="content added"></div>');
  }
  jQuery(document).ready(function() {
    function b(a) {
      a.offset();
      jQuery(window).scrollTop();
    }
    function d(a, c) {
      var e = "";
      if (a.parent().find(" > ul").length) {
        var b;
        a.parent().find(" > ul > li > a").each(function() {
          "undefined" != typeof jQuery(this).attr("href") && (b = jQuery(this).clone().children().remove().end().text(), jQuery(this).parent().find(" > ul").length ? (e += '<option value="' + jQuery(this).attr("href") + '" class="' + jQuery(this).parents("li").attr("class") + '">' + c + " " + b + "</option>", e += d(jQuery(this), c + "--")) : jQuery(this).parent().find(" > .sub_wrapper > ul").length ? (e += '<option value="' + jQuery(this).attr("href") + '" class="' + jQuery(this).parents("li").attr("class") + 
          '">' + c + " " + b + "</option>", e += d(jQuery(this).parent().find(" > .sub_wrapper > ul"), c + "--")) : e += '<option value="' + jQuery(this).attr("href") + '" class="' + jQuery(this).parents("li").attr("class") + '">' + c + " " + b + "</option>");
        });
      }
      return e;
    }
    jQuery(window).resize(function() {
    });
    var f = "onorientationchange" in window ? "orientationchange" : "resize";
    window.addEventListener && window.addEventListener(f, function() {
      jQuery(window).trigger("resize");
    }, !1);
    Modernizr && (Modernizr.addTest("ipad", function() {
      return !!navigator.userAgent.match(/iPad/i);
    }), Modernizr.addTest("iphone", function() {
      return !!navigator.userAgent.match(/iPhone/i);
    }), Modernizr.addTest("ipod", function() {
      return !!navigator.userAgent.match(/iPod/i);
    }), Modernizr.addTest("appleios", function() {
      return Modernizr.ipad || Modernizr.ipod || Modernizr.iphone;
    }), Modernizr.addTest("android", function() {
      return !!navigator.userAgent.match(/Android/i);
    }), Modernizr.addTest("ismobile", function() {
      return Modernizr.ipad || Modernizr.ipod || Modernizr.iphone || Modernizr.android;
    }));
    jQuery(window).width();
    jQuery(window).scroll(function() {
      180 < jQuery(this).scrollTop() ? jQuery("#toTop").fadeIn() : jQuery("#toTop").fadeOut();
    });
    jQuery("#toTop").click(function() {
      jQuery("body,html").animate({scrollTop:0}, 800);
    });
    jQuery(document).on("touchend", ".regular-hover-container .hover-bg", function(a) {
      jQuery(this).hasClass("hover_active") ? (jQuery(this).trigger("mouseleave"), jQuery(this).removeClass("hover_active")) : (jQuery(this).trigger("mouseenter"), jQuery(this).addClass("hover_active"));
    });
    jQuery(document).on("mouseenter", ".regular-hover-container .hover-bg", function() {
      var a = !1, c = jQuery(this).height();
      if (jQuery(this).hasClass("hover-bg") && !jQuery(this).hasClass("hover_active")) {
        -1 < jQuery(this).parent().attr("class").toString().indexOf("small-thumb") && (a = !0);
        jQuery(this).find(".iconeffect").css({"margin-top":0.68 * c, opacity:"0"});
        jQuery(this).stop(!0, !0).animate({opacity:1}, 280);
        var e = c / 2 - 24;
        a && (e = 0);
        jQuery(this).find(".iconeffect").each(function(a) {
          jQuery(this).delay(100 * a + 100).animate({"margin-top":e, opacity:"1"}, 480, "easeOutBack");
        });
      }
    });
    jQuery(document).on("mouseleave", ".regular-hover-container .hover-bg", function() {
      jQuery(this);
      jQuery(this).stop(!0, !0).delay(140).animate({opacity:0}, 280, function() {
      });
      jQuery(this).find(".iconeffect").each(function(a) {
        jQuery(this).delay(50 * a).animate({"margin-top":"0px", opacity:"0"}, 180);
      });
    });
    jQuery(".comments-field").each(function() {
      jQuery(this).on("focus", function() {
        jQuery(this).val() == jQuery(this).attr("title") && jQuery(this).val("");
        jQuery(this).addClass("box-shadow-dark");
      });
      jQuery(this).on("blur", function() {
        "" == jQuery(this).val() && jQuery(this).val(jQuery(this).attr("title"));
        jQuery(this).removeClass("box-shadow-dark");
      });
    });
    jQuery(document).on("mouseenter", ".rock-social-icon", function() {
      jQuery(this).find(".social-icon-container").stop(!0, !0).animate({"margin-top":"-20px"}, 300);
    });
    jQuery(document).on("mouseleave", ".rock-social-icon", function() {
      jQuery(this).find(".social-icon-container").stop(!0, !0).animate({"margin-top":"0px"}, 300);
    });
    jQuery(document).on("click", ".special-search-icon", function(a) {
      a.preventDefault();
      a = jQuery(this).parent().find(".special-search-overlay-box");
      a.hasClass("search-overlay-open") ? a.removeClass("search-overlay-open").slideUp(100) : a.addClass("search-overlay-open").slideDown(300);
    });
    jQuery(document).on("mouseup", function(a) {
      var c = jQuery(".search-overlay-open");
      c.is(a.target) || 0 !== c.has(a.target).length || jQuery(".fa.fa-search").is(a.target) || 0 !== jQuery(".fa.fa-search").has(a.target).length || jQuery(".special-search-overlay-box").hasClass("search-overlay-open") && jQuery(".special-search-overlay-box").removeClass("search-overlay-open").slideUp(100);
    });
    jQuery("#nav ul ul").css({display:"block"});
    jQuery("#nav ul ul ul").css({display:"none"});
    jQuery("#nav > ul > li").each(function(a, c) {
      0 < jQuery(this).find(" > ul .desc").length && jQuery(this).find(" > ul .desc").remove();
      if (0 < jQuery(this).find("> ul").length) {
        var e, b;
        0 >= jQuery(this).find(".sub_wrapper").length && (0 < jQuery(this).find("> ul > li > ul").length && jQuery(this).find("> ul > li").each(function(a, c) {
          0 < jQuery(this).find("> ul").length && (jQuery(this).find(" > a").append(' <i class="fa fa-chevron-right"></i>'), jQuery(this).find(" > ul > li").each(function(a, c) {
            0 < jQuery(this).find("> ul").length && jQuery(this).find(" > a").append(' <i class="fa fa-chevron-right"></i>');
          }));
        }), e = parseInt(jQuery(this).find("> ul > li").width().toString().replace("px", "")) + 16, b = parseInt(jQuery(this).find("> ul").height().toString().replace("px", "")) + 16, e = '<div class="sub_wrapper" style="z-index:-5; width:' + e + 'px;" height-ref="' + b + '"></div>', jQuery(this).find("> ul").wrap(e));
        jQuery(this).find(".sub_wrapper").find(" > ul").stop(!0, !0).css({top:"-100%", opacity:"0"});
        0 < jQuery(this).find(">a").find(".desc").length ? jQuery(this).find(">a").find(".desc").before(' <i class="fa fa-chevron-down"></i>') : jQuery(this).find(">a").append(' <i class="fa fa-chevron-down"></i>');
        e = jQuery(this).find(">ul > li> ul");
        0 < e.length && e.parent().find(">a").addClass("main-arrow-right");
      }
    });
    var h = !0, q = jQuery(".nav-transparent").length ? 0.88 : 1;
    jQuery("#nav > ul > li").css("position", "relative").prepend(jQuery("<div>").addClass("btn-colored-hover-nav"));
    jQuery(document).on("mouseenter", "#nav > ul > li", function() {
      var a;
      h = !1;
      a = jQuery(this).find(".sub_wrapper");
      jQuery("#nav > ul > li .sub_wrapper").css({zIndex:"-5", opacity:"0"});
      var c = 48 * parseInt(jQuery(this).find(" > .sub_wrapper > ul > li").length) + 180, e = a.attr("height-ref") + "px";
      a.stop(!0, !0).css({height:e, overflow:"hidden"});
      jQuery(this).find(".sub_wrapper").css({zIndex:"99", opacity:q}).find(" > ul").css({opacity:"1"}).stop(!0, !0).animate({top:"0", opacity:"1"}, c, function() {
        h || (jQuery(this).parent().css("overflow", "visible"), jQuery(this).parents(".fixed-top-nav"));
      });
    });
    jQuery(document).on("mouseleave", "#nav > ul > li", function() {
      jQuery(window).off("scroll", b);
      var a;
      h = !0;
      a = jQuery(this).find(".sub_wrapper");
      a.find(".sub-nav-hover, .sub-sub-nav-hover").css("opacity", "0");
      a.css({overflow:"hidden"}).find(" > ul").stop(!0, !0).animate({top:"-100%", opacity:"1"}, 280, function() {
        h && a.css({zIndex:"-5", opacity:"0", height:"10px"});
      });
      a.stop(!0, !0).animate({height:"10px"}, 300);
    });
    jQuery("#nav > ul > li > .sub_wrapper > ul > li").hover(function() {
      h = !1;
      jQuery(this).find(" > ul").stop(!0, !0).animate({width:"toggle", opacity:"1"}, 150);
      setTimeout(function() {
        jQuery(this).find(" > a").addClass("sub_font_color");
        jQuery(this).find(" > a a").removeClass("sub_font_color");
      }, 100);
    }, function() {
      jQuery(this).find("> ul").stop(!0, !0).animate({width:"toggle", opacit:"0"}, 150);
      jQuery(this).hasClass("current_page_item");
      jQuery(this).find(" > a").hasClass("sub_font_color") && jQuery(this).find(" > a").removeClass("sub_font_color");
    });
    jQuery("#nav > ul > li > .sub_wrapper > ul > li").css("position", "relative").append(jQuery("<div>").addClass("sub-nav-hover"));
    jQuery("#nav ul li ul li ul li").hover(function() {
      h = !1;
      jQuery(this).find("> .sub-sub-nav-hover").stop(!0, !0).animate({opacity:1});
      jQuery(this).find(" > a").addClass("sub_font_color");
      0 < jQuery(this).find("> ul").length && jQuery(this).find("> ul").stop(!0, !0).animate({width:"toggle", opacity:"1"}, 150);
    }, function() {
      h = !0;
      jQuery(this).hasClass("current_page_item") || jQuery(this).find("> .sub-sub-nav-hover").stop(!0, !0).animate({opacity:0});
      0 < jQuery(this).find("> ul").length && jQuery(this).find("> ul").stop(!0, !0).animate({width:"toggle", opacity:"0"}, 150);
      jQuery(this).find(" > a").hasClass("sub_font_color") && jQuery(this).find(" > a").removeClass("sub_font_color");
    });
    jQuery("#nav ul li ul li ul li").css("position", "relative").append(jQuery("<div>").addClass("sub-sub-nav-hover"));
    var k = null, n = null;
    !Modernizr.ismobile && 1024 < jQuery(window).width() && (jQuery(document).on("mouseenter", ".sub_wrapper > ul", function(a) {
      if ("-100%" !== jQuery(this).css("top")) {
        jQuery(document).on("mousemove", ".sub_wrapper > ul", function(a) {
          n = a;
        });
        k && clearInterval(k);
        var c = jQuery(this);
        k = setInterval(function() {
          var a = n.pageY - jQuery(window).scrollTop(), b = jQuery(window).height(), d = parseInt(parseInt(c.offset().top) - jQuery(window).scrollTop());
          jQuery("#wpadminbar").length && (b -= parseInt(jQuery("#wpadminbar").height()), d -= parseInt(jQuery("#wpadminbar").height()));
          parseInt(c.height()) + 30 <= parseInt(b) || (a + 50 > b && parseInt(d + parseInt(c.height())) > b ? c.stop(!1, !1).animate({top:parseInt(c.css("top").toString().replace("px", "")) - 50 + "px"}, 100) : 0 > a - 50 && (a = parseInt(c.css("top").toString().replace("px", "")) + 50, 0 < a && (a = 0), c.stop(!1, !1).animate({top:a + "px"}, 100)));
        }, 100);
      }
    }), jQuery(document).on("mouseleave", ".sub_wrapper > ul", function() {
      k && (jQuery(document).off("mousemove", ".sub_wrapper > ul"), clearInterval(k));
    }));
    if ("undefined" != typeof rockthemes.frontend_options && rockthemes.frontend_options.disable_top_links_for_ipad) {
      jQuery(document).on("touchstart, click", "#nav a", function(a) {
        (Modernizr.ipad || Modernizr.android) && jQuery(this).next().hasClass("sub_wrapper") && 0 != parseInt(jQuery(this).next().find(" > ul").css("top")) && a.preventDefault();
      });
    }
    (function() {
      for (var a = jQuery("#nav .current-menu-item").first(), c = 0;a.parent().parent() && "nav" != a.parent().parent().attr("id") && 8 > c;) {
        a.is("li"), a = a.parent(), c++;
      }
      a.addClass("current-menu-item");
    })();
    "nav" == !jQuery(".current_page_item").parent().parent().attr("id") && "nav" == !jQuery(".current_page_item").parent().attr("id") && (0 < jQuery(".current_page_item").find(".sub-nav-hover").length ? (jQuery(".current_page_item").parent().parent().find(".btn-colored-hover-nav").stop().animate({opacity:1}, 140), jQuery(".current_page_item").parent().parent().find("> a").hasClass("nav-hover-color") || jQuery(".current_page_item").parent().parent().find("> a").addClass("nav-hover-color")) : 0 < jQuery(".current_page_item").find(".sub-sub-nav-hover").length && 
    (jQuery(".current_page_item").find(".sub-sub-nav-hover").css("opacity", 0.1), jQuery(".current_page_item").parent().parent().parent().parent().find(".btn-colored-hover-nav").stop().animate({opacity:1}, 140), jQuery(".current_page_item").parent().parent().parent().parent().find("> a").hasClass("nav-hover-color") || jQuery(".current_page_item").parent().parent().parent().parent().find("> a").addClass("nav-hover-color")));
    jQuery(document).on("change", "#nav .nav_responsive_select", function() {
      window.location = jQuery(this).find("option:selected").val();
    });
    (function() {
      var a;
      a = "" + d(jQuery("#nav .nav-menu"), "");
      a = '<select class="nav_responsive_select hide">' + a + "</select>";
      var c = !1;
      jQuery("#nav").append(a);
      jQuery("#nav select .current-menu-item").each(function() {
        c || (jQuery(this).hasClass("menu-item-has-children") ? jQuery(this).find(".current-menu-item").length || jQuery(this).prop("selected", "selected") : (jQuery(this).prop("selected", "selected"), c = !0));
      });
    })();
    jQuery(document).ready(function() {
      jQuery(".widget_nav_menu .menu").navgoco({accordion:!0});
    });
    if ("undefined" != typeof rockthemes.frontend_options && rockthemes.frontend_options.activate_smooth_scroll) {
      var g = jQuery(window).scrollTop(), l = !1;
      setTimeout(function() {
        g = jQuery(window).scrollTop();
      }, 150);
      jQuery("body").on("mousewheel", function(a) {
        a.preventDefault();
        var c = 99;
        l && (c += c);
        g = 0 < a.deltaY ? g - c : g + c;
        g > jQuery(document).height() - jQuery(window).height() && (g = jQuery(document).height() - jQuery(window).height());
        0 > g && (g = 0);
        l = !0;
        jQuery("body,html").stop(!1, !1).animate({scrollTop:g}, 510, "easeOutQuart", function() {
          l = !1;
        });
      });
      jQuery(window).scroll(function() {
        l || (g = jQuery(window).scrollTop());
      });
    }
    jQuery(".team-member-article").length && (jQuery(".team-member-article").addClass("show"), m(), jQuery(window).resize(function() {
      jQuery(".team-member-article.current").trigger("click");
      m();
    }), jQuery(".team-member-article"), jQuery(document).on("click", ".team-member-article", function(a) {
      a.preventDefault();
      if (!jQuery(this).hasClass("article_clicked")) {
        var c = jQuery(this);
        c.addClass("article_clicked");
        a = jQuery(this).find(".member-details").html();
        a.indexOf("script") && (a = a.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, ""));
        180 < jQuery(window).width() - jQuery(this).parent().width() ? (jQuery(this).parent().parent().after(jQuery(".team-member-content-row")), jQuery(".team-member-content-row").addClass("row")) : (jQuery(this).parent().after(jQuery(".team-member-content-row")), jQuery(".team-member-content-row").removeClass("row"));
        var b = jQuery(this).parent().parent().parent().find(".team-member-content").first();
        if (jQuery(this).hasClass("current")) {
          var d = jQuery(this);
          jQuery(b).slideUp("400", "linear", function() {
            d.removeClass("current");
            jQuery(b).removeClass("open").empty();
            d.parent().find(".team-member-content").empty();
            c.removeClass("article_clicked");
          });
        } else {
          jQuery(".team-member-article").removeClass("current"), jQuery(this).addClass("current"), jQuery(this).parent().parent().parent().find(".team-member-content").empty(), jQuery(".open").empty(), b.hasClass("open") ? jQuery(b).addClass("open").html(a) : jQuery(b).html(a).slideDown().addClass("open"), setTimeout(function() {
            c.removeClass("article_clicked");
          }, 400);
        }
      }
    }));
    jQuery.fn.rockIconHover = function() {
      jQuery(document).on("mouseenter", ".rock-iconictext-container", function() {
        var a = jQuery(this).find(".rockicon-container"), c = a.attr("bg-hover-color"), b = a.attr("icon-hover-color");
        a.attr("bg-disabled") && "true" == a.attr("bg-disabled") ? a.stop(!0, !0).animate({color:c}, 280) : a.stop(!0, !0).animate({backgroundColor:c, color:b}, 180);
      });
      jQuery(document).on("mouseleave", ".rock-iconictext-container", function() {
        var a = jQuery(this).find(".rockicon-container"), b = a.attr("bg-color"), d = a.attr("icon-color");
        a.attr("bg-disabled") && "true" == a.attr("bg-disabled") ? a.stop(!0, !0).animate({color:d}, 180) : a.stop(!0, !0).animate({backgroundColor:b, color:d}, 180);
      });
    };
    jQuery.fn.rockIconHover();
    p();
  });
  jQuery.fn.rockthemes_get_background_image_size = function() {
    var b = jQuery(this).css("background-image").replace(/url\((['"])?(.*?)\1\)/gi, "$2").split(",")[0], d = new Image;
    d.src = b;
    return {width:d.width, height:d.height};
  };
  jQuery.fn.rockthemes_svg_control = function() {
    Modernizr && (Modernizr.svg || jQuery('img[src*="svg"].use_svg').attr("src", function() {
      return jQuery(this).attr("src").replace(".svg", ".png");
    }));
  };
  jQuery.fn.stripslashes = function(b) {
    return (b + "").replace(/\\(.?)/g, function(b, f) {
      switch(f) {
        case "\\":
          return "\\";
        case "0":
          return "\x00";
        case "":
          return "";
        default:
          return f;
      }
    });
  };
  jQuery(window).on('load', function() {
    function b() {
      return -1 != navigator.userAgent.toLowerCase().indexOf("safari") && -1 == navigator.userAgent.toLowerCase().indexOf("chrome") ? !0 : !1;
    }
    function d() {
      0 >= jQuery(document).find(".relative-container").length || (jQuery(document).find(".regular-hover-container").each(function() {
        100 > jQuery(this).width() && !jQuery(this).hasClass("small-thumb") && jQuery(this).addClass("small-thumb");
        100 <= jQuery(this).width() && jQuery(this).hasClass("small-thumb") && jQuery(this).removeClass("small-thumb");
      }), jQuery(document).find(".ajax-filtered-gallery-holder .ajax-body ul").each(function() {
        var b = jQuery(this).find("li:first-child").width();
        10 >= jQuery(this).width() - b && jQuery(this).css({margin:"0px auto", width:b});
      }));
    }
    jQuery.fn.rockthemes_svg_control();
    jQuery(".row").each(function() {
      1 > jQuery(".ie.ie8").length && 1 > jQuery(".ie.ie9").length || (1 > jQuery(this).children().length && !(0 < jQuery(this).html().length && "" != jQuery.trim(jQuery(this).html())) && (0 < jQuery(this).text().length && "" != jQuery.trim(jQuery(this).text()) || jQuery(this).remove()), jQuery(this).find(" > .column").length && 1 > jQuery(this).find(" > .column").children().length && !(0 < jQuery(this).find(" > .column").html().length && "" != jQuery.trim(jQuery(this).find(" > .column").html())) && 
      (0 < jQuery(this).find(" > .column").text().length && "" != jQuery.trim(jQuery(this).find(" > .column").text()) || jQuery(this).remove()), jQuery(this).find(" > .columns").length && 1 > jQuery(this).find(" > .columns").children().length && !(0 < jQuery(this).find(" > .columns").html().length && "" != jQuery.trim(jQuery(this).find(" > .columns").html())) && (0 < jQuery(this).find(" > .columns").text().length && "" != jQuery.trim(jQuery(this).find(" > .columns").text()) || jQuery(this).remove()));
    });
    var f = 0;
    if (jQuery("#main-nav-bg").length && jQuery(".quasar-nav-fixed-ready").length && !Modernizr.ismobile && 1024 < jQuery(window).width() && 1 > jQuery(".ie.ie8").length && 1 > jQuery(".ie.ie9").length && (f = jQuery("#main-nav-bg").offset(), jQuery(".main-nav-placeholder").length || (jQuery("#main-nav-bg").wrap('<div class="main-nav-placeholder" style="position:relative;"></div>'), jQuery(".main-nav-placeholder").css({"min-height":jQuery("#main-nav-bg").height() + "px"})), jQuery(window).scroll(function() {
      jQuery("#main-nav-bg").hasClass("fixed-top-nav") ? jQuery(this).scrollTop() < f.top && (b() ? jQuery("#main-nav-bg").removeClass("fixed-top-nav") : jQuery("#main-nav-bg").removeClass("fixed-top-nav fadeInDown animated"), jQuery("#main-nav-bg").hasClass("nav-right") && jQuery("#main-nav-bg").removeClass("nav-box")) : jQuery(this).scrollTop() > f.top && (b() ? jQuery("#main-nav-bg").addClass("fixed-top-nav") : jQuery("#main-nav-bg").addClass("fixed-top-nav fadeInDown animated"), jQuery("#main-nav-bg").hasClass("nav-right") && 
      jQuery("#main-nav-bg").addClass("nav-box"));
    }), !b())) {
      jQuery(document).on("animationend webkitAnimationEnd MSAnimationEnd oAnimationEnd", "#main-nav-bg", function() {
        jQuery("#main-nav-bg.fixed-top-nav").length && jQuery("#main-nav-bg.fixed-top-nav").removeClass("fadeInDown animated");
      });
    }
    jQuery(window).resize(function() {
      d();
    });
    d();
  });
})();