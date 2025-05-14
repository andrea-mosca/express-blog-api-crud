// * IMPORTS
const express = require("express");
const router = express.Router();
const { posts } = require("../data/db");
// index
router.get("/", function (req, res) {
  res.json({
    description: "Lista dei posts",
    data: posts,
  });
});
// show
router.get("/:id", function (req, res) {
  const id = parseInt(req.params.id);
  const post = posts.find(currentPost => currentPost.id === id);
  res.json({
    description: "Dettagli dei posts " + id,
    data : post
  });
});
// create
router.post("/", function (req, res) {
  res.send("Creazione nuovo post");
});
// update
router.put("/:id", function (req, res) {
  res.send("Modifica integrale(sostituzione) del post " + req.params.id);
});
// delete
router.delete("/:id", function (req, res) {
  res.send("Eliminazione del post " + req.params.id);
});

module.exports = router;
