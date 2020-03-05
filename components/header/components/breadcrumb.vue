<template>
  <div class="breadcrumb"></div>
</template>

<style lang="scss" scoped>
#header .breadcrumb {
  list-style: none;
  margin: 0 0 0 40px;
}
#header .breadcrumb li {
  display: inline-block;
}
#header .breadcrumb li a,
#header .breadcrumb li span {
  cursor: default;
  font-size: 14px;
  text-decoration: none;
  color: #3b3b3b;
  transition: 0.33s;
}
#header .breadcrumb li.active span {
  opacity: 0.5;
}

#header.opacity .breadcrumb li a,
#header.opacity .breadcrumb li span {
  color: #fff;
}

#header .breadcrumb li a:hover span {
  cursor: pointer;
  color: #76b900;
}
</style>
