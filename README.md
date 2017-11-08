# aframe-360-video-example

This is a basic example of 360 video playback, using [A-Frame's latest master](https://aframe.io/docs/master/introduction/#what-is-a-frame) distribution build.
In this example, the video is played using the [`a-videosphere` primitive](https://aframe.io/docs/master/primitives/a-videosphere.html) as the display.

*Note: Due to the way this video was authored, playback display is rotated 180 degrees so the viewer appears to move forward instead of backward.*

In some scenarios, [particularly with mobile browsers, 
security rules will prevent the video from playing automatically](https://www.aerserv.com/why-does-video-autoplay-on-mobile-devices-not-work/).
To work around this limitation, window event handlers are attached that will try to start or toggle playback [based on user input (here specifically, `click`)](https://github.com/WICG/interventions/issues/12).

## [Main page](//aframe-360-video-example.glitch.me/)

The video element is specified with a single possible source.

That source uses [MP4](https://wikipedia.org/wiki/MPEG-4_Part_14) format, which is widely supported by available browsers.

For maximum compatibility, it is currently recommended to use MP4 format when possible.

## [multi-source-detail.html](//aframe-360-video-example.glitch.me/multi-source-detail.html)

[The video element is specified with two possible sources.](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video#Multiple_sources_example)

The first uses [HLS](https://wikipedia.org/wiki/HTTP_Live_Streaming) format, for those browsers that support native HLS playback.

The second uses [MP4](https://wikipedia.org/wiki/MPEG-4_Part_14) format, which is widely supported by available browsers.

At present, this video file is not available in WebM format.

The browser implementation will automatically pick which source to use.

*Note that this example does not follow the above recommendation, because it is specifically trying to exercise native HLS playback... which as a result introduces compatibility issues with certain Safari versions at time of writing.*