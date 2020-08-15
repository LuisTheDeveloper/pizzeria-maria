"use strict";

const Api = require("claudia-api-builder");
const api = new Api();

api.get("/pizzas", () => {
  return ["Capricciosa", "Quattro Formagi", "Napoletana", "Margherita"];
});

module.exports = api;

//"https://etyz7t1l05.execute-api.us-east-2.amazonaws.com/latest"
//by
