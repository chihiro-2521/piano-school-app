<template>
  <div class="min-h-screen bg-stone-50 text-stone-800 font-sans">
    <nav
      class="p-6 flex justify-between items-center bg-white shadow-sm sticky top-0 z-50"
    >
      <h1 class="text-2xl font-bold text-indigo-900 tracking-wider">
        メロディピアノ教室
      </h1>
      <div class="space-x-6 hidden md:flex">
        <a href="#about" class="hover:text-indigo-600 transition"
          >教室について</a
        >
        <a href="#courses" class="hover:text-indigo-600 transition">コース</a>
        <a
          href="#contact"
          class="bg-indigo-600 text-white px-4 py-2 rounded-full hover:bg-indigo-700 transition"
          >体験レッスン</a
        >
      </div>
    </nav>

    <header class="relative py-20 px-6 text-center bg-indigo-50">
      <div class="max-w-4xl mx-auto">
        <h2
          class="text-4xl md:text-6xl font-extrabold text-indigo-900 mb-6 leading-tight"
        >
          音楽を一生の友だちに。
        </h2>
        <p class="text-lg md:text-xl text-stone-600 mb-10 leading-relaxed">
          初めての方から音大受験まで。一人ひとりの個性に寄り添い、<br
            class="hidden md:block"
          />
          ピアノを奏でる喜びを丁寧にサポートします。
        </p>
        <button
          class="bg-indigo-600 text-white text-lg font-bold px-10 py-4 rounded-full shadow-lg hover:scale-105 transition-transform"
        >
          無料で体験レッスンに申し込む
        </button>
      </div>
    </header>

    <section id="about" class="py-20 px-6 max-w-5xl mx-auto">
      <div class="text-center mb-16">
        <h3 class="text-3xl font-bold text-indigo-900 mb-4 italic">Concept</h3>
        <p class="text-stone-500 italic">私たちの想い</p>
      </div>
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <div
          class="bg-stone-200 aspect-video rounded-2xl flex items-center justify-center text-stone-400 italic"
        >
          ここに教室の写真を入れます
        </div>
        <div class="space-y-6">
          <h4 class="text-2xl font-bold text-indigo-800">
            「好き」が一番の上達法です
          </h4>
          <p class="leading-relaxed text-stone-600">
            当教室では、ただ楽譜通りに弾くだけでなく、音楽を通じて自分を表現する楽しさを大切にしています。
            厳しく教えるのではなく、好奇心を引き出し、楽しみながら長く続けられる環境をご用意しています。
          </p>
        </div>
      </div>
    </section>

    <section id="courses" class="py-20 bg-white px-6">
      <div class="max-w-6xl mx-auto">
        <h3 class="text-3xl font-bold text-center text-indigo-900 mb-12">
          コース案内
        </h3>
        <div class="grid md:grid-cols-3 gap-8">
          <div
            v-for="course in [
              'こどもコース',
              'おとなコース',
              '受験・専門コース'
            ]"
            :key="course"
            class="p-8 border border-stone-100 rounded-3xl bg-stone-50 hover:shadow-xl transition shadow-sm"
          >
            <h4 class="text-xl font-bold mb-4 text-indigo-700">{{ course }}</h4>
            <p class="text-stone-600 text-sm leading-relaxed mb-6">
              レベルや目標に合わせたオーダーメイドレッスン。初心者の方も大歓迎です。
            </p>
            <span class="text-indigo-600 font-bold">¥8,000〜 / 月</span>
          </div>
        </div>
      </div>
    </section>

    <footer id="contact" class="py-12 bg-indigo-900 text-white text-center">
      <p class="mb-4">© 2026 メロディピアノ教室</p>
      <div class="flex justify-center space-x-4 text-sm opacity-70">
        <span>アクセス：〇〇駅から徒歩5分</span>
        <span>|</span>
        <span>お電話：03-XXXX-XXXX</span>
      </div>
    </footer>
  </div>
</template>

<script setup>
// ここに後でSupabaseなどの処理を書きます
</script>
