<template>
  <div>
    <div class="flexx paddings bg-primary-color">
      <div class="left">
        <h1>Le bien être au naturel</h1>
        <p class="description">
          <span>Découvre</span> et <span>partage</span> tes recettes naturelles
          faites maison préférées
        </p>

        <BaseButton typeOfButton="primaryButtonWhite" class="heybtn">
          Inscris toi
        </BaseButton>
        <p class="text-inscription">
          Tu fais pas partie d'ici ? <href>Inscris-toi.</href>
        </p>
      </div>
      <img class="img" src="../assets/img/icons/hero-header-icon.svg" alt="" />
    </div>
    <main class="paddings a">
      <h2 class="title-32">Les dernières recettes publiées</h2>
      <div class="flexx">
        <Recipe title="Première recette" />
        <Recipe title="Deuxième recette" />
        <Recipe title="Troisième recette" />
      </div>
    </main>
    <div class="flexx paddings">
      <IconAndText
        :image="require('../assets/img/eco.svg')"
        text="Sois le créateur de ton bien être :  découvre et partage
        des recettes naturelles faites maison"
        class="icon-and-text"
      />
      <IconAndText
        :image="require('../assets/img/dac.svg')"
        text="Economise de l’argent et participe à l’écologie avec du home made"
        class="icon-and-text"
      />
      <IconAndText
        :image="require('../assets/img/ok.svg')"
        text="Partage tes recettes faites maisons préférées"
        class="icon-and-text"
      />
    </div>
    <div class="paddings">
      <h1>Inscris-toi</h1>
    </div>
    <footer class="flexx paddings">
      <p>logo</p>
      <h1>coucou le footer</h1>
    </footer>
  </div>
</template>

<script>
import Recipe from "../components/Recipe.vue";
import IconAndText from "../components/IconAndText.vue";

export default {
  components: {
    Recipe,
    IconAndText,
  },
};
</script>

<style lang="scss" scoped>
.flexx {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  padding-bottom: 32px;

  @media screen and (min-width: 640px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    text-align: left;
  }
}

.heybtn {
  margin-bottom: 20px;
  align-self: center;
  @media screen and (min-width: 640px) {
    align-self: flex-start;
  }
}

.left {
  display: flex;
  flex-direction: column;
  width: 60%;
  @media screen and (min-width: 640px) {
    justify-content: flex-start;
  }
}

h1 {
  color: #fafafa;
  font-family: "Oswald", sans-serif;
  letter-spacing: 4%;
  font-weight: 600;
  font-size: 24px;
  text-transform: uppercase;
  margin-bottom: 16px;
  margin-top: 16px;
}

span {
  font-weight: 600;
}

.img {
  display: none;
  @media screen and (min-width: 640px) {
    display: block;
    width: 40%;
  }
}

.text-inscription {
  font-weight: lighter;
  font-size: 10px;

  & href {
    color: rgb(218, 23, 55);
  }
  @media screen and (min-width: 640px) {
    font-size: 12px;
  }
}

.description {
  margin-bottom: 60px;
  @media screen and (min-width: 640px) {
    font-size: 30px;
  }
}

.icon-and-text {
  font-size: 24px;
  width: 300px;
}

.paddings {
  padding-left: 16px;
    padding-right: 16px;
  @media screen and (min-width: 640px) {
    padding-left: 32px;
    padding-right: 32px;
  }
}

.a {
  margin-top: 89px;
   & h2 {
     margin-bottom: 38px;
   }
}
</style>