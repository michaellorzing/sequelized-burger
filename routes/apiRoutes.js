const db = require("../models");


module.exports = (app) => {
  app.get("/api/burgers", function(req, res) {
    db.Burger.findAll({})
    .then(dbBurgerData => res.json(dbBurgerData))
    .catch(err => {
      console.log(err);
      res.json(err);
    });
  });

  app.post("/api/burgers", function(req, res) {
   db.Burger.create({
     burger_name: req.body.burger_name,
     devoured: req.body.devoured
   })
    .then(dbBurgerData => res.json(dbBurgerData))
    .catch (err => {
      console.log(err);
      res.json(err);
    });
  });

  app.get("/api/burgers/:id", function(req, res) {
    db.Burger.findAll({
      where: {
        id: req.params.id
      }
    })
    console.log(dbBurgerData)
    .then(dbBurgerData => res.json(dbBurgerData))
    .catch(err => {
      console.log(err);
      res.json(err);
    });
  });

  app.put("/api/burgers/:id", function(req, res) {
    db.Burger.update({ devoured: req.body.devoured },
    {
      where: {
        id: req.params.id
      }
    })
      .then(dbBurgerData => res.json(dbBurgerData))
      .catch(err => {
        console.log(err);
        res.json(err);
      });
  });

  app.delete("/api/burgers/:id", function(req, res)  {
    db.Burger.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(dbBurgerData => res.json(dbBurgerData))
      .catch(err => {
        console.log(err);
        res.json(err);
      });
  });


};