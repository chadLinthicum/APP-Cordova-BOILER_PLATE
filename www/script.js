// https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-media/index.html
// cordova media plugin

let app = {
  init: function () {
    document.addEventListener("deviceready", app.ready, false);
  },
  ready: function () {
    let src = "file:///android_asset/www/media/demo.mp4";
    app.media = new Media(src);
    document.querySelector("#play-btn").addEventListener("click", app.play);
    document.querySelector("#pause-btn").addEventListener("click", app.pause);
    document.querySelector("#ff-btn").addEventListener("click", app.ff);
    document.querySelector("#rew-btn").addEventListener("click", app.rew);
  },

  play: function () {
    app.media.play();
  },
  pause: function () {
    app.media.pause();
  },
  ff: function () {
    app.media.getCurrentPosition((pos) => {
      let dur = app.media.getDuration();
      pos += 10;
      if (pos < dur) {
        app.media.seekTo(pos * 1000);
      }
    });
  },
  rew: function () {
    app.media.getCurrentPosition((pos) => {
      pos -= 10;
      if (pos > 0) {
        app.media.seekTo(pos * 1000);
      } else {
        app.media.seekTo(0);
      }
    });
  },
};

app.init();
