var express = require('express'),
    app = express(),
    http = require('http'),
    io = require('socket.io').listen(9001);

app.configure(function() {
	app.set('port', process.env.PORT || 3333);
	app.use(express.cookieParser());
	app.use(express.session({ secret: "zzshi1gdsg" }));
	app.use(express.logger('dev'));
	app.use(express.bodyParser());
	app.use(express.static(__dirname + '/public'));
});

http.createServer(app).listen(app.get('port'), function () {
    console.log("Express server listening on port " + app.get('port'));
});


io.on('connection', function(socket){

  socket.on('picdata', function(data){
  io.emit('rocket', data);
    
  });

});



