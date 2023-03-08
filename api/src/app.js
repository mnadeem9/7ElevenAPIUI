import express from "express";

const app = express();
const PORT = 4000;

app.use("/api/node", nodeRouter);

app.listen(process.env.port || PORT, () => {
  console.log(`Api Server listing at port ${process.env.PORT || PORT}`);
});
