var http = require('http');
function reqRes(req, res){
    console.log('request info below: ');
    console.log(req.method);
    console.log(req.url);
    
    //content-type default is text
    res.setHeader("Content-Type", "text/html");
    res.setHeader("Content-Encoding", "utf8");
    if(req.method === 'GET'){
        console.log('the method is get');
        switch(req.url){
            case "/":
            case "/mysite/index.html":
                var html = "<html><head><meta charset='UTF-8'>" +
                    "<title>Home</title></head><body>欢迎!<br/>" +
                    "<a href='mysite/add.html'>add</a> " +
                    "<a href='mysite/remove.html'>remove</a> " +
                    "<a href='mysite/edit.html'>edit</a> " +
                    "<a href='mysite/find.html'>find</a> " +
                    "<a href='mysite/index.html'>home</a> " +
                    "</body></html>";
                res.end(html);
                break;
            case "/mysite/add.html":
                var addHtml = "<html><head><meta charset='UTF-8'>" +
                    "<title>add</title></head><body>add</body></html>";
                res.end(addHtml);
                break;
            case "/mysite/find.html":
                var findHtml = "<html><head><meta charset='UTF-8'>" +
                    "<title>find</title></head><body>find</body></html>";
                res.end(findHtml);
                break;
            case "/mysite/edit.html":
                var editHtml = "<html><head><meta charset='UTF-8'>" +
                    "<title>edit</title></head><body>edit</body></html>";
                res.end(editHtml);
                break;
            case "/mysite/remove.html":
                var removeHtml = "<html><head><meta charset='UTF-8'>" +
                    "<title>remove</title></head><body>remove</body></html>";
                res.end(removeHtml);
                break;

            default:
                var html = "<html><head><meta charset='UTF-8'>" +
                    "<title>404 not find</title></head><body>404 not find" +
                    "</body></html>";
                res.writeHead(404);
                res.end(html);
                console.log('invalid request url');
        }
    }
    res.end();
}
var server = http.createServer(reqRes);
server.listen(9091);