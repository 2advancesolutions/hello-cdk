import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { Code, Function, Runtime } from 'aws-cdk-lib/aws-lambda';
import { join } from 'path';
import  * as iam from 'aws-cdk-lib/aws-iam';



export class HelloCdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    // lambdas
    const handler = new Function(this, 'Hello-Lambda', {
      runtime: Runtime.NODEJS_16_X,
      memorySize: 512,
      handler: 'listBuckets.handler',
      code: Code.fromAsset(join(__dirname, '../lambdas'))
    });
    // policies
    const listBucketPolicy = new iam.PolicyStatement({
      effect: iam.Effect.ALLOW,
      actions: ['s3:*'],
      resources: ['*']
    });
    // attach policies
    handler.role?.attachInlinePolicy(new iam.Policy(this, 'list-resources', {
      statements: [listBucketPolicy]
    }))
  }
}
