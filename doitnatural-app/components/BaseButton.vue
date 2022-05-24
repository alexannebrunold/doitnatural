<template>
  <button
    :class="buttonStyle"
    :form="formId"
    :disabled="showButtonLoading"
    @click="$emit('button-click')"
  >
    <div v-if="showButtonLoading" class="loader" />
    <slot v-else />
  </button>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
    formId: {
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
