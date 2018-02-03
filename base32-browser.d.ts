import { ByteArray, DecoderOptions } from './base32';

declare module './base32.js' {
    interface Decoder {
        finalize(str: string): ByteArray;
    }

    function decode(str: string, options: DecoderOptions): ByteArray;
}
