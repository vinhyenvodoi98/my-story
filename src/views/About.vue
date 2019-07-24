<template>
  <div class="fullpage-container">
    <div class="fullpage-wp" v-fullpage="opts" ref="example">
      <div class="page-1 page">
        <h1 class="part-1" v-animate="{value: 'bounceInRight'}">Hello</h1>
        <p class="part-1" v-animate="{value: 'bounceInLeft'}">fullpage-vue</p>
      </div>
      <div class="page-2 page">
        <p class="part-2" v-animate="{value: 'bounceInRight'}">fullpage-vue</p>
      </div>
      <div class="page-3 page">
        <p class="part-3" v-animate="{value: 'bounceInLeft', delay: 0}">fullpage-vue</p>
        <p class="part-3" v-animate="{value: 'bounceInRight', delay: 600}">fullpage-vue</p>
        <p class="part-3" v-animate="{value: 'zoomInDown', delay: 1200}">fullpage-vue</p>
      </div>
    </div>
  </div>
</template>

<style>
.page-container {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}

body {
  margin: 0;
}

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

.button-group {
  position: absolute;
  top: 30px;
  left: 30px;
  z-index: 9;
}

.button-group button {
  display: inline-block;
  margin: 10px;
  color: #000;
  background: #fff;
  background: rgba(255, 255, 255, 0.5);
  -webkit-border-radius: 10px;
  border-radius: 10px;
  padding: 9px 18px;
  border: none;
  outline: none;
}

.button-group button.active {
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
}
</style>

<script>
export default {
  data() {
    return {
      opts: {
        start: 0,
        dir: "v",
        duration: 500,
        beforeChange: function(currentSlideEl, currenIndex, nextIndex) {},
        afterChange: function(currentSlideEl, currenIndex, nextIndex) {}
      }
    };
  }
};
</script>
