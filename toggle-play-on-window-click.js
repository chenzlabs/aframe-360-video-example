AFRAME.registerComponent('toggle-play-on-window-click', {
  init: function () {
    this.onClick = this.onClick.bind(this);
  },
  play: function () {
    window.addEventListener('click', this.onClick);
  },
  pause: function () {
    window.removeEventListener('click', this.onClick);
  },
  onClick: function (evt) {
    var video = this.el.components.material.material.map.image;
    if (!video) { return; }
    video.paused ? video.play() : video.pause();
  }
});