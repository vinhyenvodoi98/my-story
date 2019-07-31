<template>
  <div class="fullpage-container">
    <div v-fullpage="opts">
      <div class="page-1 page">
        <div class="container">
          <Mystory />
          <Audio />
        </div>
        <!-- <h1 class="part-1" v-animate="{value: 'bounceInRight'}">Hello</h1> -->
      </div>
      <div class="page-2 page">
        <div class="container">
          <h1 v-animate="{value: 'bounceInLeft', delay: 0}">Where I Live</h1>
          <WhereILive />
        </div>
      </div>
      <div class="page-3 page">
        <p class="part-3" v-animate="{value: 'bounceInLeft', delay: 0}">fullpage-vue</p>
        <p class="part-3" v-animate="{value: 'bounceInRight', delay: 600}">fullpage-vue</p>
        <p class="part-3" v-animate="{value: 'zoomInDown', delay: 1200}">fullpage-vue</p>
      </div>
    </div>
  </div>
</template>

<script>
import Mystory from "../components/Mystory";
import WhereILive from "../components/WhereILive";
import Audio from "../components/Audio";

export default {
  components: {
    Mystory,
    WhereILive,
    Audio
  },
  data() {
    return {
      opts: {
        start: 0,
        dir: "v",
        duration: 1500,
        beforeChange: function(currentSlideEl, currenIndex, nextIndex) {},
        afterChange: function(currentSlideEl, currenIndex, nextIndex) {}
      }
    };
  }
};
</script>

<style>
.fullpage-container {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}

.page {
  display: block;
  text-align: center;
  font-size: 26px;
  color: #eee;
}

.page-1 {
  padding-top: 100px;
  background: #1bbc9b;
}

.page-2 {
  padding-top: 100px;
  background-color: rgb(75, 191, 195);
}

.page-3 {
  padding-top: 50px;
  background: #aabbcc;
}

h3,
p {
  font-size: 16px;
}
</style>
