const AWS = require("aws-sdk");
const docClient = new AWS.DynamoDB.DocumentClient();

const createOrder = (request) => {
  if (!request || !request.pizzaId || !request.address)
    throw new Error(
      "To order pizza please provide pizza type and address where pizza should be delivered"
    );

  return docClient
    .put({
      TableName: "pizza-orders",
      Item: {
        orderId: "some-id",
        pizza: request.pizza,
        address: request.address,
        orderStatus: "pending",
      },
    })
    .promise()
    .then((res) => {
      console.log("Order is saved", res);
      return res;
    })
    .catch((saveError) => {
      console.log(`Order not saved : (`, saveError);
      throw saveError;
    });
};

module.exports = createOrder;
