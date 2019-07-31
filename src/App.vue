<template>
  <div id="app">
    <Opending />
    <Router />
  </div>
</template>

<script>
import Opending from "./components/Opending";
import Router from "./views/Router";

export default {
  components: {
    Opending,
    Router
  }
};
</script>
