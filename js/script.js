$(document).ready(function () {
  /* Mobile Navigation */

  $(".mobile-icon i").click(function () {
    var nav = $(".js--top-nav-links");
    var icon = $(".mobile-icon i");

    nav.slideToggle(300);

    if (icon.hasClass("fa-align-right")) {
      icon.addClass("fa-times");
      icon.removeClass("fa-align-right");
    } else {
      icon.addClass("fa-align-right");
      icon.removeClass("fa-times");
    }
  });

  /* it is for sticky navigation */
  $("#js--about").waypoint(
    function (direction) {
      if (direction === "down") {
        $(".top-nav").addClass("sticky");
      } else {
        $(".top-nav").removeClass("sticky");
      }
    },
    {
      offset: "0px;",
    }
  );

  /* Typed Text */
  $(function () {
    $("#typing-text").typed({
      strings: ["Enterprise UIs", "Web applications", "Delightful pages"],
      typeSpeed: 25,
      backSpeed: 0,
      backDelay: 2000,
      startDelay: 50,
      loop: true,
      showCursor: true,
      cursorChar: " | ",
      autoInsertCss: true,
    });
  });

  /* smoothscroll settings */
  $(function () {
    $('a[href*="#"]:not([href="#"])').click(function () {
      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");
        if (target.length) {
          $("html, body").animate(
            {
              scrollTop: target.offset().top,
            },
            800
          );
          return false;
        }
      }
    });
  });
});
