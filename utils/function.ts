export const slugToCategory = (slug: string) => {
  // Replace '-' with ' ', split into words, capitalize each word, then join back with ' '
  return slug
    .replace(/-/g, ' ')
    .split(' ')
    .map((word) => {
      if (word.toLowerCase() === 'and') {
        return '&'
      } else {
        return word.charAt(0).toUpperCase() + word.slice(1)
      }
    })
    .join(' ')
}

export function nameToSlug(name: String) {
  return name
    .toLowerCase() // Convert to lowercase
    .replace(/&/g, 'and') // Replace '&' with 'and'
    .replace(/[^a-z0-9\s]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .trim() // Remove leading/trailing whitespace
}
