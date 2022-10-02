import $ from "jquery";

(function($) {
  $.fn.UItoTop = function(n) {
    var e = {
      text: "",
      min: 500,
      scrollSpeed: 800,
      containerID: "ui-to-top",
      containerClass: "ui-to-top fa fa-angle-up",
      easingType: "easeIn",
    };
    var t = $.extend(e, n);
    var i = "#" + t.containerID;
    $("body").append(
      '<a href="#" id="' +
        t.containerID +
        '" class="' +
        t.containerClass +
        '" >' +
        t.text +
        "</a>"
    );
    $(i).click(function() {
      return (
        $("html, body")
          .stop()
          .animate({ scrollTop: 0 }, t.scrollSpeed, t.easingType),
        !1
      );
    });
    $(window).scroll(function() {
      var n = $(window).scrollTop();
      if (typeof document.body.style.maxHeight === "undefined") {
        $(i).css({
          position: "absolute",
          top: $(window).scrollTop() + $(window).height() - 50,
        });
      }
      if (n > t.min)
        $(i)
          .stop(!0, !0)
          .addClass("active");
      else $(i).removeClass("active");
    });
  };
})($);
