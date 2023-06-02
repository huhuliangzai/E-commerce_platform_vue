<template>
    <div class="container">
        <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between mb-4 border-bottom ">
          <a href="/" class="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
            <img src="/logo.png" alt="" class="logo">
          </a>
    
          <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li><router-link to="/home"><a href="#" class="nav-link px-2 link-dark"><i class="bi bi-bag-heart-fill"></i>Hello商城</a></router-link></li>
            <li><router-link to="/ShopCar"><a href="#" class="nav-link px-2 link-dark"><i class="bi bi-cart4"></i>购物车</a></router-link></li>
            <li><router-link to="/orders"><a href="#" class="nav-link px-2 link-dark"><i class="bi bi-card-list"></i>我的订单</a></router-link></li>
            <li><router-link to="/IndividualCenter"><a href="#" class="nav-link px-2 link-dark"><i class="bi bi-person-vcard"></i>个人中心</a></router-link></li>
          </ul>
    
          <div class="col-md-3 text-end">
            <router-link to="/login"><button type="button" class="btn btn-outline-primary me-2">登录</button></router-link>
            <button type="button" class="btn btn-outline-danger me-2">注销</button>
          </div>
        </header>
      </div>
</template>

<script setup>


</script>

<style scoped>
  .logo{
    width: 15vw;
  }

  .nav li{
    padding: 0 5px 0 5px;
  }

  .nav li a:hover{
    background-color: #80c342;
    color: rgb(248, 246, 246)!important;
    border-radius: 5px;
  }

  .router-link-active a{
    background-color: #80c342;
    color: rgb(248, 246, 246)!important;
    border-radius: 5px;
  }

</style>