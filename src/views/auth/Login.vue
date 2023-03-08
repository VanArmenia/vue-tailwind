<template>
  <section class="pb-8 bg-dark-amber text-amber-500 min-h-screen">
    <div class="min-h-screen py-2 flex flex-col justify-center sm:py-12">
      <div class="relative py-3 max-w-xs mx-auto md:max-w-md mx-6 sm:mx-auto md:w-1/2">
        <div
            class="absolute inset-0 bg-gradient-to-r from-cyan-300 to-cyan-600 shadow-lg transform -skew-y-6 skew-y-0 -rotate-6 rounded-3xl">
        </div>
        <div class="relative p-6 bg-white shadow-lg rounded-3xl sm:p-12">
          <div class="max-w-md mx-auto">
            <p class="relative mb-8">
              Don't have an account?
              <router-link class="router-link" :to="{ name: 'Register' }"><span class="font-bold ">Register</span></router-link>
            </p>
            <div v-if="error" class="max-w-xs mx-auto">
              <p class="relative mb-8">
                {{ error }}
              </p>
            </div>
            <div>
              <h1 class="text-2xl font-semibold">Login into Your Account</h1>
            </div>
            <div class="divide-y divide-gray-200">
              <div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <div class="relative">
                  <input v-model="email" autocomplete="off" id="email" name="email" type="text" class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Email address" />
                  <label for="email" class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Email Address</label>
                </div>
                <div class="relative">
                  <input v-model="password" autocomplete="off" id="password" name="password" type="password" class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Password" />
                  <label for="password" class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Password</label>
                </div>
                <div class="relative">
                  <router-link :to="{ name: 'ForgotPassword' }" class="text-sm text-amber-500"
                  >Forgot your password?</router-link
                  >
                </div>

                <div class="relative">
                  <button @click.prevent="login" class="bg-cyan-500 text-white rounded-md px-2 py-1">Sign In</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- component -->

</template>

<script>


import {ref} from "vue";
import {auth, signInWithEmailAndPassword } from "../../firebase/config";
import {useRouter} from "vue-router";

export default ({

  setup() {

    const email = ref("");
    const password = ref("");
    const error = ref(null);
    const errorMsg = ref("");
    const user = ref(null);
    const router = useRouter()

    const login = async () => {
      error.value = false
      errorMsg.value = ""
      try {
        const loggedinUser = await signInWithEmailAndPassword(auth, email.value, password.value);
        console.log(loggedinUser.user.uid)

        router.push({name: 'home'})
      }
      catch(err) {
        error.value = err.message
        console.log( error.value)
      }
    }

    return { email, password, error, errorMsg, login}

  },
});
</script>

<style>

</style>