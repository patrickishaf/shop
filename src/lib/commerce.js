import Commerce from '@chec/commerce.js';

// I'm addingn this test api key here just so that you can use test the project.
// Once I get your response, I'll generate a new key
// const checAPIKey = process.env.REACT_APP_CHEC_PUBLIC_KEY;
const checAPIKey = 'pk_test_29403d2d3105a29df38842313c5443279054601a2f087';
const devEnvironment = process.env.NODE_ENV === 'development';

const commerceConfig = {
  axiosConfig: {
    headers: {
      'X-Chec-Agent': 'commerce.js/v2',
      'Chec-Version': '2021-09-29',
    },
  },
};

if (devEnvironment && !checAPIKey) {
  throw Error('Your public API key must be provided as an environment variable named NEXT_PUBLIC_CHEC_PUBLIC_KEY. Obtain your Chec public key by logging into your Chec account and navigate to Setup > Developer, or can be obtained with the Chec CLI via with the command chec whoami');
}

export default new Commerce(
  checAPIKey,
  devEnvironment,
  commerceConfig,
);