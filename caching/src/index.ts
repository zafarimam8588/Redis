import express, { Request, Response } from "express";
const app = express();
import client from "./redis";

app.use(express.json());

app.post("/set-value", async (req, res) => {
  const { key, value } = req.body;
  await client.set(key, value);
  res.status(200).json({
    message: `value has been set for ${key} as ${value}`,
  });
});

app.get("/get-value", async (req: Request, res: Response) => {
  const key = req.query.key as string;

  if (typeof key !== "string") {
    res.status(400).json({ error: "Invalid key. Key must be a string." });
  }

  try {
    const value = await client.get(key);
    res.status(200).json({ key, value });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to retrieve value from Redis", details: error });
  }
});

app.get("/delete-value", async (req: Request, res: Response) => {
  const key = req.query.key as string;
  if (typeof key !== "string") {
    res.status(400).json({ error: "Invalid key. Key must be a string." });
  }

  try {
    const deletedValue = await client.del(key);
    res.json({ deletedValue });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to retrieve value from Redis", details: error });
  }
});

app.listen(3000, () => {
  console.log("App is running on port 3000");
});
