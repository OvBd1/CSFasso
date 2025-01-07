<template>
  <div class="q-ma-md text-center text-h1">Nos Vidéos</div>
  <div class="q-pa-md flex" style="justify-content: center">
    <q-carousel
      animated
      v-model="slide"
      arrows
      navigation
      infinite
      style="height: max-content"
    >
      <q-carousel-slide
        v-for="(video, index) in videos"
        :key="index"
        class="column"
        :name="index"
      >
        <q-video :src="video.url" style="width: 80vw; height: 60vh" />
      </q-carousel-slide>
    </q-carousel>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    return {
      slide: ref(1),
      videos: [
        { url: "https://youtube.com/embed/21SwTNImO5w?rel=0" },
        { url: "https://youtube.com/embed/vEvPv_i-Akg?rel=0" },
        { url: "https://youtube.com/embed/NraV0MGqtCo?rel=0" },
        // Ajoutez d'autres vidéos ici
      ],
    };
  },
};
</script>
