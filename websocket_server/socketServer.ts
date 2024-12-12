import { Server } from "socket.io";
import { createServer } from "http";
import "dotenv/config";

const httpServer = createServer();
const io = new Server(httpServer, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

const PORT = process.env.PORT || 5500;

httpServer.listen(PORT, () => {
  console.log(`Socket.io server is running on http://localhost:${PORT}`);
});

// Lưu trữ client socket và trạng thái online của user
const connectedClients: Record<string, any> = {};
const onlineUsers: Record<string, string> = {}; // Lưu userId và socketId

io.on("connection", (socket) => {
  console.log(`Client connected: ${socket.id}`);
  connectedClients[socket.id] = socket;

  // Sự kiện khi user online
  socket.on("online", (userId: string) => {
    console.log(`User ${userId} is online`);
    onlineUsers[userId] = socket.id;
    io.emit("updateOnlineUsers", Object.keys(onlineUsers));
  });

  socket.on(
    "sendMessage",
    ({ receivers, messagePayload, conversationPayload }) => {
      receivers.forEach((receiverId: string) => {
        const receiverSocketId = onlineUsers[receiverId];
        if (receiverSocketId) {
          socket.to(receiverSocketId).emit("receiveMessage", messagePayload);
          socket
            .to(receiverSocketId)
            .emit("conversationUpdated", conversationPayload);
        } else {
          console.log(`User ${receiverId} is not online.`);
        }
      });
    }
  );

  // Sự kiện xóa tin nhắn
  socket.on("deleteMessage", ({ messageId, conversationId }) => {
    console.log(
      `Delete message ${messageId} in conversation ${conversationId}`
    );
    // Phát lại sự kiện xóa tin nhắn cho các client liên quan
    io.emit("messageDeleted", { messageId, conversationId });
  });

  // Xử lý khi client ngắt kết nối
  socket.on("disconnect", () => {
    console.log(`Client disconnected: ${socket.id}`);
    delete connectedClients[socket.id];

    // Loại bỏ user khỏi danh sách online
    for (const userId in onlineUsers) {
      if (onlineUsers[userId] === socket.id) {
        delete onlineUsers[userId];
        break;
      }
    }

    // Cập nhật danh sách user online cho các client còn lại
    io.emit("updateOnlineUsers", Object.keys(onlineUsers));
  });
});

export { io, connectedClients };
