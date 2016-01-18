module.exports = function(io){

// (Listener/Trigger) When Client Connects to Server
io.sockets.on('connection', function(socket) { 
  console.log("Socket connected with id: ", socket.id);
	
  // Start - (Listener/Trigger) When Client emits 'button_clicked' to server
  socket.on('button_clicked', function(data){ 		
    console.log("button_clicked received successfully");
    
    // (Action) Emit to Client - Response to Client who emitted 'button_clicked'
		socket.emit('server_response', {response: "Working"}); 
    
    // (Action) Broadcast to all except Client (who emitted 'button_clicked')
		socket.broadcast.emit('server_response', {response: "Working"}); 
    
    // (Action) Broadcast to all including Client (who emitted 'button_clicked') 
		io.emit('server_response', {response: "Working"});
	});
  // End 


  // (Listener) When Client Disconnects from the Server
  socket.on('disconnect', function() { 
      console.log("Socket disconnected with id: ", socket.id);
  });
  
});

}