<template>
  <div style="max-width: 600px; margin: 0 auto; padding: 40px 20px">
    <h1>👩‍🏫 お知らせ作成（写真付き）</h1>

    <div
      style="
        margin-top: 20px;
        padding: 20px;
        border: 1px solid #ccc;
        border-radius: 10px;
      "
    >
      <div style="margin-bottom: 20px">
        <label>タイトル</label>
        <input
          v-model="post.title"
          type="text"
          style="width: 100%; padding: 10px"
        />
      </div>

      <div style="margin-bottom: 20px">
        <label style="display: block; margin-bottom: 5px">写真を追加</label>
        <input type="file" @change="onFileChange" accept="image/*" />
        <div v-if="uploading" style="color: blue; font-size: 0.8rem">
          アップロード中...
        </div>
        <img
          v-if="post.image_url"
          :src="post.image_url"
          style="width: 100px; margin-top: 10px; border-radius: 5px"
        />
      </div>

      <div style="margin-bottom: 20px">
        <label>本文</label>
        <textarea
          v-model="post.content"
          rows="5"
          style="width: 100%; padding: 10px"
        ></textarea>
      </div>

      <button
        @click="sendPost"
        :disabled="uploading"
        style="
          width: 100%;
          padding: 15px;
          background: #800000;
          color: white;
          font-weight: bold;
          border-radius: 8px;
        "
      >
        投稿する
      </button>
    </div>
  </div>
</template>

<script setup>
const supabase = useSupabaseClient()
const uploading = ref(false)
const post = ref({ title: "", content: "", image_url: "" })

// 写真を選んだ瞬間に実行される
const onFileChange = async (e) => {
  const file = e.target.files[0]
  if (!file) return

  uploading.value = true
  const fileExt = file.name.split(".").pop()
  const fileName = `${Math.random()}.${fileExt}` // 重ならない名前を作る

  // Storageにアップロード
  const { data, error } = await supabase.storage
    .from("post-images")
    .upload(fileName, file)

  if (error) {
    alert("写真アップロード失敗: " + error.message)
  } else {
    // 公開URLを取得
    const { data: urlData } = supabase.storage
      .from("post-images")
      .getPublicUrl(fileName)

    post.value.image_url = urlData.publicUrl
  }
  uploading.value = false
}

// 最後にテーブルへ保存
const sendPost = async () => {
  if (!post.value.title || !post.value.content)
    return alert("全部入力してください")

  const { error } = await supabase.from("posts").insert([post.value])

  if (error) {
    alert("投稿失敗: " + error.message)
  } else {
    alert("投稿完了！")
    navigateTo("/student")
  }
}
</script>
