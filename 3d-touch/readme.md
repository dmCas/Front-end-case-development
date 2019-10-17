触屏 重力感应 陀螺仪 手机区别于PC 
touchstart touchmove  touchend ? 
- 让我们的阴影 感知力度？ css border-radius 50%  
- 那么多张树懒的照片？ 
- 力度作用到照片? 
- 雪碧图 
  往右走， 往下走都是负值
  background-size: 400%;

- live-server
  启动http服务
  http协议是web 的底层

- node 内建http模块
  http.createServer(() => {
      console.log(req.url)
  }).listen(1314)  1314为建立的端口号
  一直伺服
  www.baidu.com 默认80  ngnix 

- http  fs  path node 内置模块
  index.html
  sloth.png
  一切皆是资源 url 表示
  /                 index.html
  /image/sloth.png  sloth.png
  区别 req.url 
  文件类型不一样 text/html image/png 
  res.wirteHead(200, {'Content-Type':'text/html;charset=uft-8'})  //200表示资源存在于网站 404 则不存在
