<template>
  <section class="min-h-[60vh] flex items-center justify-center px-6">
    <div
      class="w-full max-w-md bg-white rounded-3xl shadow-sm border border-accent-gold/40 p-8"
    >
      <h1 class="text-2xl font-bold text-primary-red mb-6 text-center">
        生徒用ログイン
      </h1>

      <form @submit.prevent="handleLogin" class="space-y-4">
        <div>
          <label class="block text-sm font-medium mb-1">メールアドレス</label>
          <input
            v-model="email"
            type="email"
            required
            class="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary-red outline-none"
            placeholder="example@mail.com"
          />
        </div>
        <div>
          <label class="block text-sm font-medium mb-1">パスワード</label>
          <input
            v-model="password"
            type="password"
            required
            class="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary-red outline-none"
            placeholder="••••••••"
          />
        </div>

        <button
          type="submit"
          class="w-full bg-primary-red text-white py-3 rounded-lg font-bold hover:opacity-90 transition shadow-md"
        >
          ログイン
        </button>
      </form>

      <p v-if="errorMsg" class="mt-4 text-red-500 text-sm text-center">
        {{ errorMsg }}
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
const email = ref("")
const password = ref("")
const errorMsg = ref("")
const supabase = useSupabaseClient()
// ルーター（ページ移動の機能）を準備
const router = useRouter()

const handleLogin = async () => {
  errorMsg.value = ""

  const { error } = await supabase.auth.signInWithPassword({
    email: email.value,
    password: password.value
  })

  if (error) {
    errorMsg.value = "ログインに失敗しました: " + error.message
  } else {
    // アラートの代わりに、ダッシュボードへ移動させる
    await router.push("/dashboard")
  }
}
</script>
