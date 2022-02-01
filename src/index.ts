import * as core from '@actions/core'

import { haveDifferentItemsFromTheFirstSet } from 'shared/utils'
import { MESSAGES } from 'shared/constants'
import { join } from 'path'

import {
  fetchDomainList,
  commitAndPush,
  getDomainsFromFile,
  writeDomainsFile,
  removeAllowedDomainsFromList,
} from 'actions'

const ROOT_DIR = process.env.GITHUB_WORKSPACE

async function main() {
  try {
    const name = core.getInput('name')
    const email = core.getInput('email')
    const directory = core.getInput('directory')
    const fileName = core.getInput('fileName')
    const myDomainListPath = core.getInput('myDomainList')

    const domainsFilePath = join(ROOT_DIR, directory, `${fileName}.json`)

    const existentDomains = (await getDomainsFromFile(domainsFilePath)) || []
    const myDomainList = (await getDomainsFromFile(myDomainListPath)) || []
    const fetchedDomains = (await fetchDomainList()) || []

    const hasDomainsDiff = haveDifferentItemsFromTheFirstSet(
      existentDomains,
      fetchedDomains,
      myDomainList
    )

    const shouldNotProceed = !hasDomainsDiff && existentDomains.length

    if (shouldNotProceed) {
      console.log(MESSAGES.NOTHING_TO_DO)
      return
    }

    console.log(MESSAGES.CREATING_OR_UPDATING_DOMAINS_FILE)

    await writeDomainsFile(
      domainsFilePath,
      removeAllowedDomainsFromList([
        ...existentDomains,
        ...fetchedDomains,
        ...myDomainList,
      ])
    )

    commitAndPush({ author: { name, email } })
  } catch ({ message }) {
    core.setFailed(message)
  }
}

main()
