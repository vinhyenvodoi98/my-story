<template>
  <div class="Audio">
    <button v-if="!isPlaying" class="play_button" v-on:click="playSong">
      <img alt="Vue logo" src="../assets/icon/play_circle.png" />
    </button>
    <button v-if="isPlaying" class="play_button" v-on:click="pauseSong">
      <img alt="Vue logo" src="../assets/icon/pause_circle.png" />
    </button>
  </div>
</template>

<script>
import song from "../data/song.json";

export default {
  name: "Audio",
  data() {
    return {
      loading: "getLoadingState",
      Songs: song,
      presentSongId: 0,
      lastSongId: 0,
      isPlaying: false,
      audio: new Audio(),
      isPaused: false,
      volume: 0.5,
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
    playSong() {
      console.log("play");
      this.audio.src = this.Songs[1].audio;
      this.audio.play();
      this.isPlaying = true;
      this.isPaused = false;
    },
    pauseSong() {
      console.log("stop");
      this.isPlaying = false;
      this.audio.pause();
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
</style>
