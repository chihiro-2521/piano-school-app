<template>
  <div>
    <div class="p-8">
      <h1 class="text-2xl font-bold mb-4">こんにちは、{{ userName }} さん！</h1>
      <p class="mb-4">ログインに成功しました。</p>

      <div style="margin-bottom: 20px">
        <NuxtLink
          to="/student"
          style="
            display: inline-block;
            background: #800000;
            color: white;
            padding: 10px 20px;
            border-radius: 5px;
            text-decoration: none;
            font-weight: bold;
          "
        >
          👉 先生からの投稿を見る
        </NuxtLink>
      </div>

      <div
        style="margin-top: 40px; border-top: 1px solid #eee; padding-top: 20px"
      >
        <p style="font-size: 0.8rem; color: #999">管理者用メニュー</p>
        <NuxtLink
          to="/teacher"
          style="
            color: #800000;
            font-size: 0.9rem;
            font-weight: bold;
            text-decoration: underline;
          "
        >
          ＋ 新しいお知らせを投稿する
        </NuxtLink>
      </div>

      <button
        @click="handleLogout"
        class="mt-8 bg-gray-500 text-white px-4 py-2 rounded"
      >
        ログアウト
      </button>
    </div>
  </div>
</template>

<script setup>
const supabase = useSupabaseClient()
const user = useSupabaseUser()
const router = useRouter()
const userName = ref("読み込み中...")

const fetchProfile = async () => {
  // ★ ここでログイン情報を直接、強制的に読み込みます
  const {
    data: { user: currentUser }
  } = await supabase.auth.getUser()

  if (currentUser) {
    console.log("あなたの本当のIDはこれです:", currentUser.id)

    // Supabaseから名前を取ってくる
    const { data, error } = await supabase
      .from("user_profiles")
      .select("full_name")
      .eq("id", currentUser.id)

    if (error || !data || data.length === 0) {
      userName.value = currentUser.email
    } else {
      userName.value = data[0].full_name
    }
  }
}

onMounted(() => {
  fetchProfile()
})

const handleLogout = async () => {
  await supabase.auth.signOut()
  router.push("/login")
}
</script>
