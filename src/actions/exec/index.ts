import { execSync } from 'child_process'

export function exec(commands: string) {
  execSync(commands, {
    stdio: 'inherit',
    cwd: process.cwd(),
  })
}
