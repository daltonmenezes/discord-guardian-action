import { readFile, pathExists } from 'fs-extra'

export async function getDomainsFromFile(path: string) {
  try {
    const domainsFileAlreadyExists = await pathExists(path)

    if (!domainsFileAlreadyExists) return

    const file = await readFile(path)
    const domains = JSON.parse(String(file))

    return domains.filter(Boolean)
  } catch ({ message }) {
    return message
  }
}
