# pizzeria-maria

Back-end application to processand store information on pizzas and orders.

Let's help Aunt Maria to catch up with the competition by building a serverless API for her pizzeria.
Aunt Maria already has a website, so you will build a back-end applicationmore precisely, an API—to enable her customers to preview and order pizzas.
The API will be responsible for serving pizza and order information, as well as handling pizza orders. Later, we will add a mobile application, which would
consume the API services.

We will use the following technologies:

- adding routes to the API;
- deploying it to AWS Lambda using Claudia (https://github.com/claudiajs/claudia/blob/master/FAQ.md);
- to persist and deliver all orders;
- connecting the API to the DynamoDB table;
- communicate the API with a third-party service;

Note: aws access key and secret key will not be exposed here.

Because we are using AWS, these are the building blocks for serverless aws applications:

- Lambda is used for computing, it contains the business logic of the application.
- API Gateway is a router that accepts HTTP requests and invokes other services
  depending on the routes.
- DynamoDB is an autoscalable database.
- Simple Storage Service (S3) is a storage service that abstracts the standard hard
  drives and offers you unlimited storage.

Lambda is the main piece of the application.
AWS Lambda is an event-driven, serverless computing platform that allows you to
run functions.

First API endpoints
Here is the list of features for the initial API that will be created in a single Lambda function:

- Listing all pizzas;
- Retrieving the pizza orders;
- Creating a pizza order;
- Updating a pizza order;
- Canceling a pizza order;
  Each feature will have their own route to the corresponding handler.

NPM packages to install:
claudia
claudia-api-builder
claudia-bot-builder
