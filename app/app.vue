<template>
  <div class="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
    <!-- 背景の装飾（ピアノ鍵盤をイメージした細いライン） -->
    <div class="absolute inset-0 opacity-10 pointer-events-none">
      <div
        v-for="i in 24"
        :key="i"
        class="absolute h-full w-px bg-white"
        :style="{ left: `${(i / 25) * 100}%` }"
      />
    </div>

    <NuxtRouteAnnouncer />

    <main class="relative z-10 text-center px-6 max-w-2xl mx-auto">
      <!-- アイコン・装飾 -->
      <div class="mb-8 flex justify-center">
        <span
          class="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-amber-500/20 text-amber-400 border border-amber-500/30 shadow-lg shadow-amber-500/10"
          aria-hidden="true"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-10 h-10"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="1.5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z"
            />
          </svg>
        </span>
      </div>

      <h1
        class="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white drop-shadow-lg"
      >
        <span class="block text-amber-400/90 font-serif italic">ピアノ教室</span>
        <span class="block mt-2 text-2xl sm:text-3xl md:text-4xl font-sans font-medium text-slate-200">
          アプリ 開発開始
        </span>
      </h1>

      <p class="mt-8 text-slate-400 text-sm sm:text-base">
        ようこそ。これから一緒にアプリを育てていきましょう。
      </p>

      <div class="mt-12 h-px w-24 mx-auto bg-gradient-to-r from-transparent via-amber-500/50 to-transparent rounded-full" />
    </main>
  </div>
</template>
