<template>
  <nav class="flex items-center justify-between flex-wrap bg-white-500 p-6">
    <div class="flex items-center flex-shrink-0 text-white mr-6">
      <router-link to="/">
        <img
          class="fill-current h-8 w-12 mr-20 ml-20"
          width="50"
          height="30"
          src="@/assets/logo.png"
        />
      </router-link>
    </div>

    <div class="w-full block lg:flex lg:items-center lg:w-auto">
      <div class="text-sm">
        <router-link
          to="/"
          class="block mt-4 lg:inline-block lg:mt-0 text-gray-500 hover:text-black active:text-black mr-4"
        >
          Главная
        </router-link>
        <a
          href="#responsive-header"
          class="block mt-4 lg:inline-block lg:mt-0 text-gray-500 hover:text-black active:text-black mr-4"
        >
          О компании
        </a>
        <a
          href="#responsive-header"
          class="block mt-4 lg:inline-block lg:mt-0 text-gray-500 hover:text-black active:text-black mr-4"
        >
          Маркет
        </a>
        <a
          href="#responsive-header"
          class="block mt-4 lg:inline-block lg:mt-0 text-gray-500 hover:text-black active:text-black mr-4"
        >
          Карго
        </a>

        <button
          id="dropdownDefaultButton"
          class="lg:mt-0 text-gray-500 hover:text-black active:text-black mr-4 text-center inline-flex items-center"
          type="button"
          @click="toggleDropdown"
        >
          Информация
          <svg
            class="w-2.5 h-2.5 ms-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </button>

        <!-- Dropdown menu -->
        <div
          id="dropdown"
          class="z-10 bg-white divide-y divide-black-100 rounded-lg shadow w-44 absolute left-[45%] mt-2"
          :class="{ hidden: !isDropdownVisible }"
        >
          <ul
            class="py-2 text-sm text-black"
            aria-labelledby="dropdownDefaultButton"
          >
            <li>
              <a
                href="#"
                class="block px-4 py-2 hover:bg-gray-100 active:text-black"
                >О продукте</a
              >
            </li>
            <li>
              <a
                href="#"
                class="block px-4 py-2 hover:bg-gray-100 active:text-black"
                >О компании</a
              >
            </li>
            <li>
              <a
                href="#"
                class="block px-4 py-2 hover:bg-gray-100 active:text-black"
                >Инвесторам</a
              >
            </li>
            <li>
              <a
                href="#"
                class="block px-4 py-2 hover:bg-gray-100 active:text-black"
                >Общее</a
              >
            </li>
          </ul>
        </div>

        <a
          href="#responsive-header"
          class="block mt-4 lg:inline-block lg:mt-0 text-gray-500 hover:text-black active:text-black mr-4"
        >
          Услуги
        </a>
        <a
          href="#responsive-header"
          class="block mt-4 lg:inline-block lg:mt-0 text-gray-500 hover:text-black active:text-black mr-4"
        >
          Контакты
        </a>
        <a
          href="#responsive-header"
          class="block mt-4 lg:inline-block lg:mt-0 text-gray-500 hover:text-black active:text-black"
        >
          Блог
        </a>
      </div>
    </div>
    <div>
      <button
        href="#"
        class="enterbtn inline-block text-sm px-6 py-2.5 leading-none border rounded-lg text-white border-white hover:border-transparent hover:text-black active:text-black-500 mt-4 mr-20 ml-20 lg:mt-0"
      >
        Войти
      </button>
    </div>
  </nav>
</template>

<script setup>
import { ref } from "vue";

const isDropdownVisible = ref(false);

const toggleDropdown = () => {
  isDropdownVisible.value = !isDropdownVisible.value;
};
</script>

<style>
.enterbtn {
  background-color: rgba(52, 71, 171, 0.9);
}

.hidden {
  display: none !important;
}
</style>
