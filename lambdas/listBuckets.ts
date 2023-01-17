import { S3 } from 'aws-sdk';
import { APIGatewayEvent, Context, APIGatewayProxyResult } from 'aws-lambda';

export const handler = async (event: APIGatewayEvent, context: Context): Promise<APIGatewayProxyResult> => {
    
    // Create an S3 client
    const s3 = new S3();

    // List all S3 buckets in the region
    const response: any = await s3.listBuckets().promise();

    // Log the names of all the buckets
    console.log(`Buckets in your region: ${response.Buckets.map((b: S3.Bucket) => b.Name).join(', ')}`);

    return {
        statusCode: 200,
        body: 'Success'
    };
};
