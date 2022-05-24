<template>
  <div class="icon-and-text">
    <img :src="image" :alt="alt" class="img">
    <p>{{ text }}</p>
  </div>
</template>

<script>
export default {
  name: 'IconAndText',
  props: {
    image: {
      type: String,
      default: '',
    },
    alt: {
      type: String,
      default: '',
    },
    text: {
      type: String,
      default: 'text',
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
  border: 1px solid black;
width: 247px;
height: 328px;
}

.img {
    width: 231.32px;
    height: 174px;
}
</style>
