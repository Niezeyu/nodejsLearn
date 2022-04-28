const express = require('express');

const app = express();

const port = 9002;

// express引入bodyparser处理post请求
require('./bodyParser/index')(app);

// 处理路由
require('./router/index.js')(app);

app.listen(port, () => {
    console.log(`项目启动了----http://localhost:9002/`)
});