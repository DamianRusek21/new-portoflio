#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "aws-cdk-lib";
import { CONFIG, getStackName } from "../lib/constants";
import { DeploymentStack } from "../lib/stacks/deployment-stack";
import { DnsStack } from "../lib/stacks/dns-stack";
import { EmailStack } from "../lib/stacks/email-stack";
import { MonitoringStack } from "../lib/stacks/monitoring-stack";
import { StorageStack } from "../lib/stacks/storage-stack";

const app = new cdk.App();

const env: cdk.Environment = {
  account: process.env.CDK_DEFAULT_ACCOUNT ?? "",
  region: process.env.CDK_DEFAULT_REGION ?? "us-east-1",
};

const dnsStack = new DnsStack(app, getStackName("dns", "prod"), {
  env: {
    ...env,
    region: "us-east-1",
  },
  domainName: CONFIG.prod.domainName,
  environment: CONFIG.prod.environment,
  tags: CONFIG.tags,
});

const storageStack = new StorageStack(app, getStackName("storage", "prod"), {
  env,
  domainName: CONFIG.prod.domainName,
  environment: CONFIG.prod.environment,
  certificate: dnsStack.certificate,
  hostedZone: dnsStack.hostedZone,
  tags: CONFIG.tags,
});

storageStack.addDependency(dnsStack);

const deploymentStack = new DeploymentStack(app, getStackName("deployment", "prod"), {
  env,
  domainName: CONFIG.prod.domainName,
  environment: CONFIG.prod.environment,
  bucket: storageStack.bucket,
  distribution: storageStack.distribution,
  tags: CONFIG.tags,
});

deploymentStack.addDependency(storageStack);

const emailStack = new EmailStack(app, getStackName("email", "prod"), {
  env,
  domainName: CONFIG.prod.domainName,
  environment: CONFIG.prod.environment,
  hostedZone: dnsStack.hostedZone,
  allowedOrigins: CONFIG.prod.email.allowedOrigins,
  tags: CONFIG.tags,
});

emailStack.addDependency(dnsStack);

const monitoringStack = new MonitoringStack(app, getStackName("monitoring", "prod"), {
  env,
  domainName: CONFIG.prod.domainName,
  environment: CONFIG.prod.environment,
  bucket: storageStack.bucket,
  distribution: storageStack.distribution,
  alertEmailAddresses: CONFIG.prod.alerts.emails,
  emailFunction: emailStack.emailFunction,
  contactApi: emailStack.api,
  tags: CONFIG.tags,
});

monitoringStack.addDependency(storageStack);
monitoringStack.addDependency(emailStack);

app.synth();