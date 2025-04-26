<template>
  <q-layout view="hHh lpR fff">
    <q-header reveal elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-toolbar-title> Association CSF </q-toolbar-title>
        <div class="gt-sm">
          <q-tabs align="center">
            <q-route-tab to="/" label="Accueil" />
            <q-route-tab to="/histoire" label="Qui sommes nous" />
            <q-route-tab to="/actualites" label="Actualités" />
            <q-route-tab to="/contact" label="Nous Contacter" />
            <!-- <q-route-tab to="/jumelage" label="Jumelage" /> -->
            <q-route-tab to="/video-photo" label="Nos vidéos/photos" />

            <q-space />
            <a
              href="https://www.youtube.com/@ContainersansfrontieresCSF"
            >
              <q-btn
                rounded
                color="primary"
                icon="arrow_outward"
                label="Voir nos vidéos"
              ></q-btn>
            </a>

            <q-space />
            <LoginComponent />
            <a
              href="https://www.leetchi.com/fr/c/csf-container-sans-frontieres"
            >
              <q-btn
                rounded
                color="primary"
                icon="mail"
                label="Faire un don"
              ></q-btn>
            </a>
          </q-tabs>
        </div>

        <div class="lt-md">
          <q-btn flat dense round @click="drawer = !drawer" icon="menu" />
        </div>
      </q-toolbar>
    </q-header>
    <q-drawer v-model="drawer" elevated class="bg-primary text-white">
      <q-list>
        <q-item header>
          <q-img src="../assets/Logo1.webp" style="width: 70px" />
        </q-item>
        <q-item clickable tag="a" href="/">
          <q-item-section>
            <q-item-label>Accueil</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" href="#/histoire">
          <q-item-section>
            <q-item-label>Qui sommes nous ?</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" href="#/actualites">
          <q-item-section>
            <q-item-label>Actualités</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" href="#/contact">
          <q-item-section>
            <q-item-label>Nous Contacter</q-item-label>
          </q-item-section>
        </q-item>
        <!-- <q-item clickable tag="a" href="#/jumelage">
          <q-item-section>
            <q-item-label>Jumelage</q-item-label>
          </q-item-section>
        </q-item> -->
        <q-item clickable tag="a" href="#/video-photo">
          <q-item-section>
            <q-item-label>Nos Videos/Photos</q-item-label>
          </q-item-section>
        </q-item>
        <q-item>
          <a href="https://www.youtube.com/@ContainersansfrontieresCSF">
            <q-btn
              color="primary"
              icon="arrow_outward"
              label="Voir nos vidéos"
              class="full-width"
            >
            </q-btn
          ></a>
        </q-item>
        <q-item>
          <a href="https://www.leetchi.com/fr/c/csf-container-sans-frontieres">
            <q-btn
              color="primary"
              icon="mail"
              label="Faire un don"
              class="full-width"
            >
            </q-btn
          ></a>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated class="bg-primary text-white">
      <q-toolbar class="text-center">
        <q-toolbar-title class="text-center">
          Christophe JEANMOUGIN - Association CSF
        </q-toolbar-title>
        <q-toolbar-title class="absolute-right text-caption q-mt-md">
          Développé par Yanis BONTROND
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    return {
      drawer: ref(false),
    };
  },
};
</script>

<style>
:root {
  background-color: rgb(208, 192, 255);
}
</style>
