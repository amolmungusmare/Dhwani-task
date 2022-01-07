const knex = require("../connections/connection.js");
const { genrateAcceessToken } = require("../Auth/jwt");

exports.logIn = (req, res) => {
  let { userName, Password } = req.body;
  if (userName === undefined && Password === undefined) {
    res.status(404).json({ message: "please fill all details" });
  } else {
    knex("*")
      .from("User")
      .where("userName", userName)
      .then((data) => {
        if (data[0].userName === userName && data[0].Password) {
          const tokenData = { userName: data[0].userName };
          const token = genrateAcceessToken(tokenData);
          res
            .cookie("token", token)
            .json({ message: "user login successfully...", token: token });
        } else {
          res.status(404).send("password or username is not valid");
        }
      });
  }
};

exports.logOut = (req, res) => {
  res.clearCookie("token").json({ massage: "User Logout...." });
};

exports.postState = (req, res) => {
  let stateName = req.body.stateName;
  if (stateName === undefined) {
    res.status(404).json({ massage: "plz enter the state name" });
  } else {
    knex("State")
      .insert({ stateName: stateName })
      .then((data) => {
        res.status(200).json({ massage: "state posted sussfully" });
      });
  }
};

exports.postDistrict = (req, res) => {
  let distName = req.body.districtName;
  if (distName === undefined) {
    res.status(404).json({ massage: "enter district" });
  } else {
    knex("Districts")
      .insert({ districtName: distName })
      .then((data) => {
        res.status(200).json({ massage: "dist posted successfully" });
      });
  }
};

exports.postChild = (req, res) => {
  let {
    childName,
    fatherName,
    motherName,
    dataOfBirth,
    Sex,
    stateName,
    districtName,
  } = req.body;
  if (
    childName === undefined &&
    fatherName === undefined &&
    motherName === undefined &&
    dataOfBirth === undefined &&
    Sex === undefined &&
    stateName === undefined &&
    districtName === undefined
  ) {
    res.status(404).json({ massage: "enter child" });
  } else {
    knex("Child")
      .insert({
        childName: childName,
        fatherName: fatherName,
        motherName: motherName,
        dataOfBirth: dataOfBirth,
        Sex: Sex,
        stateName: stateName,
        districtName: districtName,
      })
      .then((data) => {
        res.status(200).json({ massage: "child posted successfully" });
      });
  }
};
