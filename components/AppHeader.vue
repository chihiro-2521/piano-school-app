<template>
  <header class="header">
    <div class="header-inner">
      <a
        href="/"
        style="text-decoration: none; color: inherit; cursor: pointer"
      >
        <h2 class="logo">メロディ♪ピアノ教室</h2>
      </a>
      <nav>
        <ul class="nav-list">
          <li @click="$emit('open-modal')" class="nav-item">
            規約・コース詳細
          </li>
          <li @click="scrollToContact" class="nav-item">お問い合わせ</li>
          <li @click="navigateTo('/login')" class="nav-item login-btn">
            ログイン
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup>
// user（ログイン情報）の中から、名前（full_name）を取り出して userName という名前にする
const userName = computed(
  () => user.value?.user_metadata?.full_name || "ゲスト"
)
const emit = defineEmits(["open-modal"])

const scrollToContact = () => {
  const el = document.getElementById("contact-section")
  if (el) {
    el.scrollIntoView({ behavior: "smooth" })
  }
}
</script>

<style scoped>
/* 前回の回答で調整した「左右端に寄せる」スタイルを維持 */
.header {
  position: sticky;
  top: 0;
  background: white;
  z-index: 1000;
  border-bottom: 1px solid #eee;
  padding: 10px 0;
}
.header-inner {
  max-width: 95%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.logo {
  font-size: 1.4rem;
  font-weight: bold;
  cursor: pointer; /* マウスを乗せた時に指マークにする */
  margin: 0;
  color: #333;
}
.nav-list {
  display: flex;
  list-style: none;
  gap: 25px;
  align-items: center;
}
.nav-item {
  font-size: 14px;
  font-weight: bold;
  color: #800000;
  cursor: pointer;
}
.login-btn {
  background: #f5f5f5;
  padding: 8px 18px;
  border-radius: 4px;
}
</style>
