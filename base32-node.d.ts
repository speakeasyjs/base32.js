/// <reference types="node" />
import { DecoderOptions } from './base32';

declare module './base32.js' {
    interface Decoder {
        finalize(str: string): Buffer;
    }

    function decode(str: string, options: DecoderOptions): Buffer;
}
