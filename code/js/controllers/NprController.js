;(function() {
  "use strict";

  require("BaseController").init({
    siteName: "NPR",
    play: "a.play",
    pause: "a.pause",
    playNext: "a.next",

    pauseStyle: "a.pause",
    song: ".title"
  });
})();
