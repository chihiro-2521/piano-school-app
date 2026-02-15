<template>
  <section class="profile">
    <div class="container">
      <div class="profile-card">
        <div class="profile-image-area">
          <img
            src="/instructor.jpg"
            alt="山田 奏恵 講師"
            class="instructor-img"
          />
        </div>

        <div class="profile-content">
          <div class="name-header">
            <h2 class="name">山田 奏恵</h2>
            <span class="job-title">Instructor Profile</span>
          </div>

          <div class="info-section">
            <h3 class="info-label">【経歴・資格】</h3>
            <ul class="info-list">
              <li>〇〇音楽大学 ピアノコース卒業</li>
              <li>第〇回 日本ピアノコンクール 全国大会入賞</li>
              <li>中学校・高等学校教諭一種免許状（音楽）取得</li>
              <li>国内主要オーケストラとの共演やソロリサイタルを開催</li>
              <li>指導歴10年。これまでに延べ100人以上の生徒を指導</li>
            </ul>
          </div>

          <div class="info-section">
            <h3 class="info-label">【メッセージ】</h3>
            <p class="info-text">
              3歳からピアノという楽器と共に歩んできました。私自身、練習が辛い時期もありましたが、それを乗り越えて「自分の心で奏でる喜び」を知ったことが人生の財産になっています。<br /><br />
              レッスンでは、基礎を大切にしながらも、生徒さんが「この曲が好き！」「もっと弾きたい！」と思える好奇心を育むことを一番に心掛けています。初心者の方から経験者の方まで、一人ひとりのペースに寄り添い、音楽が生涯の友となるようサポートいたします。
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.profile {
  padding: 80px 0;
  background-color: #fcfcfc;
}
.container {
  max-width: 950px;
  margin: 0 auto;
  padding: 0 20px;
}
.profile-card {
  display: flex;
  background: white;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  overflow: hidden;
}
.profile-image-area {
  flex: 1;
  min-height: 450px;
}
.instructor-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.profile-content {
  flex: 1.2;
  padding: 40px;
}
.name-header {
  border-bottom: 2px solid #800000;
  margin-bottom: 25px;
  padding-bottom: 10px;
}
.name {
  font-size: 2rem;
  color: #333;
  margin: 0;
}
.job-title {
  color: #888;
  font-size: 0.9rem;
}

.info-section {
  margin-bottom: 25px;
}
.info-label {
  color: #800000;
  font-weight: bold;
  margin-bottom: 10px;
  display: block;
  font-size: 1rem;
}
.info-list {
  padding-left: 20px;
  margin: 0;
  color: #444;
  line-height: 1.8;
  font-size: 0.95rem;
}
.info-text {
  font-size: 0.95rem;
  line-height: 1.8;
  color: #444;
}

@media (max-width: 768px) {
  .profile-card {
    flex-direction: column;
  }
  .profile-image-area {
    height: 350px;
  }
}
</style>
