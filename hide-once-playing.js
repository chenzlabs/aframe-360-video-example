AFRAME.registerComponent('hide-once-playing', {
  schema: {type: 'selector'},
  init: function () {
    this.onPlaying = this.onPlaying.bind(this);
  },
  play: function () {
    if (this.data) {
      this.data.addEventListener('playing', this.onPlaying);
    }
  },
  pause: function () {
    if (this.data) {
      this.data.removeEventListener('playing', this.onPlaying);
    }
  },
  onPlaying: function (evt) {
    this.el.setAttribute('visible', false);
  }
});