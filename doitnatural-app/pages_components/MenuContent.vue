<template>
  <div class="a">
    <div v-if="isLoading" class="loader" />
    <nav class="menu-content" aria-label="menu" role="navigation">
      <ul>
        <li v-for="item in menuItems" :key="item.name" role="none" class="cc">
          <MenuItem
            :name="item.name"
            :selected="item.selected"
            :linkIconSvg="`#${item.icon}`"
            iconDescription="list icon"
            @click="() => changePage(item.routeName)"
          />
        </li>
      </ul>

      <BaseButton
        id="logout"
        class="primary-blue regular-subtitle-14 item padding-left-16 xx"
        @click="logout"
      >
        <BaseIcon
          class="icon margin-right-16"
          href="#logout"
          :alt="logout"
          aria-hidden="true"
        />
        logout
      </BaseButton>
    </nav>
  </div>
</template>

<script>
// import { getterKeys, actionKeys } from "../common/keys";
import BaseIcon from "../components/icons/BaseIcon.vue";
import MenuItem from "./MenuItem.vue";
import BaseButton from '../components/BaseButton.vue'

export default {
  components: {
    BaseIcon,
    MenuItem,
    BaseButton,
  },
  data() {
    return {
      menuItems: [
        { name: "Mes recettes", selected: false },
        { name: "Partager une recette", selected: false },
        { name: "Paramètres", selected: false },
        { name: "Me déconnecter", selected: false },
      ],
    };
  },
  computed: {
    // brandId: {
    //   get () {
    //     return this.$store.state.global.selectedBrandId
    //   },
    //   set (value) {
    //     this.$store
    //       .dispatch(actionKeys.GLOBAL.UPDATE_URL_FOR_SELECTED_BRAND, { brandId: value })
    //       .catch(() => {})
    //   },
    // },
    // menuItems () {
    //   return this.$store.getters[getterKeys.MAIN_LAYOUT.GET_MENU_ITEMS_FOR_ROUTE](this.$route)
    // },
    // isCurrentUserAdmin () {
    //   return this.$store.getters[getterKeys.MAIN_LAYOUT.IS_CURRENT_USER_ADMIN]
    // },
    // isLoading () {
    //   return this.$store.state.loading
    // },
    // csmCreationFormIsDisplayed () {
    //   return this.$store.getters[getterKeys.MAIN_LAYOUT.IS_CSM_CREATION_FORM_DISPLAYED]
    // },
    // csmAdditionConfirmationModalIsDisplayed () {
    //   return this.$store.getters[getterKeys.MAIN_LAYOUT.IS_CSM_ADDITION_CONFIRMATION_DISPLAYED]
    // },
    // modalIsDisplayed () {
    //   return this.$store.getters[getterKeys.MAIN_LAYOUT.IS_MODAL_DISPLAYED]
    // },
    // allBrands () {
    //   return this.$store.getters[getterKeys.GLOBAL.ALL_BRANDS_SORTED_ALPHABETICALLY]
    // },
  },
  //   methods: {
  // changePage (routeName) {
  //   return this.$store.dispatch(actionKeys.MAIN_LAYOUT.CHANGE_PAGE, routeName).catch(() => {})
  // },
  // logout () {
  //   return this.$store.dispatch(actionKeys.MAIN_LAYOUT.LOGOUT).catch(() => {})
  // },
  // startCSMCreation () {
  //   return this.$store.dispatch(actionKeys.MAIN_LAYOUT.START_CSM_CREATION).catch(() => {})
  // },
  // closeModal () {
  //   return this.$store.dispatch(actionKeys.MAIN_LAYOUT.CLOSE_MODAL).catch(() => {})
  // },
  //   },
}
</script>

<style lang="scss" scoped>
.a {
    background-color: #F2F2F2;
    height: 100vh;
}

.cc {
 margin-bottom: 16px;
}

.xx {
    color: #F2F2F2;
}

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
  padding-top: 24px;
  background-color: var(--white);
  @media screen and (max-width: 680px) {
    display: none;
  }
}

.menu-content {
  padding-top: 32px;
}

.width-full {
  width: 100%;
}

.icon {
  width: 24px;
  height: 24px;
  fill: none;
  stroke: var(--white);
  opacity: 1;
  right: 0;
  top: 10px;
}

.item{
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 60px;
  cursor: pointer;
  width: 100%;
  &:hover {
    color: var(--black);
    & .icon-blue {
      stroke: var(--black);
    }
  }
  &:focus {
    box-shadow: none;
  }
}
</style>
