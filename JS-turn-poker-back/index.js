
const wrap = document.getElementById('wrap');

let images = [
    './image/h1.jpg',
    './image/h2.jpg',
    './image/h3.jpg',
    './image/h4.jpg',
    './image/h5.jpg',
    './image/h6.jpg',
    './image/h1.jpg',
    './image/h2.jpg',
    './image/h3.jpg',
    './image/h4.jpg',
    './image/h5.jpg',
    './image/h6.jpg',
  ]
  let count = 0;
  images.sort((a, b) => 0.5 - Math.random());

init();
const allImg = document.querySelectorAll('#wrap img');


function init() {
    for (let i =0; i < 12; i++) {
        // <img src="" class="" id="" />
        let img = document.createElement('img');
        img.src="./image/bg.jpg";
        img.onclick = function () {
            changeImage(img, i);
            
        }

        //Object.appendChild() 添加子节点
        wrap.appendChild(img);
        
    }
}


let firstCard = null;
let firstId = null;
function changeImage(imgNode, i){

    if(count === 0){
        firstCard = images[i];
        firstId = i;
        imgNode.src = images[i];
        //添加一个类名
        imgNode.classList.add('rotate-animation');
    }
    if(count === 1 && i ===firstId) return;
    if(count === 1){
        //翻第二张
        imgNode.src = images[i];
        //添加一个类名
        imgNode.classList.add('rotate-animation');

    setTimeout( () => {
            if(firstCard === images[i]){
                wrap.removeChild(allImg[firstId]);
                wrap.removeChild(allImg[i]);
            }
            else{
                allImg[firstId].className = '';
                allImg[firstId].src = './image/bg.jpg';
                allImg[i].className = '';
                allImg[i].src = './image/bg.jpg';
            }
            count = 0;
            firstCard = null;
            firstId = null;
        
    }, 1100);
}
    count ++;
  
}

// -----------排序方法----------------
// var arr = [1, 2, 3, 4, 5, 6]
//Array.sort()排序方法
// arr.sort((a, b) => a-b) 升序
// arr.sort((a, b) => b-a) 降序
// arr.sort((a, b) => 0.5 - Math.random()) 乱序排序 伪随机 不是真正的随机


// ------------一种错误类型------------
// var obj = {
//     a : 1
// }
// //undefined.c TypeError
// console.log(obj.b.c)