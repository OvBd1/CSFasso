const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/IndexPage.vue") }],
  },
  {
    path: "/histoire",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/NotreHistoire.vue") }],
  },
  {
    path: "/actualites",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/ActualitesPage.vue") }
    ],
  },
  {
    path: "/contact",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/NousContacter.vue") },
    ],
  },
  {
    path: "/jumelage",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/JumelagePage.vue") }],
  },
  {
    path: "/video-photo",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/VideosPhotos.vue") }],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
