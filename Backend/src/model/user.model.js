const db = require("../config/db");

const userModel = {
  register: ({ username, password }) => {
    return new Promise((resolve, reject) => {
      db.query(
        `INSERT INTO users(username, password)
          VALUES
          ('${username}', '${password}')`,
        (err, res) => {
          if (err) {
            reject(err);
          }
          resolve(res);
        }
      );
    });
  },

  // model login
  checkUsername: (username) => {
    return new Promise((resolve, reject) => {
      db.query(
        `SELECT * FROM users WHERE username = '${username}'`,
        (err, res) => {
          if (err) {
            reject(err);
          }
          resolve(res);
        }
      );
    });
  },
  list: () => {
    return new Promise((resolve, reject) => {
      db.query(`SELECT * FROM users`, (err, res) => {
        if (err) {
          reject(err);
        }
        resolve(res);
      });
    });
  },
};
module.exports = userModel;
