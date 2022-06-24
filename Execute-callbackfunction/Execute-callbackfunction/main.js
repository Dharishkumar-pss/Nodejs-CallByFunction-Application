var fs = require('fs');
var http = require('http');
http.createServer(function (req,res)
{
var text = "executing the callback function in in the asynchronous ";
fs.writeFile('simple.txt',text,function(err)
{
    if(err)
    {
    return console.error(err);
    }
    res.write("File Created Successfully");
    res.end();
    console.log("file created successfully");
});
}).listen(8086);

http.createServer(function(req,res)
{
    fs.readFile("simple.txt",function(err,data)
{
    if(err)
    {
        console.error(err);
    }
    
    res.write(data);
    res.end();
    console.log("executed the callback function");
});
}).listen(8085);
