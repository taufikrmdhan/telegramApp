const db = require("../config/db");

module.exports = {
  store: (data) => {
    const { sender, receiver, message } = data;
    return new Promise((resolve, reject) => {
      db.query(
        `INSERT INTO chats (sender, receiver, message, create_at) 
            VALUES (${sender}, ${receiver}, '${message}', NOW())`,
        (err, res) => {
          if (err) {
            reject(err);
          }
          resolve(res);
        }
      );
    });
  },

  list: (sender, receiver) => {
    return new Promise((resolve, reject) => {
      db.query(
        `SELECT chats.id_chat, chats.message, userSender.username AS sender, userReceiver.username AS receiver, chats.create_at
            FROM chats
            LEFT JOIN users AS userSender ON chats.sender=userSender.id_user
            LEFT JOIN users AS userReceiver ON chats.receiver=userReceiver.id_user
            WHERE
            (sender=${sender} AND receiver=${receiver})
            OR (sender=${receiver} AND receiver=${sender})`,
        (err, res) => {
          if (err) {
            reject(err);
          }
          resolve(res);
        }
      );
    });
  },
};
