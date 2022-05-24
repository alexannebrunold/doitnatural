<template>
  <button class="width-full" role="menu item button" @click="$emit('click')">
    <div :class="['item', {'selected': selected }]" class="padding-left-16">
      <BaseIcon class="icon margin-right-16" :href="linkIconSvg" :alt="iconDescription" aria-hidden="true" />
      {{ name }}
    </div>
  </button>
</template>

<script>
import BaseIcon from '../components/icons/BaseIcon.vue'

export default {
  name: 'MenuItem',
  components: {
    BaseIcon,
  },
  props: {
    name: {
      type: String,
      default: '',
    },
    linkIconSvg: {
      type: String,
      default: '',
    },
    iconDescription: {
      type: String,
      default: '',
    },
    selected: {
      type: Boolean,
      default: true,
    },
  },
}
</script>

<style scoped lang="scss">
.item {
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 60px;
  cursor: pointer;
  width: 100%;
  color: var(--black);
  font-weight: 600;
  font-size: 16px;
  &:hover {
    color: var(--primary-blue);
    & .icon {
      stroke: var(--primary-blue);
    }
  }
  &:focus {
    box-shadow: none;
    border-right: 5px solid var(--primary-blue);
  }
  &.selected {
    color: var(--primary-blue);
    border-right: 5px solid var(--primary-blue);
    & .icon {
      stroke: var(--primary-blue);
    }
  }
}

.item-blue {
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 60px;
  cursor: pointer;
  width: 100%;
  color: var(--primary-blue);
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

.icon {
  width: 24px;
  height: 24px;
  fill: none;
  opacity: 1;
  stroke: var(--black);
}

button {
	border: none;
	padding: 0;
	cursor: pointer;
	outline: inherit;

    &:hover {
        color: var(--primary-color);
    }
}
</style>
