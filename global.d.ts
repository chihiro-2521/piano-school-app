// Global type declarations to help TypeScript understand Nuxt 3 virtual imports.

declare module "#imports" {
  export * from "vue"
  export * from "vue-router"
  export * from "nuxt/app"
}

declare module "#app" {
  export * from "nuxt/app"
}

