const mongoose = require("mongoose");

function connectToDatabase () {
  mongoose.connect("mongodb+srv://adm:051829@banco1.8fa3bqc.mongodb.net/?retryWrites=true&w=majority",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
  );
  const db = mongoose.connection;
  db.on("error", (error) => console.error(error));
  db.once("open", () => console.log("Conectado com a base de dados"))
} 

module.exports = connectToDatabase;