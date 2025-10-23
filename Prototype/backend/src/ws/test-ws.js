//run node Prototype/backend/src/ws/test-ws.js to test socket connection
const { io } = require("socket.io-client");

const socket = io("http://localhost:3000/ws", {
  transports: ["websocket"],
  reconnectionAttempts: 5,
  timeout: 10000,
});

socket.on("connect", () => {
  console.log("connected:", socket.id);
});

socket.on("tickUpdate", (msg) => {
  console.log("tickUpdate:", msg.symbol, msg.tick?.c ?? msg.tick?.price, msg);
});

socket.on("connect_error", (err) => {
  console.error("connect_error:", err.message);
});

socket.on("disconnect", (reason) => {
  console.log("disconnected:", reason);
});