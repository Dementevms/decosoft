<template>
  <header>
    <div class="header opacity">
      <div class="header__bg"></div>
      <div class="header__wrapper decoVFX">
        <div class="header__left">
          <Logo/>
          <!-- <jdoc:include type="modules" name="breadcramps" style="none" /> -->
        </div>
        <div class="header__right">
          <Nav/>
          <Phone/>
          <BtnMenu />
        </div>
      </div>
    </div>
  </header>
</template>
<script>
import mainData from "~/data/main.js";
import Logo from "./components/logo";
import Nav from "./components/nav";
import BtnMenu from "./components/btn-menu";
import Phone from "./components/phone";
export default {
  name: "Header",
  components: {
    Logo,
    Nav,
    Phone,
    BtnMenu,
  },
  data() {
    return {
      phone: mainData.contacts.phones[0].value,
    };
  },
};
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;

  &__bg {
    display: none;
    background-color: #fff;
    box-shadow: 0 0 50px 50px rgba(0, 0, 0, 0.1);
    box-shadow: 0 2.5px 5px 0px rgba(0, 0, 0, 0.1);
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }

  &__wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 30px;
    position: relative;
  }

  &__left {
    display: flex;
    align-items: center;
  }

  &__right {
    display: flex;
    align-items: center;
  }

  #header .phone-btn {
    margin: 0 0 0 40px;
  }



  #header .btn {
    display: inline-block;
    vertical-align: middle;
    width: 180px;
    padding: 8px 0;
    font-size: 13.25px;
    text-align: center;
  }

  #header .btn-menu {
    display: none;
    vertical-align: middle;
    box-sizing: border-box;
    border: 2px solid #76b900;
    border-radius: 50%;
    margin: 0 0 0 30px;
    width: 36px;
    height: 36px;
  }

  #header .btn-menu .icon {
    display: block;
    position: relative;
    width: 20px;
    height: 20px;
    margin: 7px;
  }

  #header .btn-menu .icon .ctl,
  #header .btn-menu .icon .ccl,
  #header .btn-menu .icon .cbl {
    background: #76b900;
    width: 18px;
    height: 2px;
    position: absolute;
    top: 2px;
    transition: 0.33s;
  }

  #header .btn-menu .icon .ctl {
    top: 8px;
  }

  #header .btn-menu .icon .cbl {
    top: 14px;
  }

  #header .btn-menu .icon .ctl.open {
    transform: rotateZ(45deg);
    top: 8px;
  }

  #header .btn-menu .icon .ccl.open {
    transform: scaleX(0);
  }

  #header .btn-menu .icon .cbl.open {
    transform: rotateZ(135deg);
    top: 8px;
  }
}
</style>
