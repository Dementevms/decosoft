<template>
  <div>
    <Header />
    <nuxt />
  </div>
</template>

<script>
import "~/assets/css/reset.css";
import Header from "@/components/header/header";
export default {
  components: {
    Header,
  },
};
</script>

<style lang="scss">
body {
  font-family: "Open Sans", sans-serif;

  --colorBrand: #76b900;
  --colorText: #3b3b3b;
  --colorGray: #d3d3d3;
}
</style>
