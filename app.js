import express from "express";
import dotenv from "dotenv";
import { dbConnect } from "./config/dbConnect.js";
import { startApolloServer } from "./apollo/apolloServer.js";

dotenv.config({ path: "config/.env.local" });

const app = express();

app.use(express.json());

dbConnect();

app.get("/", (req, res) => {
  res.send("Hello World");
});

const port = process.env.PORT || 8000;

async function startServer() {
  await startApolloServer(app);
  app.listen(port, () => {
    console.log(`Server listening on port ${port} at http://localhost:${port}`);
  });
}

startServer();
