<template>
  <div id="app">
    <MainMenu class="main_menu"></MainMenu>
    <div class="main">
      <div id="top_menu">
        <span>사진1</span>
        <span>사진2</span>
        <span>사진3</span>
      </div>
      <div class="main_index">
        <h1>movv</h1>
        <h3>Movv like a VIP</h3>
        <h5>프리미엄 이동 서비스, 무브(movv)</h5>
        <p>무브는 당신의 여행을 더 편안하고, 더 안전한 여행으로 만들어 갑니다.</p>
        <a @click="google">구글</a>
        <a @click="apple">애플</a>
      </div>
      <div class="main_index">
        <h1>자동차 구른다.</h1>
      </div>
      <div class="main_index">
        <h3>차 정보</h3>
      </div>
    </div>
  </div>
</template>


<script>

  import Menu from "../../components/menu/Menu";

  export default {
    components: {
      'MainMenu': Menu
    },
    data() {
      return {}
    }
  }

</script>

<style scoped>

  #app {
    height: 100%;
    width: 100%;
  }

  #top_menuP {

  }

  .main {
    width: 70%;

  }

  .main .main_index {
    float: left;
    margin: 20px;
  }

  .main_menu {
    width: 30%;
    height: 100%;
  }
</style>
