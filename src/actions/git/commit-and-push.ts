import { exec } from 'actions'

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
    'git pull',
    'git add .',
    `git commit -m "chore(domains): update list"`,
    'git push origin main',
  ].join(' ; ')

  exec(commands)
}
