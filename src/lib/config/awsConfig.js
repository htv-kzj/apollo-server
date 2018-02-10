import AWS from 'aws-sdk';

const init = () => {
  // AWS.config.loadFromPath('./creds.json');
  AWS.config.region = 'us-east-1';
  if ('SERVERLESS_REGION' in process.env) {
    AWS.config.region = process.env.SERVERLESS_REGION;
  } else if ('AWS_REGION' in process.env) {
    AWS.config.region = process.env.AWS_REGION;
  }
};

module.exports = {
  init,
};
