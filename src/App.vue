<template>
  <NavBar />

  <RouterView />

  <Footer />
</template>

<script>
import NavBar from "@/components/ui/NavBar.vue";
import Footer from "@/components/ui/Footer.vue";

export default {
  components: { NavBar, Footer },
};
</script>
