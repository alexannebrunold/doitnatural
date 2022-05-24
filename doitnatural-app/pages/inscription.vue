<template>
  <div class='x'>
      <div class="left paddings-left">
          <h1>Do it natural</h1>
          <p>Inscris-toi</p>
      </div>
      
      <div class="right paddings-right">
          <h1>Inscription</h1>
          <BaseInput placeholder="cc" value=""/>
          <BaseInput placeholder="cc" value=""/>
          <BaseInput placeholder="cc" value=""/>
          <BaseInput placeholder="cc" value=""/>
          <BaseButton>Coucou</BaseButton>
      </div>
  </div>
</template>

<script>
import BaseButton from '../components/BaseButton.vue';
import BaseInput from '../components/BaseInput.vue';

export default {
  components: {
    BaseButton,
    BaseInput,
  },
}
</script>

<style lang="scss" scoped>
.x {
    display: flex;
    flex-direction: row;
    height: 100vh;
}

.left {
    width: 60%;
    background-color: var(--primary-color);
}

.right {
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
}

.paddings-left {
  padding-left: 16px;
  @media screen and (min-width: 640px) {
    padding-left: 32px;
  }
}

.paddings-right {
  padding-right: 16px;
  @media screen and (min-width: 640px) {
    padding-right: 32px;
  }
}
</style>