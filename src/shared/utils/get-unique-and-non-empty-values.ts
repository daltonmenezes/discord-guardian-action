export function getUniqueAndNonEmptyValues(array: string[]) {
  return [...new Set(array)].filter(Boolean)
}
