export const REGEX = {
  SELECT_ALLOWED_DOMAIN_FORMAT(allowedDomain: string) {
    return new RegExp(`^${allowedDomain}$|^${allowedDomain}/.*$`, 'g')
  },
}
