import { getUniqueAndNonEmptyValues } from 'shared/utils'
import { outputFile } from 'fs-extra'

export async function writeDomainsFile(path: string, data: any) {
  try {
    await outputFile(
      path,
      JSON.stringify(getUniqueAndNonEmptyValues(data), null, 2)
    )
  } catch ({ message }) {
    return message
  }
}
