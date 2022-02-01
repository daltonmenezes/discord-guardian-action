import { Get } from '@types'

export async function phishingLinksProvider(get: Get) {
  const { data } = await get(
    'https://raw.githubusercontent.com/nikolaischunk/discord-phishing-links/main/domain-list.json'
  )

  return data.domains
}
