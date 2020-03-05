<template>
  <div class="nav">
    <div class="nav__menu">
      <List :items="items">
        <template v-slot:item="{ item }">
          <nuxt-link :to="item.to">{{ item.title }}</nuxt-link>
        </template>
      </List>
    </div>
  </div>
</template>

<script>
import "~/assets/css/nav-menu.css";
import List from "~/components/list";
export default {
  name: "Nav",
  components: {
    List,
  },
  data() {
    return {
      items: [
        {
          title: "Акции",
          to: "/stocks",
        },
        {
          title: "Разработка",
          to: "/dev",
          items: [
            {
              title: "Landing Page",
              to: "/dev/landing",
            },
            {
              title: "Корпоративный",
              to: "/dev/corporate",
            },
            {
              title: "Интернет-магазин",
              to: "/dev/shop",
            },
          ],
        },
        {
          title: "Продвижение",
          to: "/seo",
        },
        {
          title: "Поддержка",
          to: "/support",
        },
        {
          title: "Реклама",
          to: "/ad",
        },
        {
          title: "Блог",
          to: "/blog",
        },
        {
          title: "Контакты",
          to: "/contacts",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.nav {
}

#header .menu {
  list-style: none;
  margin: 0;
  padding: 0;
}
#header .menu > li {
  display: inline-block;
  margin: 0 40px 0 0;
  padding: 28px 0;
  position: relative;
}
#header .menu > li:last-child {
  margin: 0;
}
#header .menu > li::before {
  display: block;
  content: "";
  background-color: #76b900;
  height: 4px;
  width: 100%;
  position: absolute;
  top: 0px;
  left: -50%;
  transform: scaleX(0);
  transition: all 0.5s ease;
}
#header .menu > li.active::before {
  left: 0;
  transform: scaleX(1);
}

#header .menu > li > a {
  display: block;
  background-color: transparent;
  /*padding: 28px 20px;*/
  font-size: 14px;
  font-weight: 400;
  text-decoration: none;
  text-transform: uppercase;
  color: #3b3b3b;
  transition: all 0.33s ease;
}
#header.opacity .menu > li > a {
  color: #fff;
}
#header .menu > li.active > a {
  color: #76b900;
}

#header .menu > li > a:hover {
  color: #76b900;
}

#header .menu > li > ul {
  display: none;
  /*box-shadow: 0 0 50px 50px rgba(0,0,0,0.1);*/
  background-color: #76b900;
  /*background-color: #fff;*/
  margin: 0;
  padding: 0;
  list-style: none;
  width: 180px;
  position: absolute;
  top: 75px;
  left: 0;
}

#header .menu > li > ul::before {
  display: block;
  content: "";
  background-color: #76b900;
  height: 10px;
  width: 10px;
  position: absolute;
  top: -5px;
  left: 15px;
  transform: rotateZ(45deg);
}

#header .menu > li.parent:hover > ul {
  display: block;
}

#header .menu > li > ul > li {
  margin: 0;
  padding: 0;
}
#header .menu > li > ul > li > a {
  display: block;
  background-color: transparent;
  border-top: 1px dotted rgba(0, 0, 0, 0.25);
  padding: 10px 20px;
  width: 140px;
  position: relative;
  font-size: 12px;
  font-weight: 400;
  text-decoration: none;
  text-transform: uppercase;
  color: #fff;
  transition: all 0.33s ease;
}

#header .menu > li > ul > li:first-child > a {
  border: none;
}

/*#header .menu > li > ul > li:last-child > a{
    border: none;
}*/
#header .menu > li > ul > li.active > a,
#header .menu > li > ul > li > a:hover {
  background-color: rgba(0, 0, 0, 0.25);
}
</style>
