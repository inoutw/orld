/**
 * Created by qinai on 7/10/16.
 */
var http = require('http');
var fs = require('fs');//file system
var qs = require('querystring');

var websites = [];

function reqRes(req, res){
    var postData = "";
    if(req.method === "GET"){
        switch(req.url){
            case "/":
            case "/index.html":
                fs.readFile("index.html", function(err, data){
                    if(err){
                        throw err;
                    }
                    res.writeHeader(200, {"Content-Type":"text/html"});
                    res.write(data.toString());
                    res.end();
                });
                break;
            case "/add.html":
                fs.readFile("add.html", function(err, data){
                    if(err){
                        throw err;
                    }
                    res.writeHeader(200, {"Content-Type":"text/html"});
                    res.write(data.toString());
                    res.end();
                });
                break;
            case "/find.html":
                fs.readFile("find.html", function(err, data){
                    if(err){
                        throw err;
                    }
                    res.writeHeader(200, {"Content-Type":"text/html"});
                    res.write(data.toString());
                    res.end();
                });
                break;
            case "/remove.html":
                fs.readFile("remove.html", function(err, data){
                    if(err){
                        throw err;
                    }
                    res.writeHeader(200, {"Content-Type":"text/html"});
                    res.write(data.toString());
                    res.end();
                });
                break;
            case "/edit.html":
                fs.readFile("edit.html", function(err, data){
                    if(err){
                        throw err;
                    }
                    res.writeHeader(200, {"Content-Type":"text/html"});
                    res.write(data.toString());
                    res.end();
                });
                break;

        }
    }else if(req.method === "POST"){
        switch(req.url){
            case "/add.js":
                //接收数据
                req.on("data", function(chunck){
                    postData += chunck;
                });
                //所有数据接收完毕
                req.on("end", function(){
                    //接收的数据解析为一个数据对象website
                    var website = qs.parse(postData);

                    console.log(website.domain);
                    console.log(website.name);
                    console.log(website.email);
                    console.log(website.age);
                    console.log(website.click);
                    websites.push(website);
                    var html = "<html><head><meta charset='utf-8'><title>Node show Json</title></head><body><table style='border: 1px solid red;'";
                    for(var i =0; i<websites.length; i++){
                        var row = "<tr><td>" + websites[i].domain + "</td>"+
                            "<td>" + websites[i].name + "</td>" +
                            "<td>" + websites[i].email + "</td>" +
                            "<td>" + websites[i].age +"</td>" +
                            "<td>" + websites[i].click +"</td></tr>";
                        html += row;
                    }
                    html += "</table></body></html>"
                    res.writeHeader(200, {"Content-Type":"text/html"});
                    res.end(html);
                });
                break;
        }
    }
}

var httpServer = http.createServer(reqRes);
httpServer.listen(7798);