<template>
  <div class="Opending">
    <transition name="fade">
      <div v-if="isIntro < 16" class="opending-container">
        <div class="text">{{newText}}</div>
      </div>
    </transition>
  </div>
</template>

<style>
@import "https://fonts.googleapis.com/css?family=Roboto+Mono:100";

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.6s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.Opending {
  font-family: "Roboto Mono", monospace;
  height: 100%;
}
.opending-container {
  background: #212121;
  position: fixed; /* Sit on top of the page content */
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
}
.text {
  font-weight: 150;
  font-size: 30px;
  color: #fafafa;
}
</style>

<script>
import { setInterval, setTimeout } from "timers";
export default {
  name: "Opending",
  data() {
    return {
      isWrapper: false,
      isIntro: 2,
      nextText: "",
      newText: "my name is Hoang,",
      counter: 0,
      chars: "!r<t>-_\\/[ye]o{}m—j='+g*h^w?a#b_n_m_i_____",
      phrases: [
        "sooner or later",
        "you're going to realize",
        "just as I did",
        "that there's a difference",
        "between happiness",
        "and smile"
      ]
    };
  },
  created: function() {
    this.next();
  },
  beforeDestroy() {
    clearInterval(this.next);
  },
  mounted: function() {},
  methods: {
    next() {
      let text = this;
      setInterval(function() {
        text.isIntro += 2;
        for (var i = 0; i < 1500; i++) {
          setTimeout(() => {
            var lasttext = "";
            for (var j = 0; j < text.newText.length; j++) {
              lasttext += text.randomChar();
            }
            text.newText = lasttext;
          }, 770);
        }
        setTimeout(() => {
          text.newText = text.phrases[text.counter];
          text.counter = (text.counter + 1) % text.phrases.length;
        }, 900);
        if (text.isIntro > 16) {
          clearInterval(this.next);
        }
      }, 3000);
    },
    randomChar() {
      return this.chars[Math.floor(Math.random() * this.chars.length)];
    }
  }
};
</script>
