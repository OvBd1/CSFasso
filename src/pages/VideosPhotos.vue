<template>
  <div class="q-ma-md text-center text-h1">Nos Photos</div>

  <div v-for="(yearImages, year) in sortedYears" :key="year" class="q-pa-md">
    <div class="text-h3 text-center q-mb-md">{{ year }}</div>

    <q-carousel
      animated
      v-model="slides[year]"
      arrows
      navigation
      infinite
      class="q-mx-auto"
      style="width: 90vw; height: 80vh;"
    >
      <q-carousel-slide
        v-for="(image, index) in groupedImages[year]"
        :key="index"
        class="column"
        :name="index"
      >
        <q-img
          :src="image.url"
          class="cursor-pointer"
          style="width: 100%; height: 100%; object-fit: contain;"
          @click="openFullscreen(image.url)"
        />
        <q-btn
          round
          dense
          color="primary"
          icon="fullscreen"
          class="absolute-top-right q-ma-sm"
          @click.stop="openFullscreen(image.url)"
        />
      </q-carousel-slide>
    </q-carousel>

  </div>

  <!-- Fullscreen Viewer -->
  <q-dialog v-model="fullscreenDialog" persistent maximized>
    <q-card class="bg-black text-white" style="height: 100vh; position: relative;">
      <q-img
        :src="fullscreenImage"
        style="height: 100%; object-fit: contain;"
      />
      <q-btn
        flat
        round
        icon="close"
        color="white"
        class="absolute-top-right q-ma-md"
        @click="fullscreenDialog = false"
      />
    </q-card>
  </q-dialog>
</template>

<script>
import { ref, computed } from "vue";

export default {
  setup() {
    const images = [
      { url: "images/evenements/2021/03/20210630_142241.jpg" },
      { url: "images/evenements/2021/03/20210630_142640.jpg" },
      { url: "images/evenements/2021/07/20211002_082435.jpg" },
      { url: "images/evenements/2021/07/20211007_120716.jpg" },
      { url: "images/evenements/2021/07/20210709_092545.jpg" },
      { url: "images/evenements/2021/07/20210709_092940.jpg" },
      { url: "images/evenements/2021/07/20210709_132619.jpg" },
      { url: "images/evenements/2021/07/20210709_135621.jpg" },
      { url: "images/evenements/2021/07/20210709_184247.jpg" },
      { url: "images/evenements/2021/07/20210710_113429.jpg" },
      { url: "images/evenements/2021/07/20210710_161746.jpg" },
      { url: "images/evenements/2021/07/20210712_094946.jpg" },
      { url: "images/evenements/2023/04/20230331_132223.jpg" },
      { url: "images/evenements/2023/04/20230401_083536.jpg" },
      { url: "images/evenements/2023/04/20230401_085341.jpg" },
      { url: "images/evenements/2023/04/20230401_161145.jpg" },
      { url: "images/evenements/2023/04/IMG-20230331-WA0008.jpg" },
    ];

    const groupedImages = images.reduce((acc, image) => {
      const year = image.url.split('/')[2];
      if (!acc[year]) acc[year] = [];
      acc[year].push(image);
      return acc;
    }, {});

    const sortedYears = computed(() => {
      return Object.keys(groupedImages)
        .sort((a, b) => b - a)
        .reduce((obj, key) => {
          obj[key] = groupedImages[key];
          return obj;
        }, {});
    });

    const slides = ref({});
    Object.keys(groupedImages).forEach((year) => {
      slides.value[year] = 0;
    });

    const fullscreenDialog = ref(false);
    const fullscreenImage = ref("");

    const openFullscreen = (url) => {
      fullscreenImage.value = url;
      fullscreenDialog.value = true;
    };

    return {
      images,
      groupedImages,
      sortedYears,
      slides,
      fullscreenDialog,
      fullscreenImage,
      openFullscreen,
    };
  },
};
</script>
