import http from "http";
import { fetchApi } from "./api.js";

const PORT = 8000;

const server = http.createServer(async (_req, res) => {
  
  const url = fetchApi();

  
  const response = await fetch(url);
  const data = await response.json();

 
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.end(JSON.stringify(data));
});

server.listen(PORT, () => {
  console.log(` Server running on http://localhost:${PORT}`);
});
