draw('inner1');
var Score = document.getElementById('score');
var Sum=0;
// [0,3]
//Math.random() 生成0-1之间的随机数
function generateRandom(){
let t = [];
for(let i =0; i <6; i++){
   var num = Math.floor(Math.random()*4) + i*4;
   t.push(num);
}
return t;
}
function draw(container){
   let drawArr = generateRandom();
   document.getElementById(container)
   .innerHTML = '';
   
   console.log(drawArr)
   
   for(let i =0; i <24; i++){
      const ele = document.createElement('div');
      //indexOf() 方法可返回某个指定的字符串值在字符串中首次出现的位置。
      if(drawArr.indexOf(i) > -1){
          ele.className = 'black';
          ele.addEventListener('click', function(){
             ele.style.backgroundColor = '#666';
             Sum++;

             score.textContent = Sum;

          })
      }
      else {
         ele.className = 'white';
      }
      document.getElementById(container)
      .appendChild(ele);
   }

}
//填补空白区域
var inner1 = document.getElementById('inner1');
var inner2 = document.getElementById('inner2');
var inner1Top = parseInt(inner1.style.top);//通过inner对象获取其行内样式
var inner2Top = parseInt(inner2.style.top);
function move(){
   if(inner1Top === 595){
      draw('inner1');
      inner1.style.top = '-600px';
      inner1Top = -600;
   }
   if(inner2Top === 595){
      draw('inner2');
      inner2.style.top = '-600px';
      inner2Top = -600;
   }
   inner1Top += 5;
   inner2Top += 5;
   inner1.style.top = inner1Top + 'px';
   inner2.style.top = inner2Top + 'px';
}
//setInterval() 方法可按照指定的周期（以毫秒计）来调用函数或计算表达式。
setInterval(function(){
   move();
} ,50);