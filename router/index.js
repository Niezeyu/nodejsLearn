// 引入数据库库
const conn = require('../db/index.js');
// 引入md5加密
const md5 = require('../tool/crypto');
// 返回体
const resData = (code, data, msg) => {
    return {
        code: code,
        data: data,
        msg: msg ? '成功' : "失败"
    }
};
// 登录注册路由
const router = (app) => {
    // 登录
    app.post('/login', (req, res) => {
        // 获取用户名密码
        const username = req.body.username;
        const password = req.body.password;
        // 解密
        const newPas = md5.update(password).digest("hex");
        // 数据库查询
        conn.query("select * from sys_user where username = ?", [username], (err, data) => {
            if (err) {
                console.log(`数据库查询失败！`);
            } else {
                if (data[0].password === newPas) {
                    res.send(resData(200, '登陆成功', true));
                } else {
                    res.send(resData(400, '登录失败', false));
                }
            }
        })
    });
    // 注册
    app.post('/register', (req, res) => {
        // 获取用户名秘密
        const name = req.body.username;
        const password = req.body.password;
        // 加密密码
        let newPas = md5.update(password).digest("hex");
        // 数据库查询
        conn.query("INSERT INTO sys_user(username,password) values(?,?)", [name, newPas], (err, data) => {
            if (err) {
                res.send(resData(400, '注册失败', false));
            } else {
                res.send(resData(200, '注册成功', true));
            }
        })
    })
}

module.exports = router;