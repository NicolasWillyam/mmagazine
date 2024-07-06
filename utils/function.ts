export const slugToCategory = (slug: string) => {
    return slug.replace(/-/g, ' ').toUpperCase()
}