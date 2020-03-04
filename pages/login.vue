<template>
  <section>
    <input v-model="email" type="text" name="email" />
    <input v-model="password" type="password" name="password" />
    <button @click="submit">Sign in</button>
  </section>
</template>

<script>
import axios from "axios";
const Cookie = process.client ? require("js-cookie") : undefined;
export default {
  middleware: "notAuthenticated",
  data() {
    return {
      email: null,
      password: null,
    };
  },
  methods: {
    // postLogin () {
    //   setTimeout(() => { // we simulate the async request with timeout.
    //     const auth = {
    //       accessToken: 'someStringGotFromApiServiceWithAjax'
    //     }
    //     this.$store.commit('setAuth', auth) // mutating to store for client rendering
    //     Cookie.set('auth', auth) // saving token in cookie for server rendering
    //     this.$router.push('/')
    //   }, 1000)
    // },
    async submit() {
      if (this.email && this.password) {
        const params = {
          url: "api/login",
          method: "post",
          // headers: {
          //   Authorization: "JWT csdsdcsdcsdcsdcs"
          // },
          data: {
            email: this.email,
            password: this.password,
          },
        };
        try {
          const response = await axios(params);
          console.log("response", response);
          this.$store.commit("setAuth", response.data.token); // mutating to store for client rendering
          Cookie.set("auth", response.data.token); // saving token in cookie for server rendering
          this.$router.push("/");
        } catch (e) {
          console.log(e);
        }
      }
    },
  },
};
</script>
