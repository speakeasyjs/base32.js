/// <reference types="node" />
import { DecoderOptions } from './base32';

export * from './base32';

export interface Decoder {
    finalize(str: string): Buffer
}

export function decode(str: string, options: DecoderOptions): Buffer;
