<template>
  <div class="main-layout-container">
    <Icons />
    <div
      class="mobile-menu z-10"
      :class="[isMobileMenuVisible ? 'animate-display-menu' : 'animate-disappear-menu']"
    >

      <div class="mobile-menu-header">
        <button aria-label="close menu" @click="closeMobileMenu">
          <BaseIcon
            class="icon-blue cursor-pointer icon-mobile-visible"
            href="#cross"
            alt="close"
            aria-hidden="true"
          />
        </button>
      </div>
      <MenuContent />
    </div>

    <div class="desktop-menu z-10">
      <MenuContent />
    </div>

    <section class="main-content z-1">
      <nuxt />
    </section>
  </div>
</template>

<script>
import Icons from '../components/icons/Icons.vue'
import BaseIcon from '../components/icons/BaseIcon.vue'
import MenuContent from '../pages_components/MenuContent.vue'
// import { mutationKeys, actionKeys } from '../common/keys'

export default {
  components: {
    Icons,
    MenuContent,
    BaseIcon,
  },
//   middleware: [
//     'authenticated',
//     ({ store }) => {
//       return store.dispatch(actionKeys.MAIN_LAYOUT.LOAD_BACK_OFFICE_USER).catch(() => {})
//     },
//   ],
  computed: {
    // isMobileMenuVisible () {
    //   return this.$store.state.mainLayout.mobileMenuVisible
    // },
  },
  methods: {
    closeMobileMenu () {
      return true
      //this.$store.commit(mutationKeys.MAIN_LAYOUT.CLOSE_MENU)
    },
  },
}
</script>

<style scoped lang="scss">
.mobile-menu {
  transform: translateX(-1000px);
  transition: transform 1s ease-out;
  height: 100vh;
  position: absolute;
  top: 0;
  width: 100%;
  background-color: var(--white);
  border-right: 1px solid var(--light-grey);
  z-index: 10;
  @media screen and (min-width: 680px) {
    display: none;
  }
}

.mobile-menu-header {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 24px 16px 32px 16px;
}

.animate-display-menu {
  transform: translateX(0);
  height: 100vh;
  position: absolute;
  top: 0;
  width: 100%;
  transition: transform 0.3s ease-out;
  background-color: var(--white);
  z-index: 10;
  border-right: 1px solid var(--light-grey);
}

.animate-disappear-menu {
  transform: translateX(-1000px);
  height: 100vh;
  transition: transform 0.3s ease-out;
  position: absolute;
  top: 0;
  width: 100%;
  background-color: var(--white);
  border-right: 1px solid var(--light-grey);
  padding-left: 16px;
}

.desktop-menu {
  display: block;
  transform: translateX(0);
  height: 100%;
  width: 244px;
  transition: transform 0.3s ease-out;
  border-right: 1px solid var(--light-grey);
  background-color: var(--white);
  @media screen and (max-width: 680px) {
    display: none;
  }
}

.width-full{
  width: 100%;
}

.main-content {
  flex: 1;
  overflow-y: scroll;
}

.icon-blue {
  width: 24px;
  height: 24px;
  fill: none;
  stroke: var(--primary-color);
  opacity: 1;
  position: absolute;
  right: 0;
  top: 10px;
}

</style>