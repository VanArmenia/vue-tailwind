<template>
  <section class="pb-8 bg-dark-amber text-amber-500 min-h-screen">
    <div class="min-h-screen py-2 flex flex-col justify-center sm:py-12">
      <div class="relative py-3 max-w-xs mx-auto md:max-w-md mx-6 sm:mx-auto md:w-1/2">
        <div
            class="absolute inset-0 bg-gradient-to-r from-cyan-300 to-cyan-600 shadow-lg transform -skew-y-6 skew-y-0 -rotate-6 rounded-3xl">
        </div>
        <div class="relative p-6 bg-white shadow-lg rounded-3xl sm:p-12">
          <div class="max-w-xs mx-auto">
            <p class="relative mb-8">
              Already have an account?
              <router-link class="router-link" :to="{ name: 'Login' }"><span class="font-bold ">Login</span></router-link>
            </p>
            <div>
              <h1 class="text-2xl font-semibold">Create Your Account</h1>
            </div>
            <div class="divide-y divide-gray-200">
              <div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <div class="relative">
                  <input type="text" placeholder="First Name" v-model="firstName" id="firstname" class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"/>
                  <label for="firstname" class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">First Name</label>
                </div>
                <div class="relative">
                  <input type="text" placeholder="Last Name" v-model="lastName" id="lastname" class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"/>
                  <label for="lastname" class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Last Name</label>
                </div>
                <div class="relative">
                  <input type="text" placeholder="Username" v-model="username" id="username" class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"/>
                  <label for="username" class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Username</label>
                </div>
                <div class="relative">
                  <input v-model="email" autocomplete="off" id="email" name="email" type="text" class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Email address" />
                  <label for="email" class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Email Address</label>
                </div>
                <div class="relative">
                  <input v-model="password" autocomplete="off" id="password" name="password" type="password" class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Password" />
                  <label for="password" class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Password</label>
                </div>
                <div class="relative">
                  <button @click.prevent="register" class="bg-cyan-500 text-white rounded-md px-2 py-1">Submit</button>
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

import { db, auth, createUserWithEmailAndPassword, doc} from '../../firebase/config'
import {ref} from "vue";

export default ({
  setup() {

    const user = ref(null);
    const firstName = ref("");
    const lastName = ref("");
    const username = ref("");
    const email = ref("");
    const password = ref("");
    const error = ref(null);
    const errorMsg = ref("");

    const register = async () => {
      error.value = false
      errorMsg.value = ""
      createUserWithEmailAndPassword(auth, email.value, password.value)
          .then((userCredential) => {
            // Signed in
            user.value = userCredential.user;
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
          });

      const dataBase = db.collection("users").doc(user.value.user.uid);
      await dataBase.set({
        firstName: firstName.value,
        lastName: lastName.value,
        username: username.value,
        email: email.value,
      });
    }

    return { firstName, lastName, username, email, password, error, errorMsg, register}

  },
});
</script>

<style>

</style>