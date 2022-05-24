<template>
  <svg aria-hidden="true" v-on="$listeners">
    <use :href="formattedHref" />
  </svg>
</template>

<script>
export default {
  name: 'BaseIcon',
  props: {
    href: {
      type: String,
      required: true,
    },
  },
  computed: {
    formattedHref () {
      return this.href.startsWith('#') ? this.href : `#${this.href}`
    },
  },
}
</script>