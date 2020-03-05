<template>
  <div class="phone">
    <a :href="`tel:${value}`" v-html="template"></a>
  </div>
</template>

<script>
import mainData from "~/data/main.js";
export default {
  data() {
    return {
      value: null,
      template: null,
    };
  },
  mounted() {
    this.value = mainData.contacts.phones[0].value;
    const leftPart = this.value.slice(0, 5);
    const rightPart = this.value.slice(5);
    this.template = `<span class="color-brand">${leftPart}</span> ${rightPart}`;
  },
};
</script>

<style lang="scss" scoped>
#header .phone {
  display: inline-block;
  vertical-align: middle;
  font-size: 20px;
  font-weight: 500;
  color: #3b3b3b;
  transition: 0.33s;
}
#header .phone a {
  text-decoration: none;
  color: #3b3b3b;
  transition: 0.33s;
}

#header.opacity .phone,
#header.opacity .phone a {
  color: #fff;
}
</style>
