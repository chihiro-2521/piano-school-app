<template>
  <div
    class="min-h-screen bg-stone-50 text-stone-800 font-sans leading-relaxed"
  >
    <nav
      class="p-4 md:p-6 flex justify-between items-center bg-white shadow-sm sticky top-0 z-50"
    >
      <h1 class="text-xl md:text-2xl font-bold text-indigo-900 tracking-wider">
        メロディピアノ教室
      </h1>
      <div class="flex items-center space-x-4">
        <div class="hidden md:flex space-x-6 mr-6">
          <a href="#about" class="hover:text-indigo-600 transition"
            >教室について</a
          >
          <a href="#courses" class="hover:text-indigo-600 transition">コース</a>
        </div>
        <button
          class="text-indigo-600 font-bold hover:text-indigo-800 px-4 py-2"
        >
          ログイン
        </button>
        <a
          href="#contact"
          class="bg-indigo-600 text-white px-5 py-2 rounded-full hover:bg-indigo-700 transition text-sm md:text-base"
        >
          お問い合わせ
        </a>
      </div>
    </nav>

    <header
      class="relative py-16 md:py-28 px-6 text-center bg-gradient-to-b from-indigo-50 to-stone-50"
    >
      <div class="max-w-4xl mx-auto">
        <h2
          class="text-4xl md:text-6xl font-extrabold text-indigo-900 mb-6 leading-tight"
        >
          音楽を一生の友だちに。
        </h2>
        <p class="text-lg md:text-xl text-stone-600 mb-10">
          一人ひとりの個性に寄り添い、ピアノを奏でる喜びを丁寧にサポートします。
        </p>
        <div
          class="flex flex-col md:flex-row justify-center items-center gap-4"
        >
          <button
            class="w-full md:w-auto bg-indigo-600 text-white text-lg font-bold px-10 py-4 rounded-full shadow-lg hover:bg-indigo-700 transition-all hover:scale-105"
          >
            無料で体験レッスンに申し込む
          </button>
          <a
            href="#contact"
            class="w-full md:w-auto bg-white text-indigo-600 border-2 border-indigo-600 text-lg font-bold px-10 py-4 rounded-full hover:bg-indigo-50 transition-all"
          >
            資料請求・お問合せ
          </a>
        </div>
      </div>
    </header>

    <section id="about" class="py-20 px-6 max-w-5xl mx-auto">
      <div class="text-center mb-16">
        <h3 class="text-3xl font-bold text-indigo-900 mb-4 italic">Concept</h3>
        <p class="text-stone-500 italic">私たちの想い</p>
      </div>
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <div
          class="bg-indigo-100 aspect-video rounded-3xl flex flex-col items-center justify-center text-indigo-400 p-8"
        >
          <span class="text-6xl mb-4">🎹</span>
          <p class="text-sm italic text-center">
            ここに教室やレッスンの風景写真を入れると素敵です
          </p>
        </div>
        <div class="space-y-6">
          <h4 class="text-2xl font-bold text-indigo-800">
            「好き」が一番の上達法です
          </h4>
          <p class="text-stone-600">
            当教室では、ただ楽譜通りに弾くだけでなく、音楽を通じて自分を表現する楽しさを大切にしています。
            厳しく教えるのではなく、好奇心を引き出し、楽しみながら長く続けられる環境をご用意しています。
          </p>
        </div>
      </div>
    </section>

    <footer id="contact" class="py-16 bg-indigo-900 text-white px-6">
      <div class="max-w-4xl mx-auto text-center">
        <h3 class="text-2xl font-bold mb-8">お気軽にお問い合わせください</h3>
        <div class="flex flex-col md:flex-row justify-center gap-8 mb-12">
          <div class="bg-indigo-800 p-6 rounded-2xl flex-1">
            <p class="text-indigo-200 text-sm mb-2">お電話でのお問い合わせ</p>
            <p class="text-2xl font-bold">03-XXXX-XXXX</p>
          </div>
          <div class="bg-indigo-800 p-6 rounded-2xl flex-1">
            <p class="text-indigo-200 text-sm mb-2">メールでのお問い合わせ</p>
            <p class="text-xl font-bold">info@melody-piano.com</p>
          </div>
        </div>
        <p class="mb-4 opacity-70">© 2026 メロディピアノ教室</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
// スクリプト部分は必要に応じて後ほど追加します
</script>
