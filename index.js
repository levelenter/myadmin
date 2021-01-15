let express = require('express');
let app = express();
 
let mysqlAdmin = require('node-mysql-admin');
app.use(mysqlAdmin(app));

const server = app.listen("8080", () => {
  // 起動
  const addr = server.address();
  if (!addr) {
    throw new Error(`${addr}が取れませんでした`);
  }
  const bind = typeof addr === 'string' ? `pipe ${addr}` : `port ${addr.port}`;
  const log_string = `myadmin はPORT: ${bind}をリッスンしています。`;

  // ログとコンソールに書く
  console.log(log_string);

});
