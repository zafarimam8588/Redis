import express from "express";
const app = express();
import client from "./redis";

client.subscribe("Zafar", (count) => {
  // if (err) {
  //   console.error("Error subscribing to channel:", err);
  //   return;
  // }
  console.log(`Subscribed to ${count} channel(s)`);
});

app.listen(3001, () => {
  console.log(`server is running at port 3000`);
});
