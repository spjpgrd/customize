export function slugify(text: string) {
    return text
        .toString()
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^\w-]+/g, "")
        .replace(/--+/g, "-")
        .replace(/^-+/, "")
        .replace(/-+$/, "");
}

export function getSlugIfNotNull(inputText: string | null) {
    if (inputText != null) {
        const inputTextSlug = slugify(inputText);
        return inputTextSlug;
    } else {
        return "";
    }
}