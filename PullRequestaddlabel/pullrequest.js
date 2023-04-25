<<<<<<< HEAD

import fetch from 'node-fetch';




=======
import fetch from 'node-fetch';

>>>>>>> 7b31cd3c67d71090f959d669bf9515afb3c0fca7
const apiUrl = "https://api.github.com";
const owner = "SiyaaJhawar";
const repo = "action1";
const pull_number = 2; // Replace with the pull request number
const label = "release";
<<<<<<< HEAD
const authToken = "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";
=======
const username = process.env.GITHUB_USERNAME;
const password = process.env.GITHUB_API_TOKEN;
console.log(process.env.GITHUB_API_TOKEN);



const encodedCredentials = Buffer.from(`${username}:${password}`).toString('base64');
   
>>>>>>> 7b31cd3c67d71090f959d669bf9515afb3c0fca7
const headers = {
   "Authorization": `Basic ${encodedCredentials}`,
        "Accept": "application/json"
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
