<template>
  <header class=''>
    <Icons />
    <Navigation class="paddings"/>
    <hr />
    <HeroHeader />
  </header>
</template>

<script>
import BaseButton from '../components/BaseButton.vue';
import Navigation from '../pages_components/Navigation.vue';
import HeroHeader from '../pages_components/HeroHeader.vue';
import Icons from '../components/icons/Icons.vue'

export default {
  components: {
    BaseButton,
    Navigation,
    HeroHeader,
    Icons,
  },
};
</script>

<style lang="scss" scoped>
.flex {
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
align-items: center;
@media screen and (min-width: 640px) {
    justify-content: flex-start;
  }
}

.paddings {
  padding-left: 16px;
    padding-right: 16px;
  @media screen and (min-width: 640px) {
    padding-left: 32px;
    padding-right: 32px;
  }
}

hr {
  width: 100%;
  height: 1px;
  color: rgba(10, 10, 10, 0.2);
}
</style>