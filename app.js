// * IMPORTS
const express = require("express");
const app = express();
const port = 3000;
//  ARRAY CONTENENTE I POST
const {posts} = require("./data/db");
// file delle rotte dei post
let postRouter = require("./routers/posts");
// cartella public contenente gli asset statici
app.use(express.static('public'));


// * ROTTA PRINCIPALE
app.get("/", (req, res)=>{
    res.send("Server del mio blog");
});
// * ROTTA /bacheca
app.get('/bacheca', (req, res) => {
  res.json({ posts });
});
// * ROTTE DEI POSTS
app.use("/posts", postRouter);

// * AVVIO SERVER
app.listen(port, ()=>{
    console.log("il server è in ascolto sulla porta:" + port); 
});