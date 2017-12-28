export type ByteArray = ArrayLike<number>;

export function encode(buf: ByteArray, options: EncoderOptions): string;

interface EncoderOptions {
    type?: string;
    alphabet?: string;
    lc?: boolean;
}

export class Encoder {
    constructor(options?: EncoderOptions);

    private buf: string;
    private shift: number;
    private carry: number;

    write(buf: ByteArray): this;

    finalize(buf: ByteArray): string;
}

export function decode(str: string, options: DecoderOptions): ByteArray;

interface DecoderOptions {
    type?: string;
    charmap?: CharacterMap;
}

export class Decoder {
    constructor(options?: DecoderOptions);

    private buf: ByteArray;
    private shift: number;
    private carry: number;

    write(str: string): this;

    finalize(str: string): ByteArray;
}

export function charmap(alphabet: string, mappings: CharacterMap): CharacterMap;

interface CharacterMap {
    [charToReplace: string]: number;

    [charToReplace: number]: number;
}

interface Base32Variant {
    alphabet: string;
    charmap: CharacterMap;
}

export const crockford: Base32Variant;
export const rfc4648: Base32Variant;
export const base32hex: Base32Variant;
