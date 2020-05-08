const alfy = require('alfy');
const github = require('./github');

(async () => {
  const input = alfy.input || '';

  const { data: { items } } = await github.search.code({
    q: `${input} repo:${process.env.REPO_NAME} in:path extension:md path:${process.env.REPO_PATH}`
  });

  alfy.output(items.map(({ name, path, sha }) => {
    return {
      title: name,
      subtitle: path,
      arg: sha
    };
  }));
})();
