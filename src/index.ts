import "dotenv/config";
import app from './app';
require("./db");

app.listen(app.get("port"), () => {
  console.log(`Listen on port ${app.get("port")}`)
});
