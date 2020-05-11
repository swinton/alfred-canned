#!/usr/bin/env node

const exec = require('child_process').exec;

// Exit with status code 1 if it looks like a token is being committed
// This will prevent the token from being committed
exec(`git diff --patch --cached --no-color | grep ^+`, (error, stdout, stderr) => {
  const tokenRegexp = /([a-z0-9]){40}/i;
  const containsToken = tokenRegexp.test(stdout);

  if (containsToken) {
    process.stdout.write(`\nIt looks like you might be committing a token...\n`);
    process.stdout.write(`To override this check, commit with 'HUSKY_SKIP_HOOKS=1 git commit'.\n\n`);

    process.exit(1);
  }
});
