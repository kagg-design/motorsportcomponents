jQuery(window).on('load',function() {
  function k(a) {
    for (var b = a.attr("id"), c = 0; c < g.length; c++) {
      if (g[c].id == b) {
        g[c].obj = null;
        g[c].obj = a;
        a.find(".rock-tinymce-container").length && (m(a.attr("id")), window.tinyMCE.execCommand("mceRemoveEditor", !1, a.attr("id").replace("#", "") + "-editor"), wpActiveEditor = "content");
        jQuery("#" + b).rpb_modal("hide");
        break;
      }
    }
  }
  function h(a) {
    for (var b = 0; b < g.length; b++) {
      if (g[b].id == a) {
        return g[b].obj;
      }
    }
    return !1;
  }
  function G(a) {
    for (var b = 0; b < g.length; b++) {
      if (g[b].id == a) {
        return g.splice(b, 1), !0;
      }
    }
  }
  function C(a) {
    a.find(".xr_color_field").length && (a.find(".wp-picker-container").length && a.find(".wp-picker-container").each(function(a) {
      jQuery(this).before(jQuery(this).find(".xr_color_field"));
      jQuery(this).remove();
    }), r(a.attr("id")));
    a.find(".tabs-list").length && a.find(".tabs-list").sortable({handle:"i.drag"});
    a.find(".toggles-list").length && a.find(".toggles-list").sortable({handle:"i.drag"});
    a.find(".testimonialsbuilder-list").length && a.find(".testimonialsbuilder-list").sortable({handle:"i.drag"});
    a.find(".teammembers-list").length && a.find(".teammembers-list").sortable({handle:"i.drag"});
  }
  function x(a) {
    var b = jQuery(".rock-builder-template-list").find(":selected").val();
    jQuery.post(rockAjax.ajaxurl, {selected:b, action:"get_rock_builder_references_list"}, function(b) {
      null != b && (jQuery(".rock-builder-template-list").remove(), jQuery(".rock-builder-actions .template-list-holder").append(b), null != a && a());
    });
  }
  function m(a) {
    var b = a;
    f ? ("string" === typeof a && -1 < a.indexOf("#") && (a = a.replace("#", "")), (a = h(a)) || (a = jQuery(b))) : a = jQuery("#" + a);
    a.find(".rock-tinymce-container").hasClass("tmce-active") && "true" === a.find(a.attr("id") + "-editor").attr("initialized") && "undefined" != typeof tinyMCE.get(a.attr("id").replace("#", "") + "-editor") ? (tinyMCE.get(a.attr("id").replace("#", "") + "-editor").save({no_events:!0}), b = tinyMCE.get(a.attr("id").replace("#", "") + "-editor").getContent()) : a.find(".rock-tinymce-container").hasClass("tmce-active") && "undefined" != typeof tinyMCE.get(a.attr("id").replace("#", "") + "-editor") && 
    tinyMCE.get(a.attr("id").replace("#", "") + "-editor") ? (b = tinyMCE.get(a.attr("id").replace("#", "") + "-editor").getContent(), tinyMCE.get(a.attr("id").replace("#", "") + "-editor").save({no_events:!0})) : b = a.find(".rock-tinymce-textarea").val();
    a.find(".rock-tinymce-container .tinymce-hidden-data").length && a.find(".rock-tinymce-container .tinymce-hidden-data").html(b);
    return b;
  }
  function t(a) {
    var b = jQuery(a).find(".rock-tinymce-textarea").val();
    "object" == typeof tinyMCE && "function" == typeof tinyMCE.execCommand && ("true" !== jQuery(a + "-editor").attr("initialized") && (jQuery(a + "-editor").attr("initialized", "true"), jQuery(a + "-editor").parents(".rock-tinymce-container").removeClass("html-active").addClass("tmce-active")), window.tinyMCE.execCommand("mceRemoveEditor", !1, a.replace("#", "") + "-editor"), window.tinyMCE.execCommand("mceAddEditor", !0, a.replace("#", "") + "-editor"), wpActiveEditor = a.replace("#", "") + "-editor", 
    jQuery(a + " .rock-tinymce-container .tinymce-hidden-data").length && (b = jQuery(a + " .rock-tinymce-container .tinymce-hidden-data").html()), "undefined" != typeof tinyMCE.get(a.replace("#", "") + "-editor") && null != tinyMCE.get(a.replace("#", "") + "-editor") && tinyMCE.get(a.replace("#", "") + "-editor").setContent(b), jQuery(a + "-editor").parents(".rock-tinymce-container").hasClass("html-active") && jQuery(a + "-editor").parents(".rock-tinymce-container").removeClass("html-active").addClass("tmce-active"));
  }
  function M(a, b, c) {
    "undefined" == typeof b && (b = jQuery.fn.makeUniqueElemID());
    "undefined" == typeof c && (c = "");
    return {html:'<div id="elem-' + b + '" class="builder-element" elem-type="' + a + '"><div class="hide secret-desc">' + c + '</div><div class="elem-content"><span class="elem-name"><i class="drag fa fa-move"></i> ' + N(a) + '</span><span class="alignright"><i class="fa fa-edit icon-black element-edit-btn"></i><i class="fa fa-copy element-copy-btn"></i><i class="fa fa-times icon-black element-remove-btn"></i></span><div class="clear"></div></div></div>', id:b};
  }
  function O(a, b) {
    var c = jQuery.fn.makeUniqueElemID(), d = a.attr("elem-type"), e = a.find(".secret-desc").html();
    e = M(d, c, e);
    "undefined" == typeof b ? a.after(e.html) : b.find(".grid-content").append(e.html);
    e = jQuery("#" + a.attr("id").toString().replace("elem-", "modal-"));
    f && "textarea" != d && (e = h(a.attr("id").toString().replace("elem-", "modal-")));
    var n = "modal-" + c;
    c = n + "-sortable";
    e.find(".ui-sortable").length && e.find(".ui-sortable").addClass(c).sortable("destroy");
    if (e.find(".rock-tinymce-textarea").length) {
      d = e.find(".rock-tinymce-textarea").attr("id");
      var qa = m(e);
      e.find(".tmce-active");
      window.tinyMCE.execCommand("mceRemoveEditor", !0, d);
      jQuery(d).html(qa);
    }
    e = e.cloneSelects(!0, !0);
    e.attr("id", n);
    e.find("[bind]").each(function() {
      jQuery(this).attr("bind", n);
    });
    e.find("[ref]").each(function() {
      jQuery(this).attr("ref", n);
    });
    e.find("[modalID]").each(function() {
      jQuery(this).attr("modalID", n);
    });
    e.find("[modal-ref]").each(function() {
      jQuery(this).attr("modal-ref", n);
    });
    e.find(".upload_image_button").each(function() {
      jQuery(this).attr("id", n + "-image-uploader");
    });
    e.find(".wp-content-editor-container").each(function() {
      jQuery(this).find("[name]").each(function() {
        jQuery(this).attr("name", n + "-editor");
      });
      jQuery(this).find("[id]").each(function() {
        jQuery(this).attr("id", n + "-editor");
      });
      jQuery(this).find("[aria-labelledby]").each(function() {
        jQuery(this).attr("id", n + "-editor");
      });
    });
    e.find(".swiperslider-modal-image").each(function(a) {
      var b = n + "-" + a;
      jQuery(this).find("[ref]").each(function() {
        jQuery(this).attr("ref", b);
      });
      jQuery(this).find("[id]").each(function() {
        jQuery(this).attr("id", b);
      });
    });
    e.appendTo("#modal-holder");
    e.find("." + c).length && jQuery("." + c).sortable({handle:"i.drag", connectWith:"." + c, helper:function() {
      return '<div class="sortable-drag-helper"><i class="fa fa-magnet"></i></div>';
    }});
    jQuery(document).trigger("rocthemes:modal_added_runtime", [n]);
  }
  function ra() {
    var a = jQuery.fn.makeSpecialUniqueID(), b = '<li id="specialgridblock-close-' + a + '" class="gridsterli specialgridblock block-close" data-row="1" data-col="1" data-sizex="12" data-sizey="1"><div class="grid-header"><strong>Special Grid Close - <span class="columns-num">Block : ' + a + '</span> </strong><span class="alignright "> <i class="fa fa-times icon-black specialgridblock-remove-btn"></i></span></div></li>';
    q.add_widget('<li id="specialgridblock-open-' + a + '" class="gridsterli specialgridblock block-open" data-row="1" data-col="1" data-sizex="12" data-sizey="1"><div class="grid-header"><strong>Special Grid Open - <span class="columns-num">Block : ' + a + '</span> </strong><span class="alignright "><i class="fa fa-gear icon-black specialgridblock-edit-btn"></i> <i class="fa fa-times icon-black specialgridblock-remove-btn"></i></span></div></li>', 12, 1);
    q.add_widget(b, 12, 1);
    sa("specialgridblock-" + a);
  }
  function N(a) {
    switch(a) {
      case "textfield":
        return "Text Field";
      case "textarea":
        return "Text Area";
      case "image":
        return "Image";
      case "ajaxfiltered":
        return "Ajax Filtered Gallery";
      case "featuredimage":
        return "Featured Image";
      case "swiperslider":
        return "Swiper Slider";
      case "pricingtable":
        return "Pricing Table";
      case "curvyslider":
        return "Curvy Slider";
      case "sidebar":
        return "Sidebar";
      case "toggles":
        return "Toggles";
      case "tabs":
        return "Tabs";
      case "iconictext":
        return "Iconic Text";
      case "button":
        return "Button";
      case "skill":
        return "Skill";
      case "horizontalrule":
        return "HR";
      case "portfolio":
        return "Portfolio";
      case "rockformbuilder":
        return "Rock Form Builder";
      case "googlemap":
        return "Google Map";
      case "leafletmap":
        return "LeafLet Map";
      case "promotionbox":
        return "Promotion Box";
      case "alertbox":
        return "Alert Box";
      case "referencesbuilder":
        return "References Builder";
      case "testimonialsbuilder":
        return "Testimonials Builder";
      case "socialicons":
        return "Social Icons";
      case "teammembers":
        return "Team Members";
      case "beforeafterslider":
        return "Before After Slider";
      case "externalshortcode":
        return "External Code";
      case "regularblog":
        return "Regular Blog";
      case "gallery":
        return "Gallery";
    }
    return a;
  }
  function H(a) {
    D++;
    3 <= D && (jQuery(document).trigger("rocthemes:modal_added_runtime", [a]), D = 0);
  }
  function P(a) {
    a = a.replace("elem-", "modal-");
    a = f ? h(a) : jQuery("#" + a);
    var b = {};
    b.postType = a.find(".custom_post_types").find(":selected").val();
    b.imageSize = a.find(".image_sizes").find(":selected").val();
    b.activate_category_link = a.find(".activate_category_link").find(":selected").val();
    b.header_title = a.find(".header_title").val();
    b.category = [];
    a.find(".category_taxonomy").find(":selected").each(function(a, c) {
      b.category[a] = jQuery(c).val();
    });
    var c = 0;
    if (a.find(".category_taxonomy option").length == b.category.length) {
      for (c = 0; c < b.category.length; c++) {
        if (-1 < b.category[c].toString().indexOf(",")) {
          b.category.splice(c, 1);
          break;
        }
      }
    } else {
      var d = !1;
      for (c = 0; c < b.category.length; c++) {
        if (-1 < b.category[c].toString().indexOf(",")) {
          d = !0;
          break;
        }
      }
      d && (b.category = [], a.find(".category_taxonomy option").each(function(a, c) {
        0 > jQuery(c).val().toString().indexOf(",") && b.category.push(jQuery(c).val());
      }));
    }
    b.activate_hover_box = a.find("input.activate_hover_box").is(":checked") ? "true" : "false";
    b.activate_hover = a.find("input.activate_hover").is(":checked") ? "true" : "false";
    b.disable_hover_link = a.find("input.disable_hover_link").is(":checked") ? "true" : "false";
    b.use_shadow = a.find("input.use_shadow").is(":checked") ? "true" : "false";
    b.boxed_layout = a.find("input.boxed_layout").is(":checked") ? "true" : "false";
    b.small_thumb_hover = a.find("input.small_thumb_hover").is(":checked") ? "true" : "false";
    b.block_grid_large = a.find(".block_grid_large").find(":selected").val();
    b.block_grid_medium = a.find(".block_grid_medium").find(":selected").val();
    b.block_grid_small = a.find(".block_grid_small").find(":selected").val();
    b.total = a.find(".total_show").find(":selected").val();
    b.excerpt_length = a.find(".excerpt_length").find(":selected").val();
    b.use_border_on_categories = a.find(".use_border_on_categories").find(":selected").val();
    a = "";
    for (c = 0; c < b.category.length; c++) {
      a += b.category[c], c + 1 < b.category.length && (a += ", ");
    }
    return {data:b, shortcode:'[rockthemes_portfolio_showcase header_title="' + b.header_title + '" excerpt_length="' + b.excerpt_length + '" image_size="' + b.imageSize + '" post_type="' + b.postType + '" category="' + a + '" activate_category_link="' + b.activate_category_link + '" block_grid_large="' + b.block_grid_large + '" block_grid_medium="' + b.block_grid_medium + '" block_grid_small="' + b.block_grid_small + '" total="' + b.total + '" activate_hover_box="' + b.activate_hover_box + '" disable_hover_link="' + 
    b.disable_hover_link + '" activate_hover="' + b.activate_hover + '" use_shadow="' + b.use_shadow + '" use_border_on_categories="' + b.use_border_on_categories + '" small_thumb_hover="' + b.small_thumb_hover + '" boxed_layout="' + b.boxed_layout + '"]'};
  }
  function Q(a) {
    a = a.replace("elem-", "modal-");
    a = f ? h(a) : jQuery("#" + a);
    var b = {};
    b.imageSize = a.find(".image_sizes").find(":selected").val();
    return {data:b, shortcode:'[rockthemes_featuredimage size="' + b.imageSize + '"]'};
  }
  function ta(a) {
    var b = a + "_0";
    jQuery("#" + a + " .upload_image_button").length && (b = a + "_" + (parseInt(jQuery("#" + a + " .upload_image_button").last().attr("id").toString().replace(a + "_", "")) + 1));
    return '<div class="swiperslider-modal-image" ref="' + b + '"><h4>Choose an Image</h4><div class="hide image-data"></div><label for="upload_image"> <input autocomplete="off" id="' + b + '" modalID="' + a + '" class="upload_image_button" size="36" name="upload_image" type="text" value="" /> <input autocomplete="off" class="button image_uploader_class" value="Upload Image" type="button" /> </label><div class="button delete-image-button" ref="' + b + '">Delete Image</div><br /></div>';
  }
  function R(a) {
    a = a.replace("elem-", "modal-");
    a = f ? h(a) : jQuery("#" + a);
    var b = {images:[]}, c = 'images="', d = a.find(".swiperslider-modal-image").length;
    a.find(".swiperslider-modal-image").each(function(a) {
      0 < jQuery(this).find(".upload_image_button").length && (b.images.push(jQuery(this).find(".upload_image_button").val()), c += jQuery(this).find(".upload_image_button").val(), a + 1 < d && (c += ","));
    });
    c += '"';
    b.imageSize = a.find(".image_sizes").find(":selected").val();
    b.maxWidth = a.find(".max_width_holder").val();
    b.avoidSidebar = a.find(".avoid_sidebar").is(":checked") ? "true" : "false";
    return {data:b, shortcode:"[rockthemes_swiperslider " + c + ' size="' + b.imageSize + '" max_width="' + b.maxWidth + '"]'};
  }
  function S(a) {
    a = a.replace("elem-", "modal-");
    var b = f ? h(a) : jQuery("#" + a);
    var c = {tables:[], optionNames:[]};
    c.maxWidth = b.find(".max_width_holder").val();
    c.featuredText = b.find(".featured_text").val();
    c.show_details_in_tables = b.find(".show_details_in_tables").is(":checked") ? "true" : "false";
    b.find(".option-name-holder .new-option").each(function() {
      c.optionNames.push(jQuery(this).find("input").val());
    });
    a = b.find(".table-elem").length;
    a = '[rockthemes_pricingtable max_width="' + c.maxWidth + '" total_tables="' + a + '"]';
    var d = "";
    b.find(".table-elem").each(function(a) {
      var e = {};
      e.packageName = jQuery(this).find(".pt-package-name").val();
      e.packageDetail = jQuery(this).find(".pt-package-detail").val();
      e.packageFeatured = jQuery(this).find(".set_featured").is(":checked") ? "true" : "false";
      e.packageTime = jQuery(this).find(".pt-package-time").val();
      e.packagePrice = jQuery(this).find(".price").val();
      e.featuredText = c.featuredText;
      e.packageOptions = [];
      var f = " ";
      jQuery(this).find(".new-option").each(function(a) {
        var c = {};
        c.name = b.find(".option-name-holder .new-option").eq(a).find("input").val();
        c.value = jQuery(this).find("input").val();
        c.icon_class = jQuery(this).find(".elem-icon .icon-holder").attr("icon-ref");
        c.icon_url = jQuery(this).find(".add-elem-icon-text").val();
        e.packageOptions.push(c);
        f += "option_name" + a + '="' + c.name + '" option_value' + a + '="' + c.value + '" icon_class' + a + '="' + c.icon_class + '" icon_url="' + c.icon_url + '" ';
      });
      e.button_json_data = jQuery(this).find(".button_json_data").val();
      e.button_shortcode = jQuery(this).find(".button_shortcode").val();
      d += '[rockthemes_pricingtable_table show_details="' + c.show_details_in_tables + '" package_name="' + e.packageName + '" package_detail="' + e.packageDetail + '" package_featured="' + e.packageFeatured + '" package_time="' + e.packageTime + '" package_price="' + e.packagePrice + '" ';
      d += 'featured_text="' + e.featuredText + '" ';
      d += f + "]";
      d += e.button_shortcode + "[/rockthemes_pricingtable_table]";
      c.tables.push(e);
    });
    return {data:c, shortcode:a + d + "[/rockthemes_pricingtable]"};
  }
  function T(a) {
    a = a.replace("elem-", "modal-");
    a = f ? h(a) : jQuery("#" + a);
    var b = {};
    b.autoPlay = a.find(".activate_autoplay").is(":checked") ? "true" : "false";
    b.slider_bottom_divider = a.find(".slider_bottom_divider").find(":selected").val();
    b.slider_basic_shortcode = a.find(".curvy_slider_list").find(":selected").val();
    a.find(".curvy_slider_list").length && a.find(".curvy_slider_list").find(":selected") ? (b.shortcode = a.find(".curvy_slider_list").find(":selected").val(), b.shortcode = b.shortcode.toString().replace("]", ""), b.shortcode += ' auto_play="' + b.autoPlay + '" slider_bottom_divider="' + b.slider_bottom_divider + '"]') : b.shortcode = "";
    return {data:b, shortcode:b.shortcode};
  }
  function U(a) {
    a = a.replace("elem-", "modal-");
    a = f ? h(a) : jQuery("#" + a);
    var b = {};
    b.id = a.find(".sidebar-list-select").find(":selected").val();
    b.name = a.find(".sidebar-list-select").find(":selected").html();
    return {data:b, shortcode:b.id};
  }
  function V(a) {
    a = a.replace("elem-", "modal-");
    a = f ? h(a) : jQuery("#" + a);
    var b = {};
    b.toggleType = a.find(".toggle-type").find(":selected").val();
    b.boxed_layout = a.find("input.boxed_layout").is(":checked") ? "true" : "false";
    b.use_shadow = a.find("input.use_shadow").is(":checked") ? "true" : "false";
    b.openToggleIndex = a.find(".open_toggle_index").val();
    b.shortcode = "";
    b.shortcode += '[rockthemes_toggles toggle_type="' + b.toggleType + '" avoid_sidebar="' + b.avoidSidebar + '" boxed_layout="' + b.boxed_layout + '" open_toggle_index="' + b.openToggleIndex + '"]';
    b.toggles = [];
    var c = "";
    a.find(".toggles-list .toggles-block").each(function(a, e) {
      var d = jQuery(this).find(".secret-desc").attr("icon_class"), f = jQuery(this).find(".secret-desc").attr("icon_url");
      c += '[rockthemes_toggles_single use_shadow="' + b.use_shadow + '" title="' + jQuery(this).find(".secret-desc").attr("toggle-title") + '" icon_class="' + d + '" icon_url="' + f + '"]';
      c += jQuery(this).find(".secret-desc").html() + "[/rockthemes_toggles_single]";
      b.toggles.push({title:jQuery(this).find(".secret-desc").attr("toggle-title"), text:jQuery(this).find(".secret-desc").html(), icon_class:d, icon_url:f});
    });
    b.shortcode += c + "[/rockthemes_toggles]";
    return {data:b, shortcode:b.shortcode};
  }
  function W(a) {
    a = a.replace("elem-", "modal-");
    a = f ? h(a) : jQuery("#" + a);
    var b = {};
    b.tabType = a.find(".tab-type").find(":selected").val();
    b.boxed_layout = a.find("input.boxed_layout").is(":checked") ? "true" : "false";
    b.use_shadow = a.find("input.use_shadow").is(":checked") ? "true" : "false";
    b.openTabIndex = a.find(".open_tab_index").val();
    b.shortcode = "";
    b.shortcode += '[rockthemes_tabs tab_type="' + b.tabType + '" avoid_sidebar="' + b.avoidSidebar + '" use_shadow="' + b.use_shadow + '" boxed_layout="' + b.boxed_layout + '" open_tab_index="' + b.openTabIndex + '"]';
    b.tabs = [];
    var c = "";
    a.find(".tabs-list .tabs-block").each(function(a, e) {
      var d = jQuery(this).find(".secret-desc").attr("icon_class"), f = jQuery(this).find(".secret-desc").attr("icon_url");
      c += '[rockthemes_tabs_single title="' + jQuery(this).find(".secret-desc").attr("tab-title") + '" icon_class="' + d + '" icon_url="' + f + '"]';
      c += jQuery(this).find(".secret-desc").html() + "[/rockthemes_tabs_single]";
      b.tabs.push({title:jQuery(this).find(".secret-desc").attr("tab-title"), text:jQuery(this).find(".secret-desc").html(), icon_class:d, icon_url:f});
    });
    b.shortcode += c + "[/rockthemes_tabs]";
    return {data:b, shortcode:b.shortcode};
  }
  function X(a) {
    a = a.replace("elem-", "modal-");
    var b = f ? h(a) : jQuery("#" + a);
    var c = {};
    c.iconAlign = b.find(".icon_align").find(":selected").val();
    c.boxed_layout = b.find("input.boxed_layout").is(":checked") ? "true" : "false";
    c.use_shadow = b.find("input.use_shadow").is(":checked") ? "true" : "false";
    c.iconClass = b.find(".elem-icon .icon-holder").attr("icon-ref");
    c.iconURL = b.find(".add-elem-icon-text").val();
    c.iconSize = b.find(".icon_size").find(":selected").val();
    c.title = b.find(".iconic-title").val();
    c.content = m("#" + a);
    c.icon_box_model = b.find(".icon_box_model").find(":selected").val();
    c.link_details = Y(b.find(".link_select"));
    c.shortcode = "";
    c.shortcode += '[rockthemes_iconictext icon_align="' + c.iconAlign + '" icon_size="' + c.iconSize + '" avoid_sidebar="' + c.avoidSidebar + '" icon_title="' + c.title + '" link_url="' + c.link_details.url + '" link_id="' + c.link_details.post_id + '" link_is_tax="' + c.link_details.is_tax + '" tax_name="' + c.link_details.tax_name + '" boxed_layout="' + c.boxed_layout + '" icon_box_model="' + c.icon_box_model + '" use_shadow="' + c.use_shadow + '" icon_class="' + c.iconClass + '" icon_url="' + 
    c.iconURL + '"]';
    c.shortcode += c.content + "[/rockthemes_iconictext]";
    return {data:c, shortcode:c.shortcode};
  }
  function E(a) {
    a = a.replace("elem-", "modal-");
    var b;
    f ? (b = h(a)) || (b = jQuery("#" + a)) : b = jQuery("#" + a);
    a = {};
    a.button_align = b.find(".button_align").find(":selected").val();
    a.button_size = b.find(".button_size").find(":selected").val();
    a.button_color = b.find(".button_color").find(":selected").val();
    a.button_flat = b.find(".button_flat").find(":selected").val();
    a.button_shape = b.find(".button_shape").find(":selected").val();
    a.button_wrap = b.find(".button_wrap").find(":selected").val();
    a.button_link_target = b.find(".button_link_target").find(":selected").val();
    a.iconAlign = b.find(".icon_align").find(":selected").val();
    a.iconClass = b.find(".elem-icon .icon-holder").attr("icon-ref");
    a.iconURL = b.find(".add-elem-icon-text").val();
    a.title = b.find(".iconic-title").val();
    a.link_details = Y(b.find(".link_select"));
    a.shortcode = "";
    a.shortcode += '[rockthemes_button icon_align="' + a.iconAlign + '" icon_title="' + a.title + '" button_size="' + a.button_size + '" button_color="' + a.button_color + '" button_flat="' + a.button_flat + '" button_shape="' + a.button_shape + '" button_wrap="' + a.button_wrap + '" button_link_target="' + a.button_link_target + '" button_align="' + a.button_align + '" link_url="' + a.link_details.url + '" link_id="' + a.link_details.post_id + '" link_is_tax="' + a.link_details.is_tax + '" tax_name="' + 
    a.link_details.tax_name + '" icon_class="' + a.iconClass + '" icon_url="' + a.iconURL + '"]';
    a.shortcode += a.title + "[/rockthemes_button]";
    return {data:a, shortcode:a.shortcode};
  }
  function I(a) {
    a = a.replace("elem-", "modal-");
    a = f ? h(a) : jQuery("#" + a);
    var b = {};
    b.skill_title = a.find(".skill_title").val();
    b.skill_min_value = a.find(".skill_min_value").val();
    b.skill_max_value = a.find(".skill_max_value").val();
    b.skill_current_value = a.find(".skill_current_value").val();
    b.skill_color = a.find(".xr_color_field").val();
    b.shortcode = "";
    b.shortcode += '[rockthemes_skill skill_title="' + b.skill_title + '" skill_color="' + b.skill_color + '" skill_min_value="' + b.skill_min_value + '" skill_max_value="' + b.skill_max_value + '" skill_current_value="' + b.skill_current_value + '" skill_size="' + b.skill_size + '"]';
    b.shortcode += b.title + "[/rockthemes_skill]";
    return {data:b, shortcode:b.shortcode};
  }
  function ua(a) {
    a = a.replace("elem-", "modal-");
    a = f ? h(a) : jQuery("#" + a);
    var b = {};
    b.postType = a.find(".custom_post_types").find(":selected").val();
    b.imageSize = a.find(".image_sizes").find(":selected").val();
    b.header_title = a.find(".header_title").val();
    b.category = [];
    a.find(".category_taxonomy").find(":selected").each(function(a, c) {
      b.category[a] = jQuery(c).val();
    });
    var c = 0;
    if (a.find(".category_taxonomy option").length == b.category.length) {
      for (c = 0; c < b.category.length; c++) {
        if (-1 < b.category[c].toString().indexOf(",")) {
          b.category.splice(c, 1);
          break;
        }
      }
    } else {
      var d = !1;
      for (c = 0; c < b.category.length; c++) {
        if (-1 < b.category[c].toString().indexOf(",")) {
          d = !0;
          break;
        }
      }
      d && (b.category = [], a.find(".category_taxonomy option").each(function(a, c) {
        0 > jQuery(c).val().toString().indexOf(",") && b.category.push(jQuery(c).val());
      }));
    }
    b.activate_hover_box = a.find("input.activate_hover_box").is(":checked") ? "true" : "false";
    b.activate_hover = a.find("input.activate_hover").is(":checked") ? "true" : "false";
    b.disable_hover_link = a.find("input.disable_hover_link").is(":checked") ? "true" : "false";
    b.boxed_layout = a.find("input.boxed_layout").is(":checked") ? "true" : "false";
    b.small_thumb_hover = a.find("input.small_thumb_hover").is(":checked") ? "true" : "false";
    b.block_grid_large = a.find(".block_grid_large").find(":selected").val();
    b.block_grid_medium = a.find(".block_grid_medium").find(":selected").val();
    b.block_grid_small = a.find(".block_grid_small").find(":selected").val();
    b.excerpt_title_option = a.find(".excerpt_title_option").find(":selected").val();
    b.excerpt_length = a.find(".excerpt_length").find(":selected").val();
    b.total = a.find(".total_show").find(":selected").val();
    b.pagination = a.find("input.pagination").is(":checked") ? "true" : "false";
    b.portfolio_model = a.find(".portfolio_model").find(":selected").val();
    b.portfolio_model_switch = a.find(".portfolio_model_switch").find(":selected").val();
    b.activate_category_link = a.find(".activate_category_link").find(":selected").val();
    b.activate_header_link = a.find(".activate_header_link").find(":selected").val();
    b.use_shadow = a.find("input.use_shadow").is(":checked") ? "true" : "false";
    a = "";
    for (c = 0; c < b.category.length; c++) {
      a += b.category[c], c + 1 < b.category.length && (a += ", ");
    }
    b.shortcode = '[rockthemes_portfolio header_title="' + b.header_title + '" image_size="' + b.imageSize + '" post_type="' + b.postType + '" category="' + a + '" pagination="' + b.pagination + '" portfolio_model="' + b.portfolio_model + '" portfolio_model_switch="' + b.portfolio_model_switch + '" activate_category_link="' + b.activate_category_link + '" activate_header_link="' + b.activate_header_link + '" use_shadow="' + b.use_shadow + '" block_grid_large="' + b.block_grid_large + '" block_grid_medium="' + 
    b.block_grid_medium + '" block_grid_small="' + b.block_grid_small + '" total="' + b.total + '" excerpt_title_option="' + b.excerpt_title_option + '" excerpt_length="' + b.excerpt_length + '" activate_hover_box="' + b.activate_hover_box + '" activate_hover="' + b.activate_hover + '" disable_hover_link="' + b.disable_hover_link + '" small_thumb_hover="' + b.small_thumb_hover + '" boxed_layout="' + b.boxed_layout + '"]';
    return {data:b, shortcode:b.shortcode};
  }
  function Z(a) {
    a = a.replace("elem-", "modal-");
    a = f ? h(a) : jQuery("#" + a);
    var b = {};

    if(!a.find('.rockthemes_fb_list').length){
      return {data:{shortcode:''},shortcode:''};
    }

    b.shortcode = a.find(".rockthemes_fb_list").find(":selected").val();
    b.shortcode = b.shortcode.toString().replace("]", "");
    b.shortcode += "]";
    return {data:b, shortcode:b.shortcode};
  }
  function aa(a) {
    a = a.replace("elem-", "modal-");
    var b = f ? h(a) : jQuery("#" + a);
    var c = {};
    c.api_key = b.find(".api_key").val();
    c.marker_title = b.find(".marker_title").val();
    c.lat = b.find(".lat").val();
    c.lng = b.find(".lng").val();
    c.zoom_level = b.find(".zoom_level").val();
    c.map_type = b.find(".map_type").find(":selected").val();
    c.sensor = b.find(".sensor").val();
    c.height = b.find(".height").val();
    c.resize_height = b.find(".resize_height").val();
    c.content = m("#" + a);
    c.shortcode = '[rockthemes_google_map api_key="' + c.api_key + '" marker_title="' + c.marker_title + '" lat="' + c.lat + '" lng="' + c.lng + '" zoom_level="' + c.zoom_level + '" map_type="' + c.map_type + '" sensor="' + c.sensor + '" height="' + c.height + '" resize_height="' + c.resize_height + '"';
    c.shortcode += "]" + c.content + "[/rockthemes_google_map]";
    return {data:c, shortcode:c.shortcode};
  }
  function ba(a) {
    a = a.replace("elem-", "modal-");
    var b = f ? h(a) : jQuery("#" + a);
    var c = {};
    c.api_key = b.find(".api_key").val();
    c.lat = b.find(".lat").val();
    c.lng = b.find(".lng").val();
    c.zoom_level = b.find(".zoom_level").val();
    c.height = b.find(".height").val();
    c.fullscreen = b.find(".fullscreen").find(":selected").val();
    c.content = m("#" + a);
    a = c.content;
    c.shortcode = '[rockthemes_leaflet_map api_key="' + c.api_key + '" lat="' + c.lat + '" lng="' + c.lng + '" zoom_level="' + c.zoom_level + '" fullscreen="' + c.fullscreen + '" height="' + c.height + '"';
    c.shortcode += "]" + a + "[/rockthemes_leaflet_map]";
    return {data:c, shortcode:c.shortcode};
  }
  function ca(a) {
    a = a.replace("elem-", "modal-");
    var b = f ? h(a) : jQuery("#" + a);
    var c = {};
    c.button_json_data = b.find(".button_json_data").val();
    c.button_shortcode = b.find(".button_shortcode").val();
    c.content = m("#" + a);
    c.background_color = b.find(".background_color .xr_color_field").val();
    c.font_color = b.find(".font_color .xr_color_field").val();
    '""' === c.button_shortcode && (c.button_shortcode = '[rockthemes_button icon_align="left" icon_title="Awesome Button" button_size="" button_color="" button_flat="no" button_shape="" button_wrap="no" button_link_target="" link_url="false" link_id="false" link_is_tax="false" tax_name="no-selected" icon_class="" icon_url=""]Awesome Button[/rockthemes_button]');
    c.shortcode = '[rockthemes_promotion_box background_color="' + c.background_color + '" font_color="' + c.font_color + '"';
    c.shortcode += "]" + (c.content + "&rss;" + c.button_shortcode + "&rse;") + "[/rockthemes_promotion_box]";
    return {data:c, shortcode:c.shortcode};
  }
  function da(a) {
    a = a.replace("elem-", "modal-");
    var b = f ? h(a) : jQuery("#" + a);
    var c = {};
    c.content = m("#" + a);
    c.background_color = b.find(".background_color .xr_color_field").val();
    c.font_color = b.find(".font_color .xr_color_field").val();
    c.border_color = b.find(".border_color .xr_color_field").val();
    c.alertbox_style = b.find(".alertbox_style").find(":selected").val();
    c.iconClass = b.find(".elem-icon .icon-holder").attr("icon-ref");
    c.iconURL = b.find(".add-elem-icon-text").val();
    c.use_close_button = b.find(".use_close_button").find(":selected").val();
    c.shortcode = '[rockthemes_alert_box border_color="' + c.border_color + '" background_color="' + c.background_color + '" font_color="' + c.font_color + '" alertbox_style="' + c.alertbox_style + '" icon_class="' + c.iconClass + '" icon_url="' + c.iconURL + '" use_close_button="' + c.use_close_button + '"';
    c.shortcode += "]" + c.content + "[/rockthemes_alert_box]";
    return {data:c, shortcode:c.shortcode};
  }
  function ea(a) {
    a = a.replace("elem-", "modal-");
    a = f ? h(a) : jQuery("#" + a);
    var b = {};
    b.duration_time = a.find(".duration_time").val();
    b.references_title = a.find(".references_title").val();
    b.activate_navigation = a.find(".activate_navigation").find(":selected").val();
    b.auto_slide = a.find(".auto_slide").find(":selected").val();
    b.block_grid_large = a.find(".block_grid_large").find(":selected").val();
    b.block_grid_medium = a.find(".block_grid_medium").find(":selected").val();
    b.block_grid_small = a.find(".block_grid_small").find(":selected").val();
    b.image_size = a.find(".image_sizes").find(":selected").val();
    b.saved_logo_data = [];
    var c = "", d = a.find(".references-single-item").length;
    a.find(".references-single-item").each(function(a) {
      b.saved_logo_data.push({img_url:jQuery(this).find(".upload_image_button").val(), link_url:jQuery(this).find(".link_url").val()});
      c += jQuery(this).find(".upload_image_button").val() + "&,;" + jQuery(this).find(".link_url").val();
      a + 1 < d && (c += "&next;");
    });
    b.shortcode = '[rockthemes_references_builder references="' + c + '" image_size="' + b.image_size + '" duration_time="' + b.duration_time + '" references_title="' + b.references_title + '" activate_navigation="' + b.activate_navigation + '" auto_slide="' + b.auto_slide + '" block_grid_large="' + b.block_grid_large + '" block_grid_medium="' + b.block_grid_medium + '" block_grid_small="' + b.block_grid_small + '"';
    b.shortcode += "]";
    return {data:b, shortcode:b.shortcode};
  }
  function fa(a) {
    a = a.replace("elem-", "modal-");
    a = f ? h(a) : jQuery("#" + a);
    var b = {};
    b.boxed_layout = a.find("input.boxed_layout").is(":checked") ? "true" : "false";
    b.duration_time = a.find(".duration_time").val();
    b.testimonials_title = a.find(".testimonials_title").val();
    b.activate_navigation = a.find(".activate_navigation").find(":selected").val();
    b.auto_slide = a.find(".auto_slide").find(":selected").val();
    b.shortcode = "";
    b.shortcode += '[rockthemes_testimonials_builder duration_time="' + b.duration_time + '" testimonials_title="' + b.testimonials_title + '" activate_navigation="' + b.activate_navigation + '" auto_slide="' + b.auto_slide + '" boxed_layout="' + b.boxed_layout + '"]';
    b.testimonials = [];
    var c = "";
    a.find(".testimonialsbuilder-list .testimonialsbuilder-block").each(function(a, e) {
      var d = jQuery(this).find(".secret-desc").attr("company");
      c += '[rockthemes_testimonials_builder_single name="' + jQuery(this).find(".secret-desc").attr("testimonialsbuilder-title") + '" company="' + d + '"]';
      c += jQuery(this).find(".secret-desc").html() + "[/rockthemes_testimonials_builder_single]";
      b.testimonials.push({title:jQuery(this).find(".secret-desc").attr("testimonialsbuilder-title"), text:jQuery(this).find(".secret-desc").html(), company:d});
    });
    b.shortcode += c + "[/rockthemes_testimonials_builder]";
    return {data:b, shortcode:b.shortcode};
  }
  function J(a, b) {
    "undefined" == typeof b && (b = !1);
    a = a.replace("elem-", "modal-");
    var c = f ? h(a) : jQuery("#" + a);
    b && (c = jQuery("#" + a));
    var d = {shortcode:""};
    d.shortcode += "[rockthemes_social_icons]";
    d.socialicons = [];
    var e = "";
    c.find(".socialicons-list .socialicons-block").each(function(a, b) {
      var c = jQuery(this).find(".secret-desc").attr("icon_class"), f = jQuery(this).find(".secret-desc").attr("icon_url");
      e += '[rockthemes_social_icons_single url="' + jQuery(this).find(".secret-desc").attr("socialicons-title") + '" icon_class="' + c + '" icon_url="' + f + '"]';
      e += jQuery(this).find(".secret-desc").html() + "[/rockthemes_social_icons_single]";
      d.socialicons.push({title:jQuery(this).find(".secret-desc").attr("socialicons-title"), icon_class:c, icon_url:f});
    });
    d.shortcode += e + "[/rockthemes_social_icons]";
    return {data:d, shortcode:d.shortcode};
  }
  function ha(a) {
    a = a.replace("elem-", "modal-");
    a = f ? h(a) : jQuery("#" + a);
    var b = {};
    b.teammembers_title = a.find(".teammembers_title").val();
    b.social_icons_title = a.find(".social_icons_title").val();
    b.selected_columns = a.find(".selected_columns").find(":selected").val();
    b.shortcode = "";
    b.shortcode += '[rockthemes_team_members teammembers_title="' + b.teammembers_title + '" selected_columns="' + b.selected_columns + '"]';
    b.teammembers = [];
    var c = "";
    a.find(".teammembers-list .teammembers-block").each(function(a, e) {
      var d = jQuery(this).find(".secret-desc").attr("company"), f = jQuery(this).find(".secret-desc").attr("external_url"), h = jQuery(this).find(".social_data").html(), k = jQuery(this).find(".social_shortcode").html(), g = jQuery(this).find(".secret-desc").attr("member_image_url");
      c += '[rockthemes_team_members_single name="' + jQuery(this).find(".secret-desc").attr("teammembers-title") + '" company="' + d + '" external_url="' + f + '" member_image_url="' + g + '" social_icons_title="' + b.social_icons_title + '"]';
      var l = jQuery(this).find(".secret-desc").html() + "&rss;" + k + "&rse;";
      c += l + "[/rockthemes_team_members_single]";
      b.teammembers.push({title:jQuery(this).find(".secret-desc").attr("teammembers-title"), text:jQuery(this).find(".secret-desc").html(), company:d, external_url:f, member_image_url:g, social_data:h, social_shortcode:k});
    });
    b.shortcode += c + "[/rockthemes_team_members]";
    return {data:b, shortcode:b.shortcode};
  }
  function ia(a) {
    a = a.replace("elem-", "modal-");
    a = f ? h(a) : jQuery("#" + a);
    var b = {};
    b.image_size = a.find(".image_sizes").find(":selected").val();
    b.before_image_url = a.find(".before_image_url").val();
    b.after_image_url = a.find(".after_image_url").val();
    b.height = a.find(".height").val();
    b.min_width = a.find(".min_width").val();
    b.activate_navigation = a.find(".activate_navigation").find(":selected").val();
    b.shortcode = '[rockthemes_before_after_slider image_size="' + b.image_size + '" before_image_url="' + b.before_image_url + '" after_image_url="' + b.after_image_url + '" height="' + b.height + '" min_width="' + b.min_width + '" activate_navigation="' + b.activate_navigation + '"';
    b.shortcode += "]";
    return {data:b, shortcode:b.shortcode};
  }
  function ja(a) {
    a = a.replace("elem-", "modal-");
    a = f ? h(a) : jQuery("#" + a);
    var b = {};
    b.shortcode = a.find(".shortcode").val();
    return {data:b, shortcode:b.shortcode};
  }
  function ka(a) {
    a = a.replace("elem-", "modal-");
    a = f ? h(a) : jQuery("#" + a);
    var b = {};
    b.regular_content = a.find(".regular_content").find(":selected").val();
    b.image_size = a.find(".image_sizes").find(":selected").val();
    b.hover_active = a.find(".hover_active").find(":selected").val();
    b.image_col = a.find(".block_grid_large").find(":selected").val();
    b.excerpt_length = a.find(".excerpt_length").find(":selected").val();
    b.header_link = a.find(".header_link").find(":selected").val();
    b.show_categories = a.find(".show_categories").find(":selected").val();
    b.show_tags = a.find(".show_tags").find(":selected").val();
    b.show_date = a.find(".show_date").find(":selected").val();
    b.pagination = a.find(".pagination").find(":selected").val();
    b.sticky_first = a.find(".sticky_first").find(":selected").val();
    b.total = a.find(".total").val();
    b.space_height = a.find(".space_height").val();
    b.shortcode = '[rockthemes_regular_blog regular_content="' + b.regular_content + '" image_size="' + b.image_size + '" hover_active="' + b.hover_active + '" image_col="' + b.image_col + '" excerpt_length="' + b.excerpt_length + '" header_link="' + b.header_link + '" show_categories="' + b.show_categories + '" show_tags="' + b.show_tags + '" show_date="' + b.show_date + '" sticky_first="' + b.sticky_first + '" pagination="' + b.pagination + '" total="' + b.total + '" space_height="' + b.space_height + 
    '"';
    b.shortcode += "]";
    return {data:b, shortcode:b.shortcode};
  }
  function la(a) {
    a = a.replace("elem-", "modal-");
    a = f ? h(a) : jQuery("#" + a);
    var b = {};
    b.postType = a.find(".custom_post_types").find(":selected").val();
    b.imageSize = a.find(".image_sizes").find(":selected").val();
    b.header_title = a.find(".header_title").val();
    b.category = [];
    a.find(".category_taxonomy").find(":selected").each(function(a, c) {
      b.category[a] = jQuery(c).val();
    });
    var c = 0;
    if (a.find(".category_taxonomy option").length == b.category.length) {
      for (c = 0; c < b.category.length; c++) {
        if (-1 < b.category[c].toString().indexOf(",")) {
          b.category.splice(c, 1);
          break;
        }
      }
    } else {
      var d = !1;
      for (c = 0; c < b.category.length; c++) {
        if (-1 < b.category[c].toString().indexOf(",")) {
          d = !0;
          break;
        }
      }
      d && (b.category = [], a.find(".category_taxonomy option").each(function(a, c) {
        0 > jQuery(c).val().toString().indexOf(",") && b.category.push(jQuery(c).val());
      }));
    }
    b.activate_hover_box = a.find("input.activate_hover_box").is(":checked") ? "true" : "false";
    b.activate_hover = a.find("input.activate_hover").is(":checked") ? "true" : "false";
    b.disable_hover_link = a.find("input.disable_hover_link").is(":checked") ? "true" : "false";
    b.boxed_layout = a.find("input.boxed_layout").is(":checked") ? "true" : "false";
    b.small_thumb_hover = a.find("input.small_thumb_hover").is(":checked") ? "true" : "false";
    b.block_grid_large = a.find(".block_grid_large").find(":selected").val();
    b.block_grid_medium = a.find(".block_grid_medium").find(":selected").val();
    b.block_grid_small = a.find(".block_grid_small").find(":selected").val();
    b.excerpt_title_option = a.find(".excerpt_title_option").find(":selected").val();
    b.excerpt_length = a.find(".excerpt_length").find(":selected").val();
    b.total = a.find(".total_show").find(":selected").val();
    b.pagination = a.find("input.pagination").is(":checked") ? "true" : "false";
    b.masonry = a.find("input.masonry").is(":checked") ? "true" : "false";
    b.load_more = a.find("input.load_more").is(":checked") ? "true" : "false";
    b.lightbox_gallery = a.find("input.lightbox_gallery").is(":checked") ? "true" : "false";
    b.activate_category_link = a.find(".activate_category_link").find(":selected").val();
    b.activate_header_link = a.find(".activate_header_link").find(":selected").val();
    b.use_shadow = a.find("input.use_shadow").is(":checked") ? "true" : "false";
    a = "";
    for (c = 0; c < b.category.length; c++) {
      a += b.category[c], c + 1 < b.category.length && (a += ", ");
    }
    b.shortcode = '[rockthemes_gallery header_title="' + b.header_title + '" image_size="' + b.imageSize + '" post_type="' + b.postType + '" category="' + a + '" pagination="' + b.pagination + '" masonry="' + b.masonry + '" load_more="' + b.load_more + '" lightbox_gallery="' + b.lightbox_gallery + '" portfolio_model="' + b.portfolio_model + '" portfolio_model_switch="' + b.portfolio_model_switch + '" activate_category_link="' + b.activate_category_link + '" activate_header_link="' + b.activate_header_link + 
    '" use_shadow="' + b.use_shadow + '" block_grid_large="' + b.block_grid_large + '" block_grid_medium="' + b.block_grid_medium + '" block_grid_small="' + b.block_grid_small + '" total="' + b.total + '" excerpt_title_option="' + b.excerpt_title_option + '" excerpt_length="' + b.excerpt_length + '" activate_hover_box="' + b.activate_hover_box + '" activate_hover="' + b.activate_hover + '" disable_hover_link="' + b.disable_hover_link + '" small_thumb_hover="' + b.small_thumb_hover + '" boxed_layout="' + 
    b.boxed_layout + '"]';
    return {data:b, shortcode:b.shortcode};
  }
  function sa(a) {
    var b = {};
    b.id = a;
    jQuery.post(rockAjax.ajaxurl, {ajax_object:b, action:"rockthemes_pb_make_specialgridblock_modal"}, function(c) {
      null != c && (jQuery("#modal-holder").append(c), r("modal-" + b.id), jQuery(document).trigger("rocthemes:modal_added_runtime", ["modal-" + a]));
    });
  }
  function va(a) {
    a = "modal-" + a.toString().replace("open-", "");
    a = f ? h(a) : jQuery("#" + a);
    var b = {};
    b.avoidSidebar = a.find(".avoid_sidebar").find(":selected").val();
    b.grid_special_width_details = a.find(".grid_special_width_details").find(":selected").val();
    b.background_color = a.find(".background_color .xr_color_field").val();
    b.use_shadow = a.find(".use_shadow").find(":selected").val();
    b.activate_padding = a.find(".activate_padding").find(":selected").val();
    b.transparent_background = a.find(".transparent_background").is(":checked") ? "true" : "false";
    b.special_grid_html_id = a.find(".special_grid_html_id").val();
    b.parallax_model = a.find(".parallax_model").find(":selected").val();
    b.parallax_mask_height = a.find(".parallax_mask_height").val();
    b.parallax_bg_image = a.find(".upload_image_button").val();
    b.shortcode = '[rockthemes_specialgridblock avoid_sidebar="' + b.avoidSidebar + '" grid_special_width_details="' + b.grid_special_width_details + '" background_color="' + b.background_color + '" use_shadow="' + b.use_shadow + '" activate_padding="' + b.activate_padding + '" transparent_background="' + b.transparent_background + '" special_grid_html_id="' + b.special_grid_html_id + '" parallax_model="' + b.parallax_model + '" parallax_mask_height="' + b.parallax_mask_height + '" parallax_bg_image="' + 
    b.parallax_bg_image + '" ]';
    return {data:b};
  }
  function wa(a) {
    var b = {};
    b.id = a;
    jQuery.post(rockAjax.ajaxurl, {ajax_object:b, action:"xr_make_grid_modal"}, function(c) {
      null != c && (jQuery("#modal-holder").append(c), r("modal-" + b.id), jQuery(document).trigger("rocthemes:modal_added_runtime", ["modal-" + a]));
    });
  }
  function xa(a) {
    a = "modal-" + a;
    a = f ? h(a) : jQuery("#" + a);
    var b = {};
    b.animation_type = a.find(".animation_type").find(":selected").val();
    b.animation_delay_time = a.find(".animation_delay_time").val();
    return {data:b};
  }
  function Y(a) {
    if ("undefined" != typeof a && !(0 > a.parent().find(".link_select_page").length && 0 > a.parent().find(".link_custom_input").length)) {
      var b = {url:!1, post_id:!1, is_tax:!1, tax_name:!1};
      if (0 > a.find(":selected").length) {
        return b;
      }
      b.tax_name = a.find(":selected").val();
      var c = a.parent().parent().find(".link_select_page").find(":selected").val();
      if ("no-selected" == c) {
        return b;
      }
      if ("custom-link" == a.find(":selected").val()) {
        return b.url = a.parent().parent().find(".link_custom_input").val(), b;
      }
      if ("yes" == a.find(":selected").attr("is_page")) {
        return b.post_id = c, b.is_tax = !1, b;
      }
      "no" == a.find(":selected").attr("is_page") && (b.post_id = c, b.is_tax = !0);
      return b;
    }
  }
  function l(a) {
    var b = null;
    0 < a.find(".rock-tinymce-container textarea").length && (b = a.find(".rock-tinymce-container textarea"));
    jQuery(document).on("hidden", "#" + a.attr("id"), function() {
      b && (window.tinyMCE.execCommand("mceRemoveEditor", !0, b.attr("id")), wpActiveEditor = "content");
      setTimeout(function() {
        a.remove();
      }, 700);
    });
    a.rpb_modal("hide");
  }
  function z(a, b, c) {
    jQuery("#save-current-settings-btn").attr("way");
    var d = [], e = "", n = "false";
    jQuery(".gridster li.gridsterli ").each(function() {
      var a = [];
      jQuery(this).find(".builder-element").length && jQuery(this).find(".builder-element").each(function(b) {
        b = jQuery(this).attr("id").split("-");
        switch(jQuery(this).attr("elem-type")) {
          case "textfield":
            b = {descType:"textfield", desc:"null"};
            break;
          case "textarea":
            var c = jQuery(this).attr("id"), d = {};
            d.avoidSidebar = jQuery("#" + c + " .secret-desc").attr("avoid_sidebar");
            b = {id:b[1], descType:"textarea", data:{data:d}, desc:jQuery.fn.getTextareaDescForSave(jQuery(this).attr("id"))};
            break;
          case "ajaxfiltered":
            c = P(jQuery(this).attr("id"));
            b = {id:b[1], descType:"ajaxfiltered", data:c, desc:c.shortcode};
            break;
          case "featuredimage":
            n = "true";
            c = Q(jQuery(this).attr("id"));
            b = {id:b[1], descType:"featuredimage", data:c, desc:c.shortcode};
            break;
          case "swiperslider":
            c = R(jQuery(this).attr("id"));
            b = {id:b[1], descType:"swiperslider", data:c, desc:c.shortcode};
            break;
          case "pricingtable":
            c = S(jQuery(this).attr("id"));
            b = {id:b[1], descType:"pricingtable", data:c, desc:c.shortcode};
            break;
          case "curvyslider":
            c = T(jQuery(this).attr("id"));
            b = {id:b[1], descType:"curvyslider", data:c, desc:c.shortcode};
            break;
          case "sidebar":
            c = U(jQuery(this).attr("id"));
            b = {id:b[1], descType:"sidebar", data:c, desc:c.shortcode};
            break;
          case "toggles":
            c = V(jQuery(this).attr("id"));
            b = {id:b[1], descType:"toggles", data:c, desc:c.shortcode};
            break;
          case "tabs":
            c = W(jQuery(this).attr("id"));
            b = {id:b[1], descType:"tabs", data:c, desc:c.shortcode};
            break;
          case "iconictext":
            c = X(jQuery(this).attr("id"));
            b = {id:b[1], descType:"iconictext", data:c, desc:c.shortcode};
            break;
          case "button":
            c = E(jQuery(this).attr("id"));
            b = {id:b[1], descType:"button", data:c, desc:c.shortcode};
            break;
          case "skill":
            c = I(jQuery(this).attr("id"));
            b = {id:b[1], descType:"skill", data:c, desc:c.shortcode};
            break;
          case "horizontalrule":
            c = jQuery(this).attr("id");
            c = c.replace("elem-", "modal-");
            c = f ? h(c) : jQuery("#" + c);
            d = {};
            d.hr_is_image = c.find(".hr_is_image").find(":selected").val();
            d.image_url = c.find(".upload_image_button").val();
            d.tile_image = c.find(".tile_image").find(":selected").val();
            d.hr_html_model = c.find(".hr_html_model").find(":selected").val();
            d.hr_height = c.find(".hr_height").val();
            d.shortcode = "";
            d.shortcode += '[rockthemes_hr hr_is_image="' + d.hr_is_image + '" image_url="' + d.image_url + '" tile_image="' + d.tile_image + '" hr_html_model="' + d.hr_html_model + '" hr_height="' + d.hr_height + '"/]';
            c = {data:d, shortcode:d.shortcode};
            b = {id:b[1], descType:"horizontalrule", data:c, desc:c.shortcode};
            break;
          case "portfolio":
            c = ua(jQuery(this).attr("id"));
            b = {id:b[1], descType:"portfolio", data:c, desc:c.shortcode};
            break;
          case "rockformbuilder":
            c = Z(jQuery(this).attr("id"));
            b = {id:b[1], descType:"rockformbuilder", data:c, desc:c.shortcode};
            break;
          case "googlemap":
            c = aa(jQuery(this).attr("id"));
            b = {id:b[1], descType:"googlemap", data:c, desc:c.shortcode};
            break;
          case "leafletmap":
            c = ba(jQuery(this).attr("id"));
            b = {id:b[1], descType:"leafletmap", data:c, desc:c.shortcode};
            break;
          case "promotionbox":
            c = ca(jQuery(this).attr("id"));
            b = {id:b[1], descType:"promotionbox", data:c, desc:c.shortcode};
            break;
          case "alertbox":
            c = da(jQuery(this).attr("id"));
            b = {id:b[1], descType:"alertbox", data:c, desc:c.shortcode};
            break;
          case "referencesbuilder":
            c = ea(jQuery(this).attr("id"));
            b = {id:b[1], descType:"referencesbuilder", data:c, desc:c.shortcode};
            break;
          case "testimonialsbuilder":
            c = fa(jQuery(this).attr("id"));
            b = {id:b[1], descType:"testimonialsbuilder", data:c, desc:c.shortcode};
            break;
          case "socialicons":
            c = J(jQuery(this).attr("id"));
            b = {id:b[1], descType:"socialicons", data:c, desc:c.shortcode};
            break;
          case "teammembers":
            c = ha(jQuery(this).attr("id"));
            b = {id:b[1], descType:"teammembers", data:c, desc:c.shortcode};
            break;
          case "beforeafterslider":
            c = ia(jQuery(this).attr("id"));
            b = {id:b[1], descType:"beforeafterslider", data:c, desc:c.shortcode};
            break;
          case "externalshortcode":
            c = ja(jQuery(this).attr("id"));
            b = {id:b[1], descType:"externalshortcode", data:c, desc:c.shortcode};
            break;
          case "regularblog":
            c = ka(jQuery(this).attr("id"));
            b = {id:b[1], descType:"regularblog", data:c, desc:c.shortcode};
            break;
          case "gallery":
            c = la(jQuery(this).attr("id"));
            b = {id:b[1], descType:"gallery", data:c, desc:c.shortcode};
            break;
          default:
            d = jQuery("#modal-" + b[1]), c = jQuery.fn.getModalDesc(d), d = d.attr("modalType"), b = {id:b[1], descType:d, desc:c};
        }
        a.push(b);
        e += '<div class="large-' + jQuery(this).attr("data-sizex") + ' columns">' + b.desc + "</div>";
      });
      if (jQuery(this).hasClass("specialgridblock")) {
        if (jQuery(this).hasClass("block-open")) {
          var b = {id:jQuery(this).attr("id"), data:va(jQuery(this).attr("id"))};
          d.push({id:jQuery(this).attr("id"), grid_data:b, col:parseInt(jQuery(this).attr("data-col"), 10), row:parseInt(jQuery(this).attr("data-row"), 10), size_x:parseInt(jQuery(this).attr("data-sizex"), 10), size_y:parseInt(jQuery(this).attr("data-sizey"), 10), shortcode:b.data.data.shortcode, special_grid_block:"yes", special_grid_block_open:"yes"});
          e += b.data.data.shortcode;
        } else {
          b = h("modal-" + jQuery(this).attr("id").toString().replace("close-", "")).find(".avoid_sidebar").find(":selected").val(), d.push({id:jQuery(this).attr("id"), grid_data:{data:{data:{avoidSidebar:b}}}, col:parseInt(jQuery(this).attr("data-col"), 10), row:parseInt(jQuery(this).attr("data-row"), 10), size_x:parseInt(jQuery(this).attr("data-sizex"), 10), size_y:parseInt(jQuery(this).attr("data-sizey"), 10), shortcode:"[/rockthemes_specialgridblock]", special_grid_block:"yes", special_grid_block_open:"no"}), 
          e += "[/rockthemes_specialgridblock]";
        }
      } else {
        b = {id:jQuery(this).attr("id"), data:xa(jQuery(this).attr("id"))}, d.push({id:jQuery(this).attr("id"), grid_data:b, col:parseInt(jQuery(this).attr("data-col"), 10), row:parseInt(jQuery(this).attr("data-row"), 10), size_x:parseInt(jQuery(this).attr("data-sizex"), 10), size_y:parseInt(jQuery(this).attr("data-sizey"), 10), elems:a, special_grid_block:"no"});
      }
    });
    if (1 == b) {
      a = [];
      a = d.sort(ya);
      b = c = 1;
      for (var k = !1, g = '<div class="row">', l = 0; l < a.length; l++) {
        var p = a[l];
        "yes" == a[l].special_grid_block ? (g += a[l].shortcode, "full_width_slider" == p.grid_data.data.data.grid_special_width_details && (k = "yes" == p.special_grid_block_open ? !0 : !1)) : parseInt(p.row) !== parseInt(c) && (c = p.row, 12 >= b && 1 !== b && (g += '<div class="large-' + (13 - b) + ' columns"></div>'), k || (g += '</div><div class="row">'), b = 1);
        k || (b < parseInt(p.col) && 1 !== b ? (g += '<div class="large-' + p.size_x + " large-offset-" + (parseInt(p.col) - b) + ' columns">', b = parseInt(p.size_x) + parseInt(p.col)) : (g += '<div class="large-' + p.size_x + ' columns">', b += parseInt(p.size_x)));
        if ("undefined" != typeof p.elems) {
          for (var m = 0; m < p.elems.length; m++) {
            g += p.elems[m].desc;
          }
        }
        g += "</div>";
      }
      12 >= b && 1 !== b && (g += '<div class="large-' + (13 - b) + ' columns"></div>');
      g = (g + "</div>").replace('<div class="large-12 columns"></div>', "");
      return g = g.replace('<div class="row"></div>', "");
    }
    0 >= d.length && (d = "");
    b = jQuery("#_builder_in_use").is(":checked") ? "true" : "false";
    if (1 == c) {
      return a = {}, a.elems = d, a._builder_in_use = b, a._featured_image_in_builder = n, a;
    }
    jQuery.post(rockAjax.ajaxurl, {postID:a, serializedArray:JSON.stringify(d), _builder_in_use:b, featuredInBuilder:n, action:"rockAjax-save"}, function(a) {
      jQuery("#save-current-settings-btn").hasClass("disabled") && (jQuery("#save-current-settings-btn").removeClass("disabled"), jQuery("#save-current-settings-btn").find(".fa-spin").remove());
      null != a ? jQuery("#save-current-settings-btn").append(' <span class="icon-holder"><i class="fa fa-check icon-white"></i></span>') : jQuery("#save-current-settings-btn").append(' <span class="icon-holder"><i class="fa fa-times icon-white"></i></span>');
      setTimeout(function() {
        jQuery("#save-current-settings-btn").find(".icon-holder").remove();
      }, 2000);
    });
  }
  function ya(a, b) {
    return a.row == b.row ? a.col - b.col : a.row - b.row;
  }
  function r(a) {
    jQuery("#" + a).find(".xr_color_field").each(function() {
      jQuery(this).wpColorPicker();
    });
  }
  function F() {
    jQuery("[data-toggle=tooltip]").tooltip({html:!0});
  }
  var ma = 45, y = !1;
  jQuery(document).on("click", "#toggle_page_builder", function() {
    "off" == jQuery(this).attr("mode") ? (jQuery("#wp-content-wrap.wp-editor-wrap").hasClass("tmce-active") || jQuery("#wp-content-editor-tools #content-tmce").trigger("click"), y ? (window.tinymce.init(window.tinyMCEPreInit.mceInit.rpb_gutenberg_tinymce), jQuery(".edit-post-layout .edit-post-visual-editor").css({visibility:"hidden", padding:"0", position:"relative", height:"0px", overflow:"hidden", transform:"translateX(-3000px)"})) : jQuery("#postdivrich").css({visibility:"hidden", position:"relative", 
    height:"0px", overflow:"hidden", transform:"translateX(-3000px)"}), jQuery("#custom_page").css("display", "block"), jQuery(this).attr("mode", "on"), jQuery(this).val("Close Rock Page Builder")) : (y ? jQuery(".edit-post-layout .edit-post-visual-editor").css({visibility:"", padding:"", position:"", height:"", overflow:"", transform:""}) : jQuery("#postdivrich").css({visibility:"", position:"", height:"", overflow:"", transform:""}), jQuery("#custom_page").css("display", "none"), jQuery(this).attr("mode", 
    "off"), jQuery(this).val("Open Rock Page Builder"));
  });
  (function() {
    jQuery("#postdivrich").length ? jQuery("#postdivrich").before('<input autocomplete="off" type="button" class="button button-primary" style="margin-top:10px; margin-bottom:10px;" id="toggle_page_builder" name="toggle_page_builder"mode="off" value="Open Rock Page Builder" />') : jQuery(".block-editor__container").length && (y = !0, function() {
      var a = setInterval(function() {
        jQuery(".block-editor__container .edit-post-header-toolbar").length && (clearInterval(a), jQuery(".block-editor__container .edit-post-header-toolbar").append('<input autocomplete="off" type="button" class="button button-primary" style="margin-top:10px; margin-bottom:10px;" id="toggle_page_builder" name="toggle_page_builder"mode="off" value="Open Rock Page Builder" />'));
      }, 100);
    }());
    var a = jQuery("#_builder_in_use").is(":checked") ? "true" : "false", b = y ? jQuery(".edit-post-layout .edit-post-visual-editor").width() : jQuery("#toggle_page_builder").parent().width();
    b -= 48;
    ma = parseInt((b - 120) / 12);
    jQuery(".main_page_builder > .gridster").attr("style", "width:" + b + "px");
    jQuery(".main_page_builder").attr("style", "width:" + b + "px");
    b = '<div class="misc-pub-section">' + jQuery(".rockthemes-pb-save-button-container").html() + "</div>";
    jQuery(".rockthemes-pb-save-button-container").remove();
    y ? jQuery(".edit-post-sidebar").prepend(b) : jQuery("#major-publishing-actions").before(b);
    jQuery("[data-toggle=tooltip-main]").tooltip({html:!0});
    if ("true" == a) {
      if (y) {
        if (jQuery("#toggle_page_builder").length) {
          jQuery("#toggle_page_builder").trigger("click");
        } else {
          var c = setInterval(function() {
            jQuery("#toggle_page_builder").length && (clearInterval(c), jQuery("#toggle_page_builder").trigger("click"));
          }, 100);
        }
      } else {
        if (jQuery("#wp-content-wrap.wp-editor-wrap").hasClass("tmce-active")) {
          jQuery("#wp-content-editor-tools #content-tmce").trigger("click"), setTimeout(function() {
            jQuery("#toggle_page_builder").trigger("click");
          }, 100);
        } else {
          var d = setInterval(function() {
            "undefined" == typeof tinyMCE || null != tinyMCE.activeEditor && 0 == tinyMCE.activeEditor.isHidden() || (clearInterval(d), jQuery("#wp-content-editor-tools #content-tmce").trigger("click"), setTimeout(function() {
              jQuery("#toggle_page_builder").trigger("click");
            }, 100));
          }, 100);
        }
      }
    }
  })();
  var f = !0;
  jQuery(".xr_general_container").length && (f = !1);
  var g = [];
  jQuery(document).on("rocthemes:modal_added_runtime", function(a, b) {
    f && (g.push({id:b, obj:jQuery("#" + b)}), jQuery("#" + b).parent().hasClass("modal-scrollable") || jQuery("#" + b).remove());
  });
  jQuery(document).on("rockthemes:builder_modals_ready", function() {
    f && jQuery(".gridsterli").each(function(a) {
      a = jQuery(this);
      if (a.hasClass("specialgridblock")) {
        a = a.attr("id");
        if (0 > a.indexOf("open")) {
          return !0;
        }
        a = jQuery("#modal-" + a.toString().replace("open-", ""));
        g.push({id:a.attr("id"), obj:a});
        a.remove();
        a.find(".avoid_sidebar");
      } else {
        a.find(".builder-element").each(function(a) {
          a = jQuery(this);
          if ("textarea" == a.attr("elem-type")) {
            return !0;
          }
          a = jQuery("#" + a.attr("id").toString().replace("elem", "modal"));
          if (!a.length) {
            return !0;
          }
          g.push({id:a.attr("id"), obj:a});
          a.remove();
          a.find(".iconic-title");
        }), a = jQuery("#modal-" + a.attr("id")), g.push({id:a.attr("id"), obj:a}), a.remove();
      }
    });
  });
  if (jQuery(".rockthemes-pb-save-container").length) {
    var za = jQuery(".rockthemes-pb-save-container").offset();
    jQuery(window).scroll(function() {
      jQuery(window).scrollTop() > za.top ? jQuery(".rockthemes-pb-save-container").addClass("sticky") : jQuery(".rockthemes-pb-save-container").hasClass("sticky") && jQuery(".rockthemes-pb-save-container").removeClass("sticky");
    });
  }
  jQuery(document).on("click", ".rockthemes-pb-add-element-main-button", function() {
    jQuery("#rockthemes-pb-elements-modal").removeClass("without_columns").attr("grid_elem_id", "");
    jQuery("#rockthemes-pb-elements-modal").rpb_modal();
  });
  jQuery(document).on("click", ".rockthemes-pb-columns-list .col", function() {
    var a = jQuery(this).index(), b = jQuery(this).parent(), c;
    b.find(".selected").removeClass("selected");
    for (c = 0; c < a + 1; c++) {
      b.find(".col").eq(c).addClass("selected");
    }
  });
  jQuery(document).on("change", ".rock-builder-template-list", function() {
    "no_template" != jQuery(this).find(":selected").val() && jQuery(".rock-builder-actions .template_name").val(jQuery(this).find(":selected").html());
  });
  jQuery(document).on("click", ".save_current_template_button", function() {
    if (!jQuery(this).hasClass("disabled")) {
      var a = jQuery(this);
      if (!(0 > jQuery(".rock-builder-template-list").length)) {
        var b = jQuery(".rock-builder-template-list").find(":selected");
        if (!(0 > jQuery(".rock-builder-template-list").find(":selected").length) && "no_template" != b.val()) {
          a.addClass("disabled");
          var c = {};
          c.name = jQuery(".rock-builder-actions .template_name").val();
          c.database_name = b.val().toString();
          0 > c.database_name.indexOf("no_template") && (c.database_name = c.database_name.replace("rock_builder_template_", ""));
          b = jQuery(".rock-builder-actions").attr("ref");
          var d = z(b, !1, !0);
          jQuery.post(rockAjax.ajaxurl, {postID:b, _ajax_nonce:rockAjax.nonces.rpb_save_nonce, data:JSON.stringify(d.elems), template:c, action:"rockAjax_save_builder_template"}, function(b) {
            x(function() {
              a.hasClass("disabled") && a.removeClass("disabled");
              null != b ? a.append(' <span class="icon-holder"><i class="fa fa-check icon-white"></i></span>') : a.append(' <span class="icon-holder"><i class="fa fa-times icon-white"></i></span>');
              setTimeout(function() {
                a.find(".icon-holder").remove();
              }, 2000);
            });
          });
        }
      }
    }
  });
  jQuery(document).on("click", ".add_new_template_button", function() {
    var a = jQuery(".rock-builder-actions .template_name").val();
    if (a && "" != a && !jQuery(this).hasClass("disabled")) {
      var b = jQuery(this);
      b.addClass("disabled");
      var c = jQuery(".rock-builder-actions").attr("ref"), d = z(c, !1, !0), e = rockAjax.nonces.rpb_save_nonce;
      jQuery.post(rockAjax.ajaxurl, {postID:c, data:JSON.stringify(d.elems), _ajax_nonce:e, name:a, action:"rockAjax_add_new_builder_template"}, function(a) {
        x(function() {
          b.hasClass("disabled") && b.removeClass("disabled");
          null != a ? b.append(' <span class="icon-holder"><i class="fa fa-check"></i></span>') : b.append(' <span class="icon-holder"><i class="fa fa-times"></i></span>');
          setTimeout(function() {
            b.find(".icon-holder").remove();
          }, 2000);
        });
      });
    }
  });
  jQuery(document).on("click", ".delete_current_template_button", function() {
    var a = jQuery(".rock-builder-actions .template_name").val();
    if (a && "" != a && !jQuery(this).hasClass("disabled")) {
      var b = jQuery(this);
      b.addClass("disabled");
      a = jQuery(".rock-builder-template-list").find(":selected").val();
      var c = jQuery(".rock-builder-actions").attr("ref");
      0 > a.indexOf("no_template") && (a = a.replace("rock_builder_template_", ""));
      jQuery.post(rockAjax.ajaxurl, {postID:c, _ajax_nonce:rockAjax.nonces.rpb_save_nonce, database_name:a, action:"rockAjax_delete_builder_template"}, function(a) {
        x(function() {
          b.hasClass("disabled") && b.removeClass("disabled");
          null != a ? b.append(' <span class="icon-holder"><i class="fa fa-check icon-white"></i></span>') : b.append(' <span class="icon-holder"><i class="fa fa-times icon-white"></i></span>');
          setTimeout(function() {
            b.find(".icon-holder").remove();
          }, 2000);
        });
      });
    }
  });
  jQuery(document).on("click", ".load_current_template_button", function() {
    var a = jQuery(".rock-builder-template-list").find(":selected").val();
    if ("no_template" != a && !jQuery(this).hasClass("disabled")) {
      jQuery(this).addClass("disabled");
      a = parseInt(a.toString().replace("rock_builder_template_", ""));
      var b = jQuery(".rock-builder-actions").attr("ref"), c = z(b, !1, !0);
      jQuery.post(rockAjax.ajaxurl, {postID:b, _ajax_nonce:rockAjax.nonces.rpb_save_nonce, loadTemplateDatabaseName:a, _builder_in_use:c._builder_in_use, _featured_image_in_builder:c._featured_image_in_builder, action:"rockAjax_load_builder_template"}, function(a) {
        null != a && -1 < a.indexOf("Success") && location.reload();
      });
    }
  });
  var na, K = !0;
  if (wp.media.editor) {
    var Aa = wp.media.editor.send.attachment;
  }
  jQuery(document).on("click", ".image_uploader_class", function(a) {
    a = jQuery(this);
    na = jQuery(this).parent().find(".upload_image_button").attr("id");
    K = !0;
    wp.media.editor.send.attachment = function(a, c) {
      if (K) {
        jQuery("#" + na).val(c.url);
      } else {
        return Aa.apply(this, [a, c]);
      }
    };
    wp.media.editor.open(a);
    return !1;
  });
  jQuery(".add_media").on("click", function() {
    K = !1;
  });
  var q = jQuery(".gridster ul").gridster({widget_selector:".gridsterli", widget_margins:[5, 5], widget_base_dimensions:[ma, 50], max_size_x:12, min_rows:12, serialize_params:function(a, b) {
    return {col:b.col, row:b.row, size_x:b.size_x, size_y:b.size_y, id:b.id};
  }}).data("gridster");
  var oa = jQuery("gridster li").length;
  (function() {
    jQuery(".grid-content").sortable({connectWith:".grid-content", handle:"i.drag", items:".builder-element", revert:!0, helper:function() {
      return '<div class="sortable-drag-helper"><i class="fa fa-magnet"></i></div>';
    }, receive:function(a, b) {
      jQuery(this).parents(".gridsterli.sortable-parent-index").hasClass("sortable-parent-index") && jQuery(this).parents(".gridsterli.sortable-parent-index").removeClass("sortable-parent-index");
      4 < jQuery(this).children().length && (jQuery(b.sender).sortable("cancel"), alert("You can not add more than 3 elements to grid"));
    }, start:function() {
      jQuery(this).parents(".gridsterli.sortable-parent-index").hasClass("sortable-parent-index") && jQuery(this).parents(".gridsterli.sortable-parent-index").removeClass("sortable-parent-index");
      jQuery(this).parents(".gridsterli").addClass("sortable-parent-index");
    }}).disableSelection();
  })();
  jQuery(document).on("mouseenter", ".builder-element .elem-name i.drag", function(a) {
    q.disable();
    jQuery(".gridster .gs_w").css("zIndex", "auto");
  });
  jQuery(document).on("mouseleave", ".builder-element .elem-name i.drag", function() {
    jQuery(".gridster .gs_w").css("zIndex", "2");
    jQuery(this).parent().parent().parent().parent().parent().css("zIndex", "99");
    q.enable();
  });
  jQuery(document).on("mouseenter", ".gridsterli[data-sizex='1']", function() {
  });
  jQuery(document).on("mouseleave", ".gridsterli[data-sizex='1']", function() {
  });
  jQuery(document).on("click", ".rock-tinymce-switch-html", function(a) {
    a.preventDefault();
    a.stopImmediatePropagation();
    a = jQuery(this).parents(".rock-tinymce-container").find(".rock-tinymce-textarea");
    a = jQuery(this).parents(".rock-tinymce-container").hasClass("tmce-active") ? tinyMCE.get(a.attr("id")).getContent() : jQuery(this).parents(".rock-tinymce-container").find(".rock-tinymce-textarea").val();
    jQuery(this).parents(".rock-tinymce-container").hasClass("tmce-active") && jQuery(this).parents(".rock-tinymce-container").removeClass("tmce-active");
    jQuery(this).parents(".rock-tinymce-container").addClass("html-active");
    var b = jQuery(this).parents(".rock-tinymce-container").find(".rock-tinymce-textarea");
    window.tinyMCE.execCommand("mceRemoveEditor", !0, b.attr("id"));
    wpActiveEditor = "content";
    jQuery(this).parents(".rock-tinymce-container").find(".rock-tinymce-textarea").val(a);
  });
  jQuery(document).on("click", ".rock-tinymce-switch-text", function(a) {
    a.preventDefault();
    a.stopImmediatePropagation();
    jQuery(this).parents(".rock-tinymce-container").hasClass("html-active") && jQuery(this).parents(".rock-tinymce-container").removeClass("html-active");
    jQuery(this).parents(".rock-tinymce-container").addClass("tmce-active");
    a = jQuery(this).parents(".rock-tinymce-container").find(".rock-tinymce-textarea");
    window.tinyMCE.execCommand("mceAddEditor", !0, a.attr("id"));
    wpActiveEditor = a.attr("id");
  });
  jQuery(document).on("click", ".add-element-in-grid-btn", function() {
    3 <= jQuery(this).parent().find(".builder-element").length && 3 == parseInt(jQuery(this).parent().parent().attr("data-sizey")) ? alert("You can not add more than 3 elements to grid") : (jQuery("#rockthemes-pb-elements-modal").addClass("without_columns").attr("grid_elem_id", jQuery(this).parent().parent().attr("id")), jQuery("#rockthemes-pb-elements-modal").rpb_modal());
  });
  jQuery(document).on("click", ".element-copy-btn", function() {
    2 < jQuery(this).parent().parent().parent().parent().find(".builder-element").length ? alert("You can not add more than 3 elements to grid") : O(jQuery(this).parent().parent().parent());
  });
  jQuery(document).on("click", ".grid-copy-btn", function() {
    var a = jQuery.fn.makeUniqueID();
    jQuery.fn.makeUniqueElemID();
    var b = jQuery(this).parent().parent().parent().attr("data-sizex"), c = '<li id="grid-' + a + '" class="gridsterli" data-row="1" data-col="1" data-sizex="4" data-sizey="3"><div class="grid-header"><span class="columns-num">' + parseInt(b) + '</span> <i class="fa fa-chevron-left columns-minus"></i> <i class="fa fa-chevron-right columns-plus"></i><span class="alignright "><i class="fa fa-gear icon-black grid-edit-btn"></i> <i class="fa fa-copy icon-black grid-copy-btn"></i> <i class="fa fa-times icon-black columns-remove-btn"></i></span></div><div class="grid-content"><i class="fa fa-plus fa-2x add-element-in-grid-btn"></i></div></li>';
    q.add_widget(c, parseInt(b), 3);
    jQuery(this).parent().parent().parent().find(".builder-element").each(function(b) {
      O(jQuery(this), jQuery("#grid-" + a));
    });
    c = jQuery(this).parent().parent().parent();
    b = jQuery("#modal-" + c.attr("id"));
    f && (b = h("modal-" + c.attr("id")));
    c = "modal-grid-" + a;
    b = b.cloneSelects(!0, !0);
    b.attr("id", c);
    b.appendTo("#modal-holder");
    jQuery(".grid-content").sortable({connectWith:".grid-content"});
    jQuery(document).trigger("rocthemes:modal_added_runtime", [c]);
  });
  jQuery(document).on("click", ".grid-edit-btn", function() {
    jQuery(".gridsterli.sortable-parent-index").length && jQuery(".gridsterli.sortable-parent-index").removeClass("sortable-parent-index");
    var a = "modal-" + jQuery(this).parent().parent().parent().attr("id").toString();
    if (f) {
      for (var b = 0; b < g.length; b++) {
        if (g[b].id == a) {
          jQuery("#modal-holder").append(g[b].obj);
          break;
        }
      }
    }
    jQuery("#" + a).rpb_modal();
  });
  jQuery(document).on("click", ".specialgridblock-edit-btn", function() {
    jQuery(".gridsterli.sortable-parent-index").length && jQuery(".gridsterli.sortable-parent-index").removeClass("sortable-parent-index");
    var a = "modal-" + jQuery(this).parents(".specialgridblock").attr("id").toString().replace("open-", "");
    if (f) {
      for (var b = 0; b < g.length; b++) {
        if (g[b].id == a) {
          jQuery("#modal-holder").append(g[b].obj);
          C(jQuery("#" + g[b].id));
          break;
        }
      }
    }
    jQuery("#" + a).rpb_modal();
  });
  jQuery(document).on("click", "#add-element-element.rockthems-pb-elements-list > li", function() {
    var a = jQuery(this).attr("element"), b = jQuery("#rockthemes-pb-elements-modal .rockthemes-pb-columns-list .col.selected").length;
    "" === jQuery("#rockthemes-pb-elements-modal").attr("grid_elem_id") && 1 > b && (b = 3);
    jQuery("#rockthemes-pb-elements-modal").rpb_modal("hide");
    jQuery("#rockthemes-pb-elements-modal .rockthemes-pb-columns-list .col.selected").removeClass("selected");
    if ("specialgridblock" === a) {
      ra();
    } else {
      var c = jQuery.fn.makeUniqueID(), d = jQuery.fn.makeUniqueElemID();
      var e = '<div id="elem-' + d + '" class="builder-element" elem-type="' + a + '"><div class="hide secret-desc"></div><div class="elem-content"><span class="elem-name"><i class="drag fa fa-move"></i> ' + N(a) + '</span><span class="alignright"><i class="fa fa-edit icon-black element-edit-btn"></i><i class="fa fa-copy element-copy-btn"></i><i class="fa fa-times icon-black element-remove-btn"></i></span><div class="clear"></div></div></div>';
      e = '<li id="grid-' + c + '" class="gridsterli" data-row="1" data-col="1" data-sizex="' + b + '" data-sizey="3"><div class="grid-header"><span class="columns-num">' + parseInt(b) + '</span> <i class="fa fa-chevron-left columns-minus"></i> <i class="fa fa-chevron-right columns-plus"></i><span class="alignright "><i class="fa fa-gear icon-black grid-edit-btn"></i> <i class="fa fa-copy icon-black grid-copy-btn"></i> <i class="fa fa-times icon-black columns-remove-btn"></i></span></div><div class="grid-content">' + 
      e + '<i class="fa fa-plus fa-2x add-element-in-grid-btn"></i></div></li>';
      "" === jQuery("#rockthemes-pb-elements-modal").attr("grid_elem_id") && wa("grid-" + c);
      "textarea" != a && ("ajaxfiltered" == a ? jQuery.fn.addChosenElementModal("modal-" + d, a, "") : "featuredimage" == a ? jQuery.fn.addFeaturedImage("modal-" + d, a, "") : "swiperslider" == a ? jQuery.fn.addSwiperSliderModal("modal-" + d, a, "") : "pricingtable" == a ? jQuery.fn.addPricingTableModal("modal-" + d, a, "") : "curvyslider" == a ? jQuery.fn.addCurvySliderModal("modal-" + d, a, "") : "sidebar" == a ? jQuery.fn.addSidebarModal("modal-" + d, a, "") : "toggles" == a ? jQuery.fn.addTogglesModal("modal-" + 
      d, a, "") : "tabs" == a ? jQuery.fn.addTabsModal("modal-" + d, a, "") : "iconictext" == a ? jQuery.fn.addIconictextModal("modal-" + d, a, "") : "button" == a ? jQuery.fn.addButtonModal("modal-" + d, a, "") : "skill" == a ? jQuery.fn.addSkillModal("modal-" + d, a, "") : "horizontalrule" == a ? jQuery.fn.addHorizontalRuleModal("modal-" + d, a, "") : "portfolio" == a ? jQuery.fn.addPortfolioModal("modal-" + d, a, "") : "rockformbuilder" == a ? jQuery.fn.addRockFormBuilderModal("modal-" + d, a, 
      "") : "googlemap" == a ? jQuery.fn.addGoogleMapModal("modal-" + d, a, "") : "leafletmap" == a ? jQuery.fn.addLeafLetMapModal("modal-" + d, a, "") : "promotionbox" == a ? jQuery.fn.addPromotionBoxModal("modal-" + d, a, "") : "alertbox" == a ? jQuery.fn.addAlertBoxModal("modal-" + d, a, "") : "referencesbuilder" == a ? jQuery.fn.addReferencesBuilderModal("modal-" + d, a, "") : "testimonialsbuilder" == a ? jQuery.fn.addTestimonialsBuilderModal("modal-" + d, a, "") : "socialicons" == a ? jQuery.fn.addSocialIconsModal("modal-" + 
      d, a, "") : "teammembers" == a ? jQuery.fn.addTeamMembersModal("modal-" + d, a, "") : "beforeafterslider" == a ? jQuery.fn.addBeforeAfterSliderModal("modal-" + d, a, "") : "externalshortcode" == a ? jQuery.fn.addExternalShortcodeModal("modal-" + d, a, "") : "regularblog" == a ? jQuery.fn.addRegularBlogModal("modal-" + d, a, "") : "gallery" == a ? jQuery.fn.addGalleryModal("modal-" + d, a, "") : jQuery.fn.addChosenElementModal("modal-" + d, a, ""));
      "" === jQuery("#rockthemes-pb-elements-modal").attr("grid_elem_id") ? q.add_widget(e, parseInt(b), 3) : (a = M(a, d), jQuery("#" + jQuery("#rockthemes-pb-elements-modal").attr("grid_elem_id")).find(".grid-content").append(a.html));
      jQuery(".grid-content").sortable({connectWith:".grid-content", handle:"i.drag", items:".builder-element", revert:!0, helper:function() {
        return '<div class="sortable-drag-helper"><i class="fa fa-magnet"></i></div>';
      }, receive:function(a, b) {
        jQuery(this).parents(".gridsterli.sortable-parent-index").hasClass("sortable-parent-index") && jQuery(this).parents(".gridsterli.sortable-parent-index").removeClass("sortable-parent-index");
        4 < jQuery(this).children().length && (jQuery(b.sender).sortable("cancel"), alert("You can not add more than 3 elements to grid"));
      }, start:function() {
        jQuery(this).parents(".gridsterli.sortable-parent-index").hasClass("sortable-parent-index") && jQuery(this).parents(".gridsterli.sortable-parent-index").removeClass("sortable-parent-index");
        jQuery(this).parents(".gridsterli").addClass("sortable-parent-index");
      }});
    }
  });
  jQuery(document).on("click", ".gridster li i.columns-minus", function() {
    jQuery(this).parent().parent().hasClass("player-revert") && jQuery(this).parent().parent().removeClass("player-revert");
    var a = parseInt(jQuery(this).parent().parent().attr("data-sizex"));
    1 > a - 1 || (--a, jQuery(this).parent().parent().find("span.columns-num").html(a), q.resize_widget(jQuery(this).parent().parent(), a, 3));
  });
  jQuery(document).on("click", ".gridster li i.columns-plus", function() {
    jQuery(this).parent().parent().hasClass("player-revert") && jQuery(this).parent().parent().removeClass("player-revert");
    jQuery(this).parent().parent().addClass("grid-width-motion");
    var a = parseInt(jQuery(this).parent().parent().attr("data-sizex"));
    if (!(12 < a + 1)) {
      var b = parseInt(jQuery(this).parent().parent().attr("data-col"));
      12 < a + b ? alert("You should move this element in order to change its size bigger") : (a += 1, jQuery(this).parent().parent().find("span.columns-num").html(a), q.resize_widget(jQuery(this).parent().parent(), a, 3), q.set_dom_grid_height());
    }
  });
  jQuery(document).on("click", ".specialgridblock-remove-btn", function() {
    var a = jQuery(this).parents(".specialgridblock"), b = jQuery("#" + a.attr("id").replace("open", "close"));
    if (confirm("Are you sure you want to delete these special grid blocks?")) {
      var c = "modal-" + jQuery(this).parents(".specialgridblock").attr("id").toString().replace("open-", "");
      jQuery("#" + c).remove();
      q.remove_widget(a, function() {
        q.remove_widget(b);
      });
    }
  });
  var A;
  jQuery(document).on("click", ".columns-remove-btn", function() {
    jQuery(this).parent().parent().parent().index();
    A = jQuery(this).parent().parent().parent().attr("id");
    var a = jQuery(this).parent().parent().parent();
    confirm("Are you sure you want to delete this grid column?") && (null != A && (jQuery("#" + A).find(".builder-element").each(function(a) {
      f ? G(jQuery(this).attr("id").toString().replace("elem-", "modal-")) : jQuery("#" + jQuery(this).attr("id").toString().replace("elem-", "modal-")).remove();
      jQuery(this).remove();
    }), f ? G(A.replace("elem-", "modal-")) : jQuery("#" + A.replace("elem-", "modal-")).remove()), q.remove_widget(a));
  });
  jQuery(document).on("click", ".element-remove-btn", function() {
    var a = jQuery(this).parent().parent().parent().attr("id");
    confirm("Are you sure you want to delete this element?") && null != a && (f ? G(a.replace("elem-", "modal-")) : jQuery("#" + a.replace("elem-", "modal-")).remove(), jQuery(this).parent().parent().parent().remove());
  });
  jQuery(document).on("click", ".builder-element", function(a) {
    if (!(jQuery(a.target).attr("class") && -1 < jQuery(a.target).attr("class").toString().indexOf("element-remove-btn") || jQuery(a.target).attr("class") && -1 < jQuery(a.target).attr("class").toString().indexOf("element-copy-btn") || jQuery(a.target).attr("class") && -1 < jQuery(a.target).attr("class").toString().indexOf("drag")) && (a = jQuery(this), a.attr("id"))) {
      jQuery(".gridsterli.sortable-parent-index").length && jQuery(".gridsterli.sortable-parent-index").removeClass("sortable-parent-index");
      var b = a.attr("elem-type"), c = a.attr("id").split("-");
      if (f) {
        for (var d = a.attr("id").toString().replace("elem", "modal"), e = 0; e < g.length; e++) {
          if (g[e].id == d) {
            jQuery("#modal-holder").append(g[e].obj);
            C(jQuery("#" + g[e].id));
            break;
          }
        }
      }
      if (0 < a.find("div.secret-desc").length) {
        switch(b) {
          case "textarea":
            jQuery("#text-area-modal-holder").css("display", "block");
            jQuery("#text-area-modal").rpb_modal();
            "object" == typeof tinyMCE && "function" == typeof tinyMCE.execCommand && (window.tinyMCE.execCommand("mceRemoveEditor", !0, "main-textarea-modal"), window.tinyMCE.execCommand("mceAddEditor", !0, "main-textarea-modal"), wpActiveEditor = "main-textarea-modal");
            jQuery("#text-area-modal .rock-tinymce-container").hasClass("html-active") && jQuery("#text-area-modal .rock-tinymce-container").removeClass("html-active").addClass("tmce-active");
            jQuery.fn.addTextareaDesc(a.find("div.secret-desc").html());
            break;
          case "ajaxfiltered":
            jQuery("#modal-" + c[1]).rpb_modal();
            break;
          case "featuredimage":
            jQuery("#modal-" + c[1]).rpb_modal();
            break;
          case "swiperslider":
            jQuery("#modal-" + c[1]).rpb_modal();
            break;
          case "pricingtable":
            jQuery("#modal-" + c[1]).rpb_modal();
            break;
          case "curvyslider":
            jQuery("#modal-" + c[1]).rpb_modal();
            break;
          case "sidebar":
            jQuery("#modal-" + c[1]).rpb_modal();
            break;
          case "toggles":
            jQuery("#modal-" + c[1]).rpb_modal();
            break;
          case "tabs":
            jQuery("#modal-" + c[1]).rpb_modal();
            break;
          case "iconictext":
            jQuery("#modal-" + c[1]).rpb_modal();
            t("#modal-" + c[1]);
            break;
          case "button":
            jQuery("#modal-" + c[1]).rpb_modal();
            break;
          case "skill":
            jQuery("#modal-" + c[1]).rpb_modal();
            break;
          case "horizontalrule":
            jQuery("#modal-" + c[1]).rpb_modal();
            break;
          case "portfolio":
            jQuery("#modal-" + c[1]).rpb_modal();
            break;
          case "rockformbuilder":
            jQuery("#modal-" + c[1]).rpb_modal();
            break;
          case "googlemap":
            jQuery("#modal-" + c[1]).rpb_modal();
            t("#modal-" + c[1]);
            break;
          case "leafletmap":
            jQuery("#modal-" + c[1]).rpb_modal();
            t("#modal-" + c[1]);
            break;
          case "promotionbox":
            jQuery("#modal-" + c[1]).rpb_modal();
            t("#modal-" + c[1]);
            break;
          case "alertbox":
            jQuery("#modal-" + c[1]).rpb_modal();
            t("#modal-" + c[1]);
            break;
          case "referencesbuilder":
            jQuery("#modal-" + c[1]).rpb_modal();
            break;
          case "testimonialsbuilder":
            jQuery("#modal-" + c[1]).rpb_modal();
            break;
          case "socialicons":
            jQuery("#modal-" + c[1]).rpb_modal();
            break;
          case "teammembers":
            jQuery("#modal-" + c[1]).rpb_modal();
            break;
          case "beforeafterslider":
            jQuery("#modal-" + c[1]).rpb_modal();
            break;
          case "externalshortcode":
            jQuery("#modal-" + c[1]).rpb_modal();
            break;
          case "regularblog":
            jQuery("#modal-" + c[1]).rpb_modal();
            break;
          case "gallery":
            jQuery("#modal-" + c[1]).rpb_modal();
        }
      } else {
        c = a.attr("id").split("-"), jQuery("#modal-" + c[1]).rpb_modal();
      }
      pa = a.attr("id");
    }
  });
  var pa = "";
  jQuery(document).on("click", ".save-settings-btn", function() {
    var a = "#" + jQuery(this).parent().parent().attr("id");
    jQuery().find(".rock-tinymce-container").hasClass("tmce-active") ? tinyMCE.activeEditor.getContent() : jQuery(a).find(".rock-tinymce-textarea").val();
  });
  jQuery(document).on("click", "#save-textarea-data", function() {
    var a = "#" + jQuery(this).parent().parent().attr("id");
    a = jQuery(a).find(".rock-tinymce-container").hasClass("tmce-active") ? tinyMCE.get(jQuery(a).find(".rock-tinymce-textarea").attr("id").replace("#", "")).getContent() : jQuery(a).find(".rock-tinymce-textarea").val();
    jQuery("#" + pa).find(".secret-desc").empty().append(a);
    jQuery("#" + jQuery(this).parent().parent().attr("id")).rpb_modal("hide");
  });
  jQuery.fn.addChosenElementModal = function(a, b, c) {
    if (b) {
      switch(b) {
        case "textfield":
          jQuery.fn.addTextField(a, c);
          break;
        case "ajaxfiltered":
          jQuery.fn.addFilteredAjaxGallery(a, c);
          break;
        case "featuredimage":
          jQuery.fn.addFeaturedImage(a, c);
          break;
        case "swiperslider":
          jQuery.fn.addSwiperSliderModal(a, c);
          break;
        case "pricingtable":
          jQuery.fn.addPricingTableModal(a, c);
          break;
        case "curvyslider":
          jQuery.fn.addCurvySliderModal(a, c);
          break;
        case "sidebar":
          jQuery.fn.addSidebarModal(a, c);
          break;
        case "toggles":
          jQuery.fn.addTogglesModal(a, c);
          break;
        case "tabs":
          jQuery.fn.addTabsModal(a, c);
          break;
        case "iconictext":
          jQuery.fn.addIconictextModal(a, c);
          break;
        case "button":
          jQuery.fn.addButtonModal(a, c);
          break;
        case "skill":
          jQuery.fn.addSkillModal(a, c);
          break;
        case "horizontalrule":
          jQuery.fn.addHorizontalRuleModal(a, c);
          break;
        case "portfolio":
          jQuery.fn.addPortfolioModal(a, c);
          break;
        case "rockformbuilder":
          jQuery.fn.addRockFormBuilderModal(a, c);
          break;
        case "googlemap":
          jQuery.fn.addGoogleMapModal(a, c);
          break;
        case "leafletmap":
          jQuery.fn.addLeafLetMapModal(a, c);
          break;
        case "promotionbox":
          jQuery.fn.addPromotionBoxModal(a, c);
          break;
        case "alertbox":
          jQuery.fn.addAlertBoxModal(a, c);
          break;
        case "referencesbuilder":
          jQuery.fn.addReferencesBuilderModal(a, c);
          break;
        case "testimonialsbuilder":
          jQuery.fn.addTestimonialsBuilderModal(a, c);
          break;
        case "socialicons":
          jQuery.fn.addSocialIconsModal(a, c);
          break;
        case "teammembers":
          jQuery.fn.addTeamMembersModal(a, c);
          break;
        case "beforeafterslider":
          jQuery.fn.addBeforeAfterSliderModal(a, c);
          break;
        case "externalshortcode":
          jQuery.fn.addExternalShortcodeModal(a, c);
          break;
        case "regularblog":
          jQuery.fn.addRegularBlogModal(a, c);
          break;
        case "gallery":
          jQuery.fn.addGalleryModal(a, c);
      }
    }
  };
  jQuery.fn.addTextField = function(a, b) {
    var c = '<div id="' + a + '" modalType="textfield" class="rpb_modal hide fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-hidden="true">\u00d7</button><h3 id="myModalLabel">Modal header</h3></div><div class="modal-body"><textarea rows="10" cols="50" style="width:100%"></textarea></div><div class="modal-footer"><button class="btn" data-dismiss="modal" aria-hidden="true">Close</button><div class="btn btn-primary text-field-save">Save changes</div></div>';
    jQuery("#modal-holder").append(c);
  };
  jQuery.fn.addFilteredAjaxGallery = function(a, b) {
    for (var c = '<div class="total_show_holder"><h4>Select Total Item To Show</h4><select class="total_show">', d = 1; 100 > d; d++) {
      c += '<option col="' + d + '" ' + (18 === d ? "selected" : "") + ">" + d + "</option>";
    }
    d = '<select class="excerpt_length" autocomplete="off">';
    for (var e = 0; 150 > e; e++) {
      d = 18 == e ? d + ('<option value="' + e + '" selected>' + e + "</option>") : d + ('<option value="' + e + '">' + e + "</option>");
    }
    c = '<div id="' + a + '" modalType="ajaxfiltered" class="rpb_modal container hide fade" tabindex="-1" role="dialog" aria-labelledby="Filtered Ajax Gallery" aria-hidden="true"><div class="modal-header"><div class="close builder-close"><i class="fa fa-times"></i></div><h3>Filtered Ajax Gallery</h3></div><div class="modal-body"><div class="row-fluid"><div class="span6 image_sizes_column" bind="' + a + '" calc="true"></div><div class="span6"><strong>Choose image size</strong><br/><p>You can choose any image sizes for Ajax Filtered Portfolio. But we recommend using cropped image sizes.</p></div></div><hr/><div class="row-fluid post_type_tax_holder"><div class="span6"></div><div class="span6"><strong>Choose A Post Type</strong></br><p>Choose the post type</p><br/><strong>Choose Taxonomies/Categories to Display</strong></br><p>Choose categories/taxonomies. You can choose multiple categories/taxonomies or just single taxonomy/category. You can also choose all categories/taxonomies by choosing the "All".</p></div></div><hr/><div class="row-fluid header_title_holder"><div class="span6"><input autocomplete="off" type="text" class="header_title" value="" /></div><div class="span6"><strong>Header Title</strong><p>You can choose to use a header title for filtered ajax portfolio. If you leave this area empty, header title will not be displayed.</p></div></div><hr /><div class="row-fluid"><div class="span6">' + 
    (c + "</select></div>") + '</div><div class="span6"><strong>Total Products to Show</strong></br><p>This will set up the total products for each category. If you choose 18, you will be showing 18 products for each category.</p></div></div><hr/><div class="row-fluid"><div class="span6"><select class="activate_category_link"  autocomplete="off"><option value="active">Activate</option><option value="deactive">Deactivate</option></select></div><div class="span6"><strong>Activate Category Link</strong></br><p>If you activate this option, there will be a link under the products for the chosen category.</p></div></div><hr/><div class="row-fluid"><div class="span6">' + 
    (d + "</select>") + '</div><div class="span6"><strong>Excerpt Length</strong><p>You can adjust the excerpt length in words. Which means if you choose 10, your excerpt will show up to 10 words from your originial excerpt.</p></div></div><hr/><div class="row-fluid"><div class="span6"><select class="use_border_on_categories" autocomplete="off"><option value="active">Use Border On Category Names</option><option value="deactive">Do Not Use Border On Category Names</option></select></div><div class="span6"><strong>Use Border On Category Names</strong></br><p>If you want to add a border around category names choose this option.</p></div></div><hr/><div class="row-fluid"><div class="span6"><div class="activate_hover_box_holder"><input autocomplete="off" class="activate_hover_box" type="checkbox" value="true" name="activate_hover_box" /><label for="activate_hover_box"> Activate Hover Box</label></div></div><div class="span6"><strong>Activate Hover Box Effect</strong></br><p>If you activate hover box effect, your thumbnails will show a bigger image with excerpt when hovered</p></div></div><hr/><div class="row-fluid"><div class="span6"><div class="activate_hover_holder"><input autocomplete="off" class="activate_hover" type="checkbox" value="true" name="activate_hover" /><label for="activate_hover"> Activate Hover Effect</label></div></div><div class="span6"><strong>Activate Regular Hover Effect</strong></br><p>This option will show the regular hover effect with PrettyPhoto (lightbox). If you activate this option, you can not activate the hover box option. Two option can not be activated.</p></div></div><hr/><div class="row-fluid"><div class="span6"><div class="disable_hover_link_holder"><input autocomplete="off" class="disable_hover_link" type="checkbox" value="true" name="disable_hover_link" /><label for="disable_hover_link"> Disable Hover Link</label></div></div><div class="span6"><strong>Disable Hover Link</strong></br><p>If you want to disable the link in the hover effect check this option.</p></div></div><hr/><div class="row-fluid"><div class="span6"><div class="use_shadow_holder"><input autocomplete="off" class="use_shadow" type="checkbox" value="true" name="use_shadow" /><label for="use_shadow"> Use Shadow</label></div></div><div class="span6"><strong>Activate Shadow Under Thumbnails</strong></br><p>If you want a shadow under thumbnail images check this option. This shadow will be under the thumbnail images not hover box images.</p></div></div><hr/><div class="row-fluid"><div class="span6"><div class="small_thumb_hover_holder"><input autocomplete="off" class="small_thumb_hover" type="checkbox" value="true" name="small_thumb_hover" /><label for="small_thumb_hover"> Small Thumbnail Hover Effect</label></div></div><div class="span6"><strong>Activate Small Thumbnail Hover Effect</strong></br><p>If you are using "Regular Hover Effect" and your thumbnails are smaller than 100px, you should activate this option.</p></div></div><hr/><div class="row-fluid"><div class="span6"><div class="boxed_layout_holder"><input autocomplete="off" class="boxed_layout" type="checkbox" value="true" name="boxed_layout" /><label for="boxed_layout"> Use Boxed Layout</label></div></div><div class="span6"><strong>Activate Boxed Layout</strong></br><p>You can easily activate/deactivate boxed layout.</p></div></div><hr/></div><div class="modal-footer"><button class="btn" data-dismiss="modal" aria-hidden="true">Close</button><div class="btn btn-primary builder-close ajaxfiltered-save">Save changes</div></div>';
    jQuery("#modal-holder").append(c);
    D = 0;
    jQuery.post(rockAjax.ajaxurl, {header:"Choose A Post Type", modal_ID:a, action:"rockAjax_get_customposttypes"}, function(b) {
      null != b && 0 > b.toString().search("empty") ? jQuery("#" + a + " .modal-body .post_type_tax_holder .span6:first-child").prepend(b) : jQuery("#" + a + " .modal-body .post_type_tax_holder .span6:first-child").prepend('<div class="category_taxonomy_holder"><h4>No Taxonomy/Category to Display</h4>><select class="category_taxonomy" bind="' + a + '"><option value="no_posttypes">No Taxonomiy/Category Found</option></select></div>');
      H(a);
    });
    jQuery.post(rockAjax.ajaxurl, {header:"Choose an Image Size", modal_ID:a, action:"rockAjax_get_image_sizes"}, function(b) {
      null != b && 0 > b.toString().search("empty") ? jQuery("#" + a + " .modal-body .image_sizes_column").prepend(b) : jQuery("#" + a + " .modal-body .image_sizes_column").prepend('<div class="image_sizes_holder"><h4>No Taxonomy/Category to Display</h4>><select class="category_taxonomy" bind="' + a + '"><option value="no_posttypes">No Taxonomiy/Category Found</option></select></div>');
      H(a);
    });
    jQuery.post(rockAjax.ajaxurl, {action:"get_block_grid_list"}, function(b) {
      null != b && 0 > b.toString().search("empty") && jQuery("#" + a + " .modal-body .header_title_holder").next().after(b);
      H(a);
    });
  };
  var D = 0;
  jQuery(document).on("change", ".image_sizes", function() {
    if (jQuery(this).parent().parent().attr("calc") && "true" == jQuery(this).parent().parent().attr("calc")) {
      var a = jQuery(this).parent().parent().attr("bind"), b = jQuery(this).find(":selected");
      if ("no-selected" != b.val()) {
        b = b.attr("sizes");
        b = b.split("x");
        b = parseInt(b[0]) + 12;
        var c = parseInt(jQuery(".main_page_builder").attr("layout_width")), d = jQuery("#" + a).find(".boxed_layout").is(":checked") ? "true" : "false", e = jQuery("#" + a.replace("modal", "elem")).parent().parent();
        e = c / 12 * parseInt(e.attr("data-sizex"));
        var f = parseInt(jQuery(".main_page_builder").attr("layout_padding"));
        c = 2 * (2 * f - 3) + 2 * (f - 12) - 16.25;
        d || (c -= 2 * (2 * f - 3));
        d = Math.ceil((e - c) / b);
        0 == d && (d = 1);
        12 < d && (d = 12);
        e = Math.ceil((767 - c) / b);
        0 == e && (e = 1);
        12 < e && (e = 12);
        b = Math.ceil((480 - c) / b);
        0 == b && (b = 1);
        12 < b && (b = 12);
        jQuery("#" + a + " .recommended_block_grid").length && jQuery("#" + a + " .recommended_block_grid").remove();
        jQuery("#" + a + " .block_grid_large").parent().next().append('<div class="recommended_block_grid"><strong><span style="color:#ff0000;">Important ! </span></strong> For chosen image size, using Large Block Grid <strong>' + d + "</strong> or higher strongly recommended. (Calculated without sidebar)</div>");
        jQuery("#" + a + " .block_grid_medium").parent().next().append('<div class="recommended_block_grid"><strong><span style="color:#ff0000;">Important ! </span></strong> For chosen image size, using Medium Block Grid <strong>' + e + "</strong> or higher strongly recommended. (Calculated without sidebar)</div>");
        jQuery("#" + a + " .block_grid_small").parent().next().append('<div class="recommended_block_grid"><strong><span style="color:#ff0000;">Important ! </span></strong> For chosen image size, using Small Block Grid <strong>' + b + "</strong> or higher strongly recommended. (Calculated without sidebar)</div>");
      }
    }
  });
  jQuery(document).on("change", ".custom_post_types", function() {
    var a = jQuery(this).find(":selected").val();
    if ("no-selected" != a) {
      var b = jQuery(this).attr("bind");
      jQuery.post(rockAjax.ajaxurl, {header:"", post_type:a, action:"rockAjax_get_taxonomies"}, function(a) {
        0 < jQuery("#" + b + " .modal-body .category_taxonomy_holder").length && jQuery("#" + b + " .modal-body .category_taxonomy_holder").remove();
        null != a && 0 > a.toString().search("empty") ? jQuery("#" + b + " .modal-body .custom_post_types_holder").after(a) : jQuery("#" + b + " .modal-body .custom_post_types_holder").after('<div class="category_taxonomy_holder"><select class="category_taxonomy"><option value="no_posttypes">No Taxonomiy/Category Found</option></select><br/></div>');
      });
    }
  });
  jQuery(document).on("click", ".ajaxfiltered-save", function() {
    var a = jQuery(this).parent().parent().attr("id");
    f ? k(jQuery("#" + a)) : (P(a), jQuery("#" + a).rpb_modal("hide"));
  });
  jQuery.fn.addFeaturedImage = function(a, b) {
    for (var c = 1; 100 > c; c++) {
    }
    c = '<div id="' + a + '" class="rpb_modal container hide fade" tabindex="-1" aria-hidden="true"><div class="modal-header"><div class="close builder-close"><i class="fa fa-times"></i></div><h3>Featured Image</h3></div><div class="modal-body"><div class="row-fluid"><div class="span6 featured_element_holder"></div><div class="span6"><strong>Choose a Size</strong></br><p>You need to upload your featured image to use this element. You can choose different image sizes for your featured image. You can also adjust image sizes in Theme Options</p></div></div></div><div class="modal-footer"><div class="btn builder-close">Close</div><div class="btn btn-primary featuredimage-save builder-close" ref="' + 
    a + '">Save changes</div></div></div>';
    jQuery("#modal-holder").append(c);
    jQuery.post(rockAjax.ajaxurl, {header:"", modal_ID:a, action:"rockAjax_get_image_sizes"}, function(b) {
      null != b && 0 > b.toString().search("empty") ? jQuery("#" + a + " .featured_element_holder").prepend(b) : jQuery("#" + a + " .featured_element_holder").prepend('<div class="image_sizes_holder"><h4>No Taxonomy/Category to Display</h4>><select class="category_taxonomy" bind="' + a + '"><option value="no_posttypes">No Taxonomiy/Category Found</option></select></div>');
      jQuery(document).trigger("rocthemes:modal_added_runtime", [a]);
    });
  };
  jQuery(document).on("click", ".featuredimage-save", function() {
    var a = jQuery(this).parent().parent().attr("id");
    f ? k(jQuery("#" + a)) : (Q(a), jQuery("#" + a).rpb_modal("hide"));
  });
  jQuery.fn.addSwiperSliderModal = function(a, b) {
    var c = '<div id="' + a + '" class="rpb_modal container hide fade" tabindex="-1" aria-hidden="true"><div class="modal-header"><div class="close builder-close"><i class="fa fa-times"></i></div><h3>Swiper Slider</h3></div><div class="modal-body" data-saved="false"><div class="row-fluid"><div class="span6 image_sizes_holder"></div><div class="span6"><strong>Choose a Size</strong></br><p>You can choose different image sizes for your featured image. You can also adjust image sizes in Theme Options</p></div></div><hr/><div class="row-fluid"><div class="span6 images_holder"></div><div class="span6"><h4>Add New Image</h4><p>You can add images to Swiper Slider by clicking to "Add New Image" button</p><div class="button add-new-image">Add New Image</div></div></div><hr/><div class="row-fluid"><div class="span6"><input autocomplete="off" name="max_width_holder" class="max_width_holder" type="text" value="480px" /></div><div class="span6"><h4>Maximum Width</h4><p>This is an advanced responsivity option. You can choose the max width breakpoint for this element. </p></div></div><hr/></div><div class="modal-footer"><div class="btn builder-close">Close</div><div class="btn btn-primary swiperslider-save builder-close" ref="' + 
    a + '">Save changes</div></div></div>';
    jQuery("#modal-holder").append(c);
    jQuery.post(rockAjax.ajaxurl, {header:"", modal_ID:a, action:"rockAjax_get_image_sizes"}, function(b) {
      null != b && 0 > b.toString().search("empty") ? jQuery("#" + a + " .image_sizes_holder").prepend(b) : jQuery("#" + a + " .image_sizes_holder").prepend('<div class="image_sizes_holder"><h4>No Taxonomy/Category to Display</h4><select class="category_taxonomy" bind="' + a + '"><option value="no_posttypes">No Taxonomy/Category Found</option></select></div>');
      jQuery(document).trigger("rocthemes:modal_added_runtime", [a]);
    });
  };
  jQuery(document).on("click", ".add-new-image", function() {
    var a = jQuery(this).parent().parent().parent().parent().attr("id");
    jQuery("#" + a + " .images_holder").append(ta(a));
  });
  jQuery(document).on("click", ".delete-image-button", function() {
    jQuery(this).parent().remove();
  });
  jQuery(document).on("click", ".swiperslider-save", function() {
    var a = jQuery(this).parent().parent().attr("id");
    f ? k(jQuery("#" + a)) : (R(a), jQuery("#" + a).rpb_modal("hide"));
  });
  jQuery.fn.addPricingTableModal = function(a, b) {
    var c = '<div id="' + a + '" class="rpb_modal container hide fade" tabindex="-1" aria-hidden="true"><div class="modal-header"><div class="close builder-close"><i class="fa fa-times"></i></div><h3>Pricing Table</h3></div><div class="modal-body" data-saved="false"><br /><div class="pricing-table-modal"><div class="pt-demo row-fluid"><div class="span2 main-details header-details" style="background-color:#006dcc; color:#fff; border:1px solid #0044cc; border-radius:4px;"><h4 style="margin:0.60em 0;">Package Name : </h4><h4 style="margin:0.60em 0;">Package Details : </h4><h4 style="margin:0.60em 0;">Featured : </h4><h4 style="margin:0.70em 0;">Package Time : </h4><hr /><h4 style="margin:0.9em 0;">Price :</h4><hr style="margin-top:0.68em;" /><div class="option-name-holder"><div class="new-option new-option-0"><div class="row-fluid escape_hover"><div class="btn btn-mini btn-danger span3 remove_option_button" ref="new-option-0"><i class="fa fa-times"></i></div><input autocomplete="off" type="text" class="span9" value="Option Value" data-toggle="tooltip" title="Enter your table option value" /></div><h4 style="margin:0.41em 0;">Option Icon : </h4></div></div><hr /><h4 style="margin:0.8em 0;">Button :</h4><h4 style="margin:0.8em 0;">Button Name :</h4><h4 style="margin:0.8em 0;">Button Link :</h4><hr /><h4>Add New Option</h4><div class="button pt-add-new-option" ref="' + 
    a + '" data-toggle="tooltip" title="Add a new option field"><i class="fa fa-plus"></i> New Option</div></div><div class="span2 default-elem table-elem"><input autocomplete="off" type="text" name="package_name" class="pt-package-name" value="Standard" data-toggle="tooltip" data-placement="bottom" title="Enter your package name (i.e. Basic, Platinum, Gold)" /><input autocomplete="off" type="text" name="package_detail" class="pt-package-detail" value="Classic Plan" data-toggle="tooltip" data-placement="bottom" title="Enter your package small detail (i.e. Classic Plan)" /><div class="set_featured_holder" style="padding:6px 0px 2px;" data-toggle="tooltip" data-placement="bottom" title="Set featured package (You can only set one featured package)"><label for="set_featured"><input autocomplete="off" type="checkbox" value="1" class="set_featured" name="set_featured" ref="' + 
    a + '" /> Set Featured</label></div><input autocomplete="off" type="text" name="package_time" class="pt-package-time" value="Monthly" data-toggle="tooltip" data-placement="bottom" title="Package\'s time amount (i.e. Monthly, Yearly)" /><hr /><input autocomplete="off" type="text" class="price" value="Price" data-toggle="tooltip" data-placement="bottom" title="Enter the price (i.e. $29.9, \u00a318.40)" /><hr /><div class="new-option new-option-0"><input autocomplete="off" type="text" value="Option Value" data-toggle="tooltip" title="Enter your table option value" /><div class="elem-icon"><div class="icon-holder add-elem-icon-btn" style="font-size:4px !important;" icon-ref=""></div><input autocomplete="off" type="text" size="36" class="add-elem-icon-text" style="display:none;" value=""/><div class="add-elem-icon-btn btn btn-small">Add Icon</div><div class="remove-elem-icon-btn btn btn-small hide">Remove Icon</div></div></div><hr class="pt-footer" /><div class="pricing-table-button" id-ref="0"><input autocomplete="off" id="button_data_0" class="button_json_data" type="hidden" value="" /><input autocomplete="off" id="button_shortcode_0" class="button_shortcode" type="hidden" value="" /><div class="btn btn-small btn-block advanced_details_make_button_modal" id_ref="button_shortcode_0" id_data_ref="button_data_0"><i class="fa fa-gear"></i> Edit Button</div></div><hr /><div class="button pt-remove-package-button" style="width:100%;" ref="' + 
    a + '" data-toggle="tooltip" title="Delete current package"><i class="icon-trash"></i> Delete Package</div></div><div class="span2 main-details new-package-button-holder" style="background-color:#006dcc; color:#fff; border:1px solid #0044cc; border-radius:4px; text-align:center;"><h4>Add New Package</h4><div class="button pt-add-new-package" ref="' + a + '" data-toggle="tooltip" title="Add a new package"><i class="fa fa-plus"></i> New Package</div><br /><br /></div></div><br /><hr /><h2 style="margin-bottom:0px;">General Settings</h2><div class="pt-general-settings row-fluid"><div class="span2"><h4>Featured Text</h4><input autocomplete="off" name="featured_text" class="featured_text" type="text" value="Recommended!" data-toggle="tooltip" data-placement="top" title="Featured text (i.e. Hot!, Featured, Recommended)" /></div><div class="span2"><h4>Show Details in Tables</h4><label for="show_details_in_tables"><input autocomplete="off" type="checkbox" value="1" class="show_details_in_tables" name="show_details_in_tables" ref="' + 
    a + '" checked /> Activate</label></div></div><br /></div></div><div class="modal-footer row-fluid" style="padding:0px; text-align:left;"><div class="span9" style="padding:14px 15px 15px; text-align:left;"><div class="btn turnonoff-tooltips"><i class="fa fa-gear"></i><span class="tooltipstext">Turn Off Tooltips</span></div></div><div class="span3" style="padding:14px 15px 15px; text-align:right;"><div class="btn builder-close">Close</div><div class="btn btn-primary pricingtable-save" ref="' + 
    a + '">Save changes</div></div></div>';
    jQuery("#modal-holder").append(c);
    F();
    jQuery(document).trigger("rocthemes:modal_added_runtime", [a]);
  };
  jQuery(document).on("change", ".pricing-table-modal .set_featured", function() {
    var a = jQuery(this).attr("ref");
    if (jQuery(this).is(":checked")) {
      var b = jQuery(this);
      jQuery("#" + a + " .set_featured").not(jQuery(this)).each(function(a) {
        jQuery(this) != b && jQuery(this).attr("checked", !1);
      });
    } else {
      jQuery("#" + a + " .set_featured").each(function(a) {
        jQuery(this).attr("checked", !1);
      });
    }
  });
  jQuery(document).on("click", ".pt-add-new-option", function() {
    var a = jQuery(this).attr("ref"), b = jQuery(this).parent().find(".option-name-holder .new-option").length;
    0 < b && (b = jQuery(this).parent().find(".option-name-holder .new-option").last(), b = parseInt(b.find(".btn").attr("ref").toString().replace("new-option-", "")) + 1);
    var c = '<div class="new-option new-option-' + b + '"><div class="row-fluid escape_hover"><div class="btn btn-mini btn-danger span3 remove_option_button" ref="new-option-' + b + '"><i class="fa fa-times"></i></div><input autocomplete="off" type="text" class="span9" value="Option Value" data-toggle="tooltip" title="Enter your table option value" /></div><h4 style="margin:0.41em 0;">Option Icon : </h4></div>';
    jQuery(this).parent().find(".option-name-holder").append(c);
    b = '<div class="new-option new-option-' + b + '"><input autocomplete="off" type="text" value="Option Value" data-toggle="tooltip" title="Enter your table option value" /><div class="elem-icon"><div class="icon-holder add-elem-icon-btn" style="font-size:4px !important;" icon-ref=""></div><input autocomplete="off" type="text" size="36" class="add-elem-icon-text" style="display:none;" value=""/><div class="add-elem-icon-btn btn btn-small">Add Icon</div><div class="remove-elem-icon-btn btn btn-small hide">Remove Icon</div></div></div>';
    jQuery("#" + a + " .pt-demo .span2").not(".main-details").find(".pt-footer").before(b);
    F();
  });
  jQuery(document).on("click", ".pt-delete-column-button", function() {
    jQuery(this).parent().remove();
  });
  jQuery(document).on("click", ".pt-add-new-package", function() {
    var a = jQuery(this).attr("ref"), b = "";
    jQuery("#" + a + " .pt-demo .header-details").after().find(".new-option ").each(function(a) {
      b += '<div class="new-option new-option-' + a + '"><input autocomplete="off" type="text" value="Option Value" data-toggle="tooltip" title="Enter your table option value" /><div class="elem-icon"><div class="icon-holder add-elem-icon-btn" style="font-size:4px !important;" icon-ref=""></div><input autocomplete="off" type="text" size="36" class="add-elem-icon-text" style="display:none;" value=""/><div class="add-elem-icon-btn btn btn-small">Add Icon</div><div class="remove-elem-icon-btn btn btn-small hide">Remove Icon</div></div></div>';
    });
    var c = parseInt(jQuery("#" + a + " .pt-demo .span2").not(".main-details").last().find(".pricing-table-button").attr("id-ref")) + 1;
    c = '<div class="span2 table-elem"><input autocomplete="off" type="text" name="package_name" class="pt-package-name" value="Standard" data-toggle="tooltip" data-placement="bottom" title="Enter your package name (i.e. Basic, Platinum, Gold)" /><input autocomplete="off" type="text" name="package_detail" class="pt-package-detail" value="Classic Plan" data-toggle="tooltip" data-placement="bottom" title="Enter your package small detail (i.e. Classic Plan)" /><div class="set_featured_holder" style="padding:6px 0px 2px;" data-toggle="tooltip" data-placement="bottom" title="Set featured package (You can only set one featured package)"><label for="set_featured"><input autocomplete="off" type="checkbox" value="1" class="set_featured" name="set_featured" ref="' + 
    a + '" /> Set Featured</label></div><input autocomplete="off" type="text" name="package_time" class="pt-package-time" value="Monthly" data-toggle="tooltip" data-placement="bottom" title="Package\'s time amount (i.e. Monthly, Yearly)" /><hr / ><input autocomplete="off" type="text" class="price" value="Price" data-toggle="tooltip" data-placement="bottom" title="Enter the price (i.e. $29.9, \u00a318.40)" /><hr />' + b + '<hr class="pt-footer" /><div class="pricing-table-button" id-ref="' + c + '"><input autocomplete="off" id="button_data_' + 
    c + '" class="button_json_data" type="hidden" value="" /><input autocomplete="off" id="button_shortcode_' + c + '" class="button_shortcode" type="hidden" value="" /><div class="btn btn-small btn-block advanced_details_make_button_modal" id_ref="button_shortcode_' + c + '" id_data_ref="button_data_' + c + '"><i class="fa fa-gear"></i> Edit Button</div></div><hr /><div class="button pt-remove-package-button" style="width:100%;" data-toggle="tooltip" title="Delete current package" ref="' + a + '"><i class="icon-trash"></i> Delete Package</div></div>';
    jQuery("#" + a + " .pt-demo .span2").not(".main-details").last().after(c);
    5 <= jQuery("#" + a + " .pt-demo .span2").not(".main-details").length && jQuery("#" + a + " .pt-demo .new-package-button-holder").remove();
    F();
  });
  jQuery(document).on("click", ".pt-remove-package-button", function() {
    var a = jQuery(this).attr("ref");
    if (!(2 > jQuery("#" + a + " .pt-demo .span2").not(".main-details").length || (jQuery(this).parent().remove(), 5 <= jQuery("#" + a + " .pt-demo .span2").not(".main-details").length || 0 < jQuery("#" + a + " .new-package-button-holder").length))) {
      var b = '<div class="span2 main-details new-package-button-holder" style="background-color:#006dcc; color:#fff; border:1px solid #0044cc; border-radius:4px; text-align:center;"><h4>Add New Package</h4><div class="button pt-add-new-package" data-toggle="tooltip" title="Add a new package" ref="' + a + '"><i class="fa fa-plus"></i> New Package</div><br /><br /></div>';
      jQuery("#" + a + " .pt-demo").append(b);
    }
  });
  jQuery(document).on("click", ".remove_option_button", function() {
    jQuery("." + jQuery(this).attr("ref")).remove();
  });
  jQuery(document).on("click", ".turnonoff-tooltips", function() {
    L ? (L = !1, jQuery("[data-toggle=tooltip]").tooltip("destroy"), jQuery(this).find(".tooltipstext").html(" Turn On Tooltips"), jQuery(this).find("i").addClass("icon-white"), jQuery(this).addClass("btn-primary")) : (L = !0, F(), jQuery(this).hasClass("btn-primary") && jQuery(this).removeClass("btn-primary"), jQuery(this).find("i").hasClass("icon-white") && jQuery(this).find("i").removeClass("icon-white"), jQuery(this).find(".tooltipstext").html(" Turn Off Tooltips"));
  });
  jQuery(document).on("click", ".pricingtable-save", function() {
    var a = jQuery(this).attr("ref");
    f ? k(jQuery("#" + a)) : (S(a), jQuery("#" + a).rpb_modal("hide"));
  });
  jQuery.fn.addCurvySliderModal = function(a, b) {
    for (var c = 1; 100 > c; c++) {
    }
    c = '<div id="' + a + '" class="rpb_modal container hide fade" tabindex="-1" role="dialog" aria-hidden="true"><div class="modal-header"><div class="close builder-close"><i class="fa fa-times"></i></div><h3>Curvy Slider</h3></div><div class="modal-body" data-saved="false"><div class="row-fluid"><div class="span6 curvyslider_list_holder"></div><div class="span6"><strong>Choose Curvy Slider</strong><br/><p>You can choose any of your saved Curvy Sliders.</p></div></div><hr /><div class="row-fluid"><div class="span6"><div class="slider_width_holder"><select class="slider_bottom_divider" autocomplete="off"><option value="">Empty</option><option value="use_border">Add Border Under Slider</option><option value="use_shadow">Add Shadow Under Slider</option></select></div></div><div class="span6"><strong>Border, Shadow Details</strong><br/><p>You can choose to add border or shadow at the bottom of the slider. If you don\'t want both of them, you can choose "Empty"</p></div></div><hr/><div class="row-fluid"><div class="span6"><div class="activate_autoplay_holder"><input autocomplete="off" type="checkbox" value="1" class="activate_autoplay" name="activate_autoplay" checked /><label for="activate_autoplay"> Activate Autoplay</label></div></div><div class="span6"><strong>Auto Play</strong><br/><p>If you check this option, slider will start to play automatically.</p></div></div></div><div class="modal-footer"><div class="btn builder-close">Close</div><div class="btn btn-primary curvyslider-save builder-close" ref="' + 
    a + '">Save changes</div></div></div>';
    jQuery("#modal-holder").append(c);
    jQuery.post(rockAjax.ajaxurl, {header:"", modal_ID:a, action:"curvy_get_slider_list"}, function(b) {
      null != b && 0 > b.toString().search("empty") ? jQuery("#" + a + " .curvyslider_list_holder").prepend(b) : jQuery("#" + a + " .curvyslider_list_holder").prepend('<div class="image_sizes_holder"><h4>No Taxonomy/Category to Display</h4><select class="category_taxonomy" bind="' + a + '"><option value="no_posttypes">No Taxonomy/Category Found</option></select></div>');
      jQuery(document).trigger("rocthemes:modal_added_runtime", [a]);
    });
  };
  jQuery(document).on("click", ".curvyslider-save", function() {
    var a = jQuery(this).parent().parent().attr("id");
    f ? k(jQuery("#" + a)) : (T(a), jQuery("#" + a).rpb_modal("hide"));
  });
  jQuery.fn.addSidebarModal = function(a, b) {
    jQuery("#" + a + " .sidebar_list_holder").find(".data-error").length && jQuery("#" + a + " .sidebar_list_holder").find(".data-error").remove();
    var c = '<div id="' + a + '" class="rpb_modal container hide fade" tabindex="-1"  aria-hidden="true"><div class="modal-header"><div class="close builder-close"><i class="fa fa-times"></i></div><h3>Sidebar</h3></div><div class="modal-body" data-saved="false"><div class="row-fluid"><div class="span6 sidebar_list_holder"></div><div class="span6"><strong>Choose a Sidebar</strong><br/><p>You can insert widgets into your sidebars and use these sidebars in your page layout</p></div></div></div><div class="modal-footer"><div class="btn builder-close">Close</div><div class="btn btn-primary sidebar-save builder-close" ref="' + 
    a + '">Save changes</div></div></div>';
    jQuery("#modal-holder").append(c);
    jQuery.post(rockAjax.ajaxurl, {header:"", echo_value:"true", action:"rockAjax_get_sidebar_list"}, function(b) {
      null != b && 0 > b.toString().search("empty") ? jQuery("#" + a + " .sidebar_list_holder").prepend(b) : jQuery("#" + a + " .sidebar_list_holder").prepend('<div class="data-error">No Sidebar Found</div>');
      jQuery(document).trigger("rocthemes:modal_added_runtime", [a]);
    });
  };
  jQuery(document).on("click", ".sidebar-save", function() {
    var a = jQuery(this).parent().parent().attr("id");
    f ? k(jQuery("#" + a)) : (U(a), jQuery("#" + a).rpb_modal("hide"));
  });
  jQuery.fn.addTogglesModal = function(a, b) {
    var c = '<div id="' + a + '" modalType="toggles" class="rpb_modal container hide fade" ><div class="modal-header"><div class="close" data-dismiss="modal" aria-hidden="true"><i class="fa fa-times"></i></div><h3>Add Toggle</h3></div><div class="modal-body" data-saved="false"><div class="row-fluid"><div class="toggles-elements-holder span6"><ul class="toggles-list"><li class="toggles-block"><div class="hide secret-desc" toggle-title="Toggles Awesome" icon_class="" icon_url=""><p>Awesome Toggle Content</p></div><i class="drag fa fa-move"></i><span class="toggle-name" ref="' + 
    a + '">Toggles Awesome</span><i class="close fa fa-times"></i></li><li class="toggles-block"><div class="hide secret-desc" toggle-title="Toggles Awesome Drag" icon_class="" icon_url=""><p>Awesome Toggle Content</p></div><i class="drag fa fa-move"></i><span class="toggle-name" ref="' + a + '">Toggles Awesome Drag</span><i class="close fa fa-times"></i></li></ul><div class="btn btn-small add-new-toggle-btn" ref="' + a + '"><i class="fa fa-plus"></i> Add</div></div><div class="span6"><strong>Add/Remove Toggles</strong><br/><p>You can easily add remove toggles by clicking to add new button</p></div></div><hr/><div class="row-fluid"><div class="span6"><select class="toggle-type"><option value="single-mode">Toggle Single</option><option value="multiple-mode">Toggle Multiple (Accordion)</option></select></div><div class="span6"><strong>Choose Toggle Type</strong><br/><p>You can choose multiple mode or single mode. If you choose multiple mode, when a toggle opens, it will close other toggles.</p></div></div><hr/><div class="row-fluid"><div class="span6"><div class="open_toggle_index_holder"><input autocomplete="off" type="text" value="0" class="open_toggle_index" name="open_toggle_index" /></div></div><div class="span6"><strong>Open Toggle Index</strong><br/><p>Index of the toggle will be open. If you want your first toggle to be open enter 0. If you want all toggles to be closed enter -1</p></div></div><hr/><div class="row-fluid"><div class="span6"><div class="boxed_layout_holder"><input autocomplete="off" class="boxed_layout" type="checkbox" value="true" name="boxed_layout" /><label for="activate_hover"> Use Boxed Layout</label></div></div><div class="span6"><strong>Boxed Layout</strong><br/><p>If you want to wrap a boxed layout around this element, check this option.</p></div></div><div class="row-fluid"><div class="span6"><div class="use_shadow_holder"><input autocomplete="off" class="use_shadow" type="checkbox" value="true" name="use_shadow" /><label for="activate_hover"> Use Shadow</label></div></div><div class="span6"><strong>Use Header Shadow</strong><br/><p>This option will activate/deactivate the shadows under the header text.</p></div></div></div><div class="modal-footer"><button class="btn" data-dismiss="modal" aria-hidden="true">Close</button><div class="btn btn-primary toggles-save builder-close">Save changes</div></div></div>';
    jQuery("#modal-holder").append(c);
    jQuery("#" + a + " .toggles-list").sortable({handle:"i.drag"});
    jQuery(document).trigger("rocthemes:modal_added_runtime", [a]);
  };
  jQuery(document).on("click", ".toggles-elements-holder .add-new-toggle-btn", function() {
    var a = jQuery(this).attr("ref"), b = '<li class="toggles-block"><div class="hide secret-desc" toggle-title="New Toggle" icon_class="" icon_url=""></div><i class="drag fa fa-move"></i><span class="toggle-name" ref="' + a + '">New Toggle</span><i class="close fa fa-times"></i></li>';
    jQuery("#" + a + " .toggles-list .toggles-block").each(function(a, b) {
    });
    jQuery("#" + a + " .toggles-list .toggles-block").last().after(b);
  });
  jQuery(document).on("click", ".toggles-block i.close", function() {
    jQuery(this).parent().remove();
  });
  jQuery(document).on("click", ".toggles-block .toggle-name", function() {
    if (!(0 < jQuery("#toggles-single-modal").length)) {
      var a = jQuery(this).parent().find(".secret-desc").html(), b = jQuery(this).parent().find(".secret-desc").attr("toggle-title"), c = jQuery(this).parent().find(".secret-desc").attr("icon_class"), d = jQuery(this).parent().find(".secret-desc").attr("icon_url"), e = c || d ? !0 : !1, f = jQuery(this).attr("ref");
      a = '<div id="toggles-single-modal" modalType="toggles" class="rpb_modal container hide fade" tabindex="-1" role="dialog" style="width:1024px; margin-left:-512px;" aria-labelledby="Toggles" aria-hidden="true" data-focus-on="input:first"><div class="modal-header"><div class="close close-toggle-single"><i class="fa fa-times"></i></div><h3>Add Toggle</h3></div><div class="modal-body" data-saved="false"><div class="row-fluid"><div class="span6"><input autocomplete="off" name="toggle_header" class="toggle_header" type="text" value="' + 
      b + '" /></div><div class="span6"><strong>Toggle Header</strong><br/><p>Enter the header text of your toggle</p></div></div><hr/><div class="row-fluid"><div class="span6 toggles-list"><div class="rock-tinymce-container wp-core-ui wp-editor-wrap tmce-active"><div id="wp-content-editor-tools" class="wp-editor-tools hide-if-no-js"><div class="wp-editor-tabs"><a class="rock-tinymce-switch-text wp-switch-editor switch-tmce" >Visual</a><a class="rock-tinymce-switch-html wp-switch-editor switch-html" >Text</a></div><div id="wp-content-media-buttons" class="wp-media-buttons"><a href="#" id="insert-media-button" class="button insert-media add_media" data-editor="toggles-single-modal-editor" title="Add Media"><span class="wp-media-buttons-icon"></span> Add Media</a></div></div><div class="wp-content-editor-container wp-editor-container"><textarea rows="8" cols="40" class="rock-tinymce-textarea description" initialized="true" name="toggles-single-modal-editor" id="toggles-single-modal-editor" class="wp-editor-area">' + 
      a + '</textarea></div></div></div><div class="span6"><strong>Toggle Content</strong><br/><p>Enter your toggle content here. You can use the Rich Text Editor for your toggle content.</p></div></div><hr/><div class="row-fluid"><div class="span6 elem-icon"><div class="icon-holder add-elem-icon-btn" icon-ref="' + c + '">' + (c ? '<i class="' + c + ' fa-4x"></i>' : "") + '</div><br/><input autocomplete="off" type="text" size="36" class="add-elem-icon-text" ' + (d ? "" : 'style="display:none;"') + 
      ' value="' + (d ? d : "") + '"/>' + (e ? '<div class="add-elem-icon-btn btn hide">Add Icon</div>' : '<div class="add-elem-icon-btn btn">Add Icon</div>') + (e ? '<div class="remove-elem-icon-btn btn">Remove Icon</div>' : '<div class="remove-elem-icon-btn btn hide">Remove Icon</div>') + '</div><div class="span6"><strong>Tab Icon</strong><br/><p>Choose an icon for your tab header</p></div></div><hr/></div><div class="modal-footer"><div class="btn close-toggle-single">Close</div><div class="btn btn-primary toggles-single-save" ref="' + 
      parseInt(jQuery(this).parent().index()) + '" modal-ref="' + f + '">Save changes</div></div></div>';
      jQuery("#modal-holder").append(a);
      jQuery("#toggles-single-modal").rpb_modal();
      "object" == typeof tinyMCE && "function" == typeof tinyMCE.execCommand && (window.tinyMCE.execCommand("mceAddEditor", !0, "toggles-single-modal-editor"), wpActiveEditor = "toggles-single-modal-editor");
    }
  });
  jQuery(document).on("click", ".toggles-single-save", function() {
    var a = jQuery(this).attr("modal-ref"), b = parseInt(jQuery(this).attr("ref")), c = jQuery("#toggles-single-modal"), d = m("#" + c.attr("id"));
    c = c.find(".toggle_header").val();
    var e = jQuery("#toggles-single-modal").find(".elem-icon .icon-holder").attr("icon-ref"), f = jQuery("#toggles-single-modal").find(".add-elem-icon-text").val();
    jQuery("#" + a + " .toggles-list .toggles-block").eq(b).find(".secret-desc").html(d);
    jQuery("#" + a + " .toggles-list .toggles-block").eq(b).find(".secret-desc").attr("toggle-title", c);
    jQuery("#" + a + " .toggles-list .toggles-block").eq(b).find("span.toggle-name").html(c);
    jQuery("#" + a + " .toggles-list .toggles-block").eq(b).find(".secret-desc").attr("icon_class", e);
    jQuery("#" + a + " .toggles-list .toggles-block").eq(b).find(".secret-desc").attr("icon_url", f);
    l(jQuery(this).parent().parent());
  });
  jQuery(document).on("click", ".rpb_modal .close-toggle-single", function() {
    l(jQuery(this).parent().parent());
  });
  jQuery(document).on("click", ".toggles-save", function() {
    var a = jQuery(this).parent().parent().attr("id");
    f ? k(jQuery("#" + a)) : (V(a), jQuery("#" + a).rpb_modal("hide"));
  });
  jQuery.fn.addTabsModal = function(a, b) {
    var c = {};
    c.id = a;
    jQuery.post(rockAjax.ajaxurl, {id:a, ajax_object:c, action:"xr_make_tabs_modal"}, function(b) {
      null != b && (jQuery("#modal-holder").append(b), jQuery("#" + a + " .tabs-list").sortable({handle:"i.drag"}), jQuery(document).trigger("rocthemes:modal_added_runtime", [a]));
    });
  };
  jQuery(document).on("hover", ".rpb_modal .tabs-block", function() {
    jQuery(this).hasClass("add-new-tab-btn") || (jQuery(".tabs-block.active").removeClass("active"), jQuery(this).find(".tab-name").attr("tab-index", jQuery(this).index()), jQuery(this).parent().parent().find(".tab-textarea-holder").attr("tab-index", jQuery(this).index()), jQuery(this).parent().parent().find(".tab-textarea-holder > div").html(jQuery(this).find(".secret-desc").html()), jQuery(this).addClass("active"));
  });
  jQuery(document).on("click", ".tabs-elements-holder .add-new-tab-btn", function() {
    var a = jQuery(this).attr("ref"), b = jQuery("#" + a + " .tabs-block").length;
    b = '<li class="tabs-block"><div class="hide secret-desc" tab-title="Tabs Awesome" icon_class="" icon_url="">Tab Awesome Content</div><i class="drag fa fa-move"></i><span class="tab-name" ref="' + a + '" tab-index="' + b + '">Tabs Awesome</span><i class="close fa fa-times"></i></li>';
    jQuery("#" + a + " .tabs-list").append(b);
  });
  jQuery(document).on("click", ".tabs-block i.close", function() {
    parseInt(jQuery(this).parent().find(".tab-name").attr("tab-index")) == parseInt(jQuery("#" + jQuery(this).parent().find(".tab-name").attr("ref")).find(".tab-textarea-holder").attr("tab-index")) && (jQuery("#" + jQuery(this).parent().find(".tab-name").attr("ref")).find(".tab-textarea-holder").attr("tab-index", "0"), jQuery("#" + jQuery(this).parent().find(".tab-name").attr("ref")).find(".tab-textarea-holder > div").html(""));
    jQuery(this).parent().remove();
  });
  jQuery(document).on("click", ".tabs-block .tab-name, .tab-textarea-holder", function() {
    if (!(0 < jQuery("#tabs-single-modal").length)) {
      var a = jQuery(this).attr("ref"), b = jQuery(this).attr("tab-index"), c = jQuery("#" + a).find(".tabs-block").eq(b).find(".secret-desc").html(), d = jQuery("#" + a).find(".tabs-block").eq(b).find(".secret-desc").attr("tab-title"), e = jQuery("#" + a).find(".tabs-block").eq(b).find(".secret-desc").attr("icon_class"), f = jQuery("#" + a).find(".tabs-block").eq(b).find(".secret-desc").attr("icon_url"), g = {};
      g.id = a;
      g.title = d;
      g.content = c;
      g.index = b;
      g.icon_class = e;
      g.icon_url = f;
      jQuery("body").rpb_modalmanager("loading");
      jQuery.post(rockAjax.ajaxurl, {tab_obj:g, action:"rock_make_single_tab_modal"}, function(a) {
        jQuery("#modal-holder").append(a);
        jQuery("#tabs-single-modal").rpb_modal();
        jQuery("#tabs-single-modal .rock-tinymce-textarea").html(c);
        "object" == typeof tinyMCE && "function" == typeof tinyMCE.execCommand && (window.tinyMCE.execCommand("mceAddEditor", !0, "tabs-single-modal-editor"), wpActiveEditor = "tabs-single-modal-editor");
      });
    }
  });
  jQuery(document).on("click", ".tabs-single-save", function() {
    var a = jQuery(this).attr("modal-ref"), b = parseInt(jQuery(this).attr("ref")), c = jQuery("#tabs-single-modal"), d = m("#" + c.attr("id"));
    c = c.find(".tab_header").val();
    var e = "undefined" != jQuery("#tabs-single-modal").find(".elem-icon .icon-holder").attr("ref") ? jQuery("#tabs-single-modal").find(".elem-icon .icon-holder").attr("icon-ref") : "", f = "undefined" != jQuery("#tabs-single-modal").find(".add-elem-icon-text").val() ? jQuery("#tabs-single-modal").find(".add-elem-icon-text").val() : "";
    jQuery("#" + a + " .tabs-list .tabs-block").eq(b).find(".secret-desc").html(d);
    jQuery("#" + a + " .tabs-list .tabs-block").eq(b).find(".secret-desc").attr("tab-title", c);
    jQuery("#" + a + " .tabs-list .tabs-block").eq(b).find(".secret-desc").attr("icon_class", e);
    jQuery("#" + a + " .tabs-list .tabs-block").eq(b).find(".secret-desc").attr("icon_url", f);
    jQuery("#" + a + " .tabs-list .tabs-block").eq(b).find("span.tab-name").html(c);
    jQuery("#" + a + " .tab-textarea-holder > div").html(d);
    l(jQuery(this).parent().parent());
  });
  jQuery(document).on("click", ".rpb_modal .close-tab-single", function() {
    l(jQuery(this).parent().parent());
  });
  jQuery(document).on("click", ".tabs-save", function() {
    var a = jQuery(this).parent().parent().attr("id");
    f ? k(jQuery("#" + a)) : (W(a), jQuery("#" + a).rpb_modal("hide"));
  });
  jQuery.fn.addIconictextModal = function(a, b) {
    var c = {};
    c.id = a;
    jQuery.post(rockAjax.ajaxurl, {id:a, ajax_object:c, action:"xr_make_iconictext_modal"}, function(b) {
      null != b && (jQuery("#modal-holder").append(b), jQuery(document).trigger("rocthemes:modal_added_runtime", [a]));
    });
  };
  jQuery(document).on("click", ".iconictext-save", function() {
    var a = jQuery(this).parent().parent().attr("id");
    f ? k(jQuery("#" + a)) : (X(a), jQuery("#" + a).rpb_modal("hide"));
  });
  jQuery.fn.addButtonModal = function(a, b) {
    var c = {};
    c.id = a;
    jQuery.post(rockAjax.ajaxurl, {id:a, ajax_object:c, action:"xr_make_button_modal"}, function(b) {
      null != b && (jQuery("#modal-holder").append(b), jQuery(document).trigger("rocthemes:modal_added_runtime", [a]));
    });
  };
  jQuery(document).on("click", ".advanced_details_make_button_modal", function() {
    var a = "modal-" + jQuery.fn.makeUniqueElemID(), b = {};
    b.id = a;
    b.remove_modal_after = "true";
    b.return_to = jQuery(this).attr("id_ref");
    b.return_data_to = jQuery(this).attr("id_data_ref");
    b.saved_data = jQuery("#" + b.return_data_to).val();
    jQuery("body").rpb_modalmanager("loading");
    jQuery.post(rockAjax.ajaxurl, {id:a, ajax_object:b, action:"xr_make_button_modal"}, function(b) {
      null != b && (jQuery("#modal-holder").append(b), jQuery("#" + a).rpb_modal());
    });
  });
  jQuery(document).on("click", ".save-remove-button-modal", function() {
    var a = jQuery(this).attr("return_to"), b = jQuery(this).attr("return_data_to"), c = E(jQuery(this).parent().parent().attr("id"));
    jQuery("#" + a).val(c.shortcode);
    jQuery("#" + b).val(JSON.stringify(c));
    l(jQuery(this).parent().parent());
  });
  jQuery(document).on("click", ".button-modal-save", function() {
    var a = jQuery(this).parent().parent().attr("id");
    f ? k(jQuery("#" + a)) : (E(a), jQuery("#" + a).rpb_modal("hide"));
  });
  jQuery.fn.addSkillModal = function(a, b) {
    var c = {};
    c.id = a;
    jQuery.post(rockAjax.ajaxurl, {id:a, ajax_object:c, action:"xr_make_skill_modal"}, function(b) {
      null != b && (jQuery("#modal-holder").append(b), r(c.id), jQuery(document).trigger("rocthemes:modal_added_runtime", [a]));
    });
  };
  jQuery(document).on("click", ".button-skill-save", function() {
    var a = jQuery(this).parent().parent().attr("id");
    f ? k(jQuery("#" + a)) : (I(a), jQuery("#" + a).rpb_modal("hide"));
  });
  jQuery.fn.addHorizontalRuleModal = function(a, b) {
    var c = {};
    c.id = a;
    jQuery.post(rockAjax.ajaxurl, {id:a, ajax_object:c, action:"xr_make_hr_modal"}, function(b) {
      null != b && (jQuery("#modal-holder").append(b), r(c.id), jQuery(document).trigger("rocthemes:modal_added_runtime", [a]));
    });
  };
  jQuery(document).on("change", ".hr_is_image", function() {
    var a = jQuery(this).attr("ref"), b = jQuery(this).find(":selected").val();
    "use_html" == b && (jQuery("#" + a).find(".use_image_mode").slideUp(), jQuery("#" + a).find(".use_html_mode").slideDown());
    "use_image" == b && (jQuery("#" + a).find(".use_html_mode").slideUp(), jQuery("#" + a).find(".use_image_mode").slideDown());
  });
  jQuery(document).on("click", ".button-hr-save", function() {
    var a = jQuery(this).parent().parent().attr("id");
    f ? k(jQuery("#" + a)) : (I(a), jQuery("#" + a).rpb_modal("hide"));
  });
  jQuery.fn.addPortfolioModal = function(a, b) {
    var c = {};
    c.id = a;
    jQuery.post(rockAjax.ajaxurl, {id:a, ajax_object:c, action:"xr_make_portfolio_modal"}, function(b) {
      null != b && (jQuery("#modal-holder").append(b), jQuery(document).trigger("rocthemes:modal_added_runtime", [a]));
    });
  };
  jQuery(document).on("click", ".button-modal-save", function() {
    var a = jQuery(this).parent().parent().attr("id");
    f ? k(jQuery("#" + a)) : (E(a), jQuery("#" + a).rpb_modal("hide"));
  });
  jQuery.fn.addRockFormBuilderModal = function(a, b) {
    var c = {};
    c.id = a;
    jQuery.post(rockAjax.ajaxurl, {id:a, ajax_object:c, action:"xr_make_rockformbuilder_modal"}, function(b) {
      null != b && (jQuery("#modal-holder").append(b), jQuery(document).trigger("rocthemes:modal_added_runtime", [a]));
    });
  };
  jQuery(document).on("click", ".rockformbuilder-modal-save", function() {
    var a = jQuery(this).parent().parent().attr("id");
    f ? k(jQuery("#" + a)) : (Z(a), jQuery("#" + a).rpb_modal("hide"));
  });
  jQuery.fn.addGoogleMapModal = function(a, b) {
    var c = {};
    c.id = a;
    jQuery.post(rockAjax.ajaxurl, {id:a, ajax_object:c, action:"xr_make_googlemap_modal"}, function(b) {
      null != b && (jQuery("#modal-holder").append(b), jQuery(document).trigger("rocthemes:modal_added_runtime", [a]));
    });
  };
  jQuery(document).on("click", ".googlemap-modal-save", function() {
    var a = jQuery(this).parent().parent().attr("id");
    f ? k(jQuery("#" + a)) : (aa(a), jQuery("#" + a).rpb_modal("hide"));
  });
  jQuery.fn.addLeafLetMapModal = function(a, b) {
    var c = {};
    c.id = a;
    jQuery.post(rockAjax.ajaxurl, {id:a, ajax_object:c, action:"xr_make_leafletmap_modal"}, function(b) {
      null != b && (jQuery("#modal-holder").append(b), jQuery(document).trigger("rocthemes:modal_added_runtime", [a]));
    });
  };
  jQuery(document).on("click", ".leafletmap-modal-save", function() {
    var a = jQuery(this).parent().parent().attr("id");
    f ? k(jQuery("#" + a)) : (ba(a), jQuery("#" + a).rpb_modal("hide"));
  });
  jQuery.fn.addPromotionBoxModal = function(a, b) {
    var c = {};
    c.id = a;
    jQuery.post(rockAjax.ajaxurl, {id:a, ajax_object:c, action:"xr_make_promotionbox_modal"}, function(b) {
      null != b && (jQuery("#modal-holder").append(b), r(c.id), jQuery(document).trigger("rocthemes:modal_added_runtime", [a]));
    });
  };
  jQuery(document).on("click", ".promotionbox-modal-save", function() {
    var a = jQuery(this).parent().parent().attr("id");
    f ? k(jQuery("#" + a)) : (ca(a), jQuery("#" + a).rpb_modal("hide"));
  });
  jQuery.fn.addAlertBoxModal = function(a, b) {
    var c = {};
    c.id = a;
    jQuery.post(rockAjax.ajaxurl, {id:a, ajax_object:c, action:"xr_make_alertbox_modal"}, function(b) {
      null != b && (jQuery("#modal-holder").append(b), r(c.id), jQuery(document).trigger("rocthemes:modal_added_runtime", [a]));
    });
  };
  jQuery(document).on("change", ".alertbox_style", function() {
    var a = jQuery(this).attr("ref");
    "custom" == jQuery(this).find(":selected").val() ? jQuery("#" + a).find(".custom_alertbox_style").slideDown() : jQuery("#" + a).find(".custom_alertbox_style").slideUp();
  });
  jQuery(document).on("click", ".alertbox-modal-save", function() {
    var a = jQuery(this).parent().parent().attr("id");
    f ? k(jQuery("#" + a)) : (da(a), jQuery("#" + a).rpb_modal("hide"));
  });
  jQuery.fn.addReferencesBuilderModal = function(a, b) {
    var c = {};
    c.id = a;
    jQuery.post(rockAjax.ajaxurl, {id:a, ajax_object:c, action:"xr_make_referencesbuilder_modal"}, function(b) {
      null != b && (jQuery("#modal-holder").append(b), r(c.id), jQuery(document).trigger("rocthemes:modal_added_runtime", [a]));
    });
  };
  jQuery(document).on("click", ".references-single-item-remove", function() {
    jQuery(this).parent().parent().parent().remove();
  });
  jQuery(document).on("click", ".references-single-item-add", function() {
    var a = jQuery(this).attr("ref"), b = 0;
    jQuery("#" + a).find(".references-single-item").length && (b = parseInt(jQuery("#" + a).find(".references-single-item").last().attr("item-ref")) + 1);
    b = '<div class="references-single-item" item-ref="' + b + '"><div class="row-fluid"><div class="span6"><div class="hr-modal-image" ref="icon-image-uploader"><div class="hide image-data"></div><label for="upload_image"> <input autocomplete="off" id="icon-image-uploader-' + a + b + '" class="upload_image_button" size="36" name="upload_image" type="text" value="" /> <input autocomplete="off" class="image_uploader_class button" value="Upload Image" type="button" /> </label><br/></div></div><div class="span6"><input autocomplete="off" type="text" class="link_url" value="" /><div class="button references-single-item-remove"><i class="fa fa-times"></i> Remove References</div></div></div><hr class="no-margin"/><br/></div>';
    jQuery("#" + a).find(".references-container").append(b);
  });
  jQuery(document).on("click", ".referencesbuilder-modal-save", function() {
    var a = jQuery(this).parent().parent().attr("id");
    f ? k(jQuery("#" + a)) : (ea(a), jQuery("#" + a).rpb_modal("hide"));
  });
  jQuery.fn.addTestimonialsBuilderModal = function(a, b) {
    var c = {};
    c.id = a;
    jQuery.post(rockAjax.ajaxurl, {id:a, ajax_object:c, action:"xr_make_testimonialsbuilder_modal"}, function(b) {
      null != b && (jQuery("#modal-holder").append(b), jQuery("#" + a + " .testimonialsbuilder-list").sortable({handle:"i.drag"}), jQuery(document).trigger("rocthemes:modal_added_runtime", [a]));
    });
  };
  jQuery(document).on("hover", ".rpb_modal .testimonialsbuilder-block", function() {
    jQuery(this).hasClass("add-new-testimonialsbuilder-btn") || (jQuery(".testimonialsbuilder-block.active").removeClass("active"), jQuery(this).find(".testimonialsbuilder-name").attr("testimonialsbuilder-index", jQuery(this).index()), jQuery(this).parent().parent().find(".testimonialsbuilder-textarea-holder").attr("testimonialsbuilder-index", jQuery(this).index()), jQuery(this).parent().parent().find(".testimonialsbuilder-textarea-holder > div").html(jQuery(this).find(".secret-desc").html()), jQuery(this).addClass("active"));
  });
  jQuery(document).on("click", ".testimonialsbuilder-elements-holder .add-new-testimonialsbuilder-btn", function() {
    var a = jQuery(this).attr("ref"), b = jQuery("#" + a + " .testimonialsbuilder-block").length;
    b = '<li class="testimonialsbuilder-block"><div class="hide secret-desc" testimonialsbuilder-title="Testimonials Awesome" company="">Testimonials Awesome Content</div><i class="drag fa fa-move"></i><span class="testimonialsbuilder-name" ref="' + a + '" testimonialsbuilder-index="' + b + '">Testimonials Awesome</span><i class="close fa fa-times"></i></li>';
    jQuery("#" + a + " .testimonialsbuilder-list").append(b);
  });
  jQuery(document).on("click", ".testimonialsbuilder-block i.close", function() {
    parseInt(jQuery(this).parent().find(".testimonialsbuilder-name").attr("testimonialsbuilder-index")) == parseInt(jQuery("#" + jQuery(this).parent().find(".testimonialsbuilder-name").attr("ref")).find(".testimonialsbuilder-textarea-holder").attr("testimonialsbuilder-index")) && (jQuery("#" + jQuery(this).parent().find(".testimonialsbuilder-name").attr("ref")).find(".testimonialsbuilder-textarea-holder").attr("testimonialsbuilder-index", "0"), jQuery("#" + jQuery(this).parent().find(".testimonialsbuilder-name").attr("ref")).find(".testimonialsbuilder-textarea-holder > div").html(""));
    jQuery(this).parent().remove();
  });
  jQuery(document).on("click", ".testimonialsbuilder-block .testimonialsbuilder-name, .testimonialsbuilder-textarea-holder", function() {
    if (!(0 < jQuery("#testimonialsbuilder-single-modal").length)) {
      var a = jQuery(this).attr("ref"), b = jQuery(this).attr("testimonialsbuilder-index"), c = jQuery("#" + a).find(".testimonialsbuilder-block").eq(b).find(".secret-desc").html(), d = jQuery("#" + a).find(".testimonialsbuilder-block").eq(b).find(".secret-desc").attr("testimonialsbuilder-title"), e = {};
      e.id = a;
      e.title = d;
      e.company = jQuery("#" + a).find(".testimonialsbuilder-block").eq(b).find(".secret-desc").attr("company");
      e.content = c;
      e.index = b;
      jQuery("body").rpb_modalmanager("loading");
      jQuery.post(rockAjax.ajaxurl, {testimonials_obj:e, action:"rock_make_single_testimonialsbuilder_modal"}, function(a) {
        jQuery("#modal-holder").append(a);
        jQuery("#testimonialsbuilder-single-modal").rpb_modal();
        jQuery("#testimonialsbuilder-single-modal .rock-tinymce-textarea").html(c);
        "object" == typeof tinyMCE && "function" == typeof tinyMCE.execCommand && (window.tinyMCE.execCommand("mceAddEditor", !0, "testimonialsbuilder-single-modal-editor"), wpActiveEditor = "testimonialsbuilder-single-modal-editor");
      });
    }
  });
  jQuery(document).on("click", ".testimonialsbuilder-single-save", function() {
    var a = jQuery(this).attr("modal-ref"), b = jQuery(this).attr("ref"), c = jQuery("#testimonialsbuilder-single-modal"), d = m("#" + c.attr("id")), e = c.find(".testimonialsbuilder_header").val();
    c = c.find(".company").val();
    jQuery("#" + a + " .testimonialsbuilder-list .testimonialsbuilder-block").eq(b).find(".secret-desc").html(d);
    jQuery("#" + a + " .testimonialsbuilder-list .testimonialsbuilder-block").eq(b).find(".secret-desc").attr("testimonialsbuilder-title", e);
    jQuery("#" + a + " .testimonialsbuilder-list .testimonialsbuilder-block").eq(b).find(".secret-desc").attr("company", c);
    jQuery("#" + a + " .testimonialsbuilder-list .testimonialsbuilder-block").eq(b).find("span.testimonialsbuilder-name").html(e);
    jQuery("#" + a + " .testimonialsbuilder-textarea-holder > div").html(d);
    l(jQuery(this).parent().parent());
  });
  jQuery(document).on("click", ".rpb_modal .close-testimonialsbuilder-single", function() {
    l(jQuery(this).parent().parent());
  });
  jQuery(document).on("click", ".testimonialsbuilder-save", function() {
    var a = jQuery(this).parent().parent().attr("id");
    f ? k(jQuery("#" + a)) : (fa(a), jQuery("#" + a).rpb_modal("hide"));
  });
  jQuery.fn.addSocialIconsModal = function(a, b) {
    var c = {};
    c.id = a;
    jQuery.post(rockAjax.ajaxurl, {id:a, ajax_object:c, action:"xr_make_socialicons_modal"}, function(b) {
      null != b && (jQuery("#modal-holder").append(b), jQuery(document).trigger("rocthemes:modal_added_runtime", [a]));
    });
  };
  jQuery(document).on("click", ".call_social_icons_external", function() {
    var a = "modal-" + jQuery.fn.makeUniqueElemID(), b = {};
    b.id = a;
    b.remove_modal_after = "true";
    b.return_to = jQuery(this).attr("id_ref");
    b.return_data_to = jQuery(this).attr("id_data_ref");
    b.saved_data = jQuery("#" + b.return_data_to).val();
    jQuery("body").rpb_modalmanager("loading");
    jQuery.post(rockAjax.ajaxurl, {id:a, ajax_object:b, action:"xr_make_socialicons_modal"}, function(b) {
      null != b && (jQuery("#modal-holder").append(b), jQuery("#" + a).rpb_modal());
    });
  });
  jQuery(document).on("hover", ".rpb_modal .socialicons-block", function() {
    jQuery(this).hasClass("add-new-socialicons-btn") || (jQuery(".socialicons-block.active").removeClass("active"), jQuery(this).find(".socialicons-name").attr("socialicons-index", jQuery(this).index()), jQuery(this).parent().parent().find(".socialicons-textarea-holder").attr("socialicons-index", jQuery(this).index()), jQuery(this).parent().parent().find(".socialicons-textarea-holder > div").html(jQuery(this).find(".secret-desc").html()), jQuery(this).addClass("active"));
  });
  jQuery(document).on("click", ".socialicons-elements-holder .add-new-socialicons-btn", function() {
    var a = jQuery(this).attr("ref"), b = jQuery("#" + a + " .socialicons-block").length;
    b = '<li class="socialicons-block"><div class="hide secret-desc" socialicons-title="http://www.yahoo.com" icon_class="" icon_url=""></div><i class="drag fa fa-move"></i><span class="socialicons-name" ref="' + a + '" socialicons-index="' + b + '">http://www.yahoo.com</span><i class="close fa fa-times"></i></li>';
    jQuery("#" + a + " .socialicons-list").append(b);
  });
  jQuery(document).on("click", ".socialicons-block i.close", function() {
    parseInt(jQuery(this).parent().find(".socialicons-name").attr("socialicons-index")) == parseInt(jQuery("#" + jQuery(this).parent().find(".socialicons-name").attr("ref")).find(".socialicons-textarea-holder").attr("socialicons-index")) && (jQuery("#" + jQuery(this).parent().find(".socialicons-name").attr("ref")).find(".socialicons-textarea-holder").attr("socialicons-index", "0"), jQuery("#" + jQuery(this).parent().find(".socialicons-name").attr("ref")).find(".socialicons-textarea-holder > div").html(""));
    jQuery(this).parent().remove();
  });
  jQuery(document).on("click", ".socialicons-block .socialicons-name", function() {
    if (!(0 < jQuery("#socialicons-single-modal").length)) {
      var a = jQuery(this).attr("ref"), b = parseInt(jQuery(this).attr("socialicons-index")), c = jQuery("#" + a).find(".socialicons-block").eq(b).find(".secret-desc").attr("socialicons-title"), d = jQuery("#" + a).find(".socialicons-block").eq(b).find(".secret-desc").attr("icon_class"), e = jQuery("#" + a).find(".socialicons-block").eq(b).find(".secret-desc").attr("icon_url"), f = {};
      f.id = a;
      f.title = c;
      f.icon_class = d;
      f.icon_url = e;
      f.index = b;
      jQuery("body").rpb_modalmanager("loading");
      jQuery.post(rockAjax.ajaxurl, {socialicons_obj:f, action:"rock_make_single_socialicons_modal"}, function(a) {
        jQuery("#modal-holder").append(a);
        jQuery("#socialicons-single-modal").rpb_modal();
      });
    }
  });
  jQuery(document).on("click", ".socialicons-single-save", function() {
    var a = jQuery(this).attr("modal-ref"), b = jQuery(this).attr("ref"), c = jQuery("#socialicons-single-modal").find(".socialicons_header").val(), d = "undefined" != jQuery("#socialicons-single-modal").find(".elem-icon .icon-holder").attr("ref") ? jQuery("#socialicons-single-modal").find(".elem-icon .icon-holder").attr("icon-ref") : "", e = "undefined" != jQuery("#socialicons-single-modal").find(".add-elem-icon-text").val() ? jQuery("#socialicons-single-modal").find(".add-elem-icon-text").val() : 
    "";
    jQuery("#" + a + " .socialicons-list li.socialicons-block").eq(b).find(".secret-desc").attr("socialicons-title", c);
    jQuery("#" + a + " .socialicons-list li.socialicons-block").eq(b).find(".secret-desc").attr("icon_class", d);
    jQuery("#" + a + " .socialicons-list li.socialicons-block").eq(b).find(".secret-desc").attr("icon_url", e);
    jQuery("#" + a + " .socialicons-list li.socialicons-block").eq(b).find("span.socialicons-name").html(c);
    l(jQuery(this).parent().parent());
  });
  jQuery(document).on("click", ".rpb_modal .close-socialicons-single", function() {
    l(jQuery(this).parent().parent());
  });
  jQuery(document).on("click", ".save-remove-socialicons-modal", function() {
    var a = jQuery(this).attr("return_to"), b = jQuery(this).attr("return_data_to"), c = J(jQuery(this).parent().parent().attr("id"), !0);
    jQuery("#" + a).val(c.shortcode);
    jQuery("#" + b).val(JSON.stringify(c));
    l(jQuery(this).parent().parent());
  });
  jQuery(document).on("click", ".socialicons-modal-save", function() {
    var a = jQuery(this).parent().parent().attr("id");
    f ? k(jQuery("#" + a)) : (J(a), jQuery("#" + a).rpb_modal("hide"));
  });
  jQuery.fn.addTeamMembersModal = function(a, b) {
    var c = {};
    c.id = a;
    jQuery.post(rockAjax.ajaxurl, {id:a, ajax_object:c, action:"xr_make_teammembers_modal"}, function(b) {
      null != b && (jQuery("#modal-holder").append(b), jQuery("#" + a + " .teammembers-list").sortable({handle:"i.drag"}), jQuery(document).trigger("rocthemes:modal_added_runtime", [a]));
    });
  };
  jQuery(document).on("hover", ".rpb_modal .teammembers-block", function() {
    jQuery(this).hasClass("add-new-teammembers-btn") || (jQuery(".teammembers-block.active").removeClass("active"), jQuery(this).find(".teammembers-name").attr("teammembers-index", jQuery(this).index()), jQuery(this).parent().parent().find(".teammembers-textarea-holder").attr("teammembers-index", jQuery(this).index()), jQuery(this).parent().parent().find(".teammembers-textarea-holder > div").html(jQuery(this).find(".secret-desc").html()), jQuery(this).addClass("active"));
  });
  jQuery(document).on("click", ".teammembers-elements-holder .add-new-teammembers-btn", function() {
    var a = jQuery(this).attr("ref"), b = jQuery("#" + a + " .teammembers-block").length;
    b = '<li class="teammembers-block"><div class="hide secret-desc" teammembers-title="teammembers Awesome" company="" external_url="" member_image_url="">teammembers Awesome Content</div><div class="hide social_data"></div><div class="hide social_shortcode"></div><i class="drag fa fa-move"></i><span class="teammembers-name" ref="' + a + '" teammembers-index="' + b + '">teammembers Awesome</span><i class="close fa fa-times"></i></li>';
    jQuery("#" + a + " .teammembers-list").append(b);
  });
  jQuery(document).on("click", ".teammembers-block i.close", function() {
    parseInt(jQuery(this).parent().find(".teammembers-name").attr("teammembers-index")) == parseInt(jQuery("#" + jQuery(this).parent().find(".teammembers-name").attr("ref")).find(".teammembers-textarea-holder").attr("teammembers-index")) && (jQuery("#" + jQuery(this).parent().find(".teammembers-name").attr("ref")).find(".teammembers-textarea-holder").attr("teammembers-index", "0"), jQuery("#" + jQuery(this).parent().find(".teammembers-name").attr("ref")).find(".teammembers-textarea-holder > div").html(""));
    jQuery(this).parent().remove();
  });
  jQuery(document).on("click", ".teammembers-block .teammembers-name", function() {
    if (!(0 < jQuery("#teammembers-single-modal").length)) {
      var a = jQuery(this).attr("ref"), b = jQuery(this).attr("teammembers-index"), c = jQuery("#" + a).find(".teammembers-block").eq(b).find(".secret-desc").html(), d = jQuery("#" + a).find(".teammembers-block").eq(b).find(".secret-desc").attr("teammembers-title"), e = {};
      e.id = a;
      e.title = d;
      e.company = jQuery("#" + a).find(".teammembers-block").eq(b).find(".secret-desc").attr("company");
      e.external_url = jQuery("#" + a).find(".teammembers-block").eq(b).find(".secret-desc").attr("external_url");
      e.social_data = jQuery("#" + a).find(".teammembers-block").eq(b).find(".social_data").html();
      e.social_shortcode = jQuery("#" + a).find(".teammembers-block").eq(b).find(".social_shortcode").html();
      e.member_image_url = jQuery("#" + a).find(".teammembers-block").eq(b).find(".secret-desc").attr("member_image_url");
      e.content = c;
      e.index = b;
      jQuery("body").rpb_modalmanager("loading");
      jQuery.post(rockAjax.ajaxurl, {teammembers_obj:e, action:"rock_make_single_teammembers_modal"}, function(a) {
        jQuery("#modal-holder").append(a);
        jQuery("#teammembers-single-modal").rpb_modal();
        jQuery("#teammembers-single-modal .rock-tinymce-textarea").html(c);
        "object" == typeof tinyMCE && "function" == typeof tinyMCE.execCommand && (window.tinyMCE.execCommand("mceAddEditor", !0, "teammembers-single-modal-editor"), wpActiveEditor = "teammembers-single-modal-editor");
      });
    }
  });
  jQuery(document).on("click", ".teammembers-single-save", function() {
    var a = jQuery(this).attr("modal-ref"), b = jQuery(this).attr("ref"), c = jQuery("#teammembers-single-modal"), d = m("#" + c.attr("id")), e = c.find(".teammembers_header").val(), f = c.find(".company").val(), g = c.find(".external_url").val(), k = c.find(".social_data").val(), h = c.find(".social_shortcode").val();
    c = c.find(".member_image_url").val();
    jQuery("#" + a + " .teammembers-list .teammembers-block").eq(b).find(".secret-desc").html(d);
    jQuery("#" + a + " .teammembers-list .teammembers-block").eq(b).find(".secret-desc").attr("teammembers-title", e);
    jQuery("#" + a + " .teammembers-list .teammembers-block").eq(b).find(".secret-desc").attr("company", f);
    jQuery("#" + a + " .teammembers-list .teammembers-block").eq(b).find(".secret-desc").attr("external_url", g);
    jQuery("#" + a + " .teammembers-list .teammembers-block").eq(b).find(".secret-desc").attr("member_image_url", c);
    jQuery("#" + a + " .teammembers-list .teammembers-block").eq(b).find("span.teammembers-name").html(e);
    jQuery("#" + a + " .teammembers-list .teammembers-block").eq(b).find(".social_data").html(k);
    jQuery("#" + a + " .teammembers-list .teammembers-block").eq(b).find(".social_shortcode").html(h);
    jQuery("#" + a + " .teammembers-textarea-holder > div").html(d);
    l(jQuery(this).parent().parent());
  });
  jQuery(document).on("click", ".rpb_modal .close-teammembers-single", function() {
    l(jQuery(this).parent().parent());
  });
  jQuery(document).on("click", ".teammembers-save", function() {
    var a = jQuery(this).parent().parent().attr("id");
    f ? k(jQuery("#" + a)) : (ha(a), jQuery("#" + a).rpb_modal("hide"));
  });
  jQuery.fn.addBeforeAfterSliderModal = function(a, b) {
    var c = {};
    c.id = a;
    jQuery.post(rockAjax.ajaxurl, {id:a, ajax_object:c, action:"xr_make_beforeafterslider_modal"}, function(b) {
      null != b && (jQuery("#modal-holder").append(b), r(c.id), jQuery(document).trigger("rocthemes:modal_added_runtime", [a]));
    });
  };
  jQuery(document).on("click", ".beforeafterslider-modal-save", function() {
    var a = jQuery(this).parent().parent().attr("id");
    f ? k(jQuery("#" + a)) : (ia(a), jQuery("#" + a).rpb_modal("hide"));
  });
  jQuery.fn.addExternalShortcodeModal = function(a, b) {
    var c = {};
    c.id = a;
    jQuery.post(rockAjax.ajaxurl, {id:a, ajax_object:c, action:"xr_make_externalshortcode_modal"}, function(b) {
      null != b && (jQuery("#modal-holder").append(b), jQuery(document).trigger("rocthemes:modal_added_runtime", [a]));
    });
  };
  jQuery(document).on("click", ".externalshortcode-modal-save", function() {
    var a = jQuery(this).parent().parent().attr("id");
    f ? k(jQuery("#" + a)) : (ja(a), jQuery("#" + a).rpb_modal("hide"));
  });
  jQuery.fn.addRegularBlogModal = function(a, b) {
    var c = {};
    c.id = a;
    jQuery.post(rockAjax.ajaxurl, {id:a, ajax_object:c, action:"xr_make_regularblog_modal"}, function(b) {
      null != b && (jQuery("#modal-holder").append(b), jQuery(document).trigger("rocthemes:modal_added_runtime", [a]));
    });
  };
  jQuery(document).on("change", ".regularblog .regular_content", function() {
    var a = jQuery(this).attr("ref");
    "true" === jQuery(this).find(":selected").val() ? jQuery("#" + a + " .regular-content-details").slideUp() : jQuery("#" + a + " .regular-content-details").slideDown();
  });
  jQuery(document).on("click", ".regularblog-modal-save", function() {
    var a = jQuery(this).parent().parent().attr("id");
    f ? k(jQuery("#" + a)) : (ka(a), jQuery("#" + a).rpb_modal("hide"));
  });
  jQuery.fn.addGalleryModal = function(a, b) {
    var c = {};
    c.id = a;
    jQuery.post(rockAjax.ajaxurl, {id:a, ajax_object:c, action:"xr_make_gallery_modal"}, function(b) {
      null != b && (jQuery("#modal-holder").append(b), jQuery(document).trigger("rocthemes:modal_added_runtime", [a]));
    });
  };
  jQuery(document).on("click", ".gallery-modal-save", function() {
    var a = jQuery(this).parent().parent().attr("id");
    f ? k(jQuery("#" + a)) : (la(a), jQuery("#" + a).rpb_modal("hide"));
  });
  jQuery(document).on("change", ".grid-modal .grid_special_width_details", function() {
    var a = jQuery(this).attr("ref"), b = jQuery(this).find(":selected").val();
    "full_width_colored" == b ? (jQuery("#" + a + " .full_width_colored_mode").slideDown(), jQuery("#" + a + " .use_parallax_mode").hide()) : "use_parallax" == b || "use_background_img" == b ? (jQuery("#" + a + " .use_parallax_mode").slideDown(), jQuery("#" + a + " .full_width_colored_mode").hide()) : (jQuery("#" + a + " .full_width_colored_mode").hide(), jQuery("#" + a + " .use_parallax_mode").hide());
  });
  jQuery(document).on("change", ".grid-modal .avoid_sidebar", function() {
    var a = jQuery(this).attr("ref");
    "false" === jQuery(this).find(":selected").val() ? (jQuery("#" + a + " .full_width_colored_mode").slideUp(), jQuery("#" + a + " .avoid_sidebar_not_false").slideUp()) : (jQuery("#" + a + " .avoid_sidebar_not_false").slideDown(), "full_width_colored" === jQuery("#" + a + " .grid_special_width_details").find(":selected").val() && jQuery("#" + a + " .full_width_colored_mode").slideDown());
  });
  jQuery(document).on("click", ".builder-close", function() {
    f || jQuery(document).off("hidden");
    jQuery(this).parent().parent().rpb_modal("hide");
  });
  jQuery(document).trigger("rockthemes:builder_modals_ready");
  jQuery(document).on("change", ".link_select", function() {
    var a = jQuery(this), b = a.parent().parent();
    b.find(".link_select_page").length && b.find(".link_select_page").remove();
    b.find(".link_custom_input").length && b.find(".link_custom_input").remove();
    var c = {};
    c.category = a.find(":selected").val();
    c.is_page = a.find(":selected").attr("is_page");
    a = a.find(":selected").val();
    "no-selected" != a && ("custom-link" == a ? b.append('<input autocomplete="off" class="link_custom_input" type="text" value="http://" />') : jQuery.post(rockAjax.ajaxurl, {data:c, action:"rockAjax_get_linkposts_cats_posts"}, function(a) {
      b.append(a);
    }));
  });
  jQuery(document).on("click", '[data-dismiss="modal"]', function(a) {
    a.preventDefault();
    jQuery(this).parents(".modal").length && jQuery(this).parents(".modal").rpb_modal("hide");
  });
  if (f) {
    jQuery(document).on("hidden", ".rpb_modal", function(a) {
      if ("undefined" == typeof a || jQuery(a.target).hasClass("rpb_modal")) {
        var b = jQuery(this);
        "rockthemes-pb-elements-modal" != b.attr("id") && (a = null, 0 < b.find(".rock-tinymce-container textarea").length ? a = b.find(".rock-tinymce-container textarea") : 0 < b.find("#main-textarea-modal").length && (a = b.find("#main-textarea-modal")), a && (window.tinyMCE.execCommand("mceRemoveEditor", !0, a.attr("id")), wpActiveEditor = "content"), "text-area-modal" != b.attr("id") && setTimeout(function() {
          b.remove();
        }, 700));
      }
    });
  } else {
    jQuery(document).on("hide", "#rock-icon-list-modal, #tabs-single-modal, #toggles-single-modal, #testimonialsbuilder-single-modal, #socialicons-single-modal, #teammembers-single-modal, .external-modal-call", function(a) {
      var b = jQuery(this), c = null;
      0 < b.find(".rock-tinymce-container textarea").length && (c = b.find(".rock-tinymce-container textarea"));
      jQuery(document).on("hidden", "#" + b.attr("id"), function() {
        c && (window.tinyMCE.execCommand("mceRemoveEditor", !0, c.attr("id")), wpActiveEditor = "content");
        setTimeout(function() {
          b.remove();
        }, 700);
      });
    });
  }
  jQuery(document).on("click", ".close-grid-modal", function() {
    l(jQuery(this).parent().parent());
  });
  jQuery(document).on("click", ".add-elem-icon-btn", function() {
    jQuery("body").rpb_modalmanager("loading");
    var a = jQuery(this);
    jQuery.post(rockAjax.ajaxurl, {action:"rock_icon_list_modal"}, function(b) {
      jQuery("#modal-holder").append(b);
      jQuery("#rock-icon-list-modal").rpb_modal();
      B = function(b) {
        if ("" != b.icon) {
          a.parent().find(".icon-holder").attr("icon-ref", b.icon).html('<i class="' + b.icon + ' fa-4x"></i>'), a.parent().find(".add-elem-icon-text").css("display", "none");
        } else {
          if ("" != b.url) {
            a.parent().find(".add-elem-icon-text").css("display", "block").val(b.url), a.parent().find(".icon-holder").attr("icon-ref", "").html("");
          } else {
            a.parent().find(".add-elem-icon-text").css("display", "none").empty();
            a.parent().find(".icon-holder").attr("icon-ref", "").html("");
            a.parent().find(".add-elem-icon-btn.btn").removeClass("hide");
            a.parent().find(".remove-elem-icon-btn").addClass("hide");
            return;
          }
        }
        a.parent().find(".add-elem-icon-btn.btn").addClass("hide");
        a.parent().find(".remove-elem-icon-btn").removeClass("hide");
      };
    });
  });
  jQuery(document).on("click", ".remove-elem-icon-btn", function() {
    var a = jQuery(this);
    "" != a.parent().find(".icon-holder").html() && a.parent().find(".icon-holder").attr("icon-ref", "").html("");
    "" != a.parent().find(".add-elem-icon-text").val() && a.parent().find(".add-elem-icon-text").css("display", "none").val("");
    a.addClass("hide");
    a.parent().find(".add-elem-icon-btn.btn").removeClass("hide");
  });
  jQuery(document).on("input", ".rock-search-fontawesome-icons", function() {
    var a = jQuery(this).parent().find(".rock-fontawesome-icons"), b = jQuery(this), c = "";
    setTimeout(function() {
      c = b.val();
      "" === c ? a.find(".rock-choose-icon").removeClass("hide") : (a.find(".rock-choose-icon").addClass("hide"), a.find(".rock-choose-icon").each(function() {
        -1 < jQuery(this).attr("ref").toString().indexOf(c) && jQuery(this).removeClass("hide");
      }));
    }, 180);
  });
  var B = null;
  jQuery(document).on("click", ".rock-choose-icon", function() {
    B && B({icon:jQuery(this).attr("ref"), url:""});
    l(jQuery("#rock-icon-list-modal"));
  });
  jQuery(document).on("click", ".iconlist-save", function() {
    B && B({icon:"", url:jQuery("#rock-icon-list-modal .upload_image_button").val()});
    l(jQuery("#rock-icon-list-modal"));
  });
  jQuery(document).on("click", "#save-current-settings-btn", function(a) {
    a = jQuery(this);
    var b = a.attr("data-page-id");
    if (b) {
      a.addClass("disabled");
      var c = a.html();
      a.addClass("disabled").html(c + " <i class='fa fa-refresh fa-spin'></i>");
      z(b);
    }
  });
  jQuery.fn.getModalDesc = function(a) {
    switch(jQuery(a).attr("modalType")) {
      case "textarea":
        return jQuery.fn.getTextareaDesc(a);
      case "textfield":
        return jQuery.fn.getTextfieldDesc(a);
    }
  };
  jQuery.fn.rpb_modal.defaults.maxHeight = function() {
    return jQuery(window).height() - 300;
  };
  var L = !0, u = oa + 1;
  jQuery.fn.makeUniqueID = function() {
    if (0 < jQuery("#grid-" + u).length) {
      for (; 0 < jQuery("#grid-" + u).length;) {
        if (u++, 0 >= jQuery("#grid-" + u).length) {
          return u;
        }
      }
    } else {
      return u++, u - 1;
    }
  };
  var v = oa + 1;
  jQuery.fn.makeSpecialUniqueID = function() {
    if (0 < jQuery("#specialgridblock-open-" + v).length) {
      for (; 0 < jQuery("#specialgridblock-open-" + v).length;) {
        if (v++, 0 >= jQuery("#specialgridblock-open-" + v).length) {
          return v;
        }
      }
    } else {
      return v++, v - 1;
    }
  };
  var w = 0;
  jQuery.fn.makeUniqueElemID = function() {
    if (0 < jQuery("#elem-" + w).length) {
      for (; 0 < jQuery("#elem-" + w).length;) {
        if (w++, 0 >= jQuery("#elem-" + w).length) {
          return w;
        }
      }
    } else {
      return w++, w - 1;
    }
  };
  jQuery.fn.getTextfieldDesc = function(a) {
    return jQuery(a).find("textarea").val();
  };
  jQuery.fn.getTextareaDescForSave = function(a) {
    return jQuery("#" + a).find(".secret-desc").html();
  };
  jQuery.fn.getTextareaDesc = function(a) {
    return jQuery(a).find("#wp-general_textarea-wrap").hasClass("tmce-active") ? tinyMCE.get("#general_textarea").getContent() : jQuery(a).find("#general_textarea").val();
  };
  jQuery.fn.addTextareaDesc = function(a) {
    jQuery("#text-area-modal").find(".rock-tinymce-container").hasClass("tmce-active") ? tinyMCE.get("main-textarea-modal").setContent(a) : jQuery("#text-area-modal").find(".rock-tinymce-textarea").val(a);
  };
  jQuery(document).on("click", "#send_content_to_tinymce", function() {
    var a = z(jQuery(this).attr("postID"), !0);
    jQuery("#wp-content-wrap").hasClass("tmce-active") ? tinyMCE.editors[0].setContent(a) : jQuery("#postdivrich .wp-editor-area").val(a);
    jQuery("#toggle_page_builder").trigger("click");
  });
  jQuery("#save-current-settings-btn").click(function() {
  });
});
(function(k, h) {
  k.fn.cloneSelects = function(h, C) {
    var x = this.clone(h, C), m = k("select", this), t = k("select", x);
    m.each(function(h) {
      t.eq(h).val(k(this).val());
    });
    return x;
  };
})(jQuery);