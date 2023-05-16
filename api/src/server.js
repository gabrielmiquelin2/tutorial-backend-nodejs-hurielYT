//API em node, baseia-se em ROTAS
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const routes = require("./routes");
const connectToDatabase = require("./database");
connectToDatabase()

const app = express();
const port = 3333
app.use(routes);

app.listen(port,() =>{
  console.log(`👌 Backend started at http://localhost:${port}`);
})














// //API em node, baseia-se em ROTAS
// const express = require("express");
// const routes = require("./routes");
// const mongoose = require("mongoose");

// mongoose.connect("mongodb+srv://adm:051829@banco1.8fa3bqc.mongodb.net/?retryWrites=true&w=majority",{
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })

// const db = mongoose.connection;
// db.on("error", (error) => console.error(error));
// db.once("open", () => console.log("Conectado com a base de dados"))


// const app = express();
// const port = 3333
// app.use(routes);

// app.listen(port,() =>{
//   console.log(`👌 Backend started at http://localhost:${port}`);
// })