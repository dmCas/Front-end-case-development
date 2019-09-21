var parent = document.getElementById('content-items');
//console.log(parent)

var send = document.getElementById('send')
send.addEventListener('click',function(){
    var html = $('<li class="content-item">'+
    '<div class="pic">'+
        '<img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569046000365&di=38e961e9a65eacd88c6207c271f74aba&imgtype=0&src=http%3A%2F%2Fpic.qqtn.com%2Fup%2F2019-3%2F15537364511266248.jpg" alt="">'+
    '</div>'+
    '<div class="message">'+
        '<p class="name">蔡徐坤</p>'+
        '<p class="detail">出来打球！</p>'+
    '</div>'+
    '</li>')
    html.appendTo(parent)
    // var li = document.createElement('li') //动态创建li标签
    // li.setAttribute('class','content-item')//使用该方法修改Li便签的属性 添加名为content-item的类名
    // //console.log(li)
    
    // var divPic = document.createElement('div')
    // divPic.setAttribute('class','pic')
    // li.appendChild(divPic) //为li标签添加子标签
    
    // var img = document.createElement('img')
    // img.setAttribute('src','https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569046000365&di=38e961e9a65eacd88c6207c271f74aba&imgtype=0&src=http%3A%2F%2Fpic.qqtn.com%2Fup%2F2019-3%2F15537364511266248.jpg')
    // divPic.appendChild(img)
    
    // var message = document.createElement('div')
    // message.setAttribute('class','message')
    // li.appendChild(message)
    
    // var p1 = document.createElement('p') //创建元素节点
    // p1.setAttribute('class','name')
    // message.appendChild(p1)
    // var p1Text = document.createTextNode('蔡徐坤')//创建文本节点
    // p1.appendChild(p1Text)
    
    // var p2 = document.createElement('p')
    // p2.setAttribute('class','detail')
    // var p2Text=document.createTextNode('出来打球！')
    // message.appendChild(p2)
    // p2.appendChild(p2Text)
    // //console.log(li)
    
    //parent.appendChild(li)
})



