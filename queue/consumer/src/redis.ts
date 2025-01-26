import { createClient } from "redis";

const client = createClient();

client.on("error", (err) => {
  console.log(`Redis client error ${err}`);
});

(async () => {
  try {
    await client.connect();
    console.log("Redis client connected successfully");
  } catch (err) {
    console.error("Failed to connect Redis client:", err);
  }
})();

export default client;
