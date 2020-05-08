const alfy = require('alfy');
const github = require('./github');

(async () => {
  const file_sha = alfy.input || '';

  const [ owner, repo ] = process.env.REPO_NAME.split('/');

  const { data: { content } } = await github.git.getBlob({
    owner,
    repo,
    file_sha,
  });

  process.stdout.write(Buffer.from(content, 'base64').toString('utf-8'));
})();
