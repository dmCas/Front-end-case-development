var lottery = document.querySelector('.lottery');//可以获取类名/id
var ali = lottery.querySelectorAll('li');
var prize = document.querySelector('.prize');
var arr = [1, 2, 3, 4, 5, 6, 7, 8];

var i = 0 //记录转到哪个位置
var count = 0 //转圈的初始值
var totalCount = 9
var speed = 500 // 速度
var minSpeed = 500
var timer
var isClick = true
var index = 2//控制转到哪一个区域
ali[ali.length-1].onclick = function(){
    if(isClick){
        count = 0
        run()
        isClick = false
    }
}
function run(){
    speed -= 50;
    if(speed <= 10){
        speed = 10
    }
    for(var j=0; j<ali.length; j++){
        ali[j].classList.remove('active')//原生JS去类名
    }
    i++

    if(i >= ali.length-1){
        i = 0
        count++ //圈数加一
    }
    prize.innerHTML = arr[i]

    ali[i].classList.add('active')//原生JS添加类名

    if(count >= totalCount &&(i+1)==index){
        speed = minSpeed
        clearTimeout(timer)
        isClick = true;
    }else{
        timer = setTimeout(run,speed)
        if(count >= totalCount -1 || speed <= 50){
            speed += 100
        }
    }
}
console.log(ali);