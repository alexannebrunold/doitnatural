<template>
  <nav class="flex bg-primary-color">
    <h1 class="logo">DO IT NATURAL</h1>

    <ul class="nav left">
      <li>Maison</li>
      <li>Beauté</li>
      <li>Articles</li>
      <BaseButton typeOfButton="primaryButtonWhite">
        Connexion
      </BaseButton>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
.nav {
  @media screen and (min-width: 640px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 50%;
    align-items: center;
  }
}

.logo {
  font-size: 32px;
}

.left {
  display: flex;
  flex-direction: row;

  @media screen and (min-width: 640px) {
    justify-content: flex-end;
  }
}
</style>
