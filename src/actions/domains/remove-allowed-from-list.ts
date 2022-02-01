import { DOMAINS, REGEX } from 'shared/constants'

export function removeAllowedDomainsFromList(domains: string[]) {
  return domains.filter(
    (domain) =>
      !DOMAINS.ALLOWED.some((allowedDomain) =>
        REGEX.SELECT_ALLOWED_DOMAIN_FORMAT(allowedDomain).test(domain)
      )
  )
}
