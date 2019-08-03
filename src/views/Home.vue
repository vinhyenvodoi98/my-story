<template>
  <div class="home">
    <div class="contact">
      <div v-if="isOpeningDone" class="contact-container">
        <!-- <div> -->
        <div class="github">
          <a href="https://github.com/vinhyenvodoi98">
            <img src="../assets/icon/github.png" />
          </a>
        </div>
        <div class="facebook">
          <a href="https://www.facebook.com/duchoang.do.3">
            <img src="../assets/icon/fb-white.png" />
          </a>
        </div>
        <div class="instagram">
          <a href="https://www.instagram.com/taio_newgate/">
            <img src="../assets/icon/instagram.png" />
          </a>
        </div>
        <!-- </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "home",
  computed: {
    ...mapState(["isOpeningDone"])
  }
};
</script>

<style>
.home {
  height: 100vh;
}

.contact {
  display: flex;
  position: absolute;
  flex-direction: row;
  width: 100%;
  justify-content: flex-end;
  left: 0;
  bottom: 0;
  padding: 30px;
}

.contact-container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 17%;
}

a > img {
  width: 40px;
  height: 40px;
}
</style>
