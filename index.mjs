import dynamoose from 'dynamoose';

const Customers = dynamoose.model('customers', {
  name: String,
  age: Number
});

export const handler = async (event) => {
  let
  console.log('THIS IS OUR REQUEST', event);
  // TODO implement
  const response = {
    statusCode: 200,
    body: JSON.stringify('Hello from handleGet!'),
  };
  return response;
};
