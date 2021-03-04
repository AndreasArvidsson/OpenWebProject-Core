/**
 * Check if the this string contains the given string, ignoring case.
 * @public
 * @param {string} ref - Reference strng to check in.
 * @param {string} sub - Substring to check for.
 * @returns {bool}
 */
export default (ref, sub) => ref.search(new RegExp(sub, "i")) !== -1;