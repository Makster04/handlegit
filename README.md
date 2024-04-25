# Handlegit
API Gateway: [Customers](https://us-west-1.console.aws.amazon.com/apigateway/main/apis/i9ry743iq0/resources?api=i9ry743iq0&region=us-west-1)

## Route: 
/customers/{id}

## Input: 
ID of the record to be retrieved (##).

## Output: 
Object representing the retrieved record.

## Function Mapping:
Lambda Function: 
[handlegit](https://us-west-1.console.aws.amazon.com/lambda/home?region=us-west-1#/functions/handlegit)

## Data Flow:
1. Client sends a GET request to {root_url}/people/{id}.
2. Amazon API Gateway triggers the getPerson Lambda function.
3. Lambda function retrieves the record with the specified ID from the database.
4. Lambda function returns the record as the response.
5. Amazon API Gateway sends the response back to the client.
