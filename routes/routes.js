const express = require("express");
const routes = express.Router();
const { authenticationToken } = require("./../Auth/jwt");
const { getState, getDistrict, getChild } = require("./../insert/getData");
const {
  logIn,
  postState,
  postDistrict,
  postChild,
  logOut,
} = require("./../insert/postData");
routes.post("/logout", authenticationToken, logOut);
routes.get("/getstate", authenticationToken, getState);
routes.get("/getdistrict", authenticationToken, getDistrict);
routes.get("/getchild", authenticationToken, getChild);
routes.post("/login", logIn);
routes.post("/poststate", authenticationToken, postState);
routes.post("/postdistrict", authenticationToken, postDistrict);
routes.post("/postchild", authenticationToken, postChild);

module.exports = routes;
