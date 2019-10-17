var jsWrapBg = document.querySelector('.wrapBg');
var jsheaderTitle = document.querySelector('.header-title');
var jsheaderBird = document.getElementById('header_bird')

var Y =3
var index =0
var imgArr = ["./img/bird0.png", "./img/bird1.png"]

var headWaveTimer = setInterval(headWave, 200)

var jsGrassLand1 = document.getElementById("grassLand1")
var jsGrassLand2 = document.getElementById("grassLand2")

var landTimer = setInterval(landRun, 30)
//小鸟逐帧动画
function headWave(){
  Y *= -1 //Y= Y*-1
  jsheaderTitle.style.top = jsheaderTitle.offsetTop + Y + "px"
  jsheaderBird.src = imgArr[index++]
  if (index === 2) {
    index = 0 
  }
}

  function landRun(){
    if(jsGrassLand1.offsetLeft <=  -343){
      jsGrassLand1.style.left="343px"
    }
    if(jsGrassLand2.offsetLeft <=  -343){
      jsGrassLand2.style.left="343px"
    }
    jsGrassLand1.style.left = jsGrassLand1.offsetLeft - 3 + "px"
    jsGrassLand2.style.left = jsGrassLand2.offsetLeft - 3 + "px"
  }

  var jsStartBtn = document.getElementById('startBtn')
  jsStartBtn.onclick = function() {
    jsheaderTitle.style.display = "none"
    clearInterval(headWaveTimer)
    jsStartBtn.style.display = "none"
    //出现小鸟
    bird.showBird(jsWrapBg)
    bird.flyBird()
    
    jsWrapBg.onclick = function(){
      bird.fallSpeed = -8
    }
    bird.wingWave()
  }