<template>
  <section
    id="contact-section"
    class="contact py-12 flex flex-col items-center"
  >
    <div
      class="container"
      style="max-width: 600px; width: 100%; margin: 0 auto"
    >
      <h2 class="section-title" style="text-align: center; margin-bottom: 30px">
        お問い合わせ
      </h2>

      <div class="form-container">
        <div class="form-group" style="margin-bottom: 24px">
          <label
            style="
              display: block;
              font-weight: bold;
              margin-bottom: 8px;
              text-align: left;
            "
          >
            お問い合わせの種類
            <span style="color: red; font-size: 0.8em">※必須</span>
          </label>
          <select
            v-model="form.type"
            style="width: 100%; padding: 12px; border: 1px solid #333"
          >
            <option value="">選択してください</option>
            <option value="trial">体験レッスンの申し込み</option>
            <option value="fee">入会金・料金についてのご質問</option>
            <option value="content">教材・レッスン内容について</option>
            <option value="other">その他のお問い合わせ</option>
          </select>
        </div>

        <div class="form-group" style="margin-bottom: 24px">
          <label
            style="
              display: block;
              font-weight: bold;
              margin-bottom: 8px;
              text-align: left;
            "
          >
            お名前 <span style="color: red; font-size: 0.8em">※必須</span>
          </label>
          <input
            v-model="form.name"
            type="text"
            placeholder="山田 太郎"
            style="width: 100%; padding: 12px; border: 1px solid #333"
          />
        </div>

        <div class="form-group" style="margin-bottom: 24px">
          <label
            style="
              display: block;
              font-weight: bold;
              margin-bottom: 8px;
              text-align: left;
            "
          >
            メールアドレス
            <span style="color: red; font-size: 0.8em">※必須</span>
          </label>
          <input
            v-model="form.email"
            type="email"
            placeholder="example@mail.com"
            style="width: 100%; padding: 12px; border: 1px solid #333"
          />
        </div>

        <div class="form-group" style="margin-bottom: 24px">
          <label
            style="
              display: block;
              font-weight: bold;
              margin-bottom: 8px;
              text-align: left;
            "
          >
            電話番号 <span style="color: red; font-size: 0.8em">※必須</span>
          </label>
          <input
            v-model="form.tel"
            type="tel"
            placeholder="090-0000-0000"
            style="width: 100%; padding: 12px; border: 1px solid #333"
          />
        </div>

        <div
          v-if="form.type === 'trial'"
          style="
            margin-bottom: 24px;
            background: #fdf2f2;
            padding: 20px;
            border: 1px solid #deb8b8;
            border-radius: 8px;
          "
        >
          <div style="margin-bottom: 20px">
            <p style="font-weight: bold; margin-bottom: 10px; text-align: left">
              【体験レッスン 第1希望】<span
                style="color: red; font-size: 0.8rem"
                >※必須</span
              >
            </p>
            <div style="display: flex; flex-direction: column; gap: 8px">
              <input
                v-model="form.date1"
                type="date"
                style="width: 100%; padding: 10px; border: 1px solid #333"
              />
              <select
                v-model="form.time1"
                style="width: 100%; padding: 10px; border: 1px solid #333"
              >
                <option value="">希望時間帯を選択</option>
                <option value="10:00">10:00</option>
                <option value="13:00">13:00</option>
                <option value="15:00">15:00</option>
              </select>
            </div>
          </div>

          <div>
            <p style="font-weight: bold; margin-bottom: 10px; text-align: left">
              【体験レッスン 第2希望】<span
                style="color: #666; font-size: 0.8rem"
                >（任意）</span
              >
            </p>
            <div style="display: flex; flex-direction: column; gap: 8px">
              <input
                v-model="form.date2"
                type="date"
                style="width: 100%; padding: 10px; border: 1px solid #333"
              />
              <select
                v-model="form.time2"
                style="width: 100%; padding: 10px; border: 1px solid #333"
              >
                <option value="">希望時間帯を選択</option>
                <option value="10:00">10:00</option>
                <option value="13:00">13:00</option>
                <option value="15:00">15:00</option>
              </select>
            </div>
          </div>
        </div>

        <div class="form-group" style="margin-bottom: 24px">
          <label
            style="
              display: block;
              font-weight: bold;
              margin-bottom: 8px;
              text-align: left;
            "
          >
            お問い合わせ内容
            <span
              v-if="form.type !== 'trial'"
              style="color: red; font-size: 0.8em"
              >※必須</span
            >
            <span v-else style="color: #666; font-size: 0.8em">（任意）</span>
          </label>
          <textarea
            v-model="form.message"
            rows="5"
            placeholder="ご質問などをご自由に入力ください"
            style="
              width: 100%;
              padding: 12px;
              border: 1px solid #333;
              box-sizing: border-box;
            "
          ></textarea>
        </div>

        <div style="text-align: center; margin-top: 32px">
          <button
            @click="submit"
            style="
              padding: 12px 48px;
              cursor: pointer;
              background: #800000;
              color: white;
              border: none;
              font-weight: bold;
            "
          >
            この内容で送信する
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue"
const supabase = useSupabaseClient()

const form = ref({
  type: "",
  name: "",
  email: "",
  tel: "",
  date1: "",
  time1: "",
  date2: "",
  time2: "",
  message: ""
})

const submit = async () => {
  // ① 基本必須チェック
  if (
    !form.value.type ||
    !form.value.name ||
    !form.value.email ||
    !form.value.tel
  ) {
    alert("必須項目（種類・お名前・メール・電話番号）を入力してください。")
    return
  }

  // ② 体験レッスンの場合：第1希望は必須
  if (form.value.type === "trial") {
    if (!form.value.date1 || !form.value.time1) {
      alert("体験レッスンの第1希望日時を選択してください。")
      return
    }
  }

  // ③ 体験レッスン以外の場合：内容は必須
  if (form.value.type !== "trial" && !form.value.message) {
    alert("お問い合わせ内容を入力してください。")
    return
  }

  // Supabaseへ保存
  const { error } = await supabase.from("contacts").insert([
    {
      name: form.value.name,
      email: form.value.email,
      tel: form.value.tel,
      type: form.value.type,
      message: form.value.message,
      lesson_date: form.value.date1,
      lesson_time: form.value.time1,
      lesson_date2: form.value.date2, // 第2希望も送る場合はテーブルにカラムが必要です
      lesson_time2: form.value.time2
    }
  ])

  if (error) {
    alert("送信に失敗しました: " + error.message)
  } else {
    alert("お問い合わせを送信しました！")
    form.value = {
      type: "",
      name: "",
      email: "",
      tel: "",
      date1: "",
      time1: "",
      date2: "",
      time2: "",
      message: ""
    }
  }
}
</script>

<style scoped>
.section-title {
  color: #800000;
}
</style>
