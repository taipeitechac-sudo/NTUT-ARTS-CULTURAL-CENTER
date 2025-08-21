const express = require('express');
const app = express();
const portNumber = 8000;

// 靜態檔案給瀏覽器
app.use(express.static(__dirname));

// 開啟 server
app.listen(portNumber, () => {
  console.log(`Server running at http://localhost:${portNumber}`);
});