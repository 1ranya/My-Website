var faker = require("faker");

var appRouter = app => {
  app.get("/", (req, res) => {
    res.status(200).send("******Welcome to our API******");
  });

  app.get("/user", (req, res) => {
    var data = {
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email()
    };
    res.send(data);
  });

  app.get("/user/:num", (req, res) => {
    var users = [];
    var num = req.params.num;
    if (isFinite(num) && num > 0) {
      for (var i = 0; i < num; i++) {
        var data = {
          firstName: faker.name.firstName(),
          lastName: faker.name.lastName(),
          email: faker.internet.email()
        };
        users.push(data);
      }
      res.status(200).send(users);
    } else {
      res.status(400).send("users's number is invalide ");
    }
  });
};

module.exports = appRouter;
