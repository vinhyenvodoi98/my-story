<template>
  <div
    class="Router"
    v-on:mousemove="updateBackground"
    v-bind:style="{ 'background-position' : x + 'px ' + y +'px' }"
  >
    <div
      class="secondlayer"
      v-bind:style="{'background-position' : secondX + 'px ' + secondY +'px'}"
    >
      <div id="nav">
        <router-link to="/">Home</router-link>
        <router-link to="/profile">Profile</router-link>
        <router-link to="/about">About</router-link>
      </div>
      <router-view />
    </div>
  </div>
</template>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
}
#nav {
  display: flex;
  justify-content: flex-end;
  padding: 30px;
  a {
    text-decoration: none !important;
    padding: 4px 14px;
    margin: 5px;
    border: 1px solid white;
    border-radius: 20px;
    font-weight: bold;
    color: white;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
  a:hover {
    opacity: 0.7;
  }
}

.Router {
  height: 100vh;
  background-image: url("https://lh3.google.com/u/0/d/14NRci6AeU49bDTQ4RZKz57-Rhje9y94x=w1301-h640-iv1");
  background-size: 105% 105%;
  background-attachment: fixed;
  background-repeat: no-repeat;
  overflow: hidden;
}

.secondlayer {
  height: 100vh;
  background-image: url("https://lh3.google.com/u/0/d/1Rg6ipCL5DN-MMyIyWNShw09mqg3-hamX=w1301-h640-iv1");
  background-size: 105% 105%;
  background-attachment: fixed;
  background-repeat: no-repeat;
  overflow: hidden;
}
</style>

<script>
export default {
  name: "Router",
  data() {
    return {
      x: 0,
      y: 0,
      secondX: 0,
      secondY: 0
    };
  },
  methods: {
    updateBackground: function(event) {
      this.x = event.clientX * (-1 / 50) - 25;
      this.y = event.clientY * (-1 / 50);
      this.secondX = -event.clientX * (-1 / 50) - 50;
      this.secondY = -event.clientY * (-1 / 50);
    }
  }
};
</script>
