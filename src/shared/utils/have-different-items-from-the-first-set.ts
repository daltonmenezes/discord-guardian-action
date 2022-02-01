export function haveDifferentItemsFromTheFirstSet(...sets: string[][]) {
  const [mainSet, ...setToCompare] = sets

  return setToCompare?.some((set, index) => {
    const nextSet = sets[index + 1]?.filter(Boolean)

    if (!nextSet?.length) return

    return set?.filter(Boolean).some((set) => !mainSet?.includes(set))
  })
}
