<template>
  <q-carousel
    animated
    v-model="slide"
    navigation
    infinite
    :autoplay="autoplay"
    arrows
    transition-prev="slide-right"
    transition-next="slide-left"
    @mouseenter="autoplay = false"
    @mouseleave="autoplay = true"
    style="margin: auto 50px"
  >
    <q-carousel-slide
      v-for="(slideData, index) in slides"
      :key="index"
      :name="index + 1"
      style="position: relative; padding: 50px;"
    >
      <!-- Image with a lower opacity -->
      <img
        :src="slideData.imgSrc"
        alt=""
        style="
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.6;
        "
      />

      <!-- Text content on top of the image -->
      <a
        :href="slideData.imgSrc"
        target="_blank"
      >
        <div
          class="absolute-bottom custom-caption"
          style="margin: 50px; color: aliceblue; z-index: 1"
        >
          <h4 class="text-h4">{{ slideData.title }}</h4>
          <p class="text-p">{{ slideData.subtitle }}</p>
        </div>
    </a>

      <!-- Optional overlay for additional contrast -->
      <div
        style="
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.3);
        "
      ></div>
    </q-carousel-slide>
  </q-carousel>
</template>

<style>


</style>

<script>
import { ref } from "vue";

export default {
  setup() {
    const slides = ref([
      {
        title: "Loto 24 mai 2025",
        subtitle:
          "Un événement organisé par notre association pour financer les frais de transport d'un troisième container dans des écoles au Sénégal a lieu le 24 mai 2025 à Trappes",
        imgSrc: "/images/evenements/2025/05/Loto2025.jpg",
        titleClass: "",
      },
      {
        title: "Premier voyage du président de CSF au Sénégal",
        subtitle:
          "Christophe JEANMOUGIN, président et cofondateur de l'association Container Sans Frontières a effectué son tout premier voyage officiel au Sénégal du mardi 25 avril au samedi 6 Mai 2023.",
        imgSrc: "http://img.youtube.com/vi/RqJ-5bNAESo/0.jpg",
        titleClass: "",
      },
      {
        title: "Un site web pour l'association CSF",
        subtitle:
          "L'association Container Sans Frontières a l'honneur de vous présenter son tout nouveau site web. Il permettra de faire connaître les actions de l'association et de diffuser son actualité.",
        imgSrc:
          "https://leo-huynen.fr/wp-content/uploads/2018/04/nouveau-site-web-1000x675.jpg",
        titleClass: "text-primary",
      },
    ]);

    return {
      slide: ref(1),
      autoplay: ref(true),
      slides,
    };
  },
};
</script>
