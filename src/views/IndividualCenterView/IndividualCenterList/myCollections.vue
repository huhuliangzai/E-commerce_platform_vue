<template>
    <div class="myCollection ms-2 border rounded p-2">
        <div class="collection_show">
            <div class="thing_show m-2 rounded border">
                <img src="../../../assets/image/good_show_img/3.jpg" class="img-fluid rounded" alt="">
                <h3 class="p-0 m-0"><span class="me-2">牛肉粒</span><span>300g</span></h3>
                <h4 class="p-0 m-0"><span>￥99</span></h4>
                <div class="text-center mb-2">
                    <button class="btn btn-outline-danger mx-auto">取消收藏</button>
                </div>
            </div>
            <div class="thing_show m-2 rounded border">
                <img src="../../../assets/image/good_show_img/3.jpg" class="img-fluid rounded" alt="">
                <h3 class="p-0 m-0"><span class="me-2">牛肉粒</span><span>300g</span></h3>
                <h4 class="p-0 m-0"><span>￥99</span></h4>
                <div class="text-center mb-2">
                    <button class="btn btn-outline-danger mx-auto">取消收藏</button>
                </div>
            </div>
            <div class="thing_show m-2 rounded border">
                <img src="../../../assets/image/good_show_img/3.jpg" class="img-fluid rounded" alt="">
                <h3 class="p-0 m-0"><span class="me-2">牛肉粒</span><span>300g</span></h3>
                <h4 class="p-0 m-0"><span>￥99</span></h4>
                <div class="text-center mb-2">
                    <button class="btn btn-outline-danger mx-auto">取消收藏</button>
                </div>
            </div>
            <div class="thing_show m-2 rounded border">
                <img src="../../../assets/image/good_show_img/3.jpg" class="img-fluid rounded" alt="">
                <h3 class="p-0 m-0"><span class="me-2">牛肉粒</span><span>300g</span></h3>
                <h4 class="p-0 m-0"><span>￥99</span></h4>
                <div class="text-center mb-2">
                    <button class="btn btn-outline-danger mx-auto">取消收藏</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.myCollection {
    width: 70%;
    height: max-content;
    background-color: rgba(182, 224, 240, 0.709);
}

.collection_show {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

.thing_show {
    width: 30%;
    background-color: rgba(232, 247, 253, 0.639);
}

.thing_show img {
    width: 250px;
    height: 250px;
}
</style>