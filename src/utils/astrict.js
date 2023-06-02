import router from "../router";

//用户在页面30分钟未操作清除登录并跳转至登录页

//定义上一次操作时间
let lastTime = new Date().getTime();
let currentTime = new Date().getTime();
let timeOut = 1800000;

window.onload = function(){
    window.document.addEventListener('mousedown',function(e){
        localStorage.setItem('lastTime', new Date().getTime());
    });
    window.document.addEventListener('keyup', function(e){
        localStorage.setItem('lastTime', new Date().getTime());
    });
    window.setInterval(checkTimeout,600000);
};

function checkTimeout(){
    currentTime = new Date().getTime();
    lastTime = localStorage.getItem('lastTime');
    console.log(lastTime)
    if(currentTime - lastTime > timeOut){
        localStorage.clear();
        sessionStorage.clear();
        if(router.currentRoute.name == 'login'){
            return
        }else{
            router.push({
                path: '/login'
            })
        }
    }
}

export default function(){
    window.setInterval(checkTimeout,5000);
}
