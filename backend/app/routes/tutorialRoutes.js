module.exports = (app) => {
  const tutorials = require("../controllers/tutorialController");

  const router = require("express").Router();

  // Create a new Tutorial
  router.post("/create", tutorials.create);

  // Retrieve All Tutorials
  router.get("/", tutorials.findAll);

  // Retrieve All Published Tutorials
  router.get("/published", tutorials.findAllPublished);

  // Retrieve a single Tutorial with id
  router.get("/single/:id", tutorials.findOne);

  // Update a Tutorial with id
  router.put("/update/:id", tutorials.update);

  // Delete a Tutorial with id
  router.delete("/delete/:id", tutorials.delete);

  // Delete All Tutorials
  router.delete("/deleteAll", tutorials.deleteAll);

  app.use("/api/tutorials", router);
};
