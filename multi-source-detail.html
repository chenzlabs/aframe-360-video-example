<!DOCTYPE html>
<html>
  <body>
    <!-- As if this Glitch were a typical HTML CodePen... -->    
    <script src="https://aframe.io/releases/0.7.1/aframe.min.js"></script>
    
    <!-- Use components defined in separate files. -->
    <script src="arrow-key-rotation.js"></script>
    <script src="play-on-window-click.js"></script>
    <script src="play-on-vrdisplayactivate-or-enter-vr.js"></script>

    <!-- Specify our scene. -->
    <a-scene stats>
      <!-- The original example also has this 180 degree rotation, to appear to be going forward. -->
      <a-videosphere rotation="0 180 0" src="#video" 
                     play-on-window-click
                     play-on-vrdisplayactivate-or-enter-vr>
      </a-videosphere>
      
      <!-- Define camera with zero user height, movement disabled and arrow key rotation added. -->
      <a-camera user-height="0" wasd-controls-enabled="false" arrow-key-rotation>
        <!-- Text elements for display messaging. -->
        <a-entity id="msg" position="0 -0.3 -1.5" text="align:center; 
                width:3;
                wrapCount:100;
                color:red;
                value:Click window to make the video play, if needed.">
        </a-entity>
        <!--
          This should work with, at least:
          Safari Technology Preview on MacOS, Edge on Windows 10, Oculus Browser, Samsung Internet, Chrome on Android
          (application/x-mpegurl, which is native HLS).
          Firefox on MacOS / Windows, Chrome on MacOS / Windows 
          (video/mp4).

          This may fail with, at least:
          Safari on MacOS / iOS (HLS and/or CORS bugs), Chromium (missing codec support).
        -->
      </a-camera>      
      
      <!-- Don't wait for the video to load, we're going to stream it. -->
      <a-assets timeout="1">
        <!-- Multiple source video. -->
        <video id="video" style="display:none"
               autoplay loop crossorigin="anonymous" playsinline webkit-playsinline>
          <!-- Native HLS video source. -->
          <source type="application/x-mpegurl"
               src="https://cdn.glitch.com/3c75540c-eaff-4599-9386-91482d2a7f43/city_halfres_hls.m3u8?1509419937804" />
          <!-- MP4 video source. -->
          <source type="video/mp4"
               src="https://ucarecdn.com/fadab25d-0b3a-45f7-8ef5-85318e92a261/" />
        </video>
      </a-assets>
    </a-scene>
    
    <!-- Attach other behaviors. -->
    <script>
      var video = document.querySelector('#video');
      var msg = document.querySelector('#msg');
      
      // When we get the playing event, show what source is used and what type it is.
      video.addEventListener('playing', function () {
        var currentSource = video.querySelector('[src="' + video.currentSrc + '"]');
        msg.setAttribute('text', 'value', video.currentSrc + '\n' + currentSource.type);                
      });
    </script>
  </body>
</html>
