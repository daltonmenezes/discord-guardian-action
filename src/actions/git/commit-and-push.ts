import { execSync } from 'child_process'

interface Commit {
  author: {
    name: string
    email: string
  }
}

export function commitAndPush({ author }: Commit) {
  const commands = [
    `git config user.name "${author.name}"`,
    `git config user.email ${author.email}`,
    'git add .',
    `git commit -m "chore(domains): update list"`,
    'git push origin main',
  ].join(' ; ')

  execSync(commands, {
    stdio: 'inherit',
    cwd: process.cwd(),
  })
}
