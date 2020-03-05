<template>
  <div class="logo">
    <nuxt-link to="/" title="На главную DECOSOFT">
      <svg-icon name="logo" />
    </nuxt-link>
  </div>
</template>

<style lang="scss" scoped>
.logo {
  cursor: pointer;
  height: 16px;

  svg {
    height: 16px;
    width: 138px;
  }

  .fil0,
  .fil1 {
    fill: #3b3b3b;
    fill-rule: nonzero;
  }

  #header.opacity .logo .fil0,
  #header.opacity .logo .fil1 {
    fill: #fff;
  }

}
</style>
