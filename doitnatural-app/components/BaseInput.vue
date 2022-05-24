<template>
  <div class="form-input">
    <label class="label-margin">{{ label }}</label>
    <input
      :placeholder="placeholder"
      :value="value"
      class="input"
      :class="{ 'input-error': error }"
      @input="$emit('input', $event.target.value)"
    >
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
    value: {
      type: [String, Number, Array],
      default: '',
    },
    error: {
      type: Boolean,
    },
  },
}
</script>