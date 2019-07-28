<template>
  <div class="Audio">
    <div class="audio-layout">
      <div class="audio-box">
        <vue-slider v-model="currentTrackDuration" :tooltip="'none'" />
        <div class="row">
          <div class="button-group">
            <button v-if="!isPlaying" class="play_button" v-on:click="playSong(presentSongId)">
              <img alt="Vue logo" src="../assets/icon/play_circle.png" />
            </button>
            <button v-if="isPlaying" class="play_button" v-on:click="pauseSong">
              <img alt="Vue logo" src="../assets/icon/pause_circle.png" />
            </button>
          </div>
          <div class="volume">
            <vue-slider v-model="volumeSlider" :tooltip="'none'" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import song from "../data/song.json";
import VueSlider from "vue-slider-component";
import "vue-slider-component/theme/antd.css";

export default {
  name: "Audio",
  components: {
    VueSlider
  },
  data() {
    return {
      loading: "getLoadingState",
      value1: 50,
      Songs: song,
      presentSongId: 0,
      lastSongId: 0,
      isPlaying: false,
      audio: new Audio(),
      isPaused: false,
      volume: 0.3,
      volumeSlider: 30,
      //
      timeLapse: false,
      timeBufferSecs: 0,
      timeBufferMins: 0,
      currentTrackTime: 0,
      lastRecordedTrackTime: -1,
      countCheck: 0,
      currentTrackDuration: 0,
      //
      color: "#8dff97",
      progressPercent: 0,
      continuousPlay: false
    };
  },
  methods: {
    playSong(presentSongId) {
      console.log("play");
      this.audio.src = this.Songs[presentSongId].audio;
      this.audio.play();
      this.audio.volume = 0.3;
      this.isPlaying = true;
      this.isPaused = false;
      this.currentTrackTime = 0;
      this.view();
    },
    pauseSong() {
      console.log("stop");
      this.isPlaying = false;
      this.audio.pause();
    },
    view() {
      let song = this;
      setInterval(function() {
        song.audio.volume = song.volumeSlider / 100;
        if (song.isPlaying) {
          song.currentTrackTime =
            (song.audio.currentTime / song.audio.duration) * 100;
          song.currentTrackDuration = song.currentTrackTime;
        }
        if (song.currentTrackDuration === 100) {
          clearInterval(setInterval);
          song.playSong(++song.presentSongId);
        }
      }, 500);
    }
  }
};
</script>

<style>
.play_button {
  background-color: transparent;
  border: none;
  padding: 0;
  outline: none !important;
}

.audio-layout {
  text-align: center;
  padding: 10px;
  border-radius: 5px;
  border: 2px solid white;
  width: 20%;
  margin: auto;
  margin-top: 50px;
}

.audio-box {
  width: 100%;
}

.vue-slider-rail .vue-slider-process {
  color: white !important;
  background-color: white !important;
}

.vue-slider-dot-handle {
  background-color: white;
  border: 2px solid white;
}

.button-group {
  margin-left: 44%;
}

.volume {
  width: 20%;
}

.volume > .vue-slider {
  margin-top: 20%;
}

.volume > .vue-slider {
  left: 55%;
}

.volume-icon {
  height: 50%;
  width: 50%;
}
</style>
