# pizzeria-maria

Back-end application to process and store information on pizzas and orders.

Let's help Aunt Maria to catch up with the competition by building a serverless API for her pizzeria.

Aunt Maria already has a website, so you will build a back-end applicationmore precisely, an API—to enable her customers to preview and order pizzas.
The API will be responsible for serving pizza and order information, as well as handling pizza orders. Later, we will add a mobile application, which would
consume the API services.

We will use the following technologies:

- adding routes to the API;

- deploying it to AWS Lambda using Claudia (https://github.com/claudiajs/claudia/blob/master/FAQ.md);
- to persist and deliver all orders;
- connecting the API to the DynamoDB table;
- communicate the API with a third-party service using webhooks;
- debug serverless application;
- authenticate and authorize users;
- images manipulation;
- using minimal-request-promise
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
aws-sdk
claudia
claudia-api-builder
claudia-bot-builder

To create the right user policy from the aws CLI:
\$ aws iam put-role-policy --role-name pizzeriamaria-executor --policy-name PizzaMariaApiDynamoDB --policy-document file://./roles/dynamodb.json

To scan the table:
\$aws dynamodb scan --table-name pizza-orders --region us-east-2 --output json

A serverless application must be able to connect to:

- A database (DynamoDB, Amazon RDS)
- Another Lambda function
- Another AWS service (SQS, S3, and many others)
- An external API

A webhook is just an endpoint on your API. Simply put, it is an HTTP callback: an HTTP POST request sent to you when something happens. You can think of it as a simple event notification via HTTP POST. A web application implementing webhooks will POST a message to a URL when certain events happen.
