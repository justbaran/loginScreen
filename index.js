const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/login", (req, res) => {
  // Kullanıcıdan gelen verileri alın
  const email = req.body.email;
  const password = req.body.password;

  // Verileri işleyin veya başka bir işlem yapın
  console.log("Gelen E-posta: " + email);
  console.log("Gelen Şifre: " + password);

  // İşlemin sonucunu istemciye gönderin
  res.send("Veriler alındı ve işlendi!");
});

app.listen(port, () => {
  console.log(`Sunucu ${port} portunda çalışıyor`);
});



// const express =  require("express")

// const app = express()

// const users = {
//     firstname: "Mert",
//     surname: "Messi",
//     email: "messi@gmail.com"
// }

// app.get("/api/users", (res, req) => {
//     return req.json(users)
// })

// app.listen(5000, () => console.log("Server running on port 5000"))