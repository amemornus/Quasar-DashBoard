const routes = [
  {
    path: "/dashboard",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "/dashboard", component: () => import("pages/IndexPage.vue") },
      { path: "/table", component: () => import("pages/TablePage.vue") },
      { path: "/chat", component: () => import("pages/ChatPage.vue") },
      { path: "/graph", component: () => import("pages/GraphPage.vue") },
      // { path: "/login", component: () => import("pages/LogInPage.vue") },
    ],
  },
  {
    path: "",
    component: () => import("layouts/LogUser.vue"),
    children: [
      { path: "", component: () => import("src/pages/LogInPage.vue") },
    ],
  },
  {
    path: "/register",
    component: () => import("layouts/RegisterUser.vue"),
    children: [
      {
        path: "/register",
        component: () => import("src/pages/SignUpPage.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
