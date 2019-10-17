    var http = require('http'); // node 底层 核心库
    var fs = require('fs');     //引入文件库
    var path = require('path'); //路径
    //console.log(http);
    //web服务的本质 有n人来访问网站 request 
    //网站的开发者 相应用户的请求 response 问答
    http.createServer(function(req, res){
        console.log(req.url);
        if (req.url == '/images/sloth.png'){
            console.log('图片');
            //将图片资源返回给用户
            res.writeHead(200, {'Content-Type': 'image/png'});
            let imgStream = fs.createReadStream(
                path.join(__dirname, 'sloth.png')
            );
            imgStream.pipe(res);
            return;
        }
        
        // res.writeHead(200, {"Content-Type": "text/html;charset=utf-8"})
        // res.write("你好，祝你成功！");//向用户的http请求中写入你的应答
        let fileStream = fs.createReadStream(path.join(__dirname, 'index.html'))
        fileStream.pipe(res); //发送给res 
    })  //创建web服务
    .listen(1314)