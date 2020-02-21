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

/**
 * To be more stringent in adhering to RFC 3986 (which reserves !, ', (, ), and *), even though these characters have no formalized URI delimiting uses, the following can be safely used:
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent
 */
export function fixedEncodeURIComponent(someString: string) {
    return encodeURIComponent(someString).replace(/[!'()*]/g, function (c) {
        return `%` + c.charCodeAt(0).toString(16);
    });
}

type Falsey = undefined | null;
export function parseBoolean(val: string | boolean | number | Falsey): boolean {
    const s = val && val.toString().toLowerCase().trim();
    if (s === "true" || s === "1") {
        return true;
    }
    return false;
}
