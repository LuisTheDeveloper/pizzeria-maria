"use strict";

const Api = require("claudia-api-builder");
const api = new Api();

const updateDeliveryStatus = require("./handlers/updateDeliveryStatus");
const getPizzas = require("./handlers/getPizzas");
const getOrders = require("./handlers/getOrders");
const createOrder = require("./handlers/createOrder");
const updateOrder = require("./handlers/updateOrder");
const deleteOrder = require("./handlers/deleteOrder");

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

api.get("/orders", () => {
  return getOrders();
});

api.get(
  "/orders/{id}",
  (request) => {
    return getOrders(request.pathParams.id);
  },
  { error: 404 }
);

api.post(
  "/orders",
  (request) => {
    return createOrder(request.body);
  },
  {
    success: 201,
    error: 400,
  }
);

api.put(
  "/orders/{id}",
  (request) => {
    return updateOrder(request.pathParams.id, request.body);
  },
  {
    error: 400,
  }
);

api.delete(
  "/orders/{id}",
  (request) => {
    return deleteOrder(request.pathParams.id);
  },
  {
    success: 200,
    error: 400,
  }
);

api.post("/delivery", (request) => updateDeliveryStatus(request.body), {
  success: 200,
  error: 400,
});

module.exports = api;

//"https://etyz7t1l05.execute-api.us-east-2.amazonaws.com/latest"
//aws iam put-role-policy --role-name pizzeriamaria-executor --policy-name pizzaApiDynamoDB --policy-document file://./roles/dynamodb.json
