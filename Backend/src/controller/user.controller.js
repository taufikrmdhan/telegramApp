const userModel = require("../model/user.model");
const { success, failed, succesWithToken } = require('../helper/response');

//deklare bcyrpt
const jwtToken = require('../helper/generateJWT');
const bcyrpt = require("bcrypt");
module.exports = {
    register: async (req, res) => {
        try {
            // console.log(req)
            // const image = req.file.filename;
            const { username,password } = req.body;
            console.log(req.body);
            bcyrpt.hash(password, 10, (err, hash) => {
                if (err) {
                    failed(res, err.message, 'failed', 'fail hash password');
                }

                const data = {
                    username,
                    password: hash,
                }
                console.log(data);
                userModel.register(data).then((result) => {
                    success(res, result, "success", "register success")

                }).catch((err) => {
                    console.log(err)
                    failed(res, err.message, 'failed', "register fail")
                })
            })
        } catch (err) {
            failed(res, err.message, 'failed', 'internal server error');
        }

    },

    login: async (req, res) => {
        const { username, password } = req.body;
        userModel.checkUsername(username).then((result) => {
            // console.log(res);
            const user = result.rows[0];
            if (result.rowCount > 0) {
                bcyrpt.compare(password, result.rows[0].password).then(async (result) => {
                    if (result) {
                        const token = await jwtToken({
                            username: user.username,
                        });
                        console.log(token);
                        // delete password
                        delete user.password;
                        success(res, {
                            token,
                            data: user
                        }, "success", "login success");
                    } else {
                        // ketika password salah
                        failed(res, null, 'failed', 'username atau password salah');
                    }
                })
            } else {
                // ketika username salah
                failed(res, null, 'failed', 'username atau password salah');
            }
        }).catch((err) => {
            failed(res, err.message, 'failed', 'internal server error');
        })
    },
    list: async (req, res) => {
        try {
            const result = await userModel.list();
            success(res, result.rows, 'success', 'list user');
        } catch (err) {
            failed(res, err.message, 'failed', 'internal server error');
        }
    }
}