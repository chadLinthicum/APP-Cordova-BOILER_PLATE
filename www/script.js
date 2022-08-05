let video = document.querySelector(".video");
let juice = document.querySelector(".orange-juice");
let btn_play = document.getElementById("play-pause");
let btn_skipForward = document.getElementById("skip-forward");

function togglePlayPause() {
  if (video.paused) {
    btn_play.className = "pause";
    video.play();
  } else {
    btn_play.className = "play";
    video.pause();
  }
}

btn_play.onclick = function () {
  togglePlayPause();
};

btn_skipForward.onclick = function () {
  console.log(video.seekable.length);
  console.log(video.seekable);
  console.log(
    "Start: " + video.seekable.start(0) + " End: " + video.seekable.end(0)
  );

  video.currentTime = video.currentTime + 5;
  // video.fastSeek(5);
};

// video.addEventListener("canplay", (event) => {
//   console.log("Video can start, but not sure it will play through.");
// });

video.addEventListener("timeupdate", function () {
  let juicePos = video.currentTime / video.duration;
  juice.style.width = juicePos * 100 + "%";
  if (video.ended) {
    btn_play.className = "play";
  }
});
