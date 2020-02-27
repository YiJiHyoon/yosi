<template>
  <div class="main_menu">
    <p>movv 아이콘</p>
    <ol>
     <li v-for="item in list" :key="item">{{ item }}}</li>
    </ol>
  </div>
</template>
<script>

  export default {
    data() {
      return {
        list : [
          'Main',
          'About movv',
          'How to movv',
          'News',
          'Contact Us'
        ]
      }
    }
  }

</script>
<style scoped>

</style>
