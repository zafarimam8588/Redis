import express from "express";
const app = express();
import client from "./redis";

setInterval(() => {
  const message = `Zafar${Math.random() + 1000}`;
  client.publish("Zafar", message);
}, 5000);

app.listen(3000, () => {
  console.log(`server is running at port 3000`);
});
