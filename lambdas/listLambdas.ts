import * as AWS from 'aws-sdk';
import { APIGatewayEvent, Context, APIGatewayProxyResult } from 'aws-lambda';

export const handler = async (event: APIGatewayEvent, context: Context): Promise<APIGatewayProxyResult> => {
    // Create a new Lambda client
    const lambda = new AWS.Lambda();

    // List all Lambda functions in the region
    const response: any = await lambda.listFunctions().promise();

    // Log the names of all the functions
    console.log(`Functions in your region: ${response.Functions.map((f: AWS.Lambda.FunctionConfiguration) => f.FunctionName).join(', ')}`);

    return {
        statusCode: 200,
        body: JSON.stringify(response)
    };
};