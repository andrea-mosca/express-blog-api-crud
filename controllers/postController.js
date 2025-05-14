const { posts } = require("../data/db");

function index(req, res) {
    res.json({
    description: "Lista dei posts",
    data: posts,
  });
};

function show(req, res) {
    const id = parseInt(req.params.id);
    const post = posts.find(currentPost => currentPost.id === id);
    res.json({
        description: "Dettagli dei posts " + id,
        data : post
  });
};

function create(req, res) {
    res.send("Creazione nuovo post");
};

function update(req, res) {
    res.send("Modifica integrale(sostituzione) del post " + req.params.id);
};

function destroy(req, res) {
    const id = parseInt(req.params.id);
    const post = posts.find(currentPost => currentPost.id === id);
    const postIndex = posts.indexOf(post);
    if (postIndex === -1) {
        return res.status(404).json({ error: "Post not found" });
    }
    posts.splice(postIndex, 1);
    console.log(posts);
    res.sendStatus(204);
};

module.exports = {index, show, create, update, destroy};