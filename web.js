var http = require('http');
//loads http module
var app=http.createServer(function (req, res) {
//creates server
  res.writeHead(200, {'Content-Type': 'text/plain'});
  //sets the right header and status code
  res.end('Hello World\n');

  console.log("The req is: " + req.body);
  if (req.method === 'POST') {
    console.log('===>>> The method of the request was POST');
  }else{
    console.log('===>>> The method of the request was not POST');
  }
  let body = '';
  req.on('data', chunk => {
    body += chunk.toString(); // convert Buffer to string
   });

   console.log('===>>> The body is: '+body);
  //outputs string with line end symbol
});
var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on PORT!!!!! " + port);
});
// }).listen(1337, "127.0.0.1");
//sets port and IP address of the server
console.log('Server running at http://127.0.0.1:1337/');
