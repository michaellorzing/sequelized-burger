const express = require("express");
const db = require("./models");
const exphbs = require("express-handlebars");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true}));

app.engine("handlebars", exphbs({ defaultLayout: "main"}));

app.set ("view engine", "handlebars");

require("./routes/htmlRoutes")(app);
require("./routes/apiRoutes")(app);

db.sequelize.sync({ force: false }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});


