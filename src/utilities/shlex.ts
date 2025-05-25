
import { parse } from "shell-quote/parse";

/**
 * `shell-quote/parse` can parse complex commands. We don't use that.
 * Assert that the provided array is an array of strings.
 *
 * @param arr - The array to check.
 * @throws {Error} If the array contains non-string elements.
 */
function _assertSimpleCommand(arr: unknown[]): asserts arr is string[] {
    if (!arr.every(item => typeof item === 'string')) {
        throw new Error('Complex shell syntax not supported');
    }
}

export function shlexSplit(command: string): string[] {
	const tokens = parse(command);
	_assertSimpleCommand(tokens);
	return tokens;
}
