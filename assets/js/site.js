(function () {
  // Name sign: plays by default, can be paused (WCAG 2.2.2). Starts paused
  // for visitors who ask their device for reduced motion.
  var img = document.getElementById("namesign-img");
  var btn = document.getElementById("namesign-toggle");
  if (img && btn) {
    var still = img.getAttribute("data-still");
    var anim = img.getAttribute("data-anim");
    var setPlaying = function (on) {
      img.src = on ? anim : still;
      btn.setAttribute("aria-pressed", on ? "false" : "true");
      btn.textContent = on ? "Pause name sign" : "Play name sign";
    };
    var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setPlaying(!reduce);
    btn.addEventListener("click", function () {
      setPlaying(btn.getAttribute("aria-pressed") === "true");
    });
  }

  // Mark the nav link for the section in view.
  var links = Array.prototype.slice.call(document.querySelectorAll(".site-nav a[href^='#']"));
  if ("IntersectionObserver" in window && links.length) {
    var byId = {};
    links.forEach(function (a) { byId[a.getAttribute("href").slice(1)] = a; });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting && byId[e.target.id]) {
          links.forEach(function (a) { a.removeAttribute("aria-current"); });
          byId[e.target.id].setAttribute("aria-current", "true");
        }
      });
    }, { rootMargin: "-30% 0px -60% 0px" });
    Object.keys(byId).forEach(function (id) {
      var el = document.getElementById(id);
      if (el) io.observe(el);
    });
  }
})();
