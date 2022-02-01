import { Get } from '@types'

export async function scamLinksProvider(get: Get) {
  const { data } = await get(
    'https://raw.githubusercontent.com/BuildBot42/discord-scam-links/main/list.txt'
  )

  return data.split(/\n/)
}
