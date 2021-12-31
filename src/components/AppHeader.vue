<template>
  <div class="ui secondary pointing menu">
    <a href="/" class="item active">Image Storage</a>
    <!-- just name of computed property -->
    <div class="right menu">
      <div v-if="isLoggedIn" class="horizontal">
        <a class="item">Galleries</a>
        <a class="item">Upload</a>
        <a class="item" @click="logout">Logout</a>
      </div>
      <!-- v-else should come directly after v-if -->
      <a v-else  href="#" class="ui item" @click="login">Login</a>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "AppHeader",
  // getting access to information of vuex model with mapGetters
  // get state whether user is signed in
  computed: mapGetters(["isLoggedIn"]),
  methods: mapActions(["login", "logout"]),
};
</script>

<style scoped>
.horizontal {
  display: flex;
  flex-direction: row;
}
</style>