import express from "express";
const app = express();

import client from "./redis";

setInterval(() => {
  const message = `Zafar ${Math.random() * 1000 + 1}`;
  console.log(message);
  client.lPush("Zafar", message.toString());
}, 3000);

app.listen(3000, () => {
  console.log(`Listning on port 3000`);
});
