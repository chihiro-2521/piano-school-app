<template>
  <div
    class="student-page"
    style="max-width: 800px; margin: 0 auto; padding: 20px"
  >
    <header
      style="
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 30px;
      "
    >
      <h1 style="color: #800000">生徒専用マイページ</h1>
      <div v-if="user" style="text-align: right">
        <p style="font-weight: bold">
          こんにちは、{{ user.user_metadata?.full_name || "生徒" }} 様
        </p>
        <button
          @click="logout"
          style="font-size: 0.8rem; color: #666; text-decoration: underline"
        >
          ログアウト
        </button>
      </div>
    </header>

    <section class="posts-section">
      <h2
        style="
          border-left: 5px solid #800000;
          padding-left: 15px;
          margin-bottom: 20px;
        "
      >
        👩‍🏫 先生からのお知らせ
      </h2>

      <div v-if="posts.length > 0">
        <div
          v-for="post in posts"
          :key="post.id"
          style="
            background: #fff;
            border: 1px solid #ddd;
            padding: 20px;
            border-radius: 8px;
            margin-bottom: 15px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
          "
        >
          <span style="color: #888; font-size: 0.9rem">{{
            new Date(post.created_at).toLocaleDateString()
          }}</span>
          <h3 style="margin: 10px 0; color: #333">{{ post.title }}</h3>
          <p style="white-space: pre-wrap; line-height: 1.6">
            <div v-if="post.image_url" style="margin-top: 15px; margin-bottom: 15px;">
  <img 
    :src="post.image_url" 
    style="width: 100%; max-width: 400px; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);"
    alt="投稿画像"
  />
</div>
            {{ post.content }}
          </p>
        </div>
      </div>

      <div
        v-else
        style="
          text-align: center;
          padding: 50px;
          background: #f9f9f9;
          border-radius: 8px;
        "
      >
        <p>現在、先生からの新しい投稿はありません。</p>
      </div>
    </section>
  </div>
</template>

<script setup>
const user = useSupabaseUser()
const supabase = useSupabaseClient()
const posts = ref([])

// 投稿を読み込む関数
const fetchPosts = async () => {
  const { data, error } = await supabase
    .from("posts") // ← ここが Supabase のテーブル名（posts）と同じか確認
    .select("*")
    .order("created_at", { ascending: false })

  if (data) {
    posts.value = data
  }
}

// ログアウト処理
const logout = async () => {
  await supabase.auth.signOut()
  navigateTo("/") // トップへ戻る
}

// 画面が開いたら実行
onMounted(() => {
  if (user.value) {
    fetchPosts()
  } else {
    navigateTo("/login") // ログインしてなければログイン画面へ
  }
})
</script>

<style scoped>
.student-page {
  font-family: sans-serif;
  color: #333;
}
</style>
