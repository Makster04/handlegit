export const handler = async (event) => {
  console.log('THIS IS OUR REQUEST', event);
  // TODO implement
  const response = {
    statusCode: 200,
    body: JSON.stringify('Hello from handleGet!'),
  };
  return response;
};
