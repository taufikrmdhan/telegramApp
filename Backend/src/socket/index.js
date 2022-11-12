let messages = [];
module.exports = (io, socket) => {
  //sender
  socket.on("ping", (data) => {
    console.log("pong!");
    //listener
    socket.emit("ping response", data);
  });

  //buat sender
    socket.on("send-message", (data) => {
        const {sender, receiver ,message} = data;
        messages = [...messages, data];
        socket.emit("send-message-response", messages);
        // messages.push(data);
        // io.emit("new message", data);
    });
};
