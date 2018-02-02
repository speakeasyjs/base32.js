export declare type ByteArray = ArrayLike<number>;

export declare function encode(buf: ByteArray, options: EncoderOptions): string;

export declare interface EncoderOptions {
    type?: string;
    alphabet?: string;
    lc?: boolean;
}

export declare class Encoder {
    constructor(options?: EncoderOptions);

    private buf: string;
    private shift: number;
    private carry: number;

    write(buf: ByteArray): this;

    finalize(buf: ByteArray): string;
}

export declare interface DecoderOptions {
    type?: string;
    charmap?: CharacterMap;
}

export declare class Decoder {
    constructor(options?: DecoderOptions);

    private buf: ByteArray;
    private shift: number;
    private carry: number;
}

export declare function charmap(alphabet: string, mappings: CharacterMap): CharacterMap;

export declare interface CharacterMap {
    [charToReplace: string]: number;

    [charToReplace: number]: number;
}

export declare interface Base32Variant {
    alphabet: string;
    charmap: CharacterMap;
}

export declare const crockford: Base32Variant;
export declare const rfc4648: Base32Variant;
export declare const base32hex: Base32Variant;
