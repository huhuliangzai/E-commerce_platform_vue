<template>
    <div class="row p-0 m-0">
        <div class="card p-0 m-0">
            <div class="card-header p-0 m-0 py-2 d-flex justify-content-end">
                <ul class="d-flex p-0 m-0 justify-content-around" style="width: 65%;">
                    <li>订单详情</li>
                    <li>收货人</li>
                    <li>金额</li>
                    <li>订单状态</li>
                </ul>
            </div>
            <div class="d-flex card-body p-0 m-0 mb-2">
                <div class="left d-flex justify-content-center align-items-center">
                    <button class="btn btn-sm p-0 m-0 btn-outline-danger">删除订单</button>
                    <img class="img-fluid" src="@/assets/image/good_show_img/6.jpg" alt="">
                    <h4 class="ms-2">
                        <span>冷冻雪花肥牛</span><br>
                        <span>300g</span>  
                    </h4>
                    
                </div>
                <div class="right ms-2 d-flex justify-content-around align-items-center text-center rounded">
                    <div class="order_details">
                        <p class="m-0 p-0">
                            <small>
                                <strong>配送至:</strong>
                                <span>广东省中山市博爱七路25号</span>
                            </small>
                        </p>
                    </div>
                    <div class="order_Receiver">
                        <span>蔡老六</span>
                    </div>
                    <div class="order_amount">
                        <span>￥99</span>
                    </div>
                    <div class="order_status">
                        <span>已收货</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

.left{
    width: 35%;
}

.left img{
    width: 100px;
    height: 100px;
}

.right{
    width: 65%;
    background-color: rgb(194, 249, 230);
}

.right div{
    width: 25%;
}
</style>