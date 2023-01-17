import { APIGatewayEvent, Context, APIGatewayProxyResult } from 'aws-lambda';

interface Body {
    statusCode: number;
    body: string;
}

export const handler = async (event: APIGatewayEvent, context: Context): Promise<APIGatewayProxyResult> => {
    const response: Body = {
        statusCode: 200,
        body: 'Hello CDK!'
    }
    return {
        statusCode: response.statusCode,
        body: JSON.stringify(response)
    };
};



