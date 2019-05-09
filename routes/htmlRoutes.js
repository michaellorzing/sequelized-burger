const path = require("path")
const burgers = require("../models/burgers");

module.exports = (app) => {

    app.get("/", function(req, res) {
      res.sendFile(path.join(__dirname, "/public/burgers.html"))
    });

};