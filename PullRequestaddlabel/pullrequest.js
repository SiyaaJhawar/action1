
import fetch from 'node-fetch';

// Use the fetch module here






const apiUrl = "https://api.github.com";
const owner = "SiyaaJhawar";
const repo = "action1";
const pull_number = 2; // Replace with the pull request number
const label = "bug";
const authToken = process.env.GITHUB_TOKEN;
const headers = {
  Authorization: `token ${authToken}`,
  Accept: "application/vnd.github.v3+json",
};

// Add the label to the pull request using fetch
fetch(`${apiUrl}/repos/${owner}/${repo}/issues/${pull_number}/labels`, {
  method: "POST",
  headers,
  body: JSON.stringify([label]),
})
  .then((response) => {
    if (response.ok) {
      console.log("Label added to pull request.");
    } else {
      console.error("Error adding label to pull request:", response.statusText);
    }
  })
  .catch((error) => {
    console.error("Error adding label to pull request:", error);
  });
