let myhttp = require("http");

let myserver = myhttp.createServer( 

  function( myrequest, myresponse ) {
    console.log( myrequest.url );

    mytext = "I'm brand new to JavaScript and have no idea what I'm doing! :D";

    myresponse.writeHead( 200, { "Content-Type": "text/plain" } );

    myresponse.end( mytext + "\n" );
  }

 );

myserver.listen(8080, "0.0.0.0");

console.log("server has started");