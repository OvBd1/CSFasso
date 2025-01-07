<template>
  <div>
    <q-banner class="my-banner" rounded style="background-color:rgb(208, 192, 255)">
      <div class="icon-container" ref="iconContainer" @wheel="onMouseWheel" @scroll="onScroll">
        <!-- Icônes et textes clonés au début -->
        <div v-for="(item, index) in objectList" :key="'clone-begin-' + index" class="icon-item">
          <q-img  :src=item.icon spinner-color="white" style="max-height: 150px; width: 150px; object-fit: cover;"
            img-class="my-custom-image" class="rounded-borders">
          </q-img>
          <div class="icon-text">{{ item.texte }}</div>
        </div>

        <!-- Icônes principales et leurs textes -->
        <div v-for="(item, index) in objectList" :key="index" class="icon-item ">
          <q-img
          :src=item.icon
          spinner-color="white" style="max-height: 150px; width: 150px; object-fit: cover;">
          </q-img>
          <div class="icon-text">{{ item.texte }}</div>
        </div>

        <!-- Icônes et textes clonés à la fin -->
        <div v-for="(item, index) in objectList" :key="'clone-end-' + index" class="icon-item">
          <q-img  :src=item.icon spinner-color="white" style="max-height: 150px; width: 150px; object-fit: cover;"
            img-class="my-custom-image" class="rounded-borders">
          </q-img>
          <div class="icon-text">{{ item.texte }}</div>
        </div>
      </div>
    </q-banner>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // Liste mise à jour avec icônes et textes
      objectList: [
        { icon: "https://upload.wikimedia.org/wikipedia/commons/9/94/Logo_Ville_de_Trappes_en_Yvelines.png", texte: "Trappes" },
        { icon: "https://elancourt.fr/files/pages/modules/image/logo-elancourt-180.png", texte: "Elancourt" },
        { icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Cr%C3%A9dit_Mutuel_2022_logo.svg/langfr-280px-Cr%C3%A9dit_Mutuel_2022_logo.svg.png", texte: "Credit Mutuel" },
        { icon: "https://www.yvelines.fr/wp-content/uploads/2015/04/LOGO-COOPERATION.png", texte: "Yvelines" },
      ],
      autoScrollInterval: null, // Variable pour stocker l'intervalle de l'autoscroll
    };
  },
  mounted() {
    // Positionne le scroll au centre pour le scroll infini
    this.resetScroll();

    // Démarre l'autoscroll
    this.startAutoScroll();
  },
  beforeUnmounted() {
    // Nettoie l'intervalle de l'autoscroll lorsque le composant est détruit
    clearInterval(this.autoScrollInterval);
  },
  methods: {
    resetScroll() {
      const container = this.$refs.iconContainer;
      const iconWidth = container.scrollWidth / 3;
      container.scrollLeft = iconWidth;
    },
    onScroll() {
      const container = this.$refs.iconContainer;
      const scrollWidth = container.scrollWidth / 3;

      if (container.scrollLeft <= 0) {
        container.scrollLeft = scrollWidth;
      } else if (container.scrollLeft >= scrollWidth * 2) {
        container.scrollLeft = scrollWidth;
      }
    },
    startAutoScroll() {
      const container = this.$refs.iconContainer;
      this.autoScrollInterval = setInterval(() => {
        container.scrollBy({ left: 1, behavior: "smooth" });
      }, 20); // L'autoscroll se déplace d'1px toutes les 20ms
    },
  },
};
</script>

<style lang="sass" scoped>
.my-banner
  margin-left:10vw
  margin-right:10vw
  padding: 16px
  display: flex
  align-items: center
  position: relative
  justify-content: center

.icon-container
  display: flex
  overflow-x: auto
  white-space: nowrap
  padding: 8px
  scroll-behavior: smooth
  &::-webkit-scrollbar
    display: none

.icon-item
  display: flex
  flex-direction: column
  align-items: center
  justify-content: center
  margin: 80px
  text-align: center

.icon-text
  margin-top: 8px
  font-size: 14px
  color: #333

.nav-arrow
  position: absolute
  z-index: 1
  top: 50%
  transform: translateY(-50%)
  opacity: 0.7
  &:hover
    opacity: 1

.left-arrow
  left: 0

.right-arrow
  right: 0

</style>
