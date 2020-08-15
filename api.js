"use strict";

const Api = require("claudia-api-builder");
const api = new Api();

const getPizzas = require("./handlers/getPizzas");

api.get("/", () => "Welcome to the API Pizza!");

api.get("/pizzas", () => {
  return getPizzas();
});

api.get(
  "/pizzas/{id}",
  (request) => {
    return getPizzas(request.pathParams.id);
  },
  { error: 404 }
);

module.exports = api;

//"https://etyz7t1l05.execute-api.us-east-2.amazonaws.com/latest"
