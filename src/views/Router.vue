<template>
  <div class="Router">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/profile">Profile</router-link>|
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
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
  padding: 30px;
  a {
    font-weight: bold;
    color: white;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.Router {
  height: 100vh;
  background-image: url("https://lh3.googleusercontent.com/1cupOqk-oUd92iuk8p2_JvfAXGGdFiP-GSjf9Vov7FDv92gnwophEFWaTrZJH3sJJTABV97AbCRasEUFU5-vF09_4j5eJo1MTrT--qxa3H_vgq5H5wzhx4GQL7uxZT5pCEhV4N9IKClGNIPEvMsZyXqV_9S5p_mCxf3h8TroT0PnSQmUBgLiI4faQdodCmoPGGwEomwc0by4LgD1clmmX_L4rfLr2EVWqp9jHPQiAsOzKXMHSJ1__7aJPEM88RfhTb02A7FHQQZcI0mZ9RXL7JTdvr2e8hCzau9euohNw_CqcMXRbxIJ2b2cJhCYL7MS8O30L90cFYLJWVhpnniUFBGsqUGV2FN6c1oEAr4-lSZBSXPaLxAcEG_mVKsQFfnq0xTgB_s3bYHoqyJYNYwjvxp43TWW8dZtJjqkJUwOHSKCp9poxMEmuyI_PNL69wtECLBFK7slHiy7apelCDBMs11Gd41yDId3X2-J6au7vEbvmV9ITMXGPh2ROiZjqqtEs0CU3KETw_bZTGMJLtTJUOlWK4HU_XM94n_XRZfBnpPmq8106e3_384OuHQJqLoXO4IcYIAC1llh8IAjThPvFAqKfI78zY4Yyey_5iON0zuOJ-ZC-ViQ9E7E_yGgLdP3=w1855-h952");
  background-position: center center;
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;
}
</style>

<script>
export default {
  name: "Router"
};
</script>
