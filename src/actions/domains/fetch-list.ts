import * as domainProviders from 'providers'
import api from 'axios'

export async function fetchDomainList(): Promise<string[]> {
  try {
    let domains: string[] = []

    for (const domainProvider of Object.values(domainProviders)) {
      const domainList = await domainProvider(api.get)

      domains = [...domains, ...domainList]
    }

    return domains.filter(Boolean)
  } catch ({ message }) {
    return message
  }
}
