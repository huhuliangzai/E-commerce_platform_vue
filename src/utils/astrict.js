import router from "../router";

//用户在页面30分钟未操作清除登录并跳转至登录页

//定义上一次操作时间
let lastTime = new Date().getTime();
let currentTime = new Date().getTime();
let timeOut = 1800000;

window.onload = function(){
    //鼠标事件监听
    window.document.addEventListener('mousedown',function(e){
        localStorage.setItem('lastTime', new Date().getTime());
    });
    //键盘事件监听
    window.document.addEventListener('keyup', function(e){
        localStorage.setItem('lastTime', new Date().getTime());
    });
    //每10分钟进行一次检查
    window.setInterval(checkTimeout,600000);
};

function checkTimeout(){
    currentTime = new Date().getTime();
    lastTime = localStorage.getItem('lastTime');
    console.log(lastTime)
    //当用户超过30分钟未操作清空登录返回登录页
    if(currentTime - lastTime > timeOut){
        localStorage.clear();
        sessionStorage.clear();
        if(router.currentRoute.value.path == 'login'){
            return
        }else{
            router.push({
                path: '/login'
            })
        }
    }
}

export default function(){
    window.setInterval(checkTimeout,1000);
}
