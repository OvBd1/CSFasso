<template>
  <q-page class="parent">
    <SloganComponent class="div1" />
    <CardsComponent class="div2" />
    <PartenaireComponent class="div3" />
  </q-page>
  <!-- <q-footer elevated class="bg-grey-8 text-white">
      <div class="q-py-md text-center bg-primary">Christophe JEANMOUGIN - Association CSF</div>
    </q-footer> -->
</template>

<script setup>
import CardsComponent from "src/components/CardsComponent.vue";
import SloganComponent from "src/components/SloganComponent.vue";
import PartenaireComponent from "src/components/PartenaireComponent.vue";
</script>
<style>
.text-h1 {
  font-size: 5rem; /* Ajuste la taille selon tes préférences */
}

.parent {
  display: grid;
  margin: 50px;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
}

.div1 {
  grid-area: 1 / 1 / 1 / 1;
}

.div2 {
  grid-area: 1 / 2 / 2 / 2;
}

.div3 {
  grid-area: 2 / 1 / 3 / 3;
}

@media screen and (max-width: 1200px) {
  .parent {
    margin: 20px;
  }
  .div1 {
    grid-area: 1 / 1 / 2 / 3;
  }

  .div2 {
    grid-area: 2 / 1 / 3 / 3;
  }

  .div3 {
    grid-area: 3 / 1 / 4 / 3;
  }
  .text-h4 {
    font-size: 1.5rem;
  }
  .text-p {
    font-size: 0.9rem;
  }
}
</style>
