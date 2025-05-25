declare module 'shell-quote/parse' {
    type ParsedToken = string | { op: string } | { op: "glob", pattern: string } | { comment: string };

    export function parse(
        s: string,
        env?: { [key: string]: string },
        opts?: {
            escape?: RegExp,
            escapeRegex?: RegExp,
            getEnv?: (key: string) => string | undefined
        }
    ): ParsedToken[];
}
