const alfy = require('alfy');
const mustache = require('mustache');
const github = require('./github');
const variables = require('./variables');

(async () => {
  const file_sha = alfy.input || '';

  const [ owner, repo ] = process.env.REPO_NAME.split('/');

  const { data: { content } } = await github.git.getBlob({
    owner,
    repo,
    file_sha,
  });

  const template = Buffer.from(content, 'base64').toString('utf-8')

  process.stdout.write(mustache.render(template, variables));
})();
