<template>
  <div class="modal-overlay" @click.self="$emit('close')">
    <div class="modal-content">
      <div class="modal-header">
        <h2 class="modal-title">規約・コース詳細</h2>
        <button class="x-btn" @click="$emit('close')">×</button>
      </div>

      <div class="modal-body">
        <section class="info-section">
          <h3 class="section-tag">■ 入会金・年会費</h3>
          <div class="price-row">
            <span>入会金</span>
            <span class="price-val">2,000円 <small>(ご入会時のみ)</small></span>
          </div>
          <div class="price-row">
            <span>年会費</span>
            <span class="price-val"
              >2,000円 <small>(毎年4月にお預かりします)</small></span
            >
          </div>
        </section>

        <section class="info-section">
          <h3 class="section-tag">■ 月謝（年間40回レッスン）</h3>
          <table class="data-table">
            <thead>
              <tr>
                <th>コース</th>
                <th>月謝 (税込)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>30分レッスン (月4回)</td>
                <td class="bold">6,500円</td>
              </tr>
              <tr>
                <td>45分レッスン (月4回)</td>
                <td class="bold">8,500円</td>
              </tr>
              <tr>
                <td>60分レッスン (月4回)</td>
                <td class="bold">10,500円</td>
              </tr>
            </tbody>
          </table>
          <p class="table-note">
            ※年間レッスン回数は40回です。発表会・イベント等で回数が前後する場合があります。
          </p>
        </section>

        <section class="info-section">
          <h3 class="section-tag">■ 単発レッスン (中学生以上〜大人の希望者)</h3>
          <table class="data-table">
            <thead>
              <tr>
                <th>時間</th>
                <th>1回あたり (税込)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>30分</td>
                <td class="bold">2,200円</td>
              </tr>
              <tr>
                <td>45分</td>
                <td class="bold">2,700円</td>
              </tr>
              <tr>
                <td>60分</td>
                <td class="bold">3,200円</td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>

      <div class="mt-8 pt-6 border-t border-gray-200 text-left">
        <h3 class="text-lg font-bold text-gray-800 mb-4 flex items-center">
          <span class="mr-2">📋</span> 教室からのお願いと規約（抜粋）
        </h3>

        <div class="space-y-6 text-sm text-gray-700 leading-relaxed">
          <section>
            <h4 class="font-bold text-red-800 mb-2">【レッスンについて】</h4>
            <ul class="list-disc ml-5 space-y-1">
              <li>年間レッスンは40回です。</li>
              <li>
                学校行事や伝染病による欠席は振替いたします。必ず事前にご連絡ください。
              </li>
              <li>
                生徒様都合（体調不良等）による欠席の返金はいたしかねます。
              </li>
            </ul>
          </section>

          <section>
            <h4 class="font-bold text-red-800 mb-2">【お支払い・退会】</h4>
            <ul class="list-disc ml-5 space-y-1">
              <li>月謝は毎月最初のレッスン時に、月謝袋にてお持ちください。</li>
              <li>入会金・年会費として各2,000円を頂戴しております。</li>
              <li>退会を希望される場合は、前月末までにお知らせください。</li>
            </ul>
          </section>

          <p class="text-xs text-gray-500 mt-4 italic">
            ※詳細は入会時にお渡しする規約全文をご確認ください。
          </p>
        </div>
      </div>

      <button class="close-footer-btn" @click="$emit('close')">閉じる</button>
    </div>
  </div>
</template>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
}
.modal-content {
  background: white;
  width: 90%;
  max-width: 550px;
  border-radius: 8px;
  padding: 30px;
  box-sizing: border-box;
  max-height: 85vh;
  overflow-y: auto;
}
.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #800000;
  margin-bottom: 20px;
  padding-bottom: 10px;
}
.modal-title {
  font-size: 1.25rem;
  margin: 0;
  color: #333;
}
.x-btn {
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #666;
}

.section-tag {
  background: #800000;
  color: white;
  display: inline-block;
  padding: 4px 12px;
  font-size: 0.9rem;
  margin-bottom: 15px;
  margin-top: 10px;
}
.price-row {
  display: flex;
  justify-content: space-between;
  padding: 8px 0;
  border-bottom: 1px solid #f0f0f0;
  font-size: 0.95rem;
}
.price-val {
  font-weight: bold;
}
.price-val small {
  font-weight: normal;
  color: #666;
}

.data-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 5px;
}
.data-table th {
  text-align: left;
  background: #fafafa;
  padding: 10px;
  border-bottom: 1px solid #ddd;
  font-size: 0.9rem;
}
.data-table td {
  padding: 12px 10px;
  border-bottom: 1px solid #f0f0f0;
  font-size: 0.95rem;
}
.bold {
  font-weight: bold;
  text-align: right;
}
.table-note {
  font-size: 0.75rem;
  color: #777;
  margin-top: 8px;
  line-height: 1.4;
}

.close-footer-btn {
  width: 100%;
  padding: 14px;
  margin-top: 30px;
  background: #f5f5f5;
  border: none;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
}
.close-footer-btn:hover {
  background: #eee;
}
</style>
