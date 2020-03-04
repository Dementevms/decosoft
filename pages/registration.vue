<template>
  <section>
    <input v-model="email" type="text" name="email" />
    <input v-model="password" type="password" name="password" />
    <button @click="submit">Registration</button>
  </section>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      email: null,
      password: null,
    };
  },
  methods: {
    async submit() {
      if (this.email && this.password) {
        const params = {
          url: "api/registration",
          method: "post",
          data: {
            email: this.email,
            password: this.password,
          },
        };
        const response = await axios(params);
        console.log('response', response);
      }
    },
  },
};
</script>
