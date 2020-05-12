const { Octokit } = require('@octokit/rest');
const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN
});

module.exports = octokit;
