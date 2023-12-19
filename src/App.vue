<template>
  <div class="max-w-[1440px] flex flex-col">
    <NavBar />

    <RouterView />

    <Footer />
  </div>
</template>

<script>
import NavBar from "@/components/ui/NavBar.vue";
import Footer from "@/components/ui/Footer.vue";

export default {
  components: { NavBar, Footer },
};
</script>
