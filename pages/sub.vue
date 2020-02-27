<template>
  <section>
    <MainHeader></MainHeader>
    <p>{{ content }}</p>
    <a href="/">이전 페이지</a>
  </section>
</template>

<script>

  import MainHeader from "../components/main/MainHeader";

  export default {
    data() {
      return {
        content : this.$store.getters.content
      }
    },
    components : {
      'MainHeader' : MainHeader
    }
  }

</script>

<style scoped>

</style>
