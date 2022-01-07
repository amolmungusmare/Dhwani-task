const knex = require("./../connections/connection");

exports.getState = (req, res) => {
  knex
    .select("*")
    .from("State")
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(404).json({ message: "state not found" });
    });
};

exports.getDistrict = (req, res) => {
  knex
    .select("*")
    .from("Districts")
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(404).json({ massage: "District not found" });
    });
};

exports.getChild = (req, res) => {
  knex
    .select("*")
    .from("Child")
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(404).json({ massage: "child not found" });
    });
};
