<template>
    <div class="myAddress ms-2 border rounded p-2">
        <div class="my_address">
            <ul class="p-0 m-0">
                <li class="p-0 mb-2">
                    <span>
                        <strong>地址:</strong>
                        <small>广东省中山市博爱七路25号中山职业技术学院</small>
                    </span>
                    <span>
                        <strong>手机号:</strong>
                        <small>13642444946</small>
                    </span>
                    <span>
                        <strong>收货人:</strong>
                        <small>蔡老六</small>
                    </span>
                </li>
            </ul>
            <div class="text-center mt-2">
                <button class="btn btn-outline-primary w-25">添加地址</button>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.myAddress {
    width: 70%;
    height: max-content;
    background-color: rgba(182, 224, 240, 0.709);
}

.myAddress ul li{
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-radius: 5px;
    background-color: rgba(255, 255, 255, 0.617);
}
</style>