export const slugToCategory = (slug: string) => {
  // Replace '-' with ' ', split into words, capitalize each word, then join back with ' '
  return slug
    .replace(/-/g, ' ')
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}
