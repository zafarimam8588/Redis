import express from "express";

const app = express();

import client from "./redis";
setInterval(async () => {
  const poperArray = [];
  const poppedMessage = await client.brPop("Zafar", 0);
  console.log(poppedMessage);
  poperArray.push(poppedMessage?.element);
  console.log(`brpoped meesage is ${poperArray}`);
}, 5000);
app.listen(3001, () => {
  console.log("App is listning on port 3001");
});
