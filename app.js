const express = require("express");
const app = express();

app.use(express.json());

app.get("/", function(req, res) {
  res.send("Hello World");
});

let users = [{ id: "1fwefwef", name: "Kenan" }];

app.get("/users", function(req, res) {
  res.json(users);
});

app.delete("/user", function(req, res) {
  if (req.query && req.query.userId) {
    const userId = req.query.userId;
    const tempArr = users.filter(function(user) {
      return user.id !== userId;
    });
    users = tempArr;
    res.json({ success: true });
  } else {
    res.json({ success: false, messsage: "Error: No userId" });
  }
});

app.post("/user", function(req, res) {
  users.push(req.body);
  res.json({ success: true });
});

app.patch("/user", function(req, res) {
  if (req.query && req.query.userId) {
    const userId = req.query.userId;
    const body = req.body;
    users.forEach(function(user, index) {
      if (user.id === userId) {
        users[index].name = body.name;
      }
    });
    res.json({ success: true });
  } else {
    res.json({ success: false, messsage: "Error: No userId" });
  }
});

app.listen(3000, () => console.log("App listening on port 3000!"));
