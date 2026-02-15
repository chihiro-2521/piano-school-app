<template>
  <section class="lessons">
    <div class="container">
      <h2 class="section-title">レッスン料金・コース</h2>
      <div class="price-list">
        <div class="price-item">
          <span>30分レッスン</span>
          <span class="price">¥6,500 / 月</span>
        </div>
        <div class="price-item">
          <span>45分レッスン</span>
          <span class="price">¥8,500 / 月</span>
        </div>
        <div class="price-item">
          <span>60分レッスン</span>
          <span class="price">¥10,500 / 月</span>
        </div>
      </div>
      <div class="notes">
        <p>※入会金：¥2,000（初回のみ）</p>
        <p>※年間40回レッスンとなります。</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.lessons {
  padding: 60px 0;
  background: #fff;
}
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;
}
.section-title {
  color: #800000;
  text-align: center;
  margin-bottom: 40px;
}
.price-list {
  margin-bottom: 20px;
}
.price-item {
  display: flex;
  justify-content: space-between;
  padding: 15px 0;
  border-bottom: 1px solid #eee;
}
.price {
  font-weight: bold;
}
.notes {
  text-align: right;
  font-size: 0.8rem;
  color: #666;
  margin-top: 10px;
}
</style>
