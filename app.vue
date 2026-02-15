<template>
  <!-- 全体を一つの div で囲むのが Vue のお作法だよ -->
  <div class="app-container">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>

    <!-- サイトのフッター部分：ここがコピーライトだよ -->
    <footer class="footer-section">
      <div class="footer-content">
        <p class="copyright-text">
          &copy; 2026 Piamo / melody-piano♪ music school All Rights Reserved.
        </p>
      </div>
    </footer>
  </div>
</template>

<style scoped>
/* 全体のコンテナ設定 */
.app-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* フッターのデザイン */
.footer-section {
  width: 100%;
  padding: 40px 20px;
  background-color: #fffdf9;
  border-top: 1px solid #f3e5d8;
  text-align: center;
  margin-top: auto; /* コンテンツが少なくても下に配置されるようにするよ */
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
}

.copyright-text {
  color: #5d4037;
  font-size: 14px;
  letter-spacing: 0.08em;
  opacity: 0.7;
}

/* スマホ用の調整 */
@media (max-width: 640px) {
  .footer-section {
    padding: 30px 15px;
  }
  .copyright-text {
    font-size: 12px;
  }
}
</style>
