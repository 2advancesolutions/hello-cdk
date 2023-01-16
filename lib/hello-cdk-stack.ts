import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { Code, Function, Runtime } from 'aws-cdk-lib/aws-lambda';
import { join } from 'path';

export class HelloCdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const myLambda = new Function(this, 'MyLambda', {
      runtime: Runtime.NODEJS_16_X,
      memorySize: 512,
      code: Code.fromAsset(join(__dirname, '../lambdas')),
      handler: 'app.handler'
    });
  }
}
