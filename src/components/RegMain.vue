<template>
  <div
    class="mobile flex items-center min-h-screen p-4 bg-white lg:justify-center"
  >
    <div class="max-w-[52%] mx-20 text-center my-16">
      <img src="@/assets/port.png" alt="truck" />
      <span class="py-3 font-medium text-sm text-[#858585]"
        >CARGO PRO - ваш ключ к простой и быстрой логистике</span
      >
    </div>

    <div
      class="flex flex-col overflow-hidden bg-white rounded-md max md:flex-row md:flex-1 lg:max-w-screen-md"
    >
      <div class="p-5 bg-white md:flex-1 mr-16">
        <h3 class="mb-16 font-bold text-4xl text-[#212121]">Регистрация</h3>
        <form @submit.prevent="goToComplete" class="flex flex-col space-y-5">
          <div class="flex flex-col space-y-1">
            <input
              type="email"
              id="email"
              autofocus
              placeholder="Email"
              class="px-6 py-4 text-xs transition duration-300 border border-gray-300 rounded-xl focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
            />
          </div>
          <div class="flex flex-col space-y-1">
            <div class="flex items-center justify-between"></div>
            <input
              type="password"
              id="password"
              placeholder="Пароль"
              class="px-6 py-4 mb-4 text-xs transition duration-300 border border-gray-300 rounded-xl focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
            />
          </div>
          <div>
            <button
              type="button"
              class="enterbtn w-full px-8 py-4 text-sm font-bold text-white transition-colors duration-300 rounded-xl shadow hover:text-black focus:outline-none focus:ring-blue-200 focus:ring-4"
              @click="next"
            >
              Далее
            </button>
          </div>
          <div class="flex flex-col space-y-5">
            <span class="flex items-center justify-center space-x-2">
              <span class="h-px bg-[#D8D8D8] w-1/2"></span>
              <span class="font-normal text-[#212121]">или</span>
              <span class="h-px bg-[#D8D8D8] w-1/2"></span>
            </span>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const next = () => {
  router.push("/reginfo");
};
</script>

<style scoped>
.pass-recover-link {
  color: (52, 71, 171, 0.9);
}
.font-mont {
  font-family: "Montserrat", sans-serif;
}

.font-inter {
  font-family: "Inter", sans-serif;
}

@media screen and (max-width: 767px) {
  .mobile {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    min-height: 100vh;
    padding: 4px;
    background-color: white;
    justify-content: center;
  }
}
</style>
