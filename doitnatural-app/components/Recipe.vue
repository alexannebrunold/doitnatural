<template>
  <div class="recipe-preview">
    <BaseIcon href="#bookmark" alt="bookmark" class="icon-blue cursor-pointer" aria-hidden="true" />
    <img src="../assets/img/bg_img.png" alt="" class="img">
    <h1 class="recipe-title">{{title}}</h1>
  </div>
</template>

<script>
import BaseIcon from '../components/icons/BaseIcon.vue'

export default {
  name: 'Recipe',
  components: {
    BaseIcon,
  },
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: '',
    },
    typeOfButton: {
      type: String,
      default: 'primaryButton',
    },
  },
  computed: {
    buttonStyle () {
      switch (this.typeOfButton) {
        case 'primaryButton':
          return 'button-primary'
          case 'primaryButtonWhite':
            return 'button-primary-white'
        case 'cancelButton':
          return 'button-cancel'
        case 'successButton':
          return 'button-success'
        default:
          return 'button-primary'
      }
    },
    showButtonLoading () {
      return this.loading && this.typeOfButton !== 'cancelButton'
    },
  },
}
</script>

<style scoped lang="scss">
.recipe-preview {
  border: 1px solid rgba(0, 0, 0, 0.27);
width: 247px;
height: 328px;
position: relative;
}

.img {
    width: 100%;
}

.recipe-title {
  text-align: center;
  margin-top: 24px;
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

.cursor-pointer {
  cursor: pointer;
}
</style>
